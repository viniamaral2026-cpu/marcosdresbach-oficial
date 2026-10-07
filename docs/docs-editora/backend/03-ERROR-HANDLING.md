# Tratamento de Erros

Usar Result Pattern no domínio/aplicação.

Tipos:
- ValidationError
- AuthenticationError
- AuthorizationError
- NotFoundError
- ConflictError
- PaymentError
- ExternalServiceError

Não expor stack trace ao cliente.
Cada erro deve possuir código estável e trace_id.
