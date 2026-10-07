# Integração Stripe — DRESBACH Editora

## Visão Geral

A DRESBACH utiliza o Stripe como provedor de pagamentos principal para:

- Checkout de pedidos na Store
- Gerenciamento de assinaturas (caso futuramente necessário)
- Emissão de recibos e notas fiscais
- Gestão de reembolsos/estornos
- Webhooks para sincronização de status

## Configuração de Chaves

```text
# Variáveis de ambiente (.env)
STRIPE_SECRET_KEY=sk_live_... ou sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_live_... ou pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Modo de operação
STRIPE_MODE=test  # ou live
STRIPE_WEBHOOK_SIGNING_ENABLED=true
```

## Eventos de Webhook

Os seguintes eventos devem ser inscritos no webhook do Stripe:

```text
checkout.session.completed
payment_intent.succeeded
payment_intent.payment_failed
invoice.payment_succeeded
invoice.payment_failed
checkout.session.expired
payout.paid
payout.failed
refund.created
refund.updated
charge.refunded
```

## Estrutura de Dados Recebidos

### checkout.session.completed

```json
{
  "id": "evt_123",
  "object": "event",
  "data": {
    "object": {
      "id": "cs_test_123",
      "client_reference_id": "order_456",
      "amount_total": 3279,  // Em centavos
      "amount_subtotal": 2164,
      "currency": "brl",
      "customer": "cus_123",
      "metadata": {
        "order_id": "order_456",
        "book_id": "book_123",
        "user_id": "user_789"
      },
      "status": "complete",
      "payment_status": "paid",
      "created": 1723456789
    }
  }
}
```

### payment_intent.succeeded

```json
{
  "id": "evt_123",
  "object": "event",
  "data": {
    "object": {
      "id": "pi_123",
      "object": "payment_intent",
      "amount": 3279,
      "currency": "brl",
      "status": "succeeded",
      "payment_method": "card_123",
      "metadata": {
        "order_id": "order_456"
      },
      "receipt_url": "https://pay.stripe.com/receipt/..."
    }
  }
}
```

### payment_intent.payment_failed

```json
{
  "id": "evt_123",
  "object": "event",
  "data": {
    "object": {
      "id": "pi_123",
      "object": "payment_intent",
      "amount": 3279,
      "currency": "brl",
      "status": "failed",
      "last_error": {
        "message": "Insufficient funds",
        "type": "card_declined"
      }
    }
  }
}
```

## Processo de Webhook no Backend

```text
1. Receber POST /api/v1/webhooks/stripe
2. Validar assinatura usando STRIPE_WEBHOOK_SECRET
3. Identificar event_type
4. Mapear para ação interna:

event = Stripe::Webhook.construct_event(
  payload, signature, secret
)

case event.type
when "checkout.session.completed"
  process_order_payment(event.data.object)
when "payment_intent.succeeded"
  process_payment_succeeded(event.data.object)
when "payment_intent.payment_failed"
  process_payment_failed(event.data.object)
when "refund.created"
  process_refund(event.data.object)
else
  # Ignorar eventos não críticos ou logar
  Rails.logger.info "Unhandled Stripe event: #{event.type}"
end
```

## Processamento por Evento

### process_order_payment

```text
1. Extrair metadata: order_id, book_id, user_id
2. Buscar pedido no banco: Order.find(order_id)
3. Atualizar status: order.status = 'PAID'
4. Criar registro de pagamento: Payment.create(...)
5. Disparar evento: OrderPaid Event
6. Enviar para fila RabbitMQ: order.paid
7. Responder ao Stripe (200 OK)
```

### process_payment_failed

```text
1. Extrair metadata: order_id
2. Buscar pedido: Order.find(order_id)
3. Status: order.status = 'PAYMENT_FAILED'
4. Disparar: order.payment_failed (RabbitMQ)
5. Opcional: enviar e-mail de aviso ao cliente
6. Responder 200 OK
```

## Idempotência de Webhooks

```text
Cada webhook deve possuir event_id único.
Antes de processar, verificar se já foi processado:

SELECT * FROM webhook_events
WHERE event_id = :event_id

Se existir:
  - Se status = 'processed': retornar 200 OK sem executar novamente
  - Se status = 'failed': tentar processar novamente ou logar

Se não existir:
  - Inserir na tabela webhook_events
  - Processar a ação
  - Atualizar status = 'processed'
```

## Tabela: webhook_events

```sql
CREATE TABLE webhook_events (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    event_id VARCHAR(255) NOT NULL UNIQUE,
    provider VARCHAR(50) NOT NULL DEFAULT 'STRIPE',
    event_type VARCHAR(100) NOT NULL,
    payload JSON NULL,
    processed_at DATETIME NULL,
    status ENUM('PENDING', 'PROCESSING', 'PROCESSED', 'FAILED') NOT NULL DEFAULT 'PENDING',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY idx_we_provider (provider),
    KEY idx_we_status (status)
) ENGINE=InnoDB DEFAULT CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## Rate Limiting de Webhooks

```text
Limite recomendado: 10 webhooks por segundo por aplicação
Em caso de sobrecarga, fila RabbitMQ deve absorver o excesso
Logs de falha de webhook devem ser auditados diariamente
```

## Segurança

```text
NUNCA armazenar STRIPE_SECRET_KEY no código-fonte ou Git
Utilizar sempre variáveis de ambiente ou secret manager
Validar assinatura de cada webhook
Nunca confiar apenas no payload recebido sem assinatura
Usar HTTPS para todas as comunicações com Stripe
```

## Modos de Operação

```text
Teste (STRIPE_MODE=test):
- Utilizar chaves test: sk_test_, pk_test_
- Utilizar ambiente de teste do Stripe
- Pedidos não geram dinheiro real
- Webhooks testáveis via CLI: stripe listen --forward-to localhost:3000/webhooks/stripe

Produção (STRIPE_MODE=live):
- Utilizar chaves live: sk_live_, pk_live_
- Apenas chaves registradas na conta live
- Pedidos geram dinheiro real
- Webhooks devem ser configurados no dashboard do Stripe
```

## Estratégia de Retry

```text
Se webhook falhar (HTTP 5xx ou timeout):
1º retry: imediatamente (0s)
2º retry: 1 minuto depois
3º retry: 5 minutos depois
4º retry: 30 minutos depois
5º retry: 24 horas depois
Depois: marcar como FAILED e alertar time operacional

Idempotência garante que retries não causam efeitos colaterais.
```