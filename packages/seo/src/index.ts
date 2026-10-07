/**
 * SEO - Search Engine Optimization
 * 
 * Central SEO configuration and metadata generation for all
 * public pages and applications in the Marcos Dresbach monorepo.
 * 
 * All public pages must have SEO metadata as defined in the ADRs.
 */

export interface SeoMetadata {
  title: string
  description: string
  canonical: string
  openGraph: SeoOpenGraph
  twitter: SeoTwitter
  robots?: string
  type?: string
  locale?: string
  images?: SeoImage[]
}

export interface SeoOpenGraph {
  title: string
  description: string
  images: SeoImage[]
  url: string
  type: 'website' | 'article' | 'profile' | 'other'
  site_name?: string
}

export interface SeoTwitter {
  title: string
  description: string
  images: SeoImage[]
  card: 'summary' | 'summary_large_image' | 'app' | 'player'
}

export interface SeoImage {
  url: string
  width?: number
  height?: number
  alt?: string
  type?: 'image/png' | 'image/jpeg' | 'image/svg+xml'
}

export const defaultSeo: SeoMetadata = {
  title: 'Marcos Dresbach',
  description: 'Política, propósito e compromisso com o futuro. Propostas, Saúde Única, Instituto Brasileiro Dresbach e participação cidadã.',
  canonical: '/',
  openGraph: {
    title: 'Marcos Dresbach',
    description: 'Política, propósito e compromisso com o futuro.',
    images: [],
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'Marcos Dresbach',
    description: 'Política, propósito e compromisso com o futuro.',
    images: [],
    card: 'summary_large_image',
  },
  robots: 'index, follow',
  type: 'website',
  locale: 'pt-BR',
}

export const generateSeoMetadata = (pageSeo: SeoMetadata): SeoMetadata => ({
  ...defaultSeo,
  ...pageSeo,
  canonical: pageSeo.canonical || defaultSeo.canonical,
})

// SEO by page type
export const seoByRoute = {
  '/': {
    title: 'Marcos Dresbach | Política, Propósito e Compromisso',
    description:
      'Conheça a trajetória, as propostas e os projetos de Marcos Dresbach, com foco em políticas públicas, Saúde Única, participação cidadã e desenvolvimento regional.',
    canonical: '/',
  },
  '/sobre': {
    title: 'Sobre Marcos Dresbach | Política, Propósito e Compromisso',
    description:
      'Conheça Marcos Dresbach: política com propósito, compromisso com as pessoas, a causa animal, a Saúde Única e o respeito à nossa história.',
    canonical: '/sobre',
  },
  '/instituto': {
    title: 'Instituto Brasileiro Dresbach | Cadastro de Membro',
    description:
      'Faça parte do Instituto Brasileiro Dresbach: preservação da cultura alemã, pesquisa histórica e memória Wittgenstein.',
    canonical: '/instituto',
  },
  '/contato': {
    title: 'Fale com Marcos Dresbach | Contato',
    description:
      'Envie sua mensagem, sugestão ou proposta para Marcos Dresbach.',
    canonical: '/contato',
  },
  '/acervo': {
    title: 'Acervo Público | Instituto Brasileiro Dresbach',
    description:
      'Explore documentos, fotografias, manuscritos, mapas e outros materiais históricos do Instituto.',
    canonical: '/acervo',
  },
  '/genealogia': {
    title: 'Genealogia | Instituto Brasileiro Dresbach',
    description:
      'Pesquisa genealógica, famílias, pessoas, árvores genealógicas e documentos históricos.',
    canonical: '/genealogia',
  },
  '/pesquisa': {
    title: 'Pesquisa | Instituto Brasileiro Dresbach',
    description:
      'Projetos, pesquisadores, estudos e artigos científicos do Instituto Brasileiro Dresbach.',
    canonical: '/pesquisa',
  },
  '/editora': {
    title: 'Editora | Instituto Brasileiro Dresbach',
    description:
      'Catálogo de livros, autores, publicações e lançamentos do Instituto.',
    canonical: '/editora',
  },
  '/editais': {
    title: 'Editais | Instituto Brasileiro Dresbach',
    description:
      'Editais, chamadas e oportunidades de apoio a projetos culturais, pesquisa e comunidade.',
    canonical: '/editais',
  },
  '/membro': {
    title: 'Painel do Membro | Instituto Brasileiro Dresbach',
    description:
      'Área do membro com acesso a projetos, materiais, certificados e rede de contatos.',
    canonical: '/membro',
  },
  '/login': {
    title: 'Login | Instituto Brasileiro Dresbach',
    description: 'Acesse sua conta para explorar o acervo, genealogia e recursos do Instituto.',
    canonical: '/login',
  },
  '/cadastro': {
    title: 'Cadastro de Membro | Instituto Brasileiro Dresbach',
    description: 'Realize seu cadastro no Instituto Brasileiro Dresbach.',
    canonical: '/cadastro',
  },
}

export default seoByRoute