# Inventário de Rotas — DRESBACH

> **Mapeamento completo de rotas: existentes, encontradas em documentação, propostas, inexistentes, duplicadas e quebradas.**
> Classificação: SITE | PLATAFORMA | ADMINISTRATIVO | API

---

## Legenda de Status

| Status | Significado |
|--------|-------------|
| `EXISTENTE` | Rota implementada e funcional no código |
| `DOCUMENTADA` | Rota descrita na documentação mas não implementada |
| `PROPOSTA` | Rota planejada/necessária, ainda não documentada formalmente |
| `INEXISTENTE` | Rota que deveria existir mas não há registro |
| `DUPLICADA` | Múltiplas rotas para mesma finalidade |
| `QUEBRADA` | Rota conhecida mas com problemas |
| `NÃO DETERMINADA` | Rota referenciada mas localização incerta |

---

## 1. SITE — `/` (front-end/site)

### 1.1 Rotas Públicas Institucionais

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/` | GET | PROPOSTA | HomeController | Página inicial — Hero, apresentação, navegação principal | DOCUMENTACAO.md:146 |
| `/sobre` | GET | PROPOSTA | AboutController | Página "Sobre o Instituto" — história, missão, valores | DOCUMENTACAO.md:146 |
| `/historia` | GET | PROPOSTA | HistoryController | História institucional detalhada | REFERENCIA.md |
| `/contato` | GET | PROPOSTA | ContactController | Formulário e informações de contato | DOCUMENTACAO.md:148 |
| `/ajuda` | GET | PROPOSTA | HelpController | Central de ajuda, FAQ, suporte | DOCUMENTACAO.md:148 |
| `/privacidade` | GET | PROPOSTA | PrivacyController | Política de privacidade e LGPD | REGRA-GERAL.md:887 |
| `/termos` | GET | PROPOSTA | TermsController | Termos de uso | REGRA-GERAL.md:887 |
| `/acessibilidade` | GET | PROPOSTA | AccessibilityController | Declaração de acessibilidade | DOCUMENTACAO.md:271 |

### 1.2 Autenticação Pública (Site)

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/login` | GET/POST | PROPOSTA | AuthController | Login de usuários (redireciona para plataforma) | DOCUMENTACAO.md:149 |
| `/cadastro` | GET/POST | PROPOSTA | RegisterController | Cadastro de novos usuários | DOCUMENTACAO.md:150 |
| `/recuperar-senha` | GET/POST | PROPOSTA | PasswordResetController | Solicitação de recuperação de senha | REGRA-GERAL.md:530 |
| `/verificar-email` | GET | PROPOSTA | EmailVerificationController | Verificação de e-mail | REGRA-GERAL.md:532 |

### 1.3 Genealogia Pública (Site)

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/genealogia` | GET | PROPOSTA | GenealogyPublicController | Página inicial de genealogia pública | DOCUMENTACAO.md:161 |
| `/genealogia/busca` | GET | PROPOSTA | GenealogySearchController | Busca pública de pessoas/famílias | DOCUMENTACAO.md:161 |
| `/genealogia/pessoa/{slug}` | GET | PROPOSTA | PersonPublicController | Perfil público de pessoa | REFERENCIA.md:102 |
| `/genealogia/familia/{slug}` | GET | PROPOSTA | FamilyPublicController | Perfil público de família | REFERENCIA.md:208 |
| `/genealogia/arvore/{id}` | GET | PROPOSTA | TreePublicController | Visualização pública de árvore (somente leitura) | REFERENCIA.md:147 |

### 1.4 Enciclopédia Pública (Site)

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/enciclopedia` | GET | PROPOSTA | EncyclopediaPublicController | Índice da enciclopédia pública | DOCUMENTACAO.md:159 |
| `/enciclopedia/busca` | GET | PROPOSTA | EncyclopediaSearchController | Busca na enciclopédia | REFERENCIA.md:181 |
| `/enciclopedia/{slug}` | GET | PROPOSTA | ArticlePublicController | Artigo enciclopédico público | REFERENCIA.md:184 |
| `/enciclopedia/categoria/{slug}` | GET | PROPOSTA | CategoryPublicController | Artigos por categoria | REFERENCIA.md:180 |

### 1.5 Arquivo Histórico Público (Site)

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/arquivo` | GET | PROPOSTA | ArchivePublicController | Portal do arquivo histórico | ARQUIVO.md:97 |
| `/arquivo/busca` | GET | PROPOSTA | ArchiveSearchController | Pesquisa arquivística (palavra-chave + navegacional) | ARQUIVO.md:53 |
| `/arquivo/{arquivo}/{fundo}/{unidade}` | GET | PROPOSTA | ArchiveUnitController | Registro arquivístico detalhado | ARQUIVO.md:97 |
| `/arquivo/navegar` | GET | PROPOSTA | ArchiveBrowseController | Navegação hierárquica (Arquivo → Fundo → Classificação → Unidade) | ARQUIVO.md:78 |

### 1.6 Pesquisa Global (Site)

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/busca` | GET | PROPOSTA | GlobalSearchController | Busca unificada (pessoas, famílias, artigos, documentos, lugares, eventos) | DOCUMENTACAO.md:151, REFERENCIA.md:462 |
| `/busca/avancada` | GET | PROPOSTA | AdvancedSearchController | Busca avançada com filtros | REFERENCIA.md:462 |

### 1.7 Doações (Site)

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/doacoes` | GET | PROPOSTA | DonationController | Página de doações | DOCUMENTACAO.md:164 |
| `/doacoes/checkout` | POST | PROPOSTA | DonationCheckoutController | Processamento de doação | REGRA-GERAL.md:616 |

---

## 2. PLATAFORMA — `/app` (front-end/plataforma)

> **Área autenticada do usuário. Todas as rotas exigem autenticação.**

### 2.1 Dashboard e Navegação Principal

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/app` | GET | PROPOSTA | DashboardController | Dashboard principal do usuário | DOCUMENTACAO.md:175 |
| `/app/dashboard` | GET | PROPOSTA | DashboardController | Alias para dashboard | DOCUMENTACAO.md:175 |

### 2.2 Perfil e Conta

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/app/perfil` | GET | PROPOSTA | ProfileController | Perfil do usuário logado | DOCUMENTACAO.md:177 |
| `/app/perfil/editar` | GET/PATCH | PROPOSTA | ProfileController | Edição de perfil | DOCUMENTACAO.md:177 |
| `/app/configuracoes` | GET | PROPOSTA | SettingsController | Configurações da conta | DOCUMENTACAO.md:178 |
| `/app/configuracoes/privacidade` | GET/PATCH | PROPOSTA | PrivacySettingsController | Configurações de privacidade | DOCUMENTACAO.md:386 |
| `/app/configuracoes/notificacoes` | GET/PATCH | PROPOSTA | NotificationSettingsController | Preferências de notificação | DOCUMENTACAO.md:179 |

### 2.3 Genealogia do Usuário (Plataforma)

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/app/genealogia` | GET | PROPOSTA | UserGenealogyController | Área genealógica do usuário (suas árvores) | DOCUMENTACAO.md:180 |
| `/app/genealogia/arvores` | GET | PROPOSTA | UserTreesController | Lista de árvores do usuário | DOCUMENTACAO.md:378 |
| `/app/genealogia/arvores/nova` | GET/POST | PROPOSTA | TreeCreateController | Criar nova árvore | DOCUMENTACAO.md:378 |
| `/app/genealogia/arvores/{id}` | GET | PROPOSTA | TreeViewController | Visualizar/editar árvore (editor interativo) | REFERENCIA.md:147 |
| `/app/genealogia/arvores/{id}/editar` | GET/PATCH | PROPOSTA | TreeEditController | Editor da árvore | REFERENCIA.md:147 |
| `/app/genealogia/pessoas` | GET | PROPOSTA | UserPeopleController | Lista de pessoas do usuário | DOCUMENTACAO.md:379 |
| `/app/genealogia/pessoas/nova` | GET/POST | PROPOSTA | PersonCreateController | Adicionar nova pessoa | REFERENCIA.md:558 |
| `/app/genealogia/pessoas/{id}` | GET | PROPOSTA | PersonDetailController | Perfil detalhado da pessoa (painel lateral + árvore) | REFERENCIA.md:485 |
| `/app/genealogia/pessoas/{id}/editar` | GET/PATCH | PROPOSTA | PersonEditController | Editar pessoa | REFERENCIA.md:548 |
| `/app/genealogia/familias` | GET | PROPOSTA | UserFamiliesController | Lista de famílias do usuário | DOCUMENTACAO.md:380 |
| `/app/genealogia/familias/nova` | GET/POST | PROPOSTA | FamilyCreateController | Criar nova família | REFERENCIA.md |
| `/app/genealogia/familias/{id}` | GET | PROPOSTA | FamilyDetailController | Detalhes da família | REFERENCIA.md |
| `/app/genealogia/busca` | GET | PROPOSTA | UserGenealogySearchController | Busca dentro da genealogia do usuário | DOCUMENTACAO.md:381 |

### 2.4 Documentos e Mídia (Plataforma)

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/app/documentos` | GET | PROPOSTA | UserDocumentsController | Meus documentos | DOCUMENTACAO.md:183 |
| `/app/documentos/upload` | GET/POST | PROPOSTA | DocumentUploadController | Upload de documentos | DOCUMENTACAO.md:184 |
| `/app/documentos/{id}` | GET | PROPOSTA | DocumentViewController | Visualizar documento | DOCUMENTACAO.md:184 |
| `/app/fotos` | GET | PROPOSTA | UserPhotosController | Minhas fotos/vídeos | REFERENCIA.md:503 |
| `/app/fotos/upload` | POST | PROPOSTA | PhotoUploadController | Upload de fotos | REFERENCIA.md:503 |

### 2.5 Contribuições e Pesquisa (Plataforma)

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/app/contribuicoes` | GET | PROPOSTA | UserContributionsController | Minhas contribuições pendentes/aprovadas | DOCUMENTACAO.md:185 |
| `/app/contribuicoes/nova` | GET/POST | PROPOSTA | ContributionCreateController | Nova contribuição | DOCUMENTACAO.md:185 |
| `/app/pesquisas` | GET | PROPOSTA | UserResearchController | Minhas pesquisas salvas | DOCUMENTACAO.md:183 |
| `/app/pesquisas/nova` | GET/POST | PROPOSTA | ResearchCreateController | Nova pesquisa | DOCUMENTACAO.md:183 |
| `/app/historico` | GET | PROPOSTA | UserHistoryController | Histórico de navegação/ações | DOCUMENTACAO.md:183 |
| `/app/favoritos` | GET | PROPOSTA | UserFavoritesController | Itens favoritos | DOCUMENTACAO.md:182 |

### 2.6 Notificações (Plataforma)

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/app/notificacoes` | GET | PROPOSTA | NotificationController | Central de notificações | DOCUMENTACAO.md:179 |
| `/app/notificacoes/{id}/ler` | PATCH | PROPOSTA | NotificationController | Marcar como lida | DOCUMENTACAO.md:179 |

---

## 3. ADMINISTRATIVO — `/administrativo` (front-end/administrativo)

> **Painel administrativo interno. Login separado, RBAC obrigatório. NÃO é o site público.**

### 3.1 Autenticação Administrativa

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/administrativo/login` | GET/POST | PROPOSTA | AdminAuthController | Login administrativo | DOCUMENTACAO.md:404, REGRA-GERAL.md:755 |
| `/administrativo/recuperar-senha` | GET/POST | PROPOSTA | AdminPasswordResetController | Recuperação de senha admin | REGRA-GERAL.md:756 |
| `/administrativo/logout` | POST | PROPOSTA | AdminAuthController | Logout administrativo | REGRA-GERAL.md:755 |
| `/administrativo/2fa` | GET/POST | PROPOSTA | AdminTwoFactorController | Autenticação de dois fatores (futuro) | REGRA-GERAL.md:757 |

### 3.2 Dashboard Administrativo

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/administrativo` | GET | PROPOSTA | AdminDashboardController | Dashboard principal admin | DOCUMENTACAO.md:405 |
| `/administrativo/dashboard` | GET | PROPOSTA | AdminDashboardController | Alias dashboard | DOCUMENTACAO.md:405 |
| `/administrativo/indicadores` | GET | PROPOSTA | AdminIndicatorsController | KPIs e métricas do sistema | DOCUMENTACAO.md:210 |

### 3.3 Gestão de Usuários e Permissões

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/administrativo/usuarios` | GET | PROPOSTA | AdminUsersController | Lista de usuários | DOCUMENTACAO.md:407 |
| `/administrativo/usuarios/novo` | GET/POST | PROPOSTA | AdminUserCreateController | Criar usuário (apenas admin) | DOCUMENTACAO.md:407 |
| `/administrativo/usuarios/{id}` | GET | PROPOSTA | AdminUserDetailController | Detalhes do usuário | DOCUMENTACAO.md:407 |
| `/administrativo/usuarios/{id}/editar` | GET/PATCH | PROPOSTA | AdminUserEditController | Editar usuário | DOCUMENTACAO.md:407 |
| `/administrativo/permissoes` | GET | PROPOSTA | AdminPermissionsController | Gestão de permissões/RBAC | DOCUMENTACAO.md:412, REGRA-GERAL.md:520 |
| `/administrativo/roles` | GET | PROPOSTA | AdminRolesController | Gestão de roles | REGRA-GERAL.md:520 |

### 3.4 Genealogia Administrativa

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/administrativo/genealogia` | GET | PROPOSTA | AdminGenealogyController | Visão geral genealógica admin | DOCUMENTACAO.md:408 |
| `/administrativo/genealogia/pessoas` | GET | PROPOSTA | AdminPeopleController | Gestão de todas as pessoas | DOCUMENTACAO.md:408 |
| `/administrativo/genealogia/pessoas/{id}` | GET | PROPOSTA | AdminPersonDetailController | Detalhes administrativos da pessoa | DOCUMENTACAO.md:408 |
| `/administrativo/genealogia/familias` | GET | PROPOSTA | AdminFamiliesController | Gestão de todas as famílias | DOCUMENTACAO.md:408 |
| `/administrativo/genealogia/arvores` | GET | PROPOSTA | AdminTreesController | Gestão de todas as árvores | DOCUMENTACAO.md:408 |
| `/administrativo/genealogia/relacionamentos` | GET | PROPOSTA | AdminRelationshipsController | Gestão de relacionamentos | DOCUMENTACAO.md:408 |

### 3.5 Enciclopédia Administrativa

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/administrativo/enciclopedia` | GET | PROPOSTA | AdminEncyclopediaController | Visão geral enciclopédia admin | DOCUMENTACAO.md:409 |
| `/administrativo/enciclopedia/artigos` | GET | PROPOSTA | AdminArticlesController | Lista de todos os artigos | DOCUMENTACAO.md:409 |
| `/administrativo/enciclopedia/artigos/novo` | GET/POST | PROPOSTA | AdminArticleCreateController | Criar artigo | DOCUMENTACAO.md:409 |
| `/administrativo/enciclopedia/artigos/{id}` | GET | PROPOSTA | AdminArticleDetailController | Detalhes do artigo | DOCUMENTACAO.md:409 |
| `/administrativo/enciclopedia/artigos/{id}/editar` | GET/PATCH | PROPOSTA | AdminArticleEditController | Editar artigo | DOCUMENTACAO.md:409 |
| `/administrativo/enciclopedia/categorias` | GET | PROPOSTA | AdminCategoriesController | Gestão de categorias | DOCUMENTACAO.md:409, REFERENCIA.md:180 |
| `/administrativo/enciclopedia/referencias` | GET | PROPOSTA | AdminReferencesController | Gestão de referências/fontes | DOCUMENTACAO.md:409, REFERENCIA.md:182 |

### 3.6 Arquivo Histórico Administrativo

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/administrativo/arquivo` | GET | PROPOSTA | AdminArchiveController | Visão geral arquivo admin | DOCUMENTACAO.md:409 |
| `/administrativo/arquivo/fundos` | GET | PROPOSTA | AdminFondsController | Gestão de fundos/arquivos | ARQUIVO.md:28 |
| `/administrativo/arquivo/fundos/novo` | GET/POST | PROPOSTA | AdminFondCreateController | Criar fundo | ARQUIVO.md:28 |
| `/administrativo/arquivo/classificacoes` | GET | PROPOSTA | AdminClassificationsController | Gestão de classificações | ARQUIVO.md:32 |
| `/administrativo/arquivo/unidades` | GET | PROPOSTA | AdminArchiveUnitsController | Gestão de unidades de descrição | ARQUIVO.md:34 |
| `/administrativo/arquivo/documentos` | GET | PROPOSTA | AdminDocumentsController | Gestão de documentos digitalizados | ARQUIVO.md:143 |
| `/administrativo/arquivo/digitalizacoes` | GET | PROPOSTA | AdminDigitalObjectsController | Gestão de objetos digitais | ARQUIVO.md:143 |

### 3.7 Moderação e Aprovação

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/administrativo/moderacao` | GET | PROPOSTA | AdminModerationController | Fila de moderação | DOCUMENTACAO.md:410 |
| `/administrativo/moderacao/contribuicoes` | GET | PROPOSTA | AdminContributionsModerationController | Aprovar/rejeitar contribuições | DOCUMENTACAO.md:410 |
| `/administrativo/moderacao/artigos` | GET | PROPOSTA | AdminArticlesModerationController | Aprovar/rejeitar artigos | DOCUMENTACAO.md:410 |
| `/administrativo/aprovacao` | GET | PROPOSTA | AdminApprovalController | Fluxos de aprovação | DOCUMENTACAO.md:410 |

### 3.8 Auditoria e Logs

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/administrativo/auditoria` | GET | PROPOSTA | AdminAuditController | Logs de auditoria | DOCUMENTACAO.md:411, REGRA-GERAL.md:798 |
| `/administrativo/auditoria/logs` | GET | PROPOSTA | AdminAuditLogsController | Visualização detalhada de logs | REGRA-GERAL.md:798 |
| `/administrativo/auditoria/exportar` | GET | PROPOSTA | AdminAuditExportController | Exportar logs de auditoria | REGRA-GERAL.md:798 |

### 3.9 Configurações do Sistema

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/administrativo/configuracoes` | GET | PROPOSTA | AdminSettingsController | Configurações gerais do sistema | DOCUMENTACAO.md:411 |
| `/administrativo/configuracoes/site` | GET/PATCH | PROPOSTA | AdminSiteSettingsController | Configurações do site público | DOCUMENTACAO.md:411 |
| `/administrativo/configuracoes/api` | GET/PATCH | PROPOSTA | AdminApiSettingsController | Configurações da API | DOCUMENTACAO.md:411 |
| `/administrativo/configuracoes/ia` | GET/PATCH | PROPOSTA | AdminAiSettingsController | Configurações do AI Gateway | DOCUMENTACAO.md:411 |

### 3.10 Relatórios Administrativos

| Rota | Método | Status | Controlador | Descrição | Fonte |
|------|--------|--------|-------------|-----------|-------|
| `/administrativo/relatorios` | GET | PROPOSTA | AdminReportsController | Central de relatórios | DOCUMENTACAO.md:411 |
| `/administrativo/relatorios/usuarios` | GET | PROPOSTA | AdminUserReportsController | Relatórios de usuários | DOCUMENTACAO.md:411 |
| `/administrativo/relatorios/genealogia` | GET | PROPOSTA | AdminGenealogyReportsController | Relatórios genealógicos | DOCUMENTACAO.md:411 |
| `/administrativo/relatorios/enciclopedia` | GET | PROPOSTA | AdminEncyclopediaReportsController | Relatórios da enciclopédia | DOCUMENTACAO.md:411 |
| `/administrativo/relatorios/arquivo` | GET | PROPOSTA | AdminArchiveReportsController | Relatórios do arquivo | DOCUMENTACAO.md:411 |

---

## 4. API — `/api/v1` (backend)

> **Todas as rotas de API são PROPOSTAS. Nenhuma rota de API existe no código atual.**

### 4.1 Autenticação e Autorização

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/auth/login` | POST | PROPOSTA | AuthController | Público | Login (retorna token) |
| `/api/v1/auth/logout` | POST | PROPOSTA | AuthController | Autenticado | Logout (revoga token) |
| `/api/v1/auth/refresh` | POST | PROPOSTA | AuthController | Autenticado | Renovar access token |
| `/api/v1/auth/register` | POST | PROPOSTA | AuthController | Público | Cadastro de usuário |
| `/api/v1/auth/password/forgot` | POST | PROPOSTA | AuthController | Público | Solicitar reset de senha |
| `/api/v1/auth/password/reset` | POST | PROPOSTA | AuthController | Público | Confirmar reset de senha |
| `/api/v1/auth/email/verify` | GET | PROPOSTA | AuthController | Público | Verificar e-mail |
| `/api/v1/auth/me` | GET | PROPOSTA | AuthController | Autenticado | Dados do usuário logado |

### 4.2 Usuários e Perfis

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/users` | GET | PROPOSTA | UserController | Admin | Listar usuários (paginado) |
| `/api/v1/users` | POST | PROPOSTA | UserController | Admin | Criar usuário |
| `/api/v1/users/{id}` | GET | PROPOSTA | UserController | Autenticado | Ver usuário |
| `/api/v1/users/{id}` | PATCH | PROPOSTA | UserController | Autenticado/Próprio | Atualizar usuário |
| `/api/v1/users/{id}` | DELETE | PROPOSTA | UserController | Admin | Excluir usuário (soft delete) |
| `/api/v1/users/{id}/roles` | GET | PROPOSTA | UserController | Admin | Roles do usuário |
| `/api/v1/users/{id}/roles` | POST | PROPOSTA | UserController | Admin | Atribuir role |
| `/api/v1/users/{id}/permissions` | GET | PROPOSTA | UserController | Admin | Permissões efetivas |

### 4.3 Genealogia — Pessoas

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/people` | GET | PROPOSTA | PersonController | Autenticado | Listar pessoas (filtros, paginação) |
| `/api/v1/people` | POST | PROPOSTA | PersonController | Autenticado | Criar pessoa |
| `/api/v1/people/{id}` | GET | PROPOSTA | PersonController | Autenticado | Ver pessoa |
| `/api/v1/people/{id}` | PATCH | PROPOSTA | PersonController | Autenticado/Autorizado | Atualizar pessoa |
| `/api/v1/people/{id}` | DELETE | PROPOSTA | PersonController | Admin | Excluir pessoa |
| `/api/v1/people/{id}/tree` | GET | PROPOSTA | PersonController | Autenticado | Árvore genealógica da pessoa |
| `/api/v1/people/{id}/timeline` | GET | PROPOSTA | PersonController | Autenticado | Linha do tempo da pessoa |
| `/api/v1/people/{id}/documents` | GET | PROPOSTA | PersonController | Autenticado | Documentos da pessoa |
| `/api/v1/people/{id}/sources` | GET | PROPOSTA | PersonController | Autenticado | Fontes da pessoa |
| `/api/v1/people/{id}/relationships` | GET | PROPOSTA | PersonController | Autenticado | Relacionamentos da pessoa |
| `/api/v1/people/search` | GET | PROPOSTA | PersonController | Autenticado | Buscar pessoas |

### 4.4 Genealogia — Famílias

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/families` | GET | PROPOSTA | FamilyController | Autenticado | Listar famílias |
| `/api/v1/families` | POST | PROPOSTA | FamilyController | Autenticado | Criar família |
| `/api/v1/families/{id}` | GET | PROPOSTA | FamilyController | Autenticado | Ver família |
| `/api/v1/families/{id}` | PATCH | PROPOSTA | FamilyController | Autenticado/Autorizado | Atualizar família |
| `/api/v1/families/{id}` | DELETE | PROPOSTA | FamilyController | Admin | Excluir família |
| `/api/v1/families/{id}/members` | GET | PROPOSTA | FamilyController | Autenticado | Membros da família |
| `/api/v1/families/{id}/tree` | GET | PROPOSTA | FamilyController | Autenticado | Árvore da família |

### 4.5 Genealogia — Relacionamentos

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/relationships` | POST | PROPOSTA | RelationshipController | Autenticado | Criar relacionamento |
| `/api/v1/relationships/{id}` | PATCH | PROPOSTA | RelationshipController | Autenticado/Autorizado | Atualizar relacionamento |
| `/api/v1/relationships/{id}` | DELETE | PROPOSTA | RelationshipController | Autenticado/Autorizado | Remover relacionamento |
| `/api/v1/relationships/types` | GET | PROPOSTA | RelationshipController | Autenticado | Tipos de relacionamento disponíveis |

### 4.6 Genealogia — Árvores

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/trees` | GET | PROPOSTA | TreeController | Autenticado | Listar árvores do usuário |
| `/api/v1/trees` | POST | PROPOSTA | TreeController | Autenticado | Criar árvore |
| `/api/v1/trees/{id}` | GET | PROPOSTA | TreeController | Autenticado | Ver árvore (dados para renderização) |
| `/api/v1/trees/{id}` | PATCH | PROPOSTA | TreeController | Autenticado/Autorizado | Atualizar árvore |
| `/api/v1/trees/{id}` | DELETE | PROPOSTA | TreeController | Autenticado/Autorizado | Excluir árvore |
| `/api/v1/trees/{id}/export` | GET | PROPOSTA | TreeController | Autenticado | Exportar árvore (GEDCOM) |
| `/api/v1/trees/import` | POST | PROPOSTA | TreeController | Autenticado | Importar árvore (GEDCOM) |

### 4.7 Genealogia — Eventos, Lugares, Fontes

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/events` | GET/POST | PROPOSTA | EventController | Autenticado | Listar/criar eventos |
| `/api/v1/events/{id}` | GET/PATCH/DELETE | PROPOSTA | EventController | Autenticado | CRUD evento |
| `/api/v1/places` | GET/POST | PROPOSTA | PlaceController | Autenticado | Listar/criar lugares |
| `/api/v1/places/{id}` | GET/PATCH/DELETE | PROPOSTA | PlaceController | Autenticado | CRUD lugar |
| `/api/v1/sources` | GET/POST | PROPOSTA | SourceController | Autenticado | Listar/criar fontes |
| `/api/v1/sources/{id}` | GET/PATCH/DELETE | PROPOSTA | SourceController | Autenticado | CRUD fonte |

### 4.8 Enciclopédia — Artigos

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/articles` | GET | PROPOSTA | ArticleController | Público/Autenticado | Listar artigos (público = publicados) |
| `/api/v1/articles` | POST | PROPOSTA | ArticleController | Autenticado/Autorizado | Criar artigo |
| `/api/v1/articles/{id}` | GET | PROPOSTA | ArticleController | Público/Autenticado | Ver artigo |
| `/api/v1/articles/{id}` | PATCH | PROPOSTA | ArticleController | Autenticado/Autorizado | Atualizar artigo |
| `/api/v1/articles/{id}` | DELETE | PROPOSTA | ArticleController | Admin | Excluir artigo |
| `/api/v1/articles/{id}/publish` | POST | PROPOSTA | ArticleController | Autorizado | Publicar artigo |
| `/api/v1/articles/{id}/revisions` | GET | PROPOSTA | ArticleController | Autenticado | Histórico de revisões |
| `/api/v1/articles/{id}/revisions/{revId}` | GET | PROPOSTA | ArticleController | Autenticado | Ver revisão específica |
| `/api/v1/articles/{id}/restore/{revId}` | POST | PROPOSTA | ArticleController | Autorizado | Restaurar revisão |
| `/api/v1/articles/search` | GET | PROPOSTA | ArticleController | Público/Autenticado | Buscar artigos |
| `/api/v1/categories` | GET/POST | PROPOSTA | CategoryController | Autenticado | Categorias |
| `/api/v1/categories/{id}` | GET/PATCH/DELETE | PROPOSTA | CategoryController | Autenticado/Autorizado | CRUD categoria |

### 4.9 Arquivo Histórico

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/archive/fonds` | GET/POST | PROPOSTA | ArchiveController | Autenticado/Autorizado | Fundos/Arquivos |
| `/api/v1/archive/fonds/{id}` | GET/PATCH/DELETE | PROPOSTA | ArchiveController | Autenticado/Autorizado | CRUD fundo |
| `/api/v1/archive/classifications` | GET/POST | PROPOSTA | ArchiveController | Autenticado/Autorizado | Classificações |
| `/api/v1/archive/units` | GET/POST | PROPOSTA | ArchiveController | Autenticado/Autorizado | Unidades de descrição |
| `/api/v1/archive/units/{id}` | GET/PATCH/DELETE | PROPOSTA | ArchiveController | Autenticado/Autorizado | CRUD unidade |
| `/api/v1/archive/units/{id}/digital-objects` | GET/POST | PROPOSTA | ArchiveController | Autenticado/Autorizado | Objetos digitais da unidade |
| `/api/v1/archive/search` | GET | PROPOSTA | ArchiveController | Público/Autenticado | Pesquisa arquivística |

### 4.10 Pesquisa Global

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/search` | GET | PROPOSTA | SearchController | Público/Autenticado | Busca unificada |
| `/api/v1/search/suggestions` | GET | PROPOSTA | SearchController | Público/Autenticado | Sugestões de autocomplete |

### 4.11 Documentos e Mídia

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/documents` | GET/POST | PROPOSTA | DocumentController | Autenticado | Listar/upload documentos |
| `/api/v1/documents/{id}` | GET/PATCH/DELETE | PROPOSTA | DocumentController | Autenticado/Autorizado | CRUD documento |
| `/api/v1/media/upload` | POST | PROPOSTA | MediaController | Autenticado | Upload de mídia |
| `/api/v1/media/{id}` | GET/DELETE | PROPOSTA | MediaController | Autenticado/Autorizado | Ver/excluir mídia |

### 4.12 Contribuições

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/contributions` | GET/POST | PROPOSTA | ContributionController | Autenticado | Listar/criar contribuições |
| `/api/v1/contributions/{id}` | GET/PATCH | PROPOSTA | ContributionController | Autenticado/Autorizado | Ver/atualizar contribuição |
| `/api/v1/contributions/{id}/approve` | POST | PROPOSTA | ContributionController | Admin/Moderador | Aprovar contribuição |
| `/api/v1/contributions/{id}/reject` | POST | PROPOSTA | ContributionController | Admin/Moderador | Rejeitar contribuição |

### 4.13 Notificações

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/notifications` | GET | PROPOSTA | NotificationController | Autenticado | Listar notificações |
| `/api/v1/notifications/{id}/read` | PATCH | PROPOSTA | NotificationController | Autenticado | Marcar como lida |
| `/api/v1/notifications/read-all` | PATCH | PROPOSTA | NotificationController | Autenticado | Marcar todas como lidas |

### 4.14 IA (AI Gateway)

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/ai/chat` | POST | PROPOSTA | AiController | Autenticado | Chat com IA |
| `/api/v1/ai/search` | POST | PROPOSTA | AiController | Autenticado | Busca semântica via IA |
| `/api/v1/ai/summarize` | POST | PROPOSTA | AiController | Autenticado | Resumir documento/artigo |
| `/api/v1/ai/suggest` | POST | PROPOSTA | AiController | Autenticado | Sugestões genealógicas/históricas |
| `/api/v1/ai/analyze-document` | POST | PROPOSTA | AiController | Autenticado | Análise de documento histórico |

### 4.15 Auditoria (API)

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/audit/logs` | GET | PROPOSTA | AuditController | Admin | Logs de auditoria |
| `/api/v1/audit/logs/export` | GET | PROPOSTA | AuditController | Admin | Exportar logs |

### 4.16 Health Checks

| Rota | Método | Status | Controller | Auth | Descrição |
|------|--------|--------|------------|------|-----------|
| `/api/v1/health` | GET | PROPOSTA | HealthController | Público | Health check geral |
| `/api/v1/health/database` | GET | PROPOSTA | HealthController | Público | Health check banco |
| `/api/v1/health/redis` | GET | PROPOSTA | HealthController | Público | Health check Redis |
| `/api/v1/health/search` | GET | PROPOSTA | HealthController | Público | Health check search engine |

---

## 5. Rotas Duplicadas / Conflitantes Identificadas

| Rota | Conflito | Resolução Proposta |
|------|----------|-------------------|
| `/login` (site) vs `/administrativo/login` (admin) | Duas páginas de login diferentes | **CORRETO** — Domínios separados. Site usa auth público, admin usa auth separado. |
| `/api/v1/users` vs `/api/v1/admin/users` | Possível duplicação | **EVITAR** — Usar apenas `/api/v1/users` com RBAC. Não criar `/admin` prefix na API. |
| `/genealogia` (site) vs `/app/genealogia` (plataforma) | Mesma funcionalidade, contextos diferentes | **CORRETO** — Site = público (somente leitura), Plataforma = autenticado (CRUD). |
| `/busca` (site) vs `/app/busca` (não existe) | Busca pública vs autenticada | **PROPOSTA** — Site tem `/busca` pública. Plataforma usa `/app/genealogia/busca` e `/app/pesquisas`. |

---

## 6. Rotas Inexistentes / Faltantes (Gaps Críticos)

| Domínio | Rota Faltante | Prioridade | Observação |
|---------|---------------|------------|------------|
| Auth | `/api/v1/auth/mfa/*` | Média | MFA futuro (REGRA-GERAL.md:757) |
| Genealogia | `/api/v1/people/merge` | Alta | Merge de pessoas duplicadas (REFERENCIA.md:635) |
| Genealogia | `/api/v1/relationships/validate` | Alta | Validação de consistência (ciclos, datas) |
| Enciclopédia | `/api/v1/articles/{id}/diff` | Média | Diff entre revisões |
| Arquivo | `/api/v1/archive/oai-pmh` | Baixa | Endpoint OAI-PMH para interoperabilidade |
| IA | `/api/v1/ai/embeddings` | Alta | Geração de embeddings para RAG |
| Admin | `/administrativo/importacao` | Média | Importação em lote (GEDCOM, CSV) |
| Admin | `/administrativo/backup` | Alta | Gestão de backups |

---

## 7. Resumo Quantitativo de Rotas

| Aplicação | Existentes | Documentadas | Propostas | Inexistentes | Total Mapeado |
|-----------|------------|--------------|-----------|--------------|---------------|
| SITE | 0 | 0 | 28 | 0 | 28 |
| PLATAFORMA | 0 | 0 | 32 | 0 | 32 |
| ADMINISTRATIVO | 0 | 0 | 42 | 0 | 42 |
| API | 0 | 0 | 87 | 0 | 87 |
| **TOTAL** | **0** | **0** | **189** | **0** | **189** |

> **NOTA:** Nenhuma rota está implementada no código atual (EXISTENTE = 0). Todas as rotas acima são PROPOSTAS baseadas na documentação de requisitos e arquitetura. O backend e frontends são estruturas de diretórios vazias aguardando implementação.

---

## 8. Convenções de Nomenclatura de Rotas (ADR Proposto)

### API
- Prefixo: `/api/v1`
- Recursos no plural: `/people`, `/families`, `/articles`
- IDs: UUID (`{id}`) ou slug (`{slug}`) para recursos públicos
- Ações: verbos HTTP padrão (GET, POST, PATCH, DELETE)
- Sub-recursos aninhados: `/people/{id}/relationships`
- Ações personalizadas: POST para `/resource/{id}/action` (ex: `/publish`, `/approve`)

### Frontend (Site)
- Português, kebab-case: `/genealogia`, `/enciclopedia`, `/arquivo`
- Parâmetros: slug legível (`/pessoa/maria-dresbach`)

### Frontend (Plataforma)
- Prefixo: `/app`
- Português, kebab-case: `/app/genealogia/arvores`
- Parâmetros: UUID para recursos privados

### Frontend (Administrativo)
- Prefixo: `/administrativo`
- Português, kebab-case: `/administrativo/genealogia/pessoas`
- Parâmetros: UUID

---

*Documento gerado em: 2026-10-01*
*Versão: 1.0.0*
*Responsável: Auditoria de Engenharia DRESBACH*