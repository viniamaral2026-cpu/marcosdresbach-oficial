/**
 * CMS - Content Management System
 * 
 * Visual editor para gerenciamento de conteúdo do Instituto Brasileiro Dresbach.
 * Suporta blocos, páginas, menus, banners, versões e workflow.
 * 
 * Workflow: DRAFT -> REVIEW -> APPROVED -> PUBLISHED -> ARCHIVED
 */

export interface Block {
  id: string
  type: 'hero' | 'text' | 'image' | 'gallery' | 'video' | 'button' | 'cards' | 'timeline' | 'stats' | 'quote' | 'news' | 'events' | 'documents' | 'archive' | 'genealogy' | 'publications' | 'cta'
  title?: string
  content?: string
  data?: any
  settings?: any
  position: {
    x: number
    y: number
  }
  metadata?: {
    version: number
    author?: string
    createdAt: string
    updatedAt: string
  }
}

export interface Page {
  id: string
  slug: string
  title: string
  description?: string
  status: 'draft' | 'review' | 'approved' | 'published' | 'archived'
  blocks: Block[]
  seo: {
    title: string
    description: string
    canonical: string
    openGraph: {
      title: string
      description: string
      images: string[]
    }
    twitter: {
      title: string
      description: string
      images: string[]
    }
  }
  metadata?: {
    createdAt: string
    updatedAt: string
    author?: string
    version: number
  }
}

export interface WorkflowState {
  status: 'draft' | 'review' | 'approved' | 'published' | 'archived'
  transitionTo: (newStatus: 'draft' | 'review' | 'approved' | 'published' | 'archived') => void
  canTransitionTo: (newStatus: 'draft' | 'review' | 'approved' | 'published' | 'archived') => boolean
  currentStep: string
  steps: string[]
}

export const CMS_CONSTANTS = {
  BLOCK_TYPES: {
    hero: 'Hero',
    text: 'Text',
    image: 'Image',
    gallery: 'Gallery',
    video: 'Video',
    button: 'Button',
    cards: 'Cards',
    timeline: 'Timeline',
    stats: 'Stats',
    quote: 'Quote',
    news: 'News',
    events: 'Events',
    documents: 'Documents',
    archive: 'Archive',
    genealogy: 'Genealogy',
    publications: 'Publications',
    cta: 'CTA',
  } as const,
  
  WORKFLOW: {
    DRAFT: 'draft',
    REVIEW: 'review',
    APPROVED: 'approved',
    PUBLISHED: 'published',
    ARCHIVED: 'archived',
  } as const,
  
  PAGE_SLUGS: {
    INSTITUTO: 'instituto',
    SOBRE: 'sobre',
    CONTATO: 'contato',
    ACERVO: 'acervo',
    GENEALOGIA: 'genealogia',
    PESQUISA: 'pesquisa',
    EDITORA: 'editora',
  } as const,
}

// Types for editor integration
export type BlockEditor = {
  id: string
  type: Block['type']
  title: string
  description: string
  component: string // Name of the React/Astro component
  settingsSchema: any
  onSave: (data: any) => void
  onDelete: () => void
}

// Registry of available blocks
export const blockRegistry: Record<string, BlockEditor> = {
  hero: {
    id: 'hero',
    type: 'hero',
    title: 'Hero',
    description: 'Seção hero principal',
    component: 'HeroEditor',
    settingsSchema: {
      title: { type: 'string', required: true },
      subtitle: { type: 'string' },
      backgroundImage: { type: 'string', format: 'image' },
      ctaText: { type: 'string' },
      ctaUrl: { type: 'string', format: 'url' },
    },
    onSave: () => {},
    onDelete: () => {},
  },
  text: {
    id: 'text',
    type: 'text',
    title: 'Texto',
    description: 'Bloco de texto editorial',
    component: 'TextEditor',
    settingsSchema: {
      text: { type: 'string', required: true },
      format: { type: 'select', options: ['plain', 'markdown', 'rich'] },
      textColor: { type: 'string' },
    },
    onSave: () => {},
    onDelete: () => {},
  },
  // ... outros blocos registrados
}