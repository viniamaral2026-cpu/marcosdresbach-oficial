# Padrões de API

Base: `/api/v1`

JSON UTF-8.

Resposta:
{
  "success": true,
  "data": {}
}

Erro:
{
  "success": false,
  "error": {
    "code": "BOOK_NOT_FOUND",
    "message": "Livro não encontrado.",
    "trace_id": "..."
  }
}

Regras:
- validação no backend
- pagination cursor/page
- filtros explícitos
- idempotency key para operações críticas
- OpenAPI
- rate limiting
- autenticação por sessão/token seguro
