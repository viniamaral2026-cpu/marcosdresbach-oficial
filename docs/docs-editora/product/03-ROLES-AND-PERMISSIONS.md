# Papéis e Permissões

## Account Type
- READER
- WRITER_PENDING
- WRITER_ACTIVE

## Staff Roles
- EDITOR
- PRODUCTION
- FINANCE
- SUPPORT
- ADMIN
- SUPER_ADMIN

## Regra central
`account_type` não substitui autorização. A autorização deve ser RBAC + regras de domínio.

## Exemplos
`book.create` → WRITER_ACTIVE
`book.publish.request` → WRITER_ACTIVE
`book.approve` → EDITOR
`payment.refund` → FINANCE
`user.manage` → ADMIN
`system.manage` → SUPER_ADMIN

## Segurança
Permissões são verificadas no backend. Esconder menu no frontend não é mecanismo de segurança.
