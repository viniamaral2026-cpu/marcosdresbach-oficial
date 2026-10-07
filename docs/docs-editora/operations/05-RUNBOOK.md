# Runbook

## Banco indisponível
1. verificar serviço
2. verificar disco
3. verificar logs
4. validar integridade
5. restaurar somente se necessário

## Stripe webhook parado
1. verificar endpoint
2. verificar assinatura
3. verificar logs
4. verificar fila
5. reprocessar evento idempotentemente

## Fila parada
1. verificar RabbitMQ
2. verificar consumidores
3. verificar DLQ
4. reiniciar worker
5. reprocessar mensagens seguras
