# API Contracts — DRESBACH Editora

## Padrão de Resposta API

```text
Todas as respostas da API seguem um contrato consistente.

Sucesso:
{
  "success": true,
  "data": { ... },
  "message": "Operação concluída com sucesso" (opcional)
}

Erro:
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Mensagem descritiva para o usuário",
    "details": { ... } (opcional, apenas em dev)
  },
  "path": "/caminho/da/api" (opcional)
}
```

### Códigos de Erro Padrão

```text
400 - Bad Request
  - invalid_input
  - validation_failed
  - resource_not_found

401 - Unauthorized
  - missing_token
  - invalid_token
  - token_expired

403 - Forbidden
  - insufficient_permissions
  - resource_owned_by_another_user

404 - Not Found
  - resource_not_found

409 - Conflict
  - duplicate_resource
  - concurrent_modification

422 - Unprocessable Entity
  - validation_error
  - business_rule_violation

429 - Too Many Requests
  - rate_limit_exceeded

500 - Internal Server Error
  - unexpected_error
  - system_overload

503 - Service Unavailable
  - maintenance_mode
  - dependency_unavailable
```

## API Versionamento

```text
Todas as APIs públicas seguem versionamento semântico.

Versão atual: v1
Base URL: /api/v1/

Exemplos:
GET /api/v1/books
GET /api/v1/orders
POST /api/v1/auth/login

Ao fazer breaking change:
- Criar nova versão: /api/v2/books
- Manter v1 ativo por período de transição (mínimo 6 meses)
- Documentar mudanças no OpenAPI/Swagger
- Comunicar consumidores com antecedência mínima de 30 dias
```

## OpenAPI Specification

```text
O projeto deve gerar e manter especificação OpenAPI 3.0+.

Arquivo: openapi.yaml ou openapi.json

Endpoints documentados devem incluir:
- Método HTTP
- Caminho completo
- Parâmetros (query, path, body)
- Respostas (200, 400, 401, 403, 404, 422, 500)
- Tags para agrupamento
- Resumo e descrição de cada endpoint

Exemplo fragmento:
openapi:
  info:
    title: DRESBACH Editora API
    version: v1.0.0
    description: API da plataforma DRESBACH Editora
  paths:
    /api/v1/books:
      get:
        summary: Listar livros
        tags: [books]
        parameters:
          - name: status
            in: query
            schema:
              type: string
              enum: [DRAFT, PROCESSING, REVIEW, APPROVED, PUBLISHED]
        responses:
          '200':
            description: Lista de livros
            content:
              application/json:
                schema:
                  type: array
                  items:
                    type: object
                    $ref: '#/components/schemas/BookSummary'
```

## Contratos Específicos

### POST /api/v1/books

```http
Criar novo livro ( escritor ativo)

Request:
{
  "title": "string (required)",
  "subtitle": "string (optional)",
  "description": "string (optional)",
  "language": "string (default: 'pt-BR')",
  "category_ids": ["uuid..."] (optional),
  "genre_ids": ["uuid..."] (optional),
  "visibility": "enum (default: 'PUBLIC')",
  "status": "enum (default: 'DRAFT')"
}

Response (201):
{
  "success": true,
  "data": {
    "id": "uuid",
    "slug": "string",
    "status": "DRAFT",
    "writer_id": "uuid",
    "created_at": "ISO datetime"
  }
}
```

### PATCH /api/v1/books/{id}/pricing

```http
Atualizar precificação do livro

Request:
{
  "margin_type": "PERCENTAGE | FIXED_VALUE",
  "margin_value": "decimal (0-100)",
  "author_margin": "decimal (optional, para FIXED_VALUE)",
  "platform_fee": "decimal (optional)",
  "payment_fee": "decimal (optional)"
}

Response (200):
{
  "success": true,
  "data": {
    "production_cost": 21.64,
    "author_margin": 20,
    "suggested_price": 32.79,
    "author_amount": 6.56,
    "platform_amount": 3.28
  }
}
```

### POST /api/v1/orders

```http
Criar novo pedido

Request:
{
  "items": [
    {
      "product_id": "uuid",
      "quantity": "integer"
    }
  ],
  "billing_address": {
    "street": "string",
    "number": "string",
    "complement": "string (optional)",
    "neighborhood": "string",
    "city": "string",
    "state": "string",
    "zip_code": "string",
    "country": "string"
  },
  "shipping_address": "iguais a billing ou endereço diferente",
  "payment_method": "STRIPE | PIX | OTHER"
}

Response (201):
{
  "success": true,
  "data": {
    "id": "uuid",
    "status": "CREATED",
    "total": 32.79,
    "stripe_payment_intent_id": "pi_123..."
  }
}
```

### POST /api/v1/webhooks/print-status

```http
Webhook de status da gráfica parceria

Request Headers:
- X-Webhook-Signature: sha256=<signature>
- Content-Type: application/json

Request Body:
{
  "event_id": "evt_123",
  "provider": "provider_name",
  "external_job_id": "JOB-88421",
  "status": "QUALITY_CONTROL",  # ou outro status da enumeração
  "timestamp": "2026-10-01T10:30:00Z",
  "order_id": "order_456",
  "order_item_id": "item_789"
}

Response:
{
  "success": true,
  "message": "Status recebido e processado"
}
```

### Validated Webhook Idempotency

```http
Antes de processar, verificar webhook_events table:

SELECT * FROM webhook_events WHERE event_id = ?

Se existir AND status = 'PROCESSED':
  RETURN 200 OK (não executar novamente)

Se existir AND status = 'FAILED':
  Tentar processar novamente ou logar warning

Se não existir:
  Inserir linha com status = 'PENDING'
  Processar evento
  Atualizar status = 'PROCESSED' em timestamp
```

## Versionamento de API

```text
Semantic Versioning aplicado:

MAJOR (2.0.0): Breaking changes
  - Remoção de endpoints
  - Mudança de tipos de dados
  - Mudança de estruturas de resposta

MINOR (1.1.0): Novas funcionalidades (non-breaking)
  - Novos endpoints opcionais
  - Novos campos opcionais em respostas
  - Novos parâmetros query opcionais

PATCH (1.0.1): Correções e melhorias
  - Bug fixes
  - Performance improvements
  - Documentação updates

Compatibilidade para baixo:
- Novos campos em resposta devem ser opcionais (nullable ou com default)
- Remoção de campos deve ter período de transição
- Novos endpoints não podem quebrar clientes v1
```