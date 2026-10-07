# Integração Stripe

## Responsabilidades
- criação de contexto de checkout
- processamento de pagamento
- refunds
- webhooks
- reconciliação

## Regra
Nunca confiar em `success_url` como confirmação financeira.

## Dados persistidos
- provider
- customer reference quando aplicável
- payment intent/reference
- checkout reference
- event ids
- status
- amount
- currency

Segredos Stripe somente em secrets do ambiente.
