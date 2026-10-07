# ADR-0058 — API Central - Fluxo Obrigatório

Nenhum frontend pode acessar diretamente o PostgreSQL.

Nenhum frontend pode acessar diretamente tabelas internas.

Fluxo obrigatório:

Frontend
↓
API Client
↓
API Central
↓
Application Layer
↓
Domain
↓
Repository
↓
Neon

Para autenticação:

Frontend
↓
Firebase Authentication
↓
Firebase UID/token
↓
API Central
↓
validação da identidade
↓
usuário no Neon
↓
RBAC
↓
autorização
↓
operação