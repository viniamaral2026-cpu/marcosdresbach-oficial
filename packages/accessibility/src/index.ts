/**
 * Acessibilidade - WCAG 2.1 Compliance
 * 
 * Garante que todas as páginas e componentes do monorepo
 * sigam as diretrizes de acessibilidade da WCAG 2.1.
 * 
 * Nível AA é o padrão alvo para o projeto Instituto Brasileiro Dresbach.
 */

export interface A11yConfig {
  skipLinks: string[]
  landmarkRegions: string[]
  colorContrastRatio: number
  keyboardNavigation: boolean
  screenReaderSupport: boolean
  focusManagement: boolean
  errorAnnouncement: boolean
}

export const a11yConfig: A11yConfig = {
  skipLinks: ['skip-to-content'],
  landmarkRegions: [
    'header',
    'main',
    'nav',
    'aside',
    'footer',
    'main-nav',
    'sidebar',
    'content-info',
  ],
  colorContrastRatio: 4.5, // AA para texto normal, AAA para grande
  keyboardNavigation: true,
  screenReaderSupport: true,
  focusManagement: true,
  errorAnnouncement: true,
}

// Componentes acessíveis
export const AccessibleComponents = {
  // Elementos que já seguem acessibilidade
  button: {
    ariaRole: 'button',
    requireLabel: true,
    focusable: true,
    keyboardOperations: ['Enter', 'Space'],
  },
  input: {
    ariaRole: 'textbox',
    requireLabel: true,
    ariaDescribedby: true,
    keyboardOperations: ['Tab', 'Enter'],
  },
  select: {
    ariaRole: 'combobox',
    ariaLabel: true,
    ariaExpanded: true,
    ariaOwns: true,
    keyboardOperations: ['Tab', 'ArrowDown', 'ArrowUp', 'Enter'],
  },
  modal: {
    ariaRole: 'dialog',
    ariaModal: true,
    ariaFocus: 'dialog',
    trapFocus: true,
    escapeCloses: true,
  },
  table: {
    scope: 'row',
    headers: 'id',
    caption: true,
    summary: true,
  },
}

// Verificadores de acessibilidade
export const checkA11y = {
  // Verifica contraste de cores
  checkContrast: (foreground: string, background: string): boolean => {
    // Implementação simplificada - usa fórmula WCAG
    // Retorna true se a razão for >= 4.5 (AA) ou 7 (AAA)
    const lum = (hex: string): number => {
      const rgb = hex.replace('#', '').match(/.{2}/g).map((c) => parseInt(c, 16) / 255)
      const luminance = (
        0.2126 * rgb[0] +
        0.7152 * rgb[1] +
        0.0722 * rgb[2]
      )
      return luminance
    }

    const relativeLuminance = (color: string): number => {
      const c = color.replace('#', '')
        .match(/.{2}/g)
        .map((x) => {
          const v = parseInt(x, 16) / 255
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
        })
      return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2]
    }

    const L1 = relativeLuminance(foreground)
    const L2 = relativeLuminance(background)
    const ratio = (L1 + 0.05) / (L2 + 0.05)
    return ratio >= 4.5
  },

  // Verifica se elemento tem label adequado
  checkLabel: (element: HTMLElement): boolean => {
    // Verifica label associado, aria-label ou placeholder
    const label = element.querySelector('label')?.textContent
    const ariaLabel = element.getAttribute('aria-label')
    const ariaLabelledby = element.getAttribute('aria-labelledby')
    const placeholder = element.getAttribute('placeholder')

    return !!(label || ariaLabel || ariaLabelledby || placeholder)
  },

  // Verifica navegação de teclado
  checkKeyboardNav: (element: HTMLElement): boolean => {
    const tabIndex = element.getAttribute('tabindex')
    const isFocusable =
      element.tagName === 'A' ||
      element.tagName === 'BUTTON' ||
      element.tagName === 'INPUT' ||
      element.tagName === 'SELECT' ||
      element.hasAttribute('contenteditable')
    return isFocusable || tabIndex !== null
  },
}

// Hook para anúncios de erro a leitores de tela
announceError: (message: string) => {
  const liveRegion = document.querySelector('[role="alert"]')
  if (liveRegion) {
    liveRegion.textContent = message
    liveRegion.setAttribute('aria-live', 'assertive')
    liveRegion.setAttribute('aria-atomic', 'true')
  }
}

// Focus management
focusTrap: (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll<
    HTMLElement
  >('button, [href], input, select, textarea, [contenteditable]')
  const firstFocusable = focusableElements[0]
  const lastFocusable = focusableElements[focusableElements.length - 1]

  return {
    first: firstFocusable,
    last: lastFocusable,
    trap: (focusInEvent: FocusEvent) => {
      if (
        focusInEvent.target !== firstFocusable &&
        focusInEvent.target !== lastFocusable &&
        !focusableElements.some((el) => el.contains(focusInEvent.target))
      ) {
        firstFocusable.focus()
      }
    },
    release: () => {},
  }
}