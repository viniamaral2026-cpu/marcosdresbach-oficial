# Módulos do Sistema — DRESBACH Editora

## Visão Geral

O sistema da Editora Dresbach é composto por módulos desacoplados, cada um com
suas responsabilidades específicas. A seguir, a descrição detalhada de cada módulo.

## Módulos Definidos

### 1. Módulo de Identidade e Autenticação
**Responsável por:**
- Cadastro e login de usuários (leitores, autores, admins, freelancers)
- Gestão de perfis (writer_profiles, freelancer profiles)
- Controle de acesso e RBAC (roles + permissions)
- Verificação de e-mail e MFA
- Sessão e tokens

**Endpoints principais:**
- POST /auth/register
- POST /auth/login
- GET /auth/me
- PATCH /auth/password
- POST /auth/verify-email
- GET /auth/profiles/:type

### 2. Módulo de Obras e Livros
**Responsável por:**
- Cadastro e gerenciamento de livros/obras
- Validação de manuscritos e arquivos
- Controle de status (DRAFT → PROCESSING → REVIEW → APPROVED → PUBLISHED)
- Metadados (ISBN, linguagem, categorias, gêneros)
- Capa e miolo (arquivos PDF)

**Endpoints principais:**
- GET /books
- GET /books/{id}
- POST /books
- PATCH /books/{id}
- POST /books/{id}/manuscript
- POST /books/{id}/cover
- POST /books/{id}/validate
- PATCH /books/{id}/physical-specs
- PATCH /books/{id}/pricing
- POST /books/{id}/submit
- POST /books/{id}/publish

### 3. Módulo de Catálogo e Store
**Responsável por:**
- Exibição do catálogo público
- Busca e filtros
- Página do livro com detalhes
- Bio do autor
- Avaliações e classificações
- Produtos configurados (formatos de impressão)

**Endpoints principais:**
- GET /catalog/books
- GET /catalog/books/{slug}
- GET /catalog/authors/{slug}
- GET /catalog/categories
- GET /catalog/books/{id}/related
- GET /products/{id}
- GET /orders
- POST /cart/items
- POST /checkout

### 4. Módulo de Pedidos e Pagamentos
**Responsável por:**
- Criação de pedidos
- Integração Stripe (checkout, webhooks)
- Gestão de pagamentos
- Estornos e reembolsos
- Histórico financeiro

**Endpoints principais:**
- POST /orders
- GET /orders/{id}
- POST /checkout
- GET /payments
- POST /refunds
- GET /ledger-entries

### 5. Módulo de Impressão Sob Demanda (POD)
**Responsável por:**
- Criação de print jobs
- Seleção de gráficas provedoras
- Controle de fila de produção
- Estados de produção (QUEUED → IN_PRODUCTION → QC → COMPLETED)
- Integração com APIs de gráficas

**Endpoints principais:**
- POST /print-jobs
- GET /print-jobs/{id}
- POST /print-jobs/{id}/cancel
- GET /providers
- POST /webhooks/print-status

### 6. Módulo de Editorial e Serviços
**Responsável por:**
- Marketplace de serviços editoriais
- Cadastro de freelancers/editor
- Solicitação de serviços (revisão, diagramação, capa)
- Ordens de serviço
- Avaliação e aprovação

**Endpoints principais:**
- GET /services
- GET /freelancers
- POST /service-orders
- GET /service-orders/{id}
- POST /service-orders/{id}/approve
- POST /service-orders/{id}/complete

### 7. Módulo de Royalties e Finanças
**Responsável por:**
- Cálculo de royalties por venda
- Repasses ao autor
- Ledger financeiro (contábil)
- Extratos e relatórios
- Configuração de taxas (platform fee, payment fee)

**Endpoints principais:**
- GET /royalties
- GET /ledger-entries
- POST /withdrawals
- GET /financial-reports

### 8. Módulo de CMS e Configurações
**Responsável por:**
- Home page e banners
- Categorias e coleções
- Termos e políticas
- Configurações do sistema
- Cupons e descontos

**Endpoints principais:**
- GET /cms/home
- GET /cms/terms
- GET /cms/policies
- POST /coupons
- GET /coupons/{code}
- PATCH /system-configurations

### 9. Módulo de Auditoria e Logs
**Responsável por:**
- Log de todas as ações importantes
- Rastreamento de alterações
- Conformidade e RGPD
- Relatórios operacionais

**Endpoints principais:**
- GET /audit-logs (admin apenas)
- POST /audit-logs (internal)
- GET /reports/operacional
- GET /reports/financeiro

## Relação entre Módulos

```text
                          USERS
                            │
         ┌────────────────┼─────────────────┐
         │               │                 │
         ▼               ▼                 ▼
   AUTH            BOOKS           ORDERS
         │               │                 │
         └───────────────┼─────────────────┘
                         │
                         ▼
                      PAYMENTS
                         │
                         ▼
                      PRINT JOBS
                         │
                         ▼
                      SHIPMENTS
                         │
                         ▼
                      ROYALTIES
                         │
                         ▼
                      EDITORIAL
                         │
                         ▼
                      CMS
```

## Dependências entre Módulos

```text
Identidade → Todos os outros (necessário para autenticação)
Books      → Products (1:N), Order Items (N:1), Royalties (1:N)
Orders     → Order Items (1:N), Payments (1:1), Shipments (1:1)
Print Jobs → Orders (1:N), Providers (1:1)
Royalites  → Writers (1:N), Orders (1:1), Ledger (1:1)
Editorial  → Users (authors/freelancers), Books (optional)
CMS        → System configurations, Users (admin)
Audit      → All modules (logs de todas as ações)
```