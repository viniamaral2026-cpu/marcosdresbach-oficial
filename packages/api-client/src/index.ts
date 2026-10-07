/**
 * API Client Central - Monorepo Marcos Dresbach
 * 
 * This package serves as the central API client for all frontends (apps and packages).
 * It follows the architecture defined in the ADRs:
 * - Frontend never accesses database directly
 - All API calls go through this client
 - Routes are proxied through Laravel Nova/Backend
 */

export interface ApiResponse<T> {
  data: T
  meta?: {
    total?: number
    page?: number
    limit?: number
    totalPages?: number
  }
  error?: {
    message: string
    code: string
  }
}

export interface PaginationParams {
  page?: number
  limit?: number
  sortBy?: string
  sortDir?: 'asc' | 'desc'
  filters?: Record<string, any>
}

export interface SearchFilters {
  query?: string
  category?: string
  period?: string
  region?: string
  status?: string
}

// API Client base configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

// Common headers for API requests
const getHeaders = (token?: string) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  
  return headers
}

// Generic fetch wrapper with error handling
export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`
  
  const defaultOptions: RequestInit = {
    headers: getHeaders(options.headers?.['Authorization']?.replace('Bearer ', '')),
    ...options,
  }
  
  try {
    const response = await fetch(url, defaultOptions)
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        errorData.error?.message || `HTTP ${response.status}`
      )
    }
    
    return await response.json() as Promise<ApiResponse<T>>
  } catch (error) {
    console.error('API Client Error:', error)
    throw error
  }
}

// API Methods organized by domain
export const api = {
  // Auth
  auth: {
    login: (email: string, password: string) =>
      fetchApi<{ token: string }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
    register: (name: string, email: string, password: string) =>
      fetchApi<{ token: string }>('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
      }),
    me: () => fetchApi<{ user: any }>('/auth/me'),
  },
  
  // Users
  users: {
    list: (params?: PaginationParams) =>
      fetchApi('/users', { method: 'GET', params }),
    get: (id: number | string) => fetchApi(`/users/${id}`),
    create: (data: any) =>
      fetchApi('/users', { method: 'POST', body: JSON.stringify(data) }),
    update: (id: number | string, data: any) =>
      fetchApi(`/users/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id: number | string) =>
      fetchApi(`/users/${id}`, { method: 'DELETE' }),
  },
  
  // Institute
  institute: {
    get: () => fetchApi('/institute'),
    areas: () => fetchApi('/institute/areas'),
    projects: (params?: PaginationParams) =>
      fetchApi('/institute/projects', { method: 'GET', params }),
    project: (id: number | string) => fetchApi(`/institute/projects/${id}`),
  },
  
  // Archive/Acervo
  archive: {
    list: (params?: PaginationParams) =>
      fetchApi('/archive', { method: 'GET', params }),
    get: (id: number | string) => fetchApi(`/archive/${id}`),
    search: (query: string, params?: PaginationParams) =>
      fetchApi(`/archive/search?query=${query}`, { method: 'GET', params }),
  },
  
  // Genealogy
  genealogy: {
    people: {
      list: (params?: PaginationParams) =>
        fetchApi('/genealogy/people', { method: 'GET', params }),
      get: (id: number | string) => fetchApi(`/genealogy/people/${id}`),
    },
    families: {
      list: (params?: PaginationParams) =>
        fetchApi('/genealogy/families', { method: 'GET', params }),
      get: (id: number | string) => fetchApi(`/genealogy/families/${id}`),
    },
    trees: {
      list: (params?: PaginationParams) =>
        fetchApi('/genealogy/trees', { method: 'GET', params }),
      get: (id: number | string) => fetchApi(`/genealogy/trees/${id}`),
    },
  },
  
  // Research
  research: {
    projects: (params?: PaginationParams) =>
      fetchApi('/research/projects', { method: 'GET', params }),
    project: (id: number | string) => fetchApi(`/research/projects/${id}`),
    researchers: (params?: PaginationParams) =>
      fetchApi('/research/researchers', { method: 'GET', params }),
    researcher: (id: number | string) => fetchApi(`/research/researchers/${id}`),
    studies: (params?: PaginationParams) =>
      fetchApi('/research/studies', { method: 'GET', params }),
    study: (id: number | string) => fetchApi(`/research/studies/${id}`),
    articles: (params?: PaginationParams) =>
      fetchApi('/research/articles', { method: 'GET', params }),
    article: (id: number | string) => fetchApi(`/research/articles/${id}`),
  },
  
  // Editora
  editora: {
    books: (params?: PaginationParams) =>
      fetchApi('/editora/books', { method: 'GET', params }),
    book: (id: number | string) => fetchApi(`/editora/books/${id}`),
    authors: (params?: PaginationParams) =>
      fetchApi('/editora/authors', { method: 'GET', params }),
    author: (id: number | string) => fetchApi(`/editora/authors/${id}`),
    publications: (params?: PaginationParams) =>
      fetchApi('/editora/publications', { method: 'GET', params }),
    publication: (id: number | string) => fetchApi(`/editora/publications/${id}`),
  },
  
  // Editais
  editais: {
    list: (params?: PaginationParams) =>
      fetchApi('/editais', { method: 'GET', params }),
    get: (id: number | string) => fetchApi(`/editais/${id}`),
    categories: () => fetchApi('/editais/categories'),
  },
  
  // Membros
  members: {
    list: (params?: PaginationParams) =>
      fetchApi('/members', { method: 'GET', params }),
    get: (id: number | string) => fetchApi(`/members/${id}`),
    contributions: (params?: PaginationParams) =>
      fetchApi('/members/contributions', { method: 'GET', params }),
  },
  
  // Pesquisa (Search)
  search: {
    query: (q: string, filters?: SearchFilters) => {
      const params = new URLSearchParams()
      params.append('q', q)
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            params.append(key, String(value))
          }
        })
      }
      return fetchApi(`/search?${params.toString()}`)
    },
  },
  
  // CMS/Content
  cms: {
    pages: (params?: PaginationParams) =>
      fetchApi('/cms/pages', { method: 'GET', params }),
    page: (slug: string) => fetchApi(`/cms/pages/${slug}`),
    blocks: (params?: PaginationParams) =>
      fetchApi('/cms/blocks', { method: 'GET', params }),
    block: (id: number | string) => fetchApi(`/cms/blocks/${id}`),
    publish: (id: number | string, data: any) =>
      fetchApi(`/cms/pages/${id}/publish`, {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },
  
  // Notifications
  notifications: {
    list: (params?: PaginationParams) =>
      fetchApi('/notifications', { method: 'GET', params }),
    markRead: (id: number | string) =>
      fetchApi(`/notifications/${id}/read`, { method: 'POST' }),
  },
  
  // Media
  media: {
    upload: (file: File, progress?: (percent: number) => void) => {
      const formData = new FormData()
      formData.append('file', file)
      
      return fetchApi('/media/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
          // Don't set Content-Type, let the browser set it for FormData
        } as HeadersInit,
        onUploadProgress: progress ? (progressEvent) => {
          const percent = Math.round((event.loaded / event.total) * 100)
          progress(percent)
        } : undefined,
      })
    },
    get: (id: number | string) => fetchApi(`/media/${id}`),
    delete: (id: number | string) =>
      fetchApi(`/media/${id}`, { method: 'DELETE' }),
  },
}