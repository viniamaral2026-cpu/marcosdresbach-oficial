/**
 * RBAC - Role-Based Access Control
 *Wait*, the package implements fine-grained permission control
 * for the monorepo applications (admin, member-portal, public apps).
 * 
 * Based on the ADRs-defined permission matrix:
 * - SUPER_ADMIN: Full access to all modules
 * - ADMIN: Module-level access (site, institute, acervo, genealogia, editora, pesquisa, membros, comunicação, mídia, relatórios, usuários, configurações, auditoria)
 * - EDITOR: Content creation and editing within allowed modules
 * - ARCHIVIST: Archive and document management
 * - GENEALOGIST: Genealogy research and tree management
 * - RESEARCHER: Research projects and studies access
 * - PUBLISHER: Content publishing and approval
 * - MEMBER_MANAGER: Member management and designations
 * - MEMBER: Member portal access
 * - AUTHOR: Content authorship
 * - COLLABORATOR: Collaboration on specific projects
 */

export interface Permission {
  name: string
  description: string
  category: 'admin' | 'content' | 'genealogy' | 'research' | 'media' | 'member' | 'auth'
}

export interface Role {
  id: string
  name: string
  permissions: Permission[]
  modules: string[] // List of accessible modules
  createdAt: string
  updatedAt: string
}

export const ROLES = {
  SUPER_ADMIN: {
    id: 'super-admin',
    name: 'Super Admin',
    permissions: [
      // All permissions
      'site.read', 'site.write', 'site.publish',
      'institute.read', 'institute.write',
      'acervo.read', 'acervo.write', 'acervo.publish',
      'genealogy.read', 'genealogy.write',
      'research.read', 'research.write',
      'editora.read', 'editora.write',
      'editais.read', 'editais.write',
      'members.read', 'members.write',
      'comunicacao.read', 'comunicacao.write',
      'midia.read', 'midia.write',
      'relatorios.read', 'relatorios.write',
      'usuarios.read', 'usuarios.write',
      'configuracoes.read', 'configuracoes.write',
      'auditoria.read',
    ],
    modules: [
      'ADMIN SITE', 'ADMIN INSTITUTO', 'ADMIN ACERVO', 'ADMIN GENEALOGIA',
      'ADMIN EDITORA', 'ADMIN PESQUISA', 'ADMIN MEMBROS', 'ADMIN COMUNICAÇÃO',
      'ADMIN MÍDIA', 'ADMIN RELATÓRIOS', 'ADMIN USUÁRIOS', 'ADMIN CONFIGURAÇÕES',
      'ADMIN AUDITORIA'
    ],
  },
  ADMIN: {
    id: 'admin',
    name: 'Admin',
    permissions: [
      // Module-specific permissions
      'site.read', 'site.write',
      'institute.read', 'institute.write',
      'acervo.read', 'acervo.write',
      'genealogy.read', 'genealogy.write',
      'research.read', 'research.write',
      'editora.read', 'editora.write',
      'editais.read', 'editais.write',
      'members.read', 'members.write',
      'auditoria.read',
    ],
    modules: ['ADMIN SITE', 'ADMIN INSTITUTO', 'ADMIN ACERVO', 'ADMIN GENEALOGIA', 'ADMIN EDITORA', 'ADMIN PESQUISA', 'ADMIN MEMBROS'],
  },
  EDITOR: {
    id: 'editor',
    name: 'Editor',
    permissions: [
      'site.read',
      'institute.read',
      'acervo.read',
      'genealogy.read',
      'research.read',
      'editora.read',
      'editais.read',
      'members.read',
    ],
    modules: ['INSTITUTO', 'ACERVO', 'GENEALOGIA', 'PESQUISA', 'EDITORA'],
  },
  ARCHIVIST: {
    id: 'archivist',
    name: 'Archivist',
    permissions: [
      'acervo.read', 'acervo.write',
      'documents.read', 'documents.write',
      'archive.read', 'archive.write',
    ],
    modules: ['ACERVO'],
  },
  GENEALOGIST: {
    id: 'genealogist',
    name: 'Genealogist',
    permissions: [
      'genealogy.read', 'genealogy.write',
      'people.read', 'people.write',
      'families.read', 'families.write',
      'trees.read', 'trees.write',
    ],
    modules: ['GENEALOGIA'],
  },
  RESEARCHER: {
    id: 'researcher',
    name: 'Researcher',
    permissions: [
      'research.read', 'research.write',
      'projects.read', 'projects.write',
      'studies.read', 'studies.write',
      'articles.read', 'articles.write',
    ],
    modules: ['PESQUISA'],
  },
  PUBLISHER: {
    id: 'publisher',
    name: 'Publisher',
    permissions: [
      'site.read', 'site.write', 'site.publish',
      'cms.read', 'cms.write', 'cms.publish',
    ],
    modules: ['CMS'],
  },
  MEMBER_MANAGER: {
    id: 'member-manager',
    name: 'Member Manager',
    permissions: [
      'members.read', 'members.write',
      'designations.read', 'designations.write',
      'regions.read', 'regions.write',
    ],
    modules: ['MEMBROS'],
  },
  MEMBER: {
    id: 'member',
    name: 'Member',
    permissions: [
      'members.read',
      'institute.read',
      'acervo.read',
      'genealogy.read',
    ],
    modules: ['MEMBER PORTAL', 'INSTITUTO', 'ACERVO', 'GENEALOGIA'],
  },
  AUTHOR: {
    id: 'author',
    name: 'Author',
    permissions: [
      'cms.read',
      'cms.write',
      'site.read',
    ],
    modules: ['CMS', 'SITE'],
  ],
  COLLABORATOR: {
    id: 'collaborator',
    name: 'Collaborator',
    permissions: [
      'site.read',
      'institute.read',
      'acervo.read',
    ],
    modules: ['INSTITUTO', 'ACERVO'],
  },
}

// Permission checking utilities
export const hasPermission = (
  role: Role,
  permission: string
): boolean => {
  return role.permissions.includes(permission)
}

export const hasModuleAccess = (
  role: Role,
  module: string
): boolean => {
  return role.modules.includes(module)
}

export const canAction = (role: Role, action: string, module?: string): boolean => {
  // Check specific permission
  const permissionMap: Record<string, string> = {
    'publish': 'site.publish',
    'create': 'site.write',
    'edit': 'site.write',
    'delete': 'site.delete || acervo.delete',
    'view': 'site.read',
  }
  
  const permission = permissionMap[action]
  if (permission) {
    return hasPermission(role as Role, permission)
  }
  
  // Check module access
  if (module) {
    return hasModuleAccess(role as Role, module)
  }
  
  return false
}

// Role definitions by environment
export const ENVIRONMENT_ROLES = {
  development: [
    ROLES.SUPER_ADMIN,
    ROLES.ADMIN,
    ROLES.EDITOR,
    ROLES.MEMBER,
  ],
  production: [
    ROLES.SUPER_ADMIN,
    ROLES.ADMIN,
    ROLES.EDITOR,
    ROLES.MEMBER,
    // ROLES.ARCHIVIST,
    // ROLES.GENEALOGIST,
    // ROLES.RESEARCHER,
    // ROLES.PUBLISHER,
    // ROLES.MEMBER_MANAGER,
  ],
  memberPortal: [
    ROLES.MEMBER,
    // ROLES.MEMBER_MANAGER,
  ],
}