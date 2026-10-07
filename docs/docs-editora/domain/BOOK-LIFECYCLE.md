# Book Lifecycle — DRESBACH Editora

## Status dos Livros

```text
DRAFT              → Rascunho inicial
PROCESSING         → Em processamento (validação, specs)
REVIEW             → Em revisão (editor/IA)
APPROVED           → Aprovado, pronto para publicação
PUBLISHED          → Publicado na Store
PRIVATE            → Apenas para o autor
ARCHIVED           → Arquivado (sem visibilidade)
REJECTED           → Rejeitado durante revisão
```

## Transições de Estado

```text
DRAFT
  └─ SUBMIT → PROCESSING

PROCESSING
  └─ PASS_VALIDATION → REVIEW
  └─ FAIL_VALIDATION → DRAFT (com correções)

REVIEW
  ├─ APPROVE → APPROVED
  ├─ REJECT → DRAFT (revisão necessária)
  └─ SUSPEND → SUSPENDED

APPROVED
  └─ PUBLISH → PUBLISHED

PUBLISHED
  └─ RETRACT → ARCHIVED (retirada da venda)

SUSPENDED
  └─ RESUME → REVIEW (reanálise necessária)

ARCHIVED
  └─ (final state, sem retorno ativo)
```

## Ponto de Entrada: Submissão

```http
POST /api/v1/books/{id}/submit
```

Corpo da requisição:

```json
{
  "status": "submission",
  "include_print_specs": true,
  "include_pricing": true,
  "author_accepts_terms": true
}
```

## Validações na Transição DRAFT → PROCESSING

- ✅ Título informado
- ✅ Pelo menos uma categoria ou gênero
- ✅ Capa uploadada (opcional em DRAFT, obrigatória antes de PUBLISH)
- ✅ Miolo (PDF) validado estruturalmente
- ✅ Especificações físicas preenchidas

## Eventos de Domínio (Domain Events)

```text
BookCreated          → Quando livro é criado em DRAFT
BookSubmitted        → Quando autor submete para revisão
BookValidated        → Quando validação estrutural passa
BookApproved         → Quando revisão é aprovada
BookPublished        → Quando livro passa a PUBLISHED
BookArchived         → Quando livro é arquivado
BookRejected         → Quando livro é rejeitado
```

## Ciclo de Vida Completo

```text
Autor cadastra livro
   ↓
Livro em DRAFT
   ↓
Autor preenche specs e uploads
   ↓
POST /books/{id}/submit
   ↓
Validação estrutural (PDF, specs, bleed, fontes)
   ↓
Livro em REVIEW
   ↓
Aprovação do comitê/editor
   ↓
Livro em APPROVED
   ↓
Cálculo automático de precificação (calculadora DRESBACH)
   ↓
Livro em PUBLISHED
   ↓
Produto criado na Store
   ↓
Disponível para compra
```

## Análise de Dimensões e Sangria

```text
Ao validar PDF:
1. Executar pdfinfo → obter MediaBox, CropBox, TrimBox, BleedBox
2. Comparar dimensões reais com configuração do produto
3. Verificar se bleed_mm >= 3 (obrigatório)
4. Calcular página real vs informada
5. Validar embeded fonts via pdffonts
6. Verificar resolução de imagens
```

## Versionamento de Livros

```text
Cada livro pode possuir múltiplas versões:
- Versão de lançamento (v1.0)
- Versão de correção (v1.1)
- Versão de relançamento (v2.0)

Versionamento no banco:
book_versions table com version_number
Cada version tem: manuscript_file_id, cover_file_id, page_count, validation_status
```

## Royalties por Ciclo de Vida

```text
Os royalties são calculados baseados no ciclo:
- Livreiros: A partir do momento PUBLISHED
- Vintage/Arquivado: Royalties cessam exceto se contrato específico
- Re-lançamento: Novo cálculo de royalties baseado na nova versão
```