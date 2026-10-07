/**
 * LGPD - Lei Geral de Proteção de Dados
 * 
 * Implementa a conformidade com a Lei nº 13.709/2018 no
 * Instituto Brasileiro Dresbach. Gerencia consentimento,
 * finalidade, direitos do titular e registro de dados.
 */

export interface Consentimento {
  id: string
  usuarioId: string
  tipo: 'necessario' | 'opcional' | 'marketing'
  finalidade: string
  consentido: boolean
  dataConsentimento: string
  dataRevogacao?: string
  ip?: string
  userAgent?: string
}

export interface DireitoTitular {
  tipo: 'acesso' | 'correcao' | 'exclusao' | 'portabilidade' | 'limite'
  status: 'pendente' | 'em-andamento' | 'concluido'
  solicitadoEm: string
  resolvidoEm?: string
  descricao: string
}

export interface PoliticaPrivacidade {
  id: string
  versao: string
  dataPublicacao: string
  dataUltimaAtualizacao: string
  conteudo: string
  url: string
}

export interface RegistroTratamento {
  id: string
  finalidade: string
  baseLegal: 'consentimento' | 'legitimo-interesse' | 'obrigacao-legal' | 'protecao-dados' | 'vida-vitalicia'
  categoriasDados: string[]
  destinatarios: string[]
  periodoRetencao: string
  createdAt: string
  updatedAt: string
}

export const LEGAL_BASES = {
  CONSENTIMENTO: 'consentimento',
  LEGITIMO_INTERESSE: 'legitimo-interesse',
  OBRIGACAO_LEGAL: 'obrigacao-legal',
  PROTECAO_DADOS: 'protecao-dados',
  VIDA_VITALICIA: 'vida-vitalicia',
} as const

export const TIPOS_CONSENTIMENTO = {
  NECESSARIO: 'necessario',
  OPcional: 'opcional',
  MARKETING: 'marketing',
} as const

export const PERIODO_RETENCAO = {
  DOCUMENTOS_HISTORICOS: 'permanente',
  DADOS_PESSOAIS: 'ate-12-dp-de-baixo-do-cadastro',
  DADOS_DE_MARKETING: 'ate-24-meses-de-cessacao',
  METADADOS: 'ate-36-meses',
} as const

export const CONSENTIMENTO_PADRAO: Consentimento = {
  id: '',
  usuarioId: '',
  tipo: 'necessario',
  finalidade: '',
  consentido: false,
  dataConsentimento: new Date().toISOString(),
}

// Funções auxiliares
export const lgpd = {
  // Registrar consentimento
  registrarConsentimento: (
    usuarioId: string,
    tipo: 'necessario' | 'opcional' | 'marketing',
    finalidade: string
  ): Consentimento => {
    const consentimento: Consentimento = {
      id: `${usuarioId}-${Date.now()}`,
      usuarioId,
      tipo,
      finalidade,
      consentido: true,
      dataConsentimento: new Date().toISOString(),
    }
    
    // Persistir no backend/firestore
    // salvarNoBackend(consentimento)
    
    return consentimento
  },

  // Revogar consentimento
  revogarConsentimento: (consentimentoId: string): Consentimento => {
    // Atualizar status no backend
    // atualizarNoBackend(consentimentoId, { consentido: false, dataRevogacao: new Date() })
    
    return {
      ...JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem('consentimento_${consentimentoId}') || '{}'))),
      dataRevogacao: new Date().toISOString(),
    }
  },

  // Verificar se usuário deu consentimento
  temConsentimento: (tipo: 'necessario' | 'opcional' | 'marketing'): boolean => {
    const consentimento = JSON.parse(
      localStorage.getItem('consentimento_necessario') || '{}'
    )
    return consentimento.consentido === true
  },

  // Obter política de privacidade
  obterPoliticaPrivacidade: async (): Promise<PoliticaPrivacidade> => {
    // Buscar do backend ou CDN
    // const response = await fetch('/api/lgpd/politica')
    // return response.json()
    
    // Fallback para desenvolvimento
    return {
      id: '1',
      versao: '1.0.0',
      dataPublicacao: '2024-01-01',
      dataUltimaAtualizacao: '2024-10-07',
      conteudo: 'Política de privacidade do Instituto Brasileiro Dresbach...',
      url: '/politica-privacidade',
    }
  },

  // Solicitar direito do titular
  solicitarDireito: async (tipo: 'acesso' | 'correcao' | 'exclusao' | 'portabilidade' | 'limite'): Promise<DireitoTitular> => {
    // Criar registro de solicitação
    const direito: DireitoTitular = {
      tipo,
      status: 'pendente',
      solicitadoEm: new Date().toISOString(),
      descricao: `Solicitação de ${tipo}`,
    }
    
    // Registrar no backend
    // await salvarSolicitacao(direito)
    
    return direito
  },
}

// Validação de dados pessoais
validarCPF: (cpf: string): { valido: boolean; mensagem?: string } => {
  // Remover caracteres não numéricos
  const numeros = cpf.replace(/\D/g, '')
  
  if (numeros.length !== 11) {
    return { valido: false, mensagem: 'CPF deve ter 11 dígitos' }
  }
  
  // Validar dígitos verificadores
  let soma = 0
  let resto = 0
  
  for (let i = 0; i < 9; i++) {
    soma += parseInt(numeros.charAt(i)) * (10 - i)
  }
  resto = (soma * 10) % 11
  if (resto === 10 || resto === 0) {
    if (numeros.charAt(9) !== '0' && numeros.charAt(9) !== numeros.charAt(9)) {
      return { valido: false, mensagem: 'CPF inválido' }
    }
  } else {
    if (numeros.charAt(9) !== String(resto)) {
      return { valido: false, mensagem: 'CPF inválido' }
    }
  }
  
  soma = 0
  for (let i = 0; i < 10; i++) {
    soma += parseInt(numeros.charAt(i)) * (11 - i)
  }
  resto = (soma * 10) % 11
  if (resto === 10 || resto === 0) {
    if (numeros.charAt(10) !== '0' && numeros.charAt(10) !== numeros.charAt(10)) {
      return { valido: false, mensagem: 'CPF inválido' }
    }
  } else {
    if (numeros.charAt(10) !== String(resto)) {
      return { valido: false, mensagem: 'CPF inválido' }
    }
  }
  
  // Evitar CPFs sequenciais
  const sequenciais = [
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ]
  
  if (sequenciais.includes(numeros)) {
    return { valido: false, mensagem: 'CPF inválido' }
  }
  
  return { valido: true }
}

// Máscaras de entrada
mascaraCPF: (value: string): string => {
  const numeros = value.replace(/\D/g, '')
  if (numeros.length <= 3) return numeros
  if (numeros.length <= 6) return `${numeros.replace(/^(\d{3})$/, '$1.')}.`
  if (numeros.length <= 9) return `${numeros.replace(/^(\d{3})(\d{3})$/, '$1.$2.')}.`
  return `${numeros.replace(/^(\d{3})(\d{3})(\d{3})$/, '$1.$2.$3-')}${numeros.charAt(10)}`
}

// Consentimento em formulários
FormularioComConsentimento: {
  // Renderizar caixa de consentimento
  renderizar: (finalidade: string, onConcordar: () => void, onRecusar?: () => void) => {
    return (
      <div className="consentimento-box">
        <p>
          <strong>Concordo com o tratamento dos meus dados para {finalidade}, conforme a
          LGPD (Lei nº 13.709/2018).</strong>
        </p>
        <div className="consentimento-actions">
          <button onClick={onConcordar} className="btn-primary">
            Concordar
          </button>
          {onRecusar && (
            <button onClick={onRecusar} className="btn-secondary">
              Recusar
            </button>
          )}
        </div>
      </div>
    )
  },
}