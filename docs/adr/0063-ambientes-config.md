# ADR-0063 — Configuração de Ambientes

Separar:

development
staging
production

Variáveis sensíveis devem existir somente através de ambiente seguro.

Criar documentação:

docs/deployment/environment-variables.md

Documentar:

DATABASE_URL
Firebase configuration
Firebase Admin configuration
MediaWiki endpoint
MediaWiki credentials
Storage configuration
API URL
etc.

Nunca inserir valores reais no Git.