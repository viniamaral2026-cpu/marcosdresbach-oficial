# Stripe Webhooks

## Princípio
O frontend não confirma pagamento.

Fluxo:
Checkout
→ Stripe
→ webhook assinado
→ Payment handler
→ transação MariaDB
→ evento PaymentSucceeded
→ pedido PAID

Eventos a considerar conforme configuração da integração:
- checkout/session events
- payment_intent events
- charge/refund events

A lista exata de eventos habilitados deve ser definida na implementação Stripe.

## Segurança
- validar assinatura do webhook
- rejeitar payload inválido
- idempotência por event_id
- persistir evento recebido
- processar transacionalmente
- responder rapidamente
- retry assíncrono quando apropriado
