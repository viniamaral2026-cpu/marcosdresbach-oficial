# Inventário de APIs — DRESBACH

> **Mapeamento completo de todos os endpoints de API: existentes, propostos, consumidores, autenticação, autorização e status.**
> Classificação: EXISTENTE | PROPOSTA | DEPRECADA | QUEBRADA

---

## Legenda de Status

| Status | Significado |
|--------|-------------|
| `EXISTENTE` | Endpoint implementado e funcional |
| `PROPOSTA` | Endpoint planejado, documentado, não implementado |
| `DEPRECADA` | Endpoint existente mas será removido/substituído |
| `QUEBRADA` | Endpoint com problemas conhecidos |
| `NÃO DETERMINADA` | Endpoint referenciado mas detalhes incertos |

---

## 1. Autenticação e Autorização (`/api/v1/auth`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/auth/login` | POST | AuthController | `{ email, password, remember_me? }` | `{ access_token, refresh_token, token_type, expires_in, user }` | Público | — | Site, Admin, Plataforma | PROPOSTA |
| `/api/v1/auth/logout` | POST | AuthController | `{}` | `{ message }` | Bearer | Autenticado | Site, Admin, Plataforma | PROPOSTA |
| `/api/v1/auth/refresh` | POST | AuthController | `{ refresh_token }` | `{ access_token, refresh_token, expires_in }` | Bearer | Autenticado | Site, Admin, Plataforma | PROPOSTA |
| `/api/v1/auth/register` | POST | AuthController | `{ name, email, password, password_confirmation, terms_accepted }` | `{ user, access_token, refresh_token }` | Público | — | Site | PROPOSTA |
| `/api/v1/auth/password/forgot` | POST | AuthController | `{ email }` | `{ message }` | Público | — | Site, Admin | PROPOSTA |
| `/api/v1/auth/password/reset` | POST | AuthController | `{ token, email, password, password_confirmation }` | `{ message }` | Público | — | Site, Admin | PROPOSTA |
| `/api/v1/auth/email/verify` | GET | AuthController | Query: `id`, `hash` | `{ message }` | Público | — | Site | PROPOSTA |
| `/api/v1/auth/me` | GET | AuthController | — | `{ user }` | Bearer | Autenticado | Site, Admin, Plataforma | PROPOSTA |
| `/api/v1/auth/mfa/enable` | POST | AuthController | `{}` | `{ secret, qr_code, recovery_codes }` | Bearer | Autenticado + MFA habilitado | Admin | PROPOSTA |
| `/api/v1/auth/mfa/verify` | POST | AuthController | `{ code }` | `{ message }` | Bearer | Autenticado + MFA pendente | Admin | PROPOSTA |
| `/api/v1/auth/mfa/disable` | POST | AuthController | `{ password }` | `{ message }` | Bearer | Autenticado + MFA ativo | Admin | PROPOSTA |

---

## 2. Usuários e Perfis (`/api/v1/users`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/users` | GET | UserController | Query: `page, per_page, search, role, status, sort` | `{ data: User[], meta: PaginationMeta }` | Bearer | `users.view` (Admin) | Admin | PROPOSTA |
| `/api/v1/users` | POST | UserController | `{ name, email, password, roles[], status }` | `{ user }` | Bearer | `users.create` (Admin) | Admin | PROPOSTA |
| `/api/v1/users/{id}` | GET | UserController | — | `{ user }` | Bearer | `users.view` (Admin) ou próprio | Admin, Plataforma | PROPOSTA |
| `/api/v1/users/{id}` | PATCH | UserController | `{ name?, email?, avatar?, status?, preferences? }` | `{ user }` | Bearer | `users.update` (Admin) ou próprio | Admin, Plataforma | PROPOSTA |
| `/api/v1/users/{id}` | DELETE | UserController | — | `{ message }` | Bearer | `users.delete` (Admin) | Admin | PROPOSTA |
| `/api/v1/users/{id}/roles` | GET | UserController | — | `{ roles: Role[] }` | Bearer | `users.view` (Admin) | Admin | PROPOSTA |
| `/api/v1/users/{id}/roles` | POST | UserController | `{ role_id }` | `{ user_role }` | Bearer | `users.manage_roles` (Admin) | Admin | PROPOSTA |
| `/api/v1/users/{id}/roles/{roleId}` | DELETE | UserController | — | `{ message }` | Bearer | `users.manage_roles` (Admin) | Admin | PROPOSTA |
| `/api/v1/users/{id}/permissions` | GET | UserController | — | `{ permissions: string[] }` | Bearer | `users.view` (Admin) | Admin | PROPOSTA |
| `/api/v1/users/{id}/activity` | GET | UserController | Query: `page, per_page, type` | `{ data: Activity[], meta }` | Bearer | `users.view` (Admin) | Admin | PROPOSTA |
| `/api/v1/users/{id}/impersonate` | POST | UserController | — | `{ access_token, refresh_token }` | Bearer | `users.impersonate` (Super Admin) | Admin | PROPOSTA |

---

## 3. Genealogia — Pessoas (`/api/v1/people`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/people` | GET | PersonController | Query: `page, per_page, search, surname, gender, birth_from, birth_to, death_from, death_to, place_id, tree_id, sort` | `{ data: Person[], meta }` | Bearer | `people.view` | Plataforma, Admin, Site (público) | PROPOSTA |
| `/api/v1/people` | POST | PersonController | `{ first_names, surnames, gender, birth_date?, birth_place_id?, death_date?, death_place_id?, biography?, photo?, is_living?, privacy_level }` | `{ person }` | Bearer | `people.create` | Plataforma, Admin | PROPOSTA |
| `/api/v1/people/{id}` | GET | PersonController | — | `{ person, relationships[], events[], documents[], sources[], trees[] }` | Bearer | `people.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/people/{id}` | PATCH | PersonController | Partial Person fields | `{ person }` | Bearer | `people.update` (owner/admin) | Plataforma, Admin | PROPOSTA |
| `/api/v1/people/{id}` | DELETE | PersonController | — | `{ message }` | Bearer | `people.delete` (admin) | Admin | PROPOSTA |
| `/api/v1/people/{id}/tree` | GET | PersonController | Query: `generations, view_mode` | `{ nodes: PersonNode[], edges: RelationshipEdge[] }` | Bearer | `people.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/people/{id}/timeline` | GET | PersonController | Query: `event_types[], date_from, date_to` | `{ events: TimelineEvent[] }` | Bearer | `people.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/people/{id}/documents` | GET | PersonController | Query: `page, per_page, type` | `{ data: Document[], meta }` | Bearer | `people.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/people/{id}/sources` | GET | PersonController | Query: `page, per_page` | `{ data: Source[], meta }` | Bearer | `people.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/people/{id}/relationships` | GET | PersonController | Query: `type` | `{ relationships: Relationship[] }` | Bearer | `people.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/people/search` | GET | PersonController | Query: `q, filters[], limit` | `{ results: PersonSearchResult[] }` | Bearer | `people.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/people/merge` | POST | PersonController | `{ primary_id, duplicate_ids[], reason }` | `{ person }` | Bearer | `people.merge` (admin) | Admin | PROPOSTA |
| `/api/v1/people/{id}/duplicate-check` | GET | PersonController | Query: `threshold` | `{ potential_duplicates: Person[] }` | Bearer | `people.view` | Plataforma, Admin | PROPOSTA |

---

## 4. Genealogia — Famílias (`/api/v1/families`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/families` | GET | FamilyController | Query: `page, per_page, search, surname, place_id, sort` | `{ data: Family[], meta }` | Bearer | `families.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/families` | POST | FamilyController | `{ surname, origin_place_id?, description?, privacy_level }` | `{ family }` | Bearer | `families.create` | Plataforma, Admin | PROPOSTA |
| `/api/v1/families/{id}` | GET | FamilyController | — | `{ family, members: Person[], events[], documents[], sources[], article? }` | Bearer | `families.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/families/{id}` | PATCH | FamilyController | Partial Family fields | `{ family }` | Bearer | `families.update` (owner/admin) | Plataforma, Admin | PROPOSTA |
| `/api/v1/families/{id}` | DELETE | FamilyController | — | `{ message }` | Bearer | `families.delete` (admin) | Admin | PROPOSTA |
| `/api/v1/families/{id}/members` | GET | FamilyController | Query: `role, page, per_page` | `{ data: FamilyMember[], meta }` | Bearer | `families.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/families/{id}/tree` | GET | FamilyController | Query: `generations, root_person_id` | `{ nodes: PersonNode[], edges: RelationshipEdge[] }` | Bearer | `families.view` | Plataforma, Admin, Site | PROPOSTA |

---

## 5. Genealogia — Relacionamentos (`/api/v1/relationships`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/relationships` | POST | RelationshipController | `{ type: 'parent_child' \| 'spouse' \| 'sibling', person1_id, person2_id, start_date?, end_date?, place_id?, notes?, confidence }` | `{ relationship }` | Bearer | `relationships.create` | Plataforma, Admin | PROPOSTA |
| `/api/v1/relationships/{id}` | GET | RelationshipController | — | `{ relationship }` | Bearer | `relationships.view` | Plataforma, Admin | PROPOSTA |
| `/api/v1/relationships/{id}` | PATCH | RelationshipController | Partial Relationship fields | `{ relationship }` | Bearer | `relationships.update` (owner/admin) | Plataforma, Admin | PROPOSTA |
| `/api/v1/relationships/{id}` | DELETE | RelationshipController | — | `{ message }` | Bearer | `relationships.delete` (owner/admin) | Plataforma, Admin | PROPOSTA |
| `/api/v1/relationships/types` | GET | RelationshipController | — | `{ types: RelationshipType[] }` | Bearer | `relationships.view` | Plataforma, Admin | PROPOSTA |
| `/api/v1/relationships/validate` | POST | RelationshipController | `{ type, person1_id, person2_id }` | `{ valid: boolean, errors: string[], warnings: string[] }` | Bearer | `relationships.create` | Plataforma, Admin | PROPOSTA |

---

## 6. Genealogia — Árvores (`/api/v1/trees`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/trees` | GET | TreeController | Query: `page, per_page, search, owner_id, is_public` | `{ data: Tree[], meta }` | Bearer | `trees.view` | Plataforma, Admin | PROPOSTA |
| `/api/v1/trees` | POST | TreeController | `{ name, description, is_public, root_person_id? }` | `{ tree }` | Bearer | `trees.create` | Plataforma, Admin | PROPOSTA |
| `/api/v1/trees/{id}` | GET | TreeController | Query: `format: 'full' \| 'compact' \| 'gedcom'` | `{ tree, nodes?, edges?, stats? }` | Bearer | `trees.view` (owner/public) | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/trees/{id}` | PATCH | TreeController | Partial Tree fields | `{ tree }` | Bearer | `trees.update` (owner/admin) | Plataforma, Admin | PROPOSTA |
| `/api/v1/trees/{id}` | DELETE | TreeController | — | `{ message }` | Bearer | `trees.delete` (owner/admin) | Plataforma, Admin | PROPOSTA |
| `/api/v1/trees/{id}/export` | GET | TreeController | Query: `format: 'gedcom' \| 'json', privacy_filter?` | File download / `{ gedcom }` | Bearer | `trees.export` (owner/admin) | Plataforma, Admin | PROPOSTA |
| `/api/v1/trees/import` | POST | TreeController | Multipart: `file (gedcom)`, `{ tree_name?, merge_strategy? }` | `{ tree, import_report }` | Bearer | `trees.import` | Plataforma, Admin | PROPOSTA |
| `/api/v1/trees/{id}/collaborators` | GET | TreeController | — | `{ collaborators: UserTreePermission[] }` | Bearer | `trees.manage_collaborators` (owner) | Plataforma, Admin | PROPOSTA |
| `/api/v1/trees/{id}/collaborators` | POST | TreeController | `{ user_id, permission: 'view' \| 'edit' \| 'admin' }` | `{ collaborator }` | Bearer | `trees.manage_collaborators` (owner) | Plataforma, Admin | PROPOSTA |

---

## 7. Genealogia — Eventos, Lugares, Fontes (`/api/v1/events`, `/api/v1/places`, `/api/v1/sources`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/events` | GET | EventController | Query: `page, per_page, type, date_from, date_to, place_id, person_id` | `{ data: Event[], meta }` | Bearer | `events.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/events` | POST | EventController | `{ type, date, place_id?, description?, persons[], confidence, source_ids[] }` | `{ event }` | Bearer | `events.create` | Plataforma, Admin | PROPOSTA |
| `/api/v1/events/{id}` | GET/PATCH/DELETE | EventController | — / Partial / — | `{ event }` / `{ message }` | Bearer | `events.view/update/delete` | Plataforma, Admin | PROPOSTA |
| `/api/v1/places` | GET | PlaceController | Query: `page, per_page, search, type, parent_id, coordinates` | `{ data: Place[], meta }` | Bearer | `places.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/places` | POST | PlaceController | `{ name, type, parent_id?, coordinates?, geonames_id?, historical_names[] }` | `{ place }` | Bearer | `places.create` | Plataforma, Admin | PROPOSTA |
| `/api/v1/places/{id}` | GET/PATCH/DELETE | PlaceController | — / Partial / — | `{ place }` / `{ message }` | Bearer | `places.view/update/delete` | Plataforma, Admin | PROPOSTA |
| `/api/v1/places/search` | GET | PlaceController | Query: `q, near?, radius?` | `{ results: Place[] }` | Bearer | `places.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/sources` | GET | SourceController | Query: `page, per_page, type, repository_id, search` | `{ data: Source[], meta }` | Bearer | `sources.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/sources` | POST | SourceController | `{ title, type, repository_id?, citation, url?, archive_ref?, confidence }` | `{ source }` | Bearer | `sources.create` | Plataforma, Admin | PROPOSTA |
| `/api/v1/sources/{id}` | GET/PATCH/DELETE | SourceController | — / Partial / — | `{ source }` / `{ message }` | Bearer | `sources.view/update/delete` | Plataforma, Admin | PROPOSTA |

---

## 8. Enciclopédia — Artigos (`/api/v1/articles`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/articles` | GET | ArticleController | Query: `page, per_page, search, category_id, status, author_id, sort, published_from, published_to` | `{ data: Article[], meta }` | Bearer/Público | `articles.view` (Público = apenas published) | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/articles` | POST | ArticleController | `{ title, slug?, summary, content, status, category_ids[], tag_ids?, infobox_data?, cover_image?, seo? }` | `{ article }` | Bearer | `articles.create` | Plataforma, Admin | PROPOSTA |
| `/api/v1/articles/{id}` | GET | ArticleController | Query: `version?` | `{ article, content, revisions_count, categories, tags, references, related_articles }` | Bearer/Público | `articles.view` | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/articles/{id}` | PATCH | ArticleController | Partial Article fields | `{ article }` | Bearer | `articles.update` (author/editor/admin) | Plataforma, Admin | PROPOSTA |
| `/api/v1/articles/{id}` | DELETE | ArticleController | — | `{ message }` | Bearer | `articles.delete` (admin) | Admin | PROPOSTA |
| `/api/v1/articles/{id}/publish` | POST | ArticleController | `{ published_at? }` | `{ article }` | Bearer | `articles.publish` (editor/admin) | Admin | PROPOSTA |
| `/api/v1/articles/{id}/unpublish` | POST | ArticleController | — | `{ article }` | Bearer | `articles.publish` (editor/admin) | Admin | PROPOSTA |
| `/api/v1/articles/{id}/revisions` | GET | ArticleController | Query: `page, per_page` | `{ data: Revision[], meta }` | Bearer | `articles.view` | Plataforma, Admin | PROPOSTA |
| `/api/v1/articles/{id}/revisions/{revId}` | GET | ArticleController | — | `{ revision, diff? }` | Bearer | `articles.view` | Plataforma, Admin | PROPOSTA |
| `/api/v1/articles/{id}/restore/{revId}` | POST | ArticleController | — | `{ article }` | Bearer | `articles.restore` (editor/admin) | Admin | PROPOSTA |
| `/api/v1/articles/{id}/diff` | GET | ArticleController | Query: `from_rev, to_rev` | `{ diff: DiffResult }` | Bearer | `articles.view` | Admin | PROPOSTA |
| `/api/v1/articles/search` | GET | ArticleController | Query: `q, filters[], limit, highlight` | `{ results: ArticleSearchResult[] }` | Bearer/Público | `articles.view` | Site, Plataforma, Admin | PROPOSTA |

---

## 9. Enciclopédia — Categorias (`/api/v1/categories`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/categories` | GET | CategoryController | Query: `page, per_page, parent_id, search, include_children` | `{ data: Category[], meta }` | Bearer/Público | `categories.view` | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/categories` | POST | CategoryController | `{ name, slug, description, parent_id?, sort_order, icon?, color? }` | `{ category }` | Bearer | `categories.create` (admin) | Admin | PROPOSTA |
| `/api/v1/categories/{id}` | GET/PATCH/DELETE | CategoryController | — / Partial / — | `{ category }` / `{ message }` | Bearer | `categories.view/update/delete` (admin) | Admin | PROPOSTA |
| `/api/v1/categories/tree` | GET | CategoryController | — | `{ tree: CategoryTree[] }` | Bearer/Público | `categories.view` | Site, Plataforma, Admin | PROPOSTA |

---

## 10. Arquivo Histórico (`/api/v1/archive`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/archive/fonds` | GET | ArchiveController | Query: `page, per_page, archive_id, search` | `{ data: Fond[], meta }` | Bearer/Público | `archive.view` | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/archive/fonds` | POST | ArchiveController | `{ archive_id, code, title, description, covering_dates, extent, access_conditions, finding_aid }` | `{ fond }` | Bearer | `archive.manage` (admin) | Admin | PROPOSTA |
| `/api/v1/archive/fonds/{id}` | GET/PATCH/DELETE | ArchiveController | — / Partial / — | `{ fond }` / `{ message }` | Bearer | `archive.view/manage` | Admin | PROPOSTA |
| `/api/v1/archive/classifications` | GET | ArchiveController | Query: `fond_id, parent_id, level, page, per_page` | `{ data: Classification[], meta }` | Bearer/Público | `archive.view` | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/archive/classifications` | POST | ArchiveController | `{ fond_id, parent_id?, code, title, description, level, sort_order }` | `{ classification }` | Bearer | `archive.manage` | Admin | PROPOSTA |
| `/api/v1/archive/units` | GET | ArchiveController | Query: `fond_id, classification_id, search, page, per_page, has_digital_object` | `{ data: ArchiveUnit[], meta }` | Bearer/Público | `archive.view` | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/archive/units` | POST | ArchiveController | `{ fond_id, classification_id, reference_code, title, description, dates, extent, access_conditions, provenance, scope_content, conditions_governing_reproduction, language, script, physical_characteristics, finding_aids, related_units[] }` | `{ unit }` | Bearer | `archive.manage` | Admin | PROPOSTA |
| `/api/v1/archive/units/{id}` | GET/PATCH/DELETE | ArchiveController | — / Partial / — | `{ unit }` / `{ message }` | Bearer | `archive.view/manage` | Admin | PROPOSTA |
| `/api/v1/archive/units/{id}/digital-objects` | GET | ArchiveController | Query: `page, per_page` | `{ data: DigitalObject[], meta }` | Bearer/Público | `archive.view` | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/archive/units/{id}/digital-objects` | POST | ArchiveController | Multipart: `file`, `{ title, description, type, rights, mime_type, checksum }` | `{ digital_object }` | Bearer | `archive.manage` | Admin | PROPOSTA |
| `/api/v1/archive/search` | GET | ArchiveController | Query: `q, fond_id, classification_id, date_from, date_to, has_digital, limit` | `{ results: ArchiveSearchResult[] }` | Bearer/Público | `archive.view` | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/archive/oai-pmh` | GET | ArchiveController | Query: `verb, metadataPrefix, set, from, until, resumptionToken` | XML OAI-PMH | Público | — | Externo | PROPOSTA |

---

## 11. Pesquisa Global (`/api/v1/search`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/search` | GET | SearchController | Query: `q, types[] (people, families, articles, documents, places, events, archive_units), filters{}, page, per_page, sort, highlight` | `{ results: { people[], families[], articles[], documents[], places[], events[], archive_units[] }, meta, facets }` | Bearer/Público | `search.execute` | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/search/suggestions` | GET | SearchController | Query: `q, types[], limit` | `{ suggestions: { people[], families[], articles[], places[] } }` | Bearer/Público | `search.execute` | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/search/facets` | GET | SearchController | Query: `q, facet_fields[]` | `{ facets: Record<string, FacetValue[]> }` | Bearer/Público | `search.execute` | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/search/saved` | GET | SearchController | Query: `page, per_page` | `{ data: SavedSearch[], meta }` | Bearer | `search.execute` (own) | Plataforma, Admin | PROPOSTA |
| `/api/v1/search/saved` | POST | SearchController | `{ name, query, filters, types[] }` | `{ saved_search }` | Bearer | `search.execute` | Plataforma, Admin | PROPOSTA |

---

## 12. Documentos e Mídia (`/api/v1/documents`, `/api/v1/media`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/documents` | GET | DocumentController | Query: `page, per_page, type, person_id, family_id, archive_unit_id, search` | `{ data: Document[], meta }` | Bearer | `documents.view` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/documents` | POST | DocumentController | Multipart: `file`, `{ title, type, description, person_ids[], family_ids[], archive_unit_id?, source_id?, tags[], access_level }` | `{ document }` | Bearer | `documents.create` | Plataforma, Admin | PROPOSTA |
| `/api/v1/documents/{id}` | GET/PATCH/DELETE | DocumentController | — / Partial / — | `{ document }` / `{ message }` | Bearer | `documents.view/update/delete` | Plataforma, Admin | PROPOSTA |
| `/api/v1/documents/{id}/download` | GET | DocumentController | — | File download | Bearer | `documents.download` | Plataforma, Admin, Site | PROPOSTA |
| `/api/v1/media/upload` | POST | MediaController | Multipart: `file`, `{ folder?, alt?, tags[] }` | `{ media }` | Bearer | `media.upload` | Todas | PROPOSTA |
| `/api/v1/media/{id}` | GET/DELETE | MediaController | — / — | `{ media }` / `{ message }` | Bearer | `media.view/delete` | Todas | PROPOSTA |
| `/api/v1/media/{id}/variants` | GET | MediaController | — | `{ variants: { thumbnail, small, medium, large, original } }` | Bearer | `media.view` | Todas | PROPOSTA |

---

## 13. Contribuições (`/api/v1/contributions`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/contributions` | GET | ContributionController | Query: `page, per_page, status, type, submitter_id, reviewer_id` | `{ data: Contribution[], meta }` | Bearer | `contributions.view` (own/admin) | Plataforma, Admin | PROPOSTA |
| `/api/v1/contributions` | POST | ContributionController | `{ type: 'person' \| 'family' \| 'relationship' \| 'event' \| 'document' \| 'article', payload, source_ids[], notes }` | `{ contribution }` | Bearer | `contributions.create` | Plataforma | PROPOSTA |
| `/api/v1/contributions/{id}` | GET/PATCH | ContributionController | — / `{ status?, reviewer_notes? }` | `{ contribution }` | Bearer | `contributions.view/update` (own/reviewer/admin) | Plataforma, Admin | PROPOSTA |
| `/api/v1/contributions/{id}/approve` | POST | ContributionController | `{ reviewer_notes? }` | `{ contribution, applied_changes }` | Bearer | `contributions.approve` (moderator/admin) | Admin | PROPOSTA |
| `/api/v1/contributions/{id}/reject` | POST | ContributionController | `{ reason, reviewer_notes? }` | `{ contribution }` | Bearer | `contributions.approve` (moderator/admin) | Admin | PROPOSTA |
| `/api/v1/contributions/{id}/request-changes` | POST | ContributionController | `{ changes_requested, reviewer_notes }` | `{ contribution }` | Bearer | `contributions.approve` (moderator/admin) | Admin | PROPOSTA |

---

## 14. Notificações (`/api/v1/notifications`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/notifications` | GET | NotificationController | Query: `page, per_page, unread_only, type` | `{ data: Notification[], meta }` | Bearer | `notifications.view` (own) | Plataforma, Admin | PROPOSTA |
| `/api/v1/notifications/{id}/read` | PATCH | NotificationController | — | `{ notification }` | Bearer | `notifications.view` (own) | Plataforma, Admin | PROPOSTA |
| `/api/v1/notifications/read-all` | PATCH | NotificationController | — | `{ count }` | Bearer | `notifications.view` (own) | Plataforma, Admin | PROPOSTA |
| `/api/v1/notifications/preferences` | GET/PATCH | NotificationController | — / `{ email_enabled, push_enabled, types[] }` | `{ preferences }` | Bearer | `notifications.view` (own) | Plataforma | PROPOSTA |

---

## 15. IA — AI Gateway (`/api/v1/ai`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/ai/chat` | POST | AiController | `{ messages: [{ role, content }], context?: AIContext, tools?: string[], stream?: boolean, model?: string }` | Stream / `{ message, usage, citations[] }` | Bearer | `ai.chat` | Plataforma, Admin | PROPOSTA |
| `/api/v1/ai/search` | POST | AiController | `{ query, sources?: string[], filters?, top_k?, grounding?: boolean }` | `{ results: AISearchResult[], answer?, citations[] }` | Bearer | `ai.search` | Site, Plataforma, Admin | PROPOSTA |
| `/api/v1/ai/summarize` | POST | AiController | `{ content, type: 'article' \| 'document' \| 'person' \| 'family', length?: 'short' \| 'medium' \| 'long', language? }` | `{ summary, key_points[], citations[] }` | Bearer | `ai.summarize` | Plataforma, Admin | PROPOSTA |
| `/api/v1/ai/suggest` | POST | AiController | `{ context: AISuggestContext, type: 'person' \| 'relationship' \| 'source' \| 'article' \| 'place', limit? }` | `{ suggestions: AISuggestion[] }` | Bearer | `ai.suggest` | Plataforma, Admin | PROPOSTA |
| `/api/v1/ai/analyze-document` | POST | AiController | Multipart: `file`, `{ analysis_types: ('extract' \| 'translate' \| 'summarize' \| 'entities' \| 'dates' \| 'relationships')[], language? }` | `{ analysis: DocumentAnalysis }` | Bearer | `ai.analyze` | Admin | PROPOSTA |
| `/api/v1/ai/embeddings` | POST | AiController | `{ texts: string[], model? }` | `{ embeddings: number[][] }` | Bearer | `ai.embeddings` (internal) | Backend jobs | PROPOSTA |
| `/api/v1/ai/usage` | GET | AiController | Query: `period, user_id?` | `{ usage: AIUsageStats }` | Bearer | `ai.usage` (admin) | Admin | PROPOSTA |

---

## 16. Auditoria (`/api/v1/audit`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/audit/logs` | GET | AuditController | Query: `page, per_page, user_id, action, entity_type, entity_id, date_from, date_to, ip, status` | `{ data: AuditLog[], meta }` | Bearer | `audit.view` (admin) | Admin | PROPOSTA |
| `/api/v1/audit/logs/export` | GET | AuditController | Query: `format: 'csv' \| 'json' \| 'xlsx', filters...` | File download | Bearer | `audit.export` (admin) | Admin | PROPOSTA |
| `/api/v1/audit/stats` | GET | AuditController | Query: `period, group_by` | `{ stats: AuditStats }` | Bearer | `audit.view` (admin) | Admin | PROPOSTA |

---

## 17. Health Checks (`/api/v1/health`)

| Endpoint | Método | Controller | Request | Response | Auth | Autorização | Frontend Consumidor | Status |
|----------|--------|------------|---------|----------|------|-------------|---------------------|--------|
| `/api/v1/health` | GET | HealthController | — | `{ status: 'ok' \| 'degraded' \| 'down', timestamp, version, checks: { database, redis, search, storage, ai_gateway } }` | Público | — | Monitoring, Load Balancer | PROPOSTA |
| `/api/v1/health/database` | GET | HealthController | — | `{ status, latency_ms, connections }` | Público | — | Monitoring | PROPOSTA |
| `/api/v1/health/redis` | GET | HealthController | — | `{ status, latency_ms, memory, connected_clients }` | Público | — | Monitoring | PROPOSTA |
| `/api/v1/health/search` | GET | HealthController | — | `{ status, latency_ms, index_status }` | Público | — | Monitoring | PROPOSTA |

---

## 18. Convenções de API

### Autenticação
- **Tipo:** Bearer Token (JWT) via Laravel Sanctum
- **Header:** `Authorization: Bearer <token>`
- **Refresh:** Access token (15min) + Refresh token (7d rotação)
- **Admin:** Tokens separados com claims `is_admin: true`

### Versionamento
- Prefixo obrigatório: `/api/v1`
- Breaking changes → nova versão (`/api/v2`)
- Deprecation header: `Sunset`, `Deprecation`, `Link`

### Paginação
- Padrão: `page` (1-indexed) + `per_page` (default 15, max 100)
- Response: `{ data: T[], meta: { current_page, last_page, per_page, total, from, to } }`
- Cursor pagination para listas grandes: `cursor`, `limit`

### Filtros
- Query params planos: `?field=value&field[operator]=value`
- Operadores: `[eq]`, `[ne]`, `[gt]`, `[gte]`, `[lt]`, `[lte]`, `[like]`, `[in]`, `[between]`
- Exemplo: `?birth_date[gte]=1900-01-01&surname[like]=Dresbach`

### Ordenação
- `?sort=field:asc|desc` (múltiplo: `?sort=created_at:desc,updated_at:desc`)
- Campos permitidos definidos por controller

### Erros
```json
{
  "error": {
    "code": "VALIDATION_ERROR|NOT_FOUND|UNAUTHORIZED|FORBIDDEN|SERVER_ERROR",
    "message": "Human readable message",
    "details": { "field": ["error message"] },
    "trace_id": "uuid"
  }
}
```
- HTTP Status: 400, 401, 403, 404, 422, 429, 500

### Rate Limiting
- Auth endpoints: 10 req/min/IP
- API endpoints: 60 req/min/user
- Search: 30 req/min/user
- AI: 20 req/min/user, 100 req/hour/user
- Headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After`

---

## 19. APIs Necessárias Não Listadas (Gaps)

| Domínio | Endpoint Faltante | Prioridade | Justificativa |
|---------|-------------------|------------|---------------|
| Genealogia | `/api/v1/people/{id}/ancestors` | Alta | Navegação ancestral direta |
| Genealogia | `/api/v1/people/{id}/descendants` | Alta | Navegação descendente direta |
| Genealogia | `/api/v1/people/{id}/kinship/{otherId}` | Média | Cálculo de parentesco |
| Enciclopédia | `/api/v1/articles/{id}/translate` | Baixa | Tradução assistida por IA |
| Arquivo | `/api/v1/archive/units/{id}/iiif-manifest` | Média | Suporte IIIF para visualizadores |
| IA | `/api/v1/ai/fine-tune` | Baixa | Fine-tuning de modelo próprio |
| Admin | `/api/v1/admin/backup/trigger` | Alta | Disparo de backup manual |
| Admin | `/api/v1/admin/maintenance-mode` | Média | Toggle modo manutenção |

---

## 20. Resumo Quantitativo

| Domínio | Endpoints Propostos | Existentes | Deprecados | Total |
|---------|---------------------|------------|------------|-------|
| Auth | 11 | 0 | 0 | 11 |
| Users | 11 | 0 | 0 | 11 |
| People | 13 | 0 | 0 | 13 |
| Families | 7 | 0 | 0 | 7 |
| Relationships | 6 | 0 | 0 | 6 |
| Trees | 8 | 0 | 0 | 8 |
| Events/Places/Sources | 12 | 0 | 0 | 12 |
| Articles | 14 | 0 | 0 | 14 |
| Categories | 4 | 0 | 0 | 4 |
| Archive | 13 | 0 | 0 | 13 |
| Search | 5 | 0 | 0 | 5 |
| Documents/Media | 8 | 0 | 0 | 8 |
| Contributions | 6 | 0 | 0 | 6 |
| Notifications | 4 | 0 | 0 | 4 |
| AI | 7 | 0 | 0 | 7 |
| Audit | 3 | 0 | 0 | 3 |
| Health | 4 | 0 | 0 | 4 |
| **TOTAL** | **136** | **0** | **0** | **136** |

> **NOTA:** Nenhum endpoint está implementado no código atual (EXISTENTE = 0). O backend Laravel tem estrutura de diretórios (`/app/Http/Controllers`, `/app/Http/Routes`) mas estão vazios. Todos os endpoints acima são PROPOSTAS baseadas na documentação de arquitetura e requisitos.

---

*Documento gerado em: 2026-10-01*
*Versão: 1.0.0*
*Responsável: Auditoria de Engenharia DRESBACH*