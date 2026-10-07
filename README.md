# 🇧🇷 Marcos Dresbach — Site Oficial

<p align="center">
  <strong>Plataforma institucional oficial de Marcos Dresbach</strong>
</p>

<p align="center">
  Site público • Arquitetura moderna • Engenharia de software • Conteúdo institucional
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Projeto-Marcos%20Dresbach-111827?style=for-the-badge" alt="Projeto Marcos Dresbach">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-2563EB?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Quality-Engineering-0B5FFF?style=for-the-badge" alt="Engineering">
</p>

---

## 🧭 Visão geral

O **Marcos Dresbach — Site Oficial** é uma plataforma web institucional desenvolvida para centralizar a presença digital, informações públicas, projetos, ideias, publicações, conteúdos e demais materiais relacionados a Marcos Dresbach.

O projeto foi concebido com foco em:

- arquitetura organizada;
- separação de responsabilidades;
- manutenção de longo prazo;
- acessibilidade;
- desempenho;
- segurança;
- SEO;
- responsividade;
- qualidade de código;
- experiência de usuário;
- possibilidade de evolução futura.

A aplicação não deve ser tratada como uma simples página estática.

Ela deve ser mantida como um **produto de software**, com processos de desenvolvimento, validação e publicação compatíveis com um projeto profissional.

---

## 🏛️ Princípios de engenharia

O projeto segue alguns princípios fundamentais:

> **Código funcional antes de código apenas visual.**

> **Arquitetura antes de improvisação.**

> **Validação antes de publicação.**

> **Preservar o que funciona antes de substituir.**

> **Nenhuma funcionalidade deve ser considerada concluída sem validação técnica.**

O desenvolvimento deve evitar alterações destrutivas, duplicação desnecessária de código, componentes monolíticos, lógica espalhada pelas páginas e dependências sem justificativa.

---

## ✨ Objetivos do projeto

O site deve oferecer uma presença digital institucional sólida, moderna e preparada para evolução.

Entre os objetivos estão:

- apresentar o perfil público de Marcos Dresbach;
- organizar informações institucionais;
- apresentar projetos;
- publicar conteúdos;
- disponibilizar informações de contato;
- estruturar publicações e materiais;
- facilitar navegação entre áreas do site;
- fornecer uma experiência consistente em desktop, tablet e dispositivos móveis;
- estabelecer uma base técnica preparada para futuras integrações.

---

## 🧱 Arquitetura

A arquitetura do projeto deve manter uma separação clara entre:

```text
┌───────────────────────────────────────────────┐
│                 SITE PÚBLICO                  │
│                                               │
│  Páginas • Componentes • Conteúdo • SEO      │
│  Navegação • Responsividade • Acessibilidade │
└───────────────────────┬───────────────────────┘
                        │
                        │ HTTP / API
                        ▼
┌───────────────────────────────────────────────┐
│                    BACKEND                    │
│                                               │
│  Autenticação • Regras • Segurança • API     │
│  Validação • Integrações • Serviços          │
└───────────────────────┬───────────────────────┘
                        │
                        ▼
┌───────────────────────────────────────────────┐
│                   DADOS                       │
│                                               │
│  Banco • Arquivos • Cache • Serviços externos│
└───────────────────────────────────────────────┘
```

O frontend não deve acessar diretamente bancos de dados ou credenciais privadas.

As regras de negócio e integrações devem permanecer centralizadas nas camadas apropriadas.

---

## 🖥️ Frontend

O frontend utiliza uma arquitetura baseada em componentes e páginas.

A organização deve favorecer:

- componentes reutilizáveis;
- páginas enxutas;
- separação de responsabilidades;
- serviços isolados;
- hooks reutilizáveis;
- tipos centralizados;
- configuração separada;
- estilos organizados;
- recursos públicos bem definidos.

A regra geral é:

```text
Página
  ↓
Composição
  ↓
Componentes
  ↓
Features / Serviços
  ↓
API
```

As páginas devem orquestrar a interface.

Componentes devem cuidar da apresentação e interação.

Serviços devem cuidar da comunicação com APIs.

Regras de negócio não devem ser espalhadas indiscriminadamente pelos componentes visuais.

---

## 📂 Organização do código

A estrutura deve seguir uma organização semelhante a:

```text
src/
├── app/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   └── ...
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   └── ...
│
├── features/
│   ├── home/
│   ├── profile/
│   ├── projects/
│   ├── publications/
│   └── ...
│
├── services/
│   ├── api/
│   └── ...
│
├── hooks/
│
├── lib/
│
├── types/
│
├── config/
│
└── styles/
```

A estrutura real do projeto prevalece sobre este exemplo. O objetivo desta documentação é estabelecer o princípio arquitetural, não obrigar a criação de diretórios que não sejam necessários.

---

## 🎨 Interface e experiência

A interface deve priorizar:

- clareza;
- hierarquia visual;
- consistência;
- legibilidade;
- navegação previsível;
- responsividade;
- acessibilidade;
- boa utilização do espaço;
- componentes reutilizáveis.

O cabeçalho deve possuir comportamento consistente entre páginas.

Menus extensos devem ser organizados por grupos e, quando necessário, utilizar dropdowns ou estruturas de navegação colapsáveis.

Não devem ser criados menus excessivamente longos ou desorganizados.

---

## ♿ Acessibilidade

A acessibilidade faz parte dos requisitos técnicos do projeto.

Devem ser utilizados:

- HTML semântico;
- títulos hierárquicos;
- labels apropriados;
- textos alternativos para imagens;
- navegação por teclado;
- estados de foco;
- contraste adequado;
- elementos interativos semanticamente corretos;
- atributos ARIA somente quando necessários.

Imagens relevantes devem possuir `alt` apropriado.

Elementos puramente decorativos devem ser tratados como tal.

---

## 🚀 Desempenho

O projeto deve evitar desperdício de recursos.

Entre as práticas esperadas:

- otimização de imagens;
- carregamento adequado de recursos;
- redução de JavaScript desnecessário;
- componentes reutilizáveis;
- divisão adequada de código;
- controle de dependências;
- cache quando aplicável;
- prevenção de chamadas redundantes à API.

O desempenho deve ser considerado durante o desenvolvimento, e não apenas depois da aplicação pronta.

---

## 🔐 Segurança

Informações sensíveis nunca devem ser armazenadas no código-fonte.

Não devem ser versionados:

```text
.env
.env.local
.env.production.local
*.pem
*.key
tokens
senhas
credenciais privadas
service accounts
chaves de API
```

Credenciais devem ser fornecidas por variáveis de ambiente ou pelos mecanismos seguros da infraestrutura utilizada.

O frontend nunca deve receber segredos destinados exclusivamente ao backend.

---

## 🗃️ Dados e integrações

Quando houver comunicação com serviços externos, ela deve ser realizada por uma camada apropriada.

O frontend não deve:

```text
Frontend → Banco de dados
```

O fluxo esperado é:

```text
Frontend
   ↓
API
   ↓
Serviço / Regra de negócio
   ↓
Banco / Integração externa
```

Essa separação facilita:

- segurança;
- testes;
- manutenção;
- auditoria;
- evolução da arquitetura;
- troca de fornecedores;
- controle de permissões.

---

## 🧪 Qualidade de código

Nenhuma alteração relevante deve ser considerada concluída apenas porque a interface abriu no navegador.

Antes de considerar uma implementação pronta, devem ser avaliados, quando aplicáveis:

```text
✓ Lint
✓ TypeScript
✓ Testes
✓ Build
✓ Rotas
✓ Integrações
✓ Responsividade
✓ Acessibilidade
✓ Console do navegador
✓ Erros de runtime
✓ Variáveis de ambiente
✓ Segurança
```

Uma implementação que compila, mas apresenta erro em runtime, não deve ser considerada concluída.

---

## 🔎 Validação

O processo de validação deve seguir aproximadamente:

```text
1. Analisar
      ↓
2. Planejar
      ↓
3. Implementar
      ↓
4. Executar
      ↓
5. Testar
      ↓
6. Identificar erros
      ↓
7. Corrigir
      ↓
8. Executar novamente
      ↓
9. Revisar
      ↓
10. Publicar
```

A etapa de revisão não deve ser omitida.

---

## 🛠️ Ambiente de desenvolvimento

Requisitos principais:

- Node.js;
- pnpm;
- Git;
- ambiente compatível com a stack utilizada pelo projeto.

Instalação das dependências:

```bash
pnpm install
```

Execução em desenvolvimento:

```bash
pnpm dev
```

Build de produção:

```bash
pnpm build
```

Validação de qualidade, caso os scripts estejam definidos no projeto:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

---

## 📦 Gerenciamento de dependências

O projeto utiliza `pnpm`.

As dependências devem ser adicionadas somente quando houver necessidade técnica real.

Antes de adicionar uma biblioteca, avaliar:

1. necessidade;
2. manutenção;
3. segurança;
4. tamanho;
5. compatibilidade;
6. impacto no bundle;
7. existência de solução já presente no projeto.

Evitar dependências redundantes.

---

## 🌿 Git

O branch principal é:

```text
main
```

Fluxo recomendado:

```text
feature
   ↓
desenvolvimento
   ↓
validação
   ↓
commit
   ↓
main
   ↓
deploy
```

Commits devem descrever claramente a alteração realizada.

Exemplos:

```bash
feat: adiciona página de projetos
fix: corrige navegação mobile
refactor: reorganiza componentes de layout
docs: atualiza documentação
chore: atualiza dependências
```

---

## 🚫 Arquivos que não pertencem ao repositório

O projeto possui arquivos e diretórios locais que não devem ser enviados ao GitHub.

Entre eles:

```text
node_modules/
.next/
dist/
build/
.astro/
.vercel/
.memory/
Abilidades-opencode/
.env
.env.*
*.pem
*.key
*.log
```

Esses arquivos podem conter:

- dependências instaladas;
- artefatos gerados;
- memória local;
- configurações específicas do ambiente;
- credenciais;
- arquivos temporários.

O `.gitignore` do projeto deve impedir seu versionamento.

---

## 🤖 Desenvolvimento assistido por IA

O projeto pode utilizar agentes de IA durante o desenvolvimento.

A IA deve atuar como ferramenta de engenharia, e não apenas como geradora de código.

O fluxo esperado é:

```text
Análise
  ↓
Contexto do projeto
  ↓
Plano técnico
  ↓
Implementação
  ↓
Execução
  ↓
Testes
  ↓
Diagnóstico
  ↓
Correção
  ↓
Validação
  ↓
Revisão final
```

A IA deve preservar funcionalidades existentes sempre que possível.

Alterações destrutivas, remoções ou substituições arquiteturais devem possuir justificativa técnica.

---

## 🧠 Estado e contexto de desenvolvimento

Arquivos utilizados exclusivamente pelo ambiente local de desenvolvimento não fazem parte do produto publicado.

Por esse motivo, diretórios como:

```text
.memory/
Abilidades-opencode/
```

permanecem fora do repositório público.

O código versionado deve representar o produto e sua configuração necessária para reprodução, e não o estado interno da ferramenta utilizada para desenvolvê-lo.

---

## 📱 Responsividade

O site deve funcionar adequadamente em:

```text
Desktop
Tablet
Smartphone
```

A interface deve ser construída de maneira responsiva, evitando:

- overflow horizontal;
- elementos cortados;
- textos ilegíveis;
- menus quebrados;
- botões inacessíveis;
- imagens deformadas;
- layouts dependentes de uma resolução específica.

---

## 🔍 SEO

As páginas públicas devem possuir, quando aplicável:

- título adequado;
- descrição;
- estrutura semântica;
- URLs coerentes;
- Open Graph;
- metadados;
- informações estruturadas quando justificadas;
- sitemap;
- robots;
- URLs canônicas.

SEO deve ser tratado como parte da arquitetura pública do site.

---

## 📐 Padrões de desenvolvimento

### Componentes

Componentes devem possuir responsabilidade clara.

Evitar componentes gigantes contendo:

- múltiplas regras de negócio;
- chamadas de API espalhadas;
- lógica de autenticação;
- manipulação excessiva de estado;
- markup de páginas inteiras.

### Estilos

Estilos globais devem permanecer limitados às regras realmente globais.

Componentes devem possuir estilos organizados de acordo com a arquitetura utilizada pelo projeto.

### Dados

Conteúdo dinâmico não deve ser duplicado manualmente em dezenas de páginas.

Quando uma informação possuir fonte única, deve ser consumida a partir dessa fonte.

---

## 🧰 Diagnóstico

Quando um problema for encontrado, o processo recomendado é:

```text
Reproduzir
   ↓
Identificar causa
   ↓
Isolar componente
   ↓
Corrigir causa raiz
   ↓
Executar novamente
   ↓
Validar regressões
```

Não utilizar alterações aleatórias apenas para fazer um erro desaparecer.

A correção deve atacar a causa do problema.

---

## 🚢 Publicação

Antes de publicar uma nova versão:

```text
[ ] Código compilando
[ ] Lint aprovado
[ ] Typecheck aprovado
[ ] Testes aprovados
[ ] Build aprovado
[ ] Rotas verificadas
[ ] Responsividade verificada
[ ] Console sem erros críticos
[ ] Variáveis de ambiente verificadas
[ ] Segurança verificada
[ ] Git limpo
```

Somente depois dessas verificações a versão deve ser considerada candidata à publicação.

---

## 🗺️ Evolução do projeto

O projeto foi estruturado para permitir evolução progressiva.

Possíveis extensões futuras podem incluir:

- sistema de conteúdo;
- painel administrativo;
- publicação de artigos;
- gerenciamento de projetos;
- biblioteca de documentos;
- integrações externas;
- autenticação;
- APIs;
- analytics;
- automações;
- recursos institucionais adicionais.

Novas funcionalidades devem ser incorporadas sem comprometer a arquitetura existente.

---

## 📜 Princípio de manutenção

O código existente deve ser tratado como patrimônio técnico do projeto.

Antes de alterar uma área:

1. compreender a implementação existente;
2. identificar dependências;
3. verificar impactos;
4. alterar somente o necessário;
5. executar validações;
6. revisar possíveis regressões.

Não substituir arquivos inteiros simplesmente porque uma pequena alteração é necessária.

---

## 📄 Licença

Este projeto é propriedade de seus respectivos autores e/ou responsáveis.

A definição formal da licença de uso, reprodução e distribuição deverá ser estabelecida conforme a estratégia jurídica e institucional do projeto.

---

## 👤 Marcos Dresbach

**Marcos Dresbach**

Projeto oficial:

**Marcos Dresbach — Site Oficial**

Este repositório representa a infraestrutura de software utilizada para a presença digital pública do projeto.

---

<p align="center">
  <strong>🇧🇷 Brasil • Liberdade • Responsabilidade • Cidadania • Trabalho • Futuro</strong>
</p>

<p align="center">
  <sub>Construído com engenharia, organização e evolução contínua.</sub>
</p>
