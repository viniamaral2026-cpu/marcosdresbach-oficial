# Order Lifecycle — DRESBACH Editora

## Status dos Pedidos

```text
CREATED            → Pedido criado, awaiting payment
PAYMENT_PENDING    → Aguardando pagamento do leitor
PAID               → Pagamento confirmado (Stripe/webhook)
PROCESSING         → Pedido processando (verificação de dados)
IN_PRODUCTION      → Em produção gráfica
QUALITY_CONTROL    → Controle de qualidade
PACKAGED           → Embalado pronto para envio
SHIPPED            → Enviado via correira/expedição
DELIVERED          → Entregue ao cliente
CANCELLED          → Cancelado pelo cliente/admin
REFUNDED           → Reembolsado ao cliente
```

## Transições de Estado

```text
CREATED
  └─ PAYMENT_CONFIRMED → PAYMENT_PENDING (ou direto a PAID se webhook rápido)

PAYMENT_PENDING
  └─ PAYMENT_SUCCEEDED → PAID
  └─ PAYMENT_FAILED → CANCELLED

PAID
  └─ START_PRODUCTION → PROCESSING
  └─ CANCEL → CANCELLED (antes de iniciar produção)

PROCESSING
  └─ PRINT_JOB_CREATED → IN_PRODUCTION
  └─ CANCEL → CANCELLED

IN_PRODUCTION
  └─ QUALITY_CONTROL → QUALITY_CONTROL (after print job completion)
  └─ FAILED_PRINT → CANCELLED (erro na gráfica)

QUALITY_CONTROL
  └─ PASS_QC → PACKAGED
  └─ FAIL_QC → REWORK (ou CANCELLED)

PACKAGED
  └─ CREATE_SHIPMENT → SHIPPED

SHIPPED
  └─ DELIVER → DELIVERED
  └─ EXCEPTION → EXCEPTION (problema na entrega)

DELIVERED
  └─ (final state)

CANCELLED
  └─ (final state, estorno via ledger)

REFUNDED
  └─ (final state, estorno completo)
```

## Gatilhos de Transição

```text
1. Pagamento confirmado via webhook Stripe
   ↓
   Status: PAYMENT_PENDING → PAID

2. Webhook de status da gráfica
   ↓
   Status: IN_PRODUCTION → QUALITY_CONTROL → PACKAGED → SHIPPED → DELIVERED

3. Cancelamento pelo cliente
   ↓
   Status: PAID → CANCELLED (se antes de produção)
   ou
   Status: PROCESSING → CANCELLED (se em produção, estorno parcial)

4. Reembolso administrativo
   ↓
   Status: PAID → REFUNDED
   ↓
   Geração de ledger_entries para estorno
```

## Pedidos e Print Jobs

```text
Um pedido (orders) pode ter múltiplos itens (order_items).
Cada item de pedido pode gerar um print_job.
Relacionamento:
orders (1) → (N) order_items
order_items (1) → (1) print_jobs (opcional, quando inicia produção)

Status sincronização:
order.status = 'IN_PRODUCTION' quando print_job.status = 'CREATED' ou 'QUEUED'
order.status = 'DELIVERED' quando shipment.status = 'DELIVERED'
```

## Eventos de Domínio

```text
OrderCreated          → Quando pedido é criado
PaymentSucceeded      → Quando pagamento confirma
PaymentFailed         → Quando pagamento falha
PrintJobCreated       → Quando job de impressão é criado
PrintJobCompleted     → Quando impressão termina
QualityControlPassed  → Quando passa no QC
ShipmentCreated       → Quando expedição é criada
OrderDelivered        → Quando entregue ao cliente
OrderCancelled        → Quando cancelado
OrderRefunded         → Quando reembolsado
```

## Estorno e Ledger

```text
Pedido cancelado antes de produção:
   - Status: CANCELLED
   - Ledger: ENTRY type=REFUND, writer_amount + platform_fee
   - Stripe: Solicitar estorno se dentro do prazo

Pedido entregue e reembolsado:
   - Status: REFUNDED
   - Ledger: múltiplas entradas type=REFUND type=FEE
   - Royalty: Não pago ou retroativo conforme contrato
```

## Tempo Máximo por Etapa

```text
Estimativas (configuráveis por ambiente):
CREATED → PAYMENT_PENDING: 7 dias (after which auto-cancel)
PAYMENT_PENDING → PAID: 3 dias (timeout de checkout)
PAID → PROCESSING: 24h (após confirmação)
PROCESSING → IN_PRODUCTION: 48h (após criação do print job)
IN_PRODUCTION → QUALITY_CONTROL: 3-7 dias (depende da gráfica)
QUALITY_CONTROL → PACKAGED: 24h
PACKAGED → SHIPPED: 24h
SHIPPED → DELIVERED: 3-7 dias (depende do CEP/correio)
```