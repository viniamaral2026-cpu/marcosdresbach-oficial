# Inventário de Componentes — DRESBACH

> **Mapeamento completo de componentes: existentes, compartilháveis, específicos, duplicações, ausentes e quebrados.**
> Regra: Não criar duplicações desnecessárias. Componentes compartilhados devem estar em local acessível a todas as aplicações que os consomem.

---

## Legenda de Status

| Status | Significado |
|--------|-------------|
| `EXISTENTE` | Componente implementado no código |
| `PROPOSTO` | Componente necessário, documentado mas não implementado |
| `COMPARTILHADO` | Componente usado por 2+ aplicações |
| `ESPECÍFICO` | Componente exclusivo de uma aplicação |
| `AUSENTE` | Componente necessário mas não identificado |
| `DUPLICADO` | Múltiplas implementações da mesma funcionalidade |
| `QUEBRADO` | Componente com problemas conhecidos |

---

## 1. Componentes de Layout / Estrutura (Compartilhados)

> **Localização sugerida:** `/front-end/shared/components/layout/` ou cada app em `/app` com imports relativos

| ID | Componente | Aplicação | Tipo | Status | Descrição | Props Principais |
|----|------------|-----------|------|--------|-----------|------------------|
| CMP-001 | `Header` | Site, Plataforma, Admin | Layout | PROPOSTO | Cabeçalho principal com navegação, logo, ações do usuário | `variant: 'site' \| 'app' \| 'admin'`, `user?: User` |
| CMP-002 | `Footer` | Site, Plataforma, Admin | Layout | PROPOSTO | Rodapé institucional com links, copyright, redes sociais | `variant: 'site' \| 'app' \| 'admin'` |
| CMP-003 | `MainLayout` | Site, Plataforma, Admin | Layout | PROPOSTO | Wrapper principal: Header + Main + Footer | `children: ReactNode`, `sidebar?: ReactNode` |
| CMP-004 | `AdminLayout` | Administrativo | Layout | PROPOSTO | Layout admin: Sidebar fixa + Header + Content | `menuItems: MenuItem[]`, `user: AdminUser` |
| CMP-005 | `AppLayout` | Plataforma | Layout | PROPOSTO | Layout plataforma: Header + Sidebar colapsável + Content | `navigation: NavItem[]`, `user: User` |
| CMP-006 | `SiteLayout` | Site | Layout | PROPOSTO | Layout site: Header público + Content + Footer | `seo: SEOProps` |
| CMP-007 | `Sidebar` | Plataforma, Admin | Layout | PROPOSTO | Barra lateral de navegação | `items: NavItem[]`, `collapsed: boolean`, `onToggle: () => void` |
| CMP-008 | `Breadcrumb` | Site, Plataforma, Admin | Layout | PROPOSTO | Navegação hierárquica | `items: BreadcrumbItem[]`, `separator?: ReactNode` |
| CMP-009 | `Container` | Todas | Layout | PROPOSTO | Container responsivo com max-width | `size: 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'`, `children: ReactNode` |

---

## 2. Componentes de Navegação (Compartilhados)

| ID | Componente | Aplicação | Tipo | Status | Descrição | Props Principais |
|----|------------|-----------|------|--------|-----------|------------------|
| CMP-010 | `MainNavigation` | Site | Navigation | PROPOSTO | Menu principal do site (Sobre, Genealogia, Enciclopédia, Arquivo, Doações) | `items: NavItem[]`, `activeItem?: string` |
| CMP-011 | `UserMenu` | Site, Plataforma | Navigation | PROPOSTO | Dropdown do usuário autenticado (perfil, configurações, sair) | `user: User`, `onLogout: () => void` |
| CMP-012 | `AdminMenu` | Administrativo | Navigation | PROPOSTO | Menu lateral administrativo agrupado por domínio | `modules: AdminModule[]`, `permissions: Permission[]` |
| CMP-013 | `MobileMenu` | Site, Plataforma | Navigation | PROPOSTO | Menu hambúrguer responsivo | `isOpen: boolean`, `onClose: () => void`, `items: NavItem[]` |
| CMP-014 | `LanguageSwitcher` | Site | Navigation | PROPOSTO | Seletor de idioma (PT/EN/DE/ES) | `currentLocale: string`, `locales: Locale[]` |
| CMP-015 | `SearchInput` | Site, Plataforma, Admin | Navigation | PROPOSTO | Input de busca global com autocomplete | `placeholder: string`, `onSearch: (q: string) => void`, `suggestions?: string[]` |

---

## 3. Componentes de UI Base (Design System - Compartilhados)

> **Localização sugerida:** `/front-end/shared/components/ui/` — Base para Shadcn/Radix

| ID | Componente | Aplicação | Tipo | Status | Descrição | Variantes/Props |
|----|------------|-----------|------|--------|-----------|-----------------|
| CMP-016 | `Button` | Todas | UI Base | PROPOSTO | Botão base com variantes | `variant: 'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'`, `size: 'default' \| 'sm' \| 'lg' \| 'icon'`, `loading?: boolean` |
| CMP-017 | `Input` | Todas | UI Base | PROPOSTO | Input text base | `type`, `placeholder`, `value`, `onChange`, `error?: string`, `label?` |
| CMP-018 | `Textarea` | Todas | UI Base | PROPOSTO | Textarea base | `rows`, `placeholder`, `value`, `onChange`, `error?` |
| CMP-019 | `Select` | Todas | UI Base | PROPOSTO | Select com busca (Combobox) | `options: Option[]`, `value`, `onChange`, `searchable?: boolean`, `multi?: boolean` |
| CMP-020 | `Checkbox` | Todas | UI Base | PROPOSTO | Checkbox individual | `checked`, `onChange`, `label`, `indeterminate?` |
| CMP-021 | `RadioGroup` | Todas | UI Base | PROPOSTO | Grupo de radio buttons | `options: Option[]`, `value`, `onChange`, `orientation?: 'horizontal' \| 'vertical'` |
| CMP-022 | `Switch` | Todas | UI Base | PROPOSTO | Toggle switch | `checked`, `onChange`, `label?` |
| CMP-023 | `Label` | Todas | UI Base | PROPOSTO | Label acessível | `htmlFor`, `required?: boolean` |
| CMP-024 | `Card` | Todas | UI Base | PROPOSTO | Container card com header, content, footer | `variant: 'default' \| 'outlined' \| 'elevated'`, `padding?: 'none' \| 'sm' \| 'md' \| 'lg'` |
| CMP-025 | `Badge` | Todas | UI Base | PROPOSTO | Badge/status indicator | `variant: 'default' \| 'secondary' \| 'destructive' \| 'success' \| 'warning' \| 'info'`, `size: 'sm' \| 'md' \| 'lg'` |
| CMP-026 | `Avatar` | Todas | UI Base | PROPOSTO | Avatar com fallback de iniciais | `src?: string`, `alt?: string`, `fallback?: string`, `size: 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` |
| CMP-027 | `DropdownMenu` | Todas | UI Base | PROPOSTO | Menu dropdown acessível | `trigger: ReactNode`, `items: MenuItem[]`, `align?: 'start' \| 'end'` |
| CMP-028 | `Tooltip` | Todas | UI Base | PROPOSTO | Tooltip acessível | `content: ReactNode`, `side?: 'top' \| 'right' \| 'bottom' \| 'left'`, `delay?: number` |
| CMP-029 | `Dialog` | Todas | UI Base | PROPOSTO | Modal/dialog acessível | `open`, `onOpenChange`, `title`, `description?`, `children`, `size?: 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` |
| CMP-030 | `Sheet` | Todas | UI Base | PROPOSTO | Bottom sheet / side panel | `open`, `onOpenChange`, `side?: 'left' \| 'right' \| 'bottom'`, `children` |
| CMP-031 | `Tabs` | Todas | UI Base | PROPOSTO | Abas acessíveis | `defaultValue`, `onValueChange`, `tabs: Tab[]`, `orientation?: 'horizontal' \| 'vertical'` |
| CMP-032 | `Accordion` | Todas | UI Base | PROPOSTO | Acordeão colapsável | `items: AccordionItem[]`, `type?: 'single' \| 'multiple'`, `collapsible?: boolean` |
| CMP-033 | `Table` | Todas | UI Base | PROPOSTO | Tabela de dados com sorting, pagination | `columns: ColumnDef[]`, `data: T[]`, `pagination?: PaginationConfig`, `sorting?: SortingConfig`, `selection?: SelectionConfig` |
| CMP-034 | `Pagination` | Todas | UI Base | PROPOSTO | Controle de paginação | `page`, `pageSize`, `total`, `onPageChange`, `onPageSizeChange` |
| CMP-035 | `DataTable` | Todas | UI Base | PROPOSTO | Tabela avançada (TanStack Table) | `columns`, `data`, `filtering`, `sorting`, `pagination`, `grouping`, `columnVisibility`, `rowExpansion` |
| CMP-036 | `Form` | Todas | UI Base | PROPOSTO | Wrapper de formulário (React Hook Form + Zod) | `schema: ZodSchema`, `defaultValues`, `onSubmit`, `mode?: 'onChange' \| 'onBlur' \| 'onSubmit'` |
| CMP-037 | `FormField` | Todas | UI Base | PROPOSTO | Campo de formulário com label, error, hint | `name`, `label`, `error?`, `hint?`, `required?`, `children: ReactNode` |
| CMP-038 | `Alert` | Todas | UI Base | PROPOSTO | Alertas de status | `variant: 'default' \| 'destructive' \| 'success' \| 'warning' \| 'info'`, `title?`, `description`, `action?: ReactNode`, `dismissible?` |
| CMP-039 | `Toast` | Todas | UI Base | PROPOSTO | Notificações toast (Sonner) | `toast: Toast`, `action?: ReactNode` |
| CMP-040 | `Spinner` | Todas | UI Base | PROPOSTO | Indicador de loading | `size: 'sm' \| 'md' \| 'lg'`, `variant: 'default' \| 'primary' \| 'inverse'` |
| CMP-041 | `Skeleton` | Todas | UI Base | PROPOSTO | Placeholder de loading | `variant: 'text' \| 'circular' \| 'rectangular'`, `width?`, `height?`, `animation?: 'pulse' \| 'wave'` |
| CMP-042 | `Separator` | Todas | UI Base | PROPOSTO | Separador visual | `orientation?: 'horizontal' \| 'vertical'`, `decorative?: boolean` |
| CMP-043 | `ScrollArea` | Todas | UI Base | PROPOSTO | Área com scroll customizado | `children`, `type?: 'always' \| 'hover' \| 'scroll' \| 'auto'` |

---

## 4. Componentes de Genealogia (Específicos / Compartilhados Plataforma+Admin)

| ID | Componente | Aplicação | Tipo | Status | Descrição | Props Principais |
|----|------------|-----------|------|--------|-----------|------------------|
| CMP-044 | `GenealogyTree` | Plataforma, Admin | Genealogia | PROPOSTO | **Motor principal da árvore** — Renderização interativa (XYFlow/React Flow) | `rootPersonId: string`, `generations: number`, `viewMode: 'ancestors' \| 'descendants' \| 'both'`, `onPersonClick: (id) => void`, `onAddRelationship: (type, personId) => void`, `readonly?: boolean` |
| CMP-045 | `PersonNode` | Plataforma, Admin | Genealogia | PROPOSTO | Nó individual na árvore (foto, nome, datas, botões +) | `person: Person`, `position: 'root' \| 'parent' \| 'child' \| 'spouse' \| 'sibling'`, `onClick`, `onAddParent`, `onAddSpouse`, `onAddChild`, `onEdit`, `readonly?` |
| CMP-046 | `PersonPanel` | Plataforma, Admin | Genealogia | PROPOSTO | **Painel lateral contextual** — Perfil, editar, adicionar, mídia, biografia, família, fatos, documentos, fontes | `person: Person`, `activeTab: 'profile' \| 'edit' \| 'media' \| 'biography' \| 'family' \| 'facts' \| 'documents' \| 'sources'`, `onTabChange`, `onAction` |
| CMP-047 | `TreeControls` | Plataforma, Admin | Genealogia | PROPOSTO | Controles da árvore: zoom, gerações, localizar, configurações, tela cheia, centralizar | `generations: number`, `onGenerationsChange`, `onZoomIn`, `onZoomOut`, `onCenter`, `onFullscreen`, `onFindPerson`, `onSettings`, `personCount: number` |
| CMP-048 | `PersonForm` | Plataforma, Admin | Genealogia | PROPOSTO | Formulário completo de pessoa (nome, sexo, nascimento, falecimento, locais, foto, biografia) | `mode: 'create' \| 'edit'`, `initialData?: Person`, `onSubmit`, `onCancel`, `existingPeople?: Person[]` (para vincular) |
| CMP-049 | `RelationshipForm` | Plataforma, Admin | Genealogia | PROPOSTO | Fluxo de criação de relacionamento (pai/mãe/cônjuge/filho/irmão) — busca existente ou cria novo | `type: 'parent' \| 'spouse' \| 'child' \| 'sibling'`, `sourcePersonId: string`, `onSubmit: (targetPersonId \| newPersonData) => void`, `onCancel` |
| CMP-050 | `PersonSearch` | Plataforma, Admin, Site | Genealogia | PROPOSTO | Busca de pessoas com filtros (nome, sobrenome, datas, locais) | `onSelect: (person) => void`, `filters?: PersonFilters`, `mode: 'select' \| 'link' \| 'view'`, `excludeIds?: string[]` |
| CMP-051 | `FamilyView` | Plataforma, Admin, Site | Genealogia | PROPOSTO | Visualização de família (pais, cônjuges, filhos) | `family: Family`, `focusPersonId?: string`, `readonly?: boolean` |
| CMP-052 | `Timeline` | Plataforma, Admin, Site | Genealogia | PROPOSTO | Linha do tempo de eventos da pessoa/família | `events: Event[]`, `groupBy?: 'year' \| 'decade' \| 'type'`, `onEventClick` |
| CMP-053 | `SourceCitation` | Plataforma, Admin, Site | Genealogia | PROPOSTO | Exibição de citação de fonte formatada | `source: Source`, `style: 'full' \| 'short' \| 'inline'`, `showConfidence?: boolean` |
| CMP-054 | `DocumentViewer` | Plataforma, Admin, Site | Genealogia | PROPOSTO | Visualizador de documentos (PDF, imagem) com zoom, rotação, download | `document: Document`, `annotations?: Annotation[]`, `readonly?: boolean` |
| CMP-055 | `GedcomImport` | Plataforma, Admin | Genealogia | PROPOSTO | Wizard de importação GEDCOM com preview e mapeamento | `onImport: (gedcomData) => void`, `onCancel`, `maxSize?: number` |
| CMP-056 | `GedcomExport` | Plataforma, Admin | Genealogia | PROPOSTO | Exportação GEDCOM com opções de privacidade | `treeId: string`, `options: ExportOptions`, `onExport: (blob) => void` |
| CMP-057 | `PrivacyFilter` | Plataforma, Admin, Site | Genealogia | PROPOSTO | Filtro de privacidade (pessoas vivas, dados sensíveis) | `person: Person`, `viewerPermissions: Permission[]`, `children: ReactNode` |

---

## 5. Componentes de Enciclopédia (Específicos / Compartilhados Site+Plataforma+Admin)

| ID | Componente | Aplicação | Tipo | Status | Descrição | Props Principais |
|----|------------|-----------|------|--------|-----------|------------------|
| CMP-058 | `ArticleViewer` | Site, Plataforma, Admin | Enciclopédia | PROPOSTO | **Visualizador de artigo** — Infobox, TOC, conteúdo hierárquico, referências, bibliografia | `article: Article`, `mode: 'read' \| 'edit'`, `showTOC?: boolean`, `showReferences?: boolean` |
| CMP-059 | `ArticleEditor` | Plataforma, Admin | Enciclopédia | PROPOSTO | **Editor rico (Tiptap)** — Seções, subseções, mídia, referências, infobox | `article?: Article`, `onSave`, `onPublish`, `onPreview`, `autoSave?: boolean`, `collaborative?: boolean` |
| CMP-060 | `TableOfContents` | Site, Plataforma, Admin | Enciclopédia | PROPOSTO | Índice navegável gerado automaticamente dos headings | `headings: Heading[]`, `activeId?: string`, `onNavigate: (id) => void`, `maxDepth?: number` |
| CMP-061 | `Infobox` | Site, Plataforma, Admin | Enciclopédia | PROPOSTO | Infobox lateral estruturada (pessoa, família, lugar, evento) | `entity: Person \| Family \| Place \| Event`, `template: InfoboxTemplate`, `editable?: boolean` |
| CMP-062 | `ReferenceList` | Site, Plataforma, Admin | Enciclopédia | PROPOSTO | Lista de referências/bibliografia com citações numeradas | `references: Reference[]`, `style: 'numeric' \| 'author-date'`, `onCiteClick` |
| CMP-063 | `CitationInput` | Plataforma, Admin | Enciclopédia | PROPOSTO | Input para adicionar/editar citações no editor | `onAdd: (citation) => void`, `existingSources: Source[]`, `onSearchSource` |
| CMP-064 | `RevisionHistory` | Plataforma, Admin | Enciclopédia | PROPOSTO | Histórico de revisões com diff visual | `revisions: Revision[]`, `onCompare: (rev1, rev2) => void`, `onRestore: (revId) => void` |
| CMP-065 | `RevisionDiff` | Plataforma, Admin | Enciclopédia | PROPOSTO | Visualização de diff entre duas versões | `oldContent: string`, `newContent: string`, `mode: 'inline' \| 'side-by-side'` |
| CMP-066 | `CategoryTree` | Site, Plataforma, Admin | Enciclopédia | PROPOSTO | Árvore de categorias navegável | `categories: Category[]`, `selectedId?: string`, `onSelect: (id) => void`, `showCounts?: boolean` |
| CMP-067 | `ArticleCard` | Site, Plataforma | Enciclopédia | PROPOSTO | Card de artigo para listagens/resultados | `article: Article`, `variant: 'default' \| 'compact' \| 'featured'`, `showCategory?: boolean` |
| CMP-068 | `RelatedArticles` | Site, Plataforma | Enciclopédia | PROPOSTO | Artigos relacionados (sidebar ou rodapé) | `article: Article`, `limit?: number`, `onNavigate` |

---

## 6. Componentes de Arquivo Histórico (Específicos / Compartilhados)

| ID | Componente | Aplicação | Tipo | Status | Descrição | Props Principais |
|----|------------|-----------|------|--------|-----------|------------------|
| CMP-069 | `ArchiveBrowser` | Site, Plataforma, Admin | Arquivo | PROPOSTO | **Navegador hierárquico** — Arquivo → Fundo → Classificação → Unidade | `archiveId?: string`, `onNavigate: (level, item) => void`, `selectedPath?: ArchivePath` |
| CMP-070 | `ArchiveUnitView` | Site, Plataforma, Admin | Arquivo | PROPOSTO | **Registro arquivístico detalhado** — Metadados, descrição, proveniência, digitalização | `unit: ArchiveUnit`, `digitalObject?: DigitalObject`, `onViewDigital`, `onCite` |
| CMP-071 | `DigitalObjectViewer` | Site, Plataforma, Admin | Arquivo | PROPOSTO | Visualizador de objeto digital (imagem, PDF, vídeo) com IIIF/zoom | `object: DigitalObject`, `manifestUrl?: string`, `annotations?: Annotation[]`, `downloadable?: boolean` |
| CMP-072 | `ArchiveSearchForm` | Site, Plataforma, Admin | Arquivo | PROPOSTO | Formulário de pesquisa arquivística (palavra-chave + filtros + navegacional) | `onSearch: (params) => void`, `archives: Archive[]`, `fonds: Fond[]`, `classifications: Classification[]` |
| CMP-073 | `ArchiveBreadcrumbs` | Site, Plataforma, Admin | Arquivo | PROPOSTO | Breadcrumbs específicos da hierarquia arquivística | `path: ArchivePath[]`, `onNavigate` |
| CMP-074 | `ArchiveUnitForm` | Admin | Arquivo | PROPOSTO | Formulário de criação/edição de unidade de descrição (ISAD-G) | `mode: 'create' \| 'edit'`, `unit?: ArchiveUnit`, `parentClassificationId: string`, `onSubmit`, `onCancel` |
| CMP-075 | `ProvenanceTracker` | Admin | Arquivo | PROPOSTO | Rastreador de proveniência/cadeia de custódia | `unit: ArchiveUnit`, `chain: ProvenanceLink[]`, `onAddLink` |

---

## 7. Componentes de Pesquisa (Compartilhados)

| ID | Componente | Aplicação | Tipo | Status | Descrição | Props Principais |
|----|------------|-----------|------|--------|-----------|------------------|
| CMP-076 | `GlobalSearch` | Site, Plataforma, Admin | Pesquisa | PROPOSTO | **Busca unificada** — Input com sugestões, resultados agrupados por tipo | `query: string`, `onSearch`, `onSelectResult`, `filters?: SearchFilters`, `recentSearches?: string[]` |
| CMP-077 | `SearchResults` | Site, Plataforma, Admin | Pesquisa | PROPOSTO | Exibição de resultados com abas por tipo (Pessoas, Famílias, Artigos, Documentos, Lugares, Eventos, Arquivo) | `results: SearchResults`, `activeTab: SearchTab`, `onTabChange`, `onLoadMore`, `hasMore` |
| CMP-078 | `SearchResultCard` | Site, Plataforma, Admin | Pesquisa | PROPOSTO | Card individual de resultado (tipo-adaptativo) | `result: SearchResult`, `onClick`, `highlightQuery?: string` |
| CMP-079 | `AdvancedSearchForm` | Site, Plataforma, Admin | Pesquisa | PROPOSTO | Formulário de busca avançada com filtros combinados | `schema: SearchSchema`, `onSearch`, `onReset`, `savedSearches?: SavedSearch[]` |
| CMP-080 | `FilterPanel` | Site, Plataforma, Admin | Pesquisa | PROPOSTO | Painel lateral de filtros colapsável | `filters: FilterConfig[]`, `activeFilters: Record<string, any>`, `onChange`, `collapsible?: boolean` |

---

## 8. Componentes de Autenticação e Usuário (Compartilhados)

| ID | Componente | Aplicação | Tipo | Status | Descrição | Props Principais |
|----|------------|-----------|------|--------|-----------|------------------|
| CMP-081 | `LoginForm` | Site, Admin | Auth | PROPOSTO | Formulário de login (email/senha, lembrar-me, esqueci senha) | `onSubmit`, `onForgotPassword`, `onRegister`, `variant: 'site' \| 'admin'`, `redirectTo?: string` |
| CMP-082 | `RegisterForm` | Site | Auth | PROPOSTO | Formulário de cadastro (nome, email, senha, termos) | `onSubmit`, `onLogin`, `termsUrl`, `privacyUrl` |
| CMP-083 | `PasswordResetForm` | Site, Admin | Auth | PROPOSTO | Solicitação e confirmação de reset de senha | `step: 'request' \| 'confirm'`, `onSubmit`, `token?: string` |
| CMP-084 | `EmailVerification` | Site | Auth | PROPOSTO | Tela de verificação de e-mail | `status: 'pending' \| 'success' \| 'error' \| 'expired'`, `onResend` |
| CMP-085 | `TwoFactorSetup` | Admin | Auth | PROPOSTO | Configuração de 2FA (TOTP) | `secret: string`, `qrCode: string`, `onVerify`, `onSkip` |
| CMP-086 | `UserProfileCard` | Plataforma, Admin | User | PROPOSTO | Card de perfil do usuário (avatar, nome, email, role, status) | `user: User`, `showActions?: boolean`, `onEdit?, onImpersonate?` |
| CMP-087 | `UserAvatar` | Todas | User | PROPOSTO | Avatar com status online/offline, badge de role | `user: User`, `size: 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`, `showStatus?: boolean`, `showRole?: boolean` |

---

## 9. Componentes Administrativos Específicos

| ID | Componente | Aplicação | Tipo | Status | Descrição | Props Principais |
|----|------------|-----------|------|--------|-----------|------------------|
| CMP-088 | `AdminDashboardStats` | Administrativo | Admin | PROPOSTO | Cards de estatísticas do dashboard (usuários, artigos, pessoas, árvores) | `stats: DashboardStats`, `period: 'day' \| 'week' \| 'month' \| 'year'` |
| CMP-089 | `AdminUserTable` | Administrativo | Admin | PROPOSTO | Tabela de usuários com ações (editar, roles, suspender, excluir) | `users: User[]`, `onEdit`, `onRoleChange`, `onSuspend`, `onDelete`, `pagination`, `filters` |
| CMP-090 | `RolePermissionMatrix` | Administrativo | Admin | PROPOSTO | Matriz visual de roles × permissões | `roles: Role[]`, `permissions: Permission[]`, `matrix: boolean[][]`, `onToggle` |
| CMP-091 | `AuditLogViewer` | Administrativo | Admin | PROPOSTO | Visualizador de logs de auditoria com filtros e exportação | `logs: AuditLog[]`, `filters: AuditFilters`, `onExport`, `pagination` |
| CMP-092 | `ModerationQueue` | Administrativo | Admin | PROPOSTO | Fila de moderação (contribuições, artigos, edições) | `items: ModerationItem[]`, `onApprove`, `onReject`, `onRequestChanges`, `filters` |
| CMP-093 | `SystemSettingsForm` | Administrativo | Admin | PROPOSTO | Formulário de configurações do sistema (abas: geral, api, ia, email, storage) | `settings: SystemSettings`, `onSave`, `tabs: SettingsTab[]` |
| CMP-094 | `ReportBuilder` | Administrativo | Admin | PROPOSTO | Construtor de relatórios personalizados | `dataSources: DataSource[]`, `onBuild`, `onExport`, `templates: ReportTemplate[]` |

---

## 10. Componentes de IA (Compartilhados)

| ID | Componente | Aplicação | Tipo | Status | Descrição | Props Principais |
|----|------------|-----------|------|--------|-----------|------------------|
| CMP-095 | `AIChat` | Plataforma, Admin | IA | PROPOSTO | Interface de chat com IA (streaming, histórico, contexto) | `sessionId?: string`, `context?: AIContext`, `onMessage`, `tools?: AITool[]` |
| CMP-096 | `AISearch` | Site, Plataforma, Admin | IA | PROPOSTO | Busca semântica com IA (RAG) | `query: string`, `onResults`, `sources?: AISource[]`, `grounding?: boolean` |
| CMP-097 | `AISuggest` | Plataforma, Admin | IA | PROPOSTO | Sugestões contextuais da IA (pessoas, relacionamentos, fontes) | `context: AISuggestContext`, `onAccept`, `onDismiss`, `type: 'person' \| 'relationship' \| 'source' \| 'article'` |
| CMP-098 | `AIDocumentAnalysis` | Admin | IA | PROPOSTO | Análise de documento histórico com IA (extração, tradução, resumo) | `document: Document`, `onAnalyze`, `analysisTypes: ('extract' \| 'translate' \| 'summarize' \| 'entities')[]` |

---

## 11. Componentes de Mídia e Upload (Compartilhados)

| ID | Componente | Aplicação | Tipo | Status | Descrição | Props Principais |
|----|------------|-----------|------|--------|-----------|------------------|
| CMP-099 | `Dropzone` | Todas | Media | PROPOSTO | Área de drag-and-drop para upload (React Dropzone) | `accept: Record<string, string[]>`, `maxFiles?`, `maxSize?`, `onDrop`, `multiple?` |
| CMP-100 | `ImageCropper` | Todas | Media | PROPOSTO | Recortador de imagem para avatar/capa | `src: string`, `aspectRatio?: number`, `onCrop: (blob) => void`, `onCancel` |
| CMP-101 | `MediaGallery` | Todas | Media | PROPOSTO | Galeria de mídia com grid, lightbox, seleção múltipla | `items: MediaItem[]`, `onSelect`, `selectionMode?: 'single' \| 'multiple'`, `onDelete` |
| CMP-102 | `FileUploadProgress` | Todas | Media | PROPOSTO | Barra de progresso de upload com cancelamento | `progress: number`, `status: 'pending' \| 'uploading' \| 'complete' \| 'error'`, `onCancel`, `fileName` |

---

## 12. Componentes Ausentes / Gaps Críticos

| Componente Necessário | Aplicação | Prioridade | Justificativa |
|----------------------|-----------|------------|---------------|
| `ErrorBoundary` | Todas | Alta | Captura de erros React, fallback UI, reporting |
| `LoadingBoundary` | Todas | Média | Suspense boundary com skeleton personalizado |
| `SEOHead` | Site | Alta | Meta tags, Open Graph, Twitter Cards, JSON-LD |
| `Analytics` | Site, Plataforma | Média | Wrapper para GA/Plausible/Matomo com consentimento |
| `CookieConsent` | Site | Alta | Banner LGPD/GDPR de consentimento de cookies |
| `AnnouncementBar` | Site | Baixa | Barra de avisos globais (manutenção, novidades) |
| `BackToTop` | Site, Plataforma | Baixa | Botão voltar ao topo |
| `PrintStyles` | Site, Plataforma, Admin | Média | Estilos para impressão/PDF de artigos, perfis, árvores |
| `OfflineIndicator` | Site, Plataforma | Baixa | Indicador de status offline (PWA) |
| `ThemeProvider` | Todas | Alta | Provider de tema (light/dark/system) com next-themes |
| `AuthProvider` | Plataforma, Admin | Alta | Context de autenticação (user, permissions, tokens) |
| `QueryProvider` | Todas | Alta | TanStack Query provider com configuração padrão |
| `TooltipProvider` | Todas | Média | Provider global de tooltips (Radix) |
| `PortalProvider` | Todas | Média | Provider para portais (modais, dropdowns, toasts) |

---

## 13. Duplicações Potenciais a Evitar

| Funcionalidade | Risco de Duplicação | Solução |
|----------------|---------------------|---------|
| `Button` | Cada app criar seu próprio | **Compartilhado em `/shared/ui`** |
| `PersonNode` | Plataforma e Admin terem versões diferentes | **Compartilhado em `/shared/genealogy`** com prop `readonly` |
| `ArticleViewer` | Site, Plataforma, Admin | **Compartilhado em `/shared/encyclopedia`** com prop `mode` |
| `ArchiveUnitView` | Site, Plataforma, Admin | **Compartilhado em `/shared/archive`** |
| `SearchResults` | Todas | **Compartilhado em `/shared/search`** |
| `DataTable` | Todas | **Compartilhado em `/shared/ui`** (wrapper TanStack Table) |
| `Form` / `FormField` | Todas | **Compartilhado em `/shared/ui`** (RHF + Zod wrapper) |
| `Avatar` | Todas | **Compartilhado em `/shared/ui`** |

---

## 14. Resumo Quantitativo

| Categoria | Propostos | Compartilhados | Específicos Site | Específicos Plataforma | Específicos Admin | Total |
|-----------|-----------|----------------|------------------|------------------------|-------------------|-------|
| Layout | 9 | 9 | 0 | 0 | 0 | 9 |
| Navegação | 6 | 6 | 0 | 0 | 0 | 6 |
| UI Base | 28 | 28 | 0 | 0 | 0 | 28 |
| Genealogia | 14 | 12 | 0 | 1 | 1 | 14 |
| Enciclopédia | 11 | 9 | 1 | 1 | 1 | 11 |
| Arquivo | 7 | 5 | 0 | 0 | 2 | 7 |
| Pesquisa | 5 | 5 | 0 | 0 | 0 | 5 |
| Auth/Usuário | 7 | 5 | 1 | 0 | 1 | 7 |
| Admin Específicos | 7 | 0 | 0 | 0 | 7 | 7 |
| IA | 4 | 4 | 0 | 0 | 0 | 4 |
| Mídia/Upload | 4 | 4 | 0 | 0 | 0 | 4 |
| Ausentes (Gaps) | 14 | 14 | 0 | 0 | 0 | 14 |
| **TOTAL** | **116** | **101** | **2** | **2** | **11** | **116** |

> **NOTA:** Nenhum componente está implementado no código atual (EXISTENTE = 0). Todos os componentes acima são PROPOSTOS baseados na arquitetura documentada. A estrutura de diretórios `/front-end/*/components/` existe mas está vazia.

---

*Documento gerado em: 2026-10-01*
*Versão: 1.0.0*
*Responsável: Auditoria de Engenharia DRESBACH*