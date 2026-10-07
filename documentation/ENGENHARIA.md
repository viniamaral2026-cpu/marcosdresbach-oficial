Sim. O que você precisa agora é de uma **REGRA-MESTRA DE ENGENHARIA E PRESERVAÇÃO DO PROJETO**. Ela deve ficar no início do contexto da IA e funcionar como uma constituição: antes de alterar qualquer coisa, ela precisa entender a arquitetura existente, preservar o que funciona e impedir que uma alteração em um módulo quebre outro.

Abaixo está a regra pronta para colocar na IA.

# REGRA-MESTRA DRESBACH

## Engenharia, Organização, Preservação e Evolução Segura do Ecossistema

> **ESTA REGRA É OBRIGATÓRIA E TEM PRIORIDADE SOBRE QUALQUER INSTRUÇÃO DE IMPLEMENTAÇÃO POSTERIOR.**
>
> O objetivo principal não é apenas criar funcionalidades. O objetivo é **evoluir o sistema sem quebrar funcionalidades existentes, sem misturar domínios, sem duplicar código e sem desorganizar a arquitetura**.

---

## 1. REGRA ZERO — NÃO QUEBRAR O QUE JÁ FUNCIONA

Antes de modificar qualquer arquivo, módulo, rota, banco de dados, componente ou configuração:

1. Identifique o que existe.
2. Identifique o que está funcionando.
3. Identifique as dependências.
4. Identifique quem utiliza o recurso.
5. Identifique quais APIs dependem dele.
6. Identifique quais tabelas dependem dele.
7. Identifique quais páginas dependem dele.
8. Identifique quais componentes dependem dele.
9. Identifique quais permissões dependem dele.
10. Somente depois planeje a alteração.

**É proibido modificar diretamente algo sem compreender seu impacto.**

Se houver risco de regressão, a IA deverá primeiro criar um plano de alteração seguro.

---

# 2. NÃO RECONSTRUIR O PROJETO ÀS CEGAS

A IA não pode assumir que um arquivo está errado simplesmente porque sua implementação parece diferente da arquitetura desejada.

Antes de substituir:

```text
arquivo
componente
rota
controller
service
migration
model
API
tabela
configuração
```

deve responder internamente:

```text
O que isso faz?
Quem usa?
Qual domínio pertence?
Qual dependência possui?
Qual dependência outros módulos possuem dele?
Posso reutilizar?
Preciso refatorar?
Preciso substituir?
Posso manter?
```

A regra é:

**Preservar > Refatorar > Substituir > Excluir.**

Nunca:

**Excluir > Recriar.**

---

# 3. ARQUITETURA FÍSICA OBRIGATÓRIA

A estrutura principal deve permanecer claramente separada:

```text
NUCLEO DRESBACH/
│
├── front-end/
│   │
│   ├── site/
│   │   ├── app/
│   │   ├── components/
│   │   ├── public/
│   │   ├── lib/
│   │   └── ...
│   │
│   ├── plataforma/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── ...
│   │
│   └── administrativo/
│       ├── app/
│       ├── components/
│       ├── lib/
│       └── ...
│
├── backend/
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── routes/
│   ├── storage/
│   ├── tests/
│   └── ...
│
├── documentation/
│
└── infrastructure/
```

### Regra absoluta

**Backend nunca deve ser colocado dentro do frontend.**

Não criar:

```text
front-end/backend
front-end/api
front-end/server
front-end/controllers
front-end/models
front-end/database
```

quando esses recursos pertencem ao backend Laravel.

O backend oficial permanece:

```text
/backend
```

---

# 4. RESPONSABILIDADE DE CADA APLICAÇÃO

## `front-end/site`

Somente o site público.

Contém:

* páginas institucionais;
* apresentação;
* história;
* notícias;
* artigos públicos;
* pesquisa pública;
* famílias públicas;
* genealogia pública;
* arquivo público;
* doações;
* contato;
* páginas institucionais.

Não colocar lógica administrativa aqui.

---

## `front-end/plataforma`

Área autenticada do usuário.

Contém:

* conta;
* perfil;
* árvore genealógica;
* pessoas;
* famílias;
* pesquisas;
* documentos permitidos;
* contribuições;
* favoritos;
* histórico;
* configurações.

---

## `front-end/administrativo`

Somente administração interna.

Contém:

* dashboard administrativo;
* usuários;
* pessoas;
* famílias;
* árvores;
* artigos;
* arquivos;
* documentos;
* fontes;
* contribuições;
* revisão;
* aprovação;
* auditoria;
* configurações;
* permissões;
* administração do sistema.

**Nada do site deve ser colocado dentro do painel administrativo apenas porque existe uma funcionalidade semelhante.**

---

# 5. BACKEND CENTRAL

O Laravel é o backend central.

Ele deverá possuir:

```text
Authentication
Authorization
Users
Genealogy
People
Families
Relationships
Events
Places
Encyclopedia
Articles
Archives
Documents
Sources
Media
Research
Contributions
Moderation
Audit
Notifications
Search
AI Gateway
```

A Editora poderá possuir módulos comerciais separados no backend quando necessário:

```text
Publisher
Authors
Readers
Books
Publishing
Store
Orders
Payments
Stripe
POD
Editorial Services
Finance
```

Mas esses módulos não devem contaminar o domínio institucional.

---

# 6. REGRA DE DOMÍNIO

Sempre perguntar:

> "A qual domínio essa funcionalidade pertence?"

Exemplo:

```text
Genealogia
    ↓
Instituto

Artigo histórico
    ↓
Instituto

Documento histórico
    ↓
Instituto

Doação
    ↓
Instituto

Livro comercial
    ↓
Editora

Pagamento Stripe
    ↓
Editora

Pedido de livro
    ↓
Editora

POD
    ↓
Editora
```

Não misturar.

---

# 7. BANCO DE DADOS

Nenhuma alteração destrutiva deve ser feita diretamente no banco de produção.

Nunca executar automaticamente:

```sql
DROP DATABASE
DROP TABLE
TRUNCATE
DROP COLUMN
```

sem autorização explícita.

Alterações estruturais devem utilizar migrations.

Antes de alterar uma tabela:

```text
1. Identificar dependências
2. Verificar foreign keys
3. Verificar índices
4. Verificar queries
5. Verificar Models
6. Verificar Services
7. Verificar APIs
8. Criar migration
9. Executar testes
10. Aplicar alteração
```

---

# 8. API

A interface não deve acessar diretamente o banco.

Fluxo:

```text
Frontend
   ↓
HTTP/API
   ↓
Controller
   ↓
Use Case
   ↓
Domain
   ↓
Repository
   ↓
Database
```

Não fazer:

```text
Frontend → MariaDB
```

Nem:

```text
Frontend → lógica SQL
```

---

# 9. ALTERAÇÃO DE COMPONENTES

Antes de alterar um componente:

```text
Pesquisar referências
↓
Identificar páginas que utilizam
↓
Identificar props
↓
Identificar estado
↓
Identificar APIs
↓
Identificar estilos
↓
Identificar testes
↓
Alterar
↓
Testar todas as utilizações
```

Se um componente for compartilhado:

```text
Não modificar sua API pública
```

sem verificar todos os consumidores.

---

# 10. ROTAS

Antes de criar uma rota nova:

```text
Verificar se já existe
Verificar se existe rota equivalente
Verificar nomenclatura
Verificar autenticação
Verificar autorização
Verificar domínio
```

Nunca criar:

```text
/api/users
/api/user
/api/account/users
/api/admin/users
```

para resolver o mesmo problema sem justificativa arquitetural.

A API deve possuir padrão consistente.

---

# 11. REGRA DE NÃO DUPLICAÇÃO

Antes de criar:

```text
Service
Component
Hook
Repository
Controller
Utility
Model
API
```

a IA deve procurar se já existe.

Se existir, reutilizar ou refatorar.

Não criar:

```text
UserService
UserManager
UserHandler
UserHelper
UserProcessor
```

fazendo praticamente a mesma coisa.

---

# 12. REGRA DE DESENVOLVIMENTO INCREMENTAL

Nunca tentar reconstruir o sistema inteiro em uma única alteração.

Trabalhar em ciclos:

```text
ANALISAR
   ↓
PLANEJAR
   ↓
IMPLEMENTAR
   ↓
TESTAR
   ↓
VALIDAR
   ↓
DOCUMENTAR
   ↓
PRÓXIMO MÓDULO
```

---

# 13. REGRA DE CHECKPOINT

Antes de uma alteração grande:

```text
CHECKPOINT
```

deve ser criado.

Registrar:

```text
Estado atual
Arquivos afetados
Banco afetado
Rotas afetadas
Dependências
Objetivo
Alterações planejadas
Plano de rollback
```

Se a alteração falhar:

```text
ROLLBACK
```

e o sistema deve retornar ao último estado funcional conhecido.

---

# 14. REGRA DE TESTE

Nenhuma alteração importante é considerada concluída apenas porque o código foi escrito.

Deve verificar:

```text
Build
Lint
Type checking
Testes unitários
Testes de integração
Testes de API
Autenticação
Autorização
Banco
Rotas
Frontend
```

Para mudanças críticas:

```text
Teste de regressão
```

---

# 15. REGRA DE DEPLOY

Nunca fazer deploy de código não validado.

Fluxo:

```text
Development
      ↓
Validation
      ↓
Tests
      ↓
Build
      ↓
Staging
      ↓
Smoke Tests
      ↓
Production
```

---

# 16. REGRA PARA ERROS

Quando encontrar um erro:

**Não mascarar o erro.**

Não fazer simplesmente:

```text
try {
   ...
} catch {
   return null;
}
```

ou esconder o problema.

A IA deverá:

```text
Identificar causa
↓
Identificar impacto
↓
Corrigir causa raiz
↓
Testar
↓
Registrar solução
```

---

# 17. REGRA PARA IA

A IA própria da DRESBACH deverá ser tratada como um serviço externo:

```text
Backend
   ↓
AI Gateway
   ↓
DRESBACH AI API
```

Nenhuma funcionalidade deverá ficar diretamente acoplada a um fornecedor específico.

Criar abstração:

```text
AIProvider
```

permitindo trocar o modelo futuramente.

---

# 18. REGRA DE DADOS HISTÓRICOS

No Instituto, a IA nunca deve transformar uma hipótese em fato.

Cada informação histórica deverá, quando disponível, possuir:

```text
Fonte
Referência
Data
Origem
Documento
Confiança
Observação
```

Quando não houver evidência suficiente:

```text
Não confirmado
```

e não:

```text
Fato histórico
```

---

# 19. GENEALOGIA

O sistema deve tratar genealogia como domínio próprio.

```text
Person
Family
Relationship
Event
Place
Source
Document
Media
```

Não duplicar pessoas apenas porque aparecem em árvores diferentes.

Uma pessoa deve possuir uma identidade canônica quando os dados permitirem.

---

# 20. ENCICLOPÉDIA

Artigos devem possuir:

```text
Article
Revision
Section
Category
Reference
Source
Author
Editor
PublicationStatus
```

O histórico de alterações deve ser preservado.

Não apagar silenciosamente conteúdo histórico.

---

# 21. ARQUIVO

O módulo arquivístico deve preservar hierarquia:

```text
Archive
 ↓
Collection / Fonds
 ↓
Series
 ↓
Classification
 ↓
Description Unit
 ↓
Digital Object
```

Não transformar simplesmente todo documento em um arquivo isolado sem contexto arquivístico.

---

# 22. PAINEL ADMINISTRATIVO

O painel administrativo é um sistema operacional interno.

Não é o site.

Não deve depender de elementos visuais do site para funcionar.

Deve possuir:

```text
Login
Reset de senha
2FA futuramente
Dashboard
RBAC
Usuários
Permissões
Auditoria
Genealogia
Enciclopédia
Arquivo
Pesquisa
Moderação
Configurações
```

**Não existe cadastro público dentro do painel administrativo.**

---

# 23. SEGURANÇA

Nunca colocar:

```text
senha
API key
secret
token
credencial
```

no frontend.

Nunca versionar:

```text
.env
.env.production
private keys
credentials
```

---

# 24. REGRA DE ARQUIVOS

Antes de criar um arquivo:

```text
Ele realmente precisa existir?
Já existe equivalente?
Qual módulo é responsável?
Qual diretório correto?
Ele será reutilizado?
```

Não criar arquivos aleatoriamente na raiz.

---

# 25. REGRA DE RAIZ LIMPA

A raiz do projeto deve conter apenas arquivos realmente necessários.

Não colocar:

```text
teste-final.js
teste2.js
novo-componente.js
backup.js
old/
temp/
teste/
```

na raiz.

Código temporário deve ficar em área apropriada e ser removido após uso.

---

# 26. REGRA DE DOCUMENTAÇÃO

Toda mudança arquitetural importante deve atualizar a documentação.

Documentar:

```text
Arquitetura
Domínio
API
Banco
Rotas
Segurança
Configuração
Deploy
Decisões técnicas
```

---

# 27. REGRA DE DECISÃO

Quando existirem várias soluções, a IA deverá avaliar:

```text
Segurança
Manutenção
Escalabilidade
Performance
Complexidade
Custo
Compatibilidade
Testabilidade
```

E escolher a solução que melhor preserve o sistema como um todo.

---

# 28. PROTOCOLO ANTES DE CODIFICAR

Antes de qualquer tarefa relevante, a IA deverá produzir mentalmente esta sequência:

```text
[1] O que o usuário pediu?
[2] Qual domínio?
[3] Qual aplicação?
[4] Quais arquivos existentes?
[5] Quais dependências?
[6] Quais APIs?
[7] Quais tabelas?
[8] Existe implementação semelhante?
[9] Qual impacto?
[10] Como testar?
[11] Como desfazer?
```

Somente depois:

```text
IMPLEMENTAR
```

---

# 29. REGRA ABSOLUTA CONTRA "RECOMEÇAR"

A IA está proibida de interpretar:

> "Vamos melhorar"

como:

> "Apague tudo e faça novamente."

Melhoria significa:

```text
Estado atual
     ↓
Análise
     ↓
Evolução
     ↓
Estado melhor
```

e não:

```text
Estado atual
     ↓
DELETE
     ↓
Projeto quebrado
```

---

# 30. REGRA FINAL — PRINCÍPIO DA PRESERVAÇÃO

> **NÃO QUEBRE O QUE FUNCIONA.**
>
> **NÃO DUPLIQUE O QUE JÁ EXISTE.**
>
> **NÃO MISTURE DOMÍNIOS.**
>
> **NÃO MISTURE FRONTEND E BACKEND.**
>
> **NÃO ALTERE BANCO DE FORMA DESTRUTIVA.**
>
> **NÃO APAGUE FUNCIONALIDADE SEM ANÁLISE DE IMPACTO.**
>
> **NÃO RECRIE O PROJETO SEM NECESSIDADE.**
>
> **NÃO IMPLEMENTE ANTES DE ENTENDER.**
>
> **TODA ALTERAÇÃO DEVE SER TESTADA.**
>
> **TODA DECISÃO IMPORTANTE DEVE SER DOCUMENTADA.**
>
> **O SISTEMA DEVE EVOLUIR INCREMENTALMENTE.**

### Protocolo operacional obrigatório

Sempre que receber uma nova solicitação:

```text
ANALISAR
   ↓
MAPEAR
   ↓
PRESERVAR
   ↓
PLANEJAR
   ↓
IMPLEMENTAR
   ↓
TESTAR
   ↓
VALIDAR
   ↓
DOCUMENTAR
```

**Se uma alteração puder quebrar outra parte do sistema, pare a implementação, faça a análise de impacto e somente então prossiga.**

Essa deve ser a **regra permanente de desenvolvimento do DRESBACH**.
