# Arquitetura Frontend — DRESBACH Editora

## Stack Tecnológica

```text
Next.js 14 (App Router)
React 18
TypeScript
Tailwind CSS
shadcn/ui
TanStack Query (React Query)
Zod (validação)
React Hook Form
Lucide React (ícones)
```

## Estrutura de Pastas

```text
src/
├── app/
│   ├── (public)/           # Rotas públicas (landing, catalog)
│   ├── (auth)/            # Rotas de autenticação
│   ├── (admin)/           # Rotas administrativas (protegidas)
│   ├── dashboard/         # Painel do escritor
│   ├── catalog/           # Catálogo público
│   ├── books/             # Gestão de livros (writer)
│   ├── profile/           # Perfil do autor/leitor
│   └── layout/            # Layouts principais
│
├── components/
│   ├── ui/                # Componentes shadcn/ui base
│   ├── layout/            # Header, Footer, Navigation
│   ├── forms/             # Formulários reutilizáveis
│   ├── cards/             # Card de livro, card de autor
│   ├── tables/            # Tabelas de dados
│   ├── modals/            # Modais genéricos
│   └── widgets/           # Widgets de estatísticas
│
├── features/
│   ├── authentication/    # Login, registro, MFA
│   ├── books/            # Feature de livros do writer
│   ├── catalog/          # Feature de catálogo/loja
│   ├── dashboard/        # Feature painel do escritor
│   ├── orders/           # Feature carrinho e checkout
│   ├── payments/         # Feature de pagamentos
│   └── profile/          # Feature perfil de usuário
│
├── lib/
│   ├── api/              # Funções de chamada API (fetch/api)
│   ├── utils/            # Utilitários auxiliares
│   ├── constants/        # Constantes do sistema
│   ├── schemas/          # Schemas Zod validação
│   └── toast/            # System toast notifications
│
├── hooks/
│   ├── use-auth.ts       # Lógica de auth customizada
│   ├── use-toast.ts      # Toast notifications
│   ├── use-debounce.ts   # Debounce handler
│   ├── use-resize.ts     # Resize observer
│   └── use-validation.ts # Form validation hooks
│
├── services/
│   ├── auth.service.ts   # Integração com auth API
│   ├── books.service.ts  # API calls de livros
│   ├── catalog.service.ts # API calls de catálogo
│   ├── orders.service.ts # API calls de pedidos
│   ├── payments.service.ts # Integração Stripe
│   └── profile.service.ts # Perfil do usuário
│
├── stores/
│   ├── use-user-store.ts  # Zustand/Jotai state global
│   ├── use-cart-store.ts  # Carrinho de compras
│   └── use-toast-store.ts # Toast state
│
├── types/
│   ├── global.ts         # Tipos globais do TypeScript
│   ├── api.ts            # Tipos de resposta de API
│   ├── books.ts          # Tipos específicos de livros
│   ├── orders.ts         # Tipos de pedidos
│   └── common.ts         # Tipos compartilhados
│
├── schemas/
│   ├── book-schema.ts    # Schema Zod para livros
│   ├── order-schema.ts   # Schema Zod para pedidos
│   └── user-schema.ts    # Schema Zod para usuários
│
├── stores/
│   └── ... (state management)
│
└── config/
    ├── api-urls.ts       # URLs da API por ambiente
    ├── feature-flags.ts  # Flags de funcionalidade
    └── constants.ts      # Constantes globais
```

## App Router Structure

```text
src/app/
├── layout.tsx           # Layout raiz com Header/Footer
├── page.tsx             # Home page (public)
├── (public)/
│   ├── page.tsx         # Landing page
│   ├── catalog/         # Página de catálogo
│   ├── books/[slug]/    # Página do livro
│   └── authors/[slug]/  # Bio do autor
│
├── (auth)/
│   ├── login.tsx        # Login
│   ├── register.tsx     # Registro
│   ├── verify-email.tsx # Verificação de e-mail
│   └── password-reset.tsx # Recovery password
│
├── (admin)/
│   ├── layout.tsx       # Layout admin com sidebar
│   ├── dashboard.tsx    # Dashboard administrativo
│   ├── users/           # Gestão de usuários
│   ├── books/           # Gestão de livros (admin)
│   ├── orders/          # Gestão de pedidos (admin)
│   ├── print-jobs/      # Gestão de impressão (admin)
│   ├── royalties/       # Royalties (admin)
│   └── cms/             # CMS de conteúdo
│
├── dashboard/
│   └── page.tsx         # Painel do escritor ativo
│
├── profile/
│   └── page.tsx         # Perfil do usuário
│
└── error/
    └── not-found.tsx    # Página 404
    └── error.tsx        # Página de erro global
```

## Componentes por Página (Boas Práticas)

```text
NÃO fazer:

page.tsx com 300+ linhas
Lógica de negócio diretamente no componente
Imports desorganizados
UseState disperso sem lógica centralizada

FAZER:

page.tsx orquestrando components
Lógica extraída para hooks ou features
Imports organizados e aliases (@/...)
Componente responsivo mobile-first
```

## Rotas e Proteção

```text
Rotas públicas (não exigem auth):
/                          → Home
/catalogo                 → Catálogo de livros
/livros/[slug]            → Página do livro
/autores/[slug]           → Bio do autor
/login                     → Login (já tem conta)
/registrar                → Registro nova conta

Rotas protegidas (writer ativo):
/painel                   → Dashboard writer
/minha-conta              → Meu perfil
/meus-livros              → Minha biblioteca
/novo-livro               → Wizard de publicação
/analytics                → Analytics do writer

Rotas administrativas (admin only):
/admin                    → Área administrativa
/admin/users             → Gestão de usuários
/admin/orders            → Gestão de pedidos
/admin/print-jobs        → Gestão de print jobs
/admin/royalties         → Royalties
/admin/cms               → CMS de conteúdo
```

## Estratégia de Dados com TanStack Query

```text
useQuery para dados que não mudam frequentemente:
- catálogo de livros
- detalhes do livro
- perfil do autor
- categorias

useMutation para ações que modificam estado:
- criação de livro
- upload de PDF
- submissão de formulário
- checkout de pedido

useInfiniteScroll para listas paginadas
useSubscription para mudanças em tempo real (opcional)

Garantir refetchOnWindowFocus e retry de queries falhas.
```

## Responsividade

```text
Quebrantes (breakpoints):
- 3xl: 1920px+
- xl: 1280px-1919px
- lg: 1024px-1279px (tablet)
- md: 768px-1023px (tablet pequeno)
- sm: 640px-767px (celular)
- xs: <640px (celular)

O projeto deve ser mobile-first.
Testar em:
- iPhone SE (375px)
- iPad Pro (834px)
- Desktop (1440px+)
```

## Acessibilidade

```text
Todos os componentes devem:
- Possuir alt text em imagens
- Ter foco visível (focus-visible)
- Ser navegável por teclado
- Ter contraste adequado (minimo 4.5:1)
- Usar labels em inputs
- Usar botões <button> para ações
- Usar <a> para links

Testes automatizados com jest-dom/rtl.
```

## Build e Performance

```text
 Comandos obrigatórios:
 npm run dev       → Desenvolvimento local
 npm run build     → Build de produção
 npm run lint      → Lint (ESLint)
 npm run typecheck → TypeScript check

Metriques de performance (Lighthouse):
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

Otimizações:
- Next/image para imagens
- Code splitting por rota
- Static generation (SSG) onde possível
- Server Components para dados estáticos
- Client Components apenas quando necessário (interatividade)
```