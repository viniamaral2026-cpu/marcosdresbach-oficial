# ADR-0039 — Security by Default

Implementar:

- authentication
- authorization
- RBAC
- rate limiting
- validação de entrada
- proteção contra XSS
- proteção contra CSRF quando aplicável
- validação de uploads
- controle de MIME type
- limites de tamanho
- logs de segurança
- auditoria
- secrets exclusivamente em variáveis de ambiente
- nunca colocar credenciais no frontend
- nunca versionar secrets
- conexão segura com bancos
- princípio do menor privilégio

Nunca expor:

- DATABASE_URL
- chaves privadas
- service account
- Firebase Admin credentials
- secrets
- tokens administrativos