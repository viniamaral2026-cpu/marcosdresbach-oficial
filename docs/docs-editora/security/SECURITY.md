# Segurança da Informação — DRESBACH Editora

## Princípios Fundamentais

```text
Segurança por Design — Toda a arquitetura deve considerar segurança desde o início.
Princípio do Menor Privilégio — Usuários e serviços só podem acessar o necessário.
Defesa em Profundidade — Múltiplas camadas de segurança.
Observabilidade — Todos os eventos de segurança devem ser logados e monitorados.
```

## Autenticação e Autorização

### Autenticação

```text
Quem é você?

Mecanismo:
- E-mail + senha (hash bcrypt/argon2)
- Opção Google/GitHub OAuth (future)
- MFA (autenticação de dois fatores) para operações sensíveis

Armazenamento de senha:
- Nunca em texto puro
- bcrypt com custo 12+ ou argon2id
- Nunca armazenar salt separadamente em código

Fluxo de login:
1. Receber e-mail/senha
2. Validar credenciais no backend
3. Gerar JWT (com expiration curto: 15min para sessão, 24h para refresh)
4. Retornar tokens + refresh token
5. Armazenar refresh token httpOnly cookie ou state management
```

### Autorização

```text
O que você pode fazer?

RBAC (Role-Based Access Control):
- roles: READER, WRITER, EDITOR, FINANCE, PRODUCTION, SUPPORT, ADMIN, SUPER_ADMIN, FREELANCER
- permissions granulares: book.create, book.publish, order.manage, payment.refund, user.manage, etc.
- Middleware de verificação em cada endpoint crítico

Exemplo de verificação:
```
  // Middleware conceptual
  if (!user.hasPermission('book.publish')) {
    return ForbiddenError();
  }
```

## Segurança no Banco de Dados

```text
- Todas as conexões devem usar o usuário editora_dresbach_app
- Este usuário possui privilégios RESTRICTOS em editora_dresbach.*
- NUNCA usar root na aplicação
- Conexões devem ser via 127.0.0.1 (localhost apenas)
- SSL/TLS obrigatório em produção
- Connection pooling com limitações

Tabelas sensíveis (dados de usuários, financeiros):
- Criptografia em repouso (InnoDB native + filesystem encryption)
- Auditoria de todas as escritas (INSERT/UPDATE/DELETE logs)
- Backup criptografado e testado periodicamente

Restrições de segurança:
- Query parameters sempre parameterized (prevent SQL Injection)
- LIMIT em queries de listagem
- NUNCA SELECT * em produção
- Validação de entrada em todas as APIs
```

## Segurança de API

```text
Headers obrigatórios em todas as APIs:
- Authorization: Bearer <jwt>
- X-Requested-With: XMLHttpRequest (quando aplicável)
- Content-Type: application/json (POST/PUT/DELETE)

Rate Limiting:
- Login: 5 tentativas por 15 minutos por IP
- Registro: 10 por hora por IP
- API pública: 100 requisições por minuto por usuário
- Webhooks: validar signature Stripe

Headers de Segurança (HTTP Reheaders):
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Strict-Transport-Security: max-age=31536000; includeSubDomains
- Referrer-Policy: strict-origin-when-cross-origin

CORS:
- Apenas origens conhecidas (dresbach.com, subdomínios)
- Métodos: GET, POST, PUT, DELETE, OPTIONS
- Headers: Content-Type, Authorization
```

## Proteção de Dados (LGPD)

```text
Dados pessoais que manipulamos:
- Nome completo
- E-mail
- CPF/CNPJ (quando fornecido)
- Endereço de entrega
- Dados bancários (PIX, conta)
- Histórico de compras

Princípios LGPD:
- Finalidade específica para cada dado
- Consentimento explícito quando necessário
- Retenção definida (policy de retention)
- Direito de acesso, correção e exclusão
- Não compartilhar com terceiros sem consentimento
- Anonimização em logs

Ações obrigatórias:
- RGPD policy page visível no site
- Link de "excluir minha conta" no perfil
- Portal de consentimento no cadastro
- Logs de acesso a dados pessoais por auditoria
- Relatórios trimestrais de tratamento de dados
```

## Segurança Frontend

```text
Prevenção XSS:
- Nunca inserir dados user-provided diretamente no DOM
- Utilizar textContent ao invés de innerHTML quando possível
- Sanitizar HTML se necessário (dompurify)

Prevenção CSRF:
- Tokens CSRF em formulários state-changing
- Validar origin/header em requests críticos
- SameSite cookies rigoroso

Gerenciamento de Tokens:
- JWT short-lived (15min)
- Refresh tokens httpOnlyOnly cookies
- Renovação automática antes do expirar
- Logout invalida todos os tokens

Tratamento de Erros:
- Never stack trace em produção
- Mensagens genéricas para o usuário
- Logs detalhados apenas no servidor
- Error boundaries em React components
```

## Segurança de Arquivos (Upload)

```text
Upload de PDFs (manuscritos, capas):
- Validar MIME type (apenas application/pdf)
- Validar "magic bytes" no início do arquivo
- Limite de tamanho configurado (ex: 100MB)
- Limite de páginas (ex: max 5000)
- Scanner de vírus na quarantine
- Processamento em sandbox isolado
- Nunca executar código do upload diretamente
- Sanitizar nomes de arquivo (sem extensões executáveis)
- Escaneamento com Poppler/pdffonts para validar estrutura

Armazenamento:
- Caminhos sem informações sensíveis
- URLsassinadas temporárias (signed URLs)
- Controle de acesso por usuário/autorização
- Versionamento de arquivos
```

## Incident Response

```text
Quando detectar uma falha de segurança:

1. Identificar o escopo da violação
2. Congelar accounts afetadas se necessário
3. Notificar equipe de segurança
4. Investigar causa raiz
5. Aplicar correção e redeploy se necessário
6. Notificar usuários afetados (se houver dado exposto)
7. Atualizar políticas se necessário
8. Fazer relatório pós-incidente

Canal de segurança:
- security@dresbach.com (para reportes responsáveis)
- Internal #security-nook (Slack/Discord)
- Documentação de incidentes no repo
```