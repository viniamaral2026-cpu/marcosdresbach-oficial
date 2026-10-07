Exatamente. Agora a regra fica muito mais precisa: **não vamos usar “Wikipedia” e “FamilySearch/MyHeritage” apenas como inspiração visual; vamos definir esses produtos como referências funcionais para dois subsistemas diferentes.**

Consultei as referências que você passou. A página da Wikipédia mostra, por exemplo, uma estrutura de artigo com índice de conteúdo, seções hierárquicas, referências, bibliografia, ligações externas, histórico e ferramentas da página. ([Wikipédia][1]) Já o MyHeritage será a referência para a experiência de genealogia e árvore familiar. ([MyHeritage][2])

Eu colocaria esta seção diretamente no nosso documento-mãe:

# REGRA DE REFERÊNCIA FUNCIONAL DO PRODUTO

## 1. Referências oficiais de UX e arquitetura funcional

O produto deverá adotar duas referências funcionais distintas:

**Genealogia → MyHeritage**

[MyHeritage Brasil](https://www.myheritage.com.br/?utm_source=chatgpt.com)

**Enciclopédia e conhecimento → Wikipédia**

[Wikipédia — Brasil](https://pt.wikipedia.org/wiki/Brasil?utm_source=chatgpt.com)

Essas referências não significam cópia de código, marca, identidade visual ou conteúdo.

Significam que a experiência funcional deverá atingir nível equivalente de completude, organização e profundidade.

---

# 2. MÓDULO GENEALÓGICO — PADRÃO MYHERITAGE

O módulo de genealogia deverá ser projetado tendo o MyHeritage como principal referência funcional.

O sistema deverá permitir trabalhar com:

```text
PESSOA
│
├── Nome
├── Sobrenomes
├── Sexo
├── Data de nascimento
├── Local de nascimento
├── Data de falecimento
├── Local de falecimento
├── Fotografia
├── Biografia
├── Documentos
├── Fontes
├── Eventos
└── Relacionamentos
```

Relacionamentos:

```text
Pessoa
│
├── Pai
├── Mãe
├── Cônjuge
├── Filhos
├── Irmãos
├── Avós
├── Netos
└── Outros relacionamentos
```

A árvore genealógica deve ser **dados + relacionamento**, e não uma imagem estática.

```text
DATABASE
   ↓
RELATIONSHIPS
   ↓
GENEALOGY ENGINE
   ↓
TREE VIEW
```

Isso permitirá:

* expandir a árvore;
* navegar pelos ancestrais;
* navegar pelos descendentes;
* abrir uma pessoa;
* visualizar relacionamentos;
* adicionar pessoas;
* editar relacionamentos;
* visualizar eventos;
* associar documentos;
* associar fontes;
* pesquisar pessoas;
* localizar famílias.

---

# 3. PERFIL GENEALÓGICO

Cada pessoa deverá possuir uma página própria.

Exemplo:

```text
/familia/pessoa/maria-dresbach
```

Estrutura:

```text
PERFIL DA PESSOA

Nome completo

[Fotografia]

Informações pessoais
Nascimento
Falecimento
Locais

Família
Pais
Cônjuge
Filhos

Linha do tempo

Documentos

Fontes

Árvore familiar

Biografia

Pessoas relacionadas
```

A página da pessoa não deve duplicar dados existentes.

Ela consulta a entidade `Person`.

---

# 4. ÁRVORE GENEALÓGICA

A árvore deverá possuir uma interface própria.

```text
                    AVÔ
                     │
              ┌──────┴──────┐
              │             │
             PAI           TIO
              │
        ┌─────┴─────┐
        │           │
       EU          IRMÃO
        │
      FILHO
```

Deverá permitir:

* zoom;
* navegação;
* expansão;
* recolhimento;
* seleção;
* abertura do perfil;
* mudança de pessoa central;
* navegação por ancestralidade;
* navegação por descendência.

---

# 5. MODELO ENCICLOPÉDICO — PADRÃO WIKIPÉDIA

A parte histórica e cultural deverá seguir o paradigma funcional de uma enciclopédia.

A referência fornecida mostra uma estrutura com navegação, busca, índice de conteúdo, seções e subseções, referências, bibliografia, ligações externas, histórico e ferramentas da página. ([Wikipédia][1])

Portanto, nosso sistema deverá possuir:

```text
ARTIGO
│
├── Título
├── Resumo
├── Imagem principal
├── Infobox
├── Índice
├── Conteúdo
├── Seções
├── Subseções
├── Referências
├── Bibliografia
├── Fontes
├── Ligações relacionadas
└── Histórico
```

---

# 6. ARTIGOS SOBRE FAMÍLIAS

Exemplo:

```text
/Familias/Dresbach
```

Página:

```text
DRESBACH

Resumo

Origem

Etimologia

História

Origem geográfica

Migração

Brasil

Distribuição

Pessoas relacionadas

Árvore genealógica

Documentos históricos

Fontes

Referências

Artigos relacionados
```

O artigo deverá estar conectado ao banco genealógico.

Assim:

```text
ARTIGO "DRESBACH"
        │
        ├── Família Dresbach
        │
        ├── Pessoas
        │
        ├── Lugares
        │
        ├── Eventos
        │
        ├── Documentos
        │
        └── Fontes
```

---

# 7. WIKIPÉDIA + GENEALOGIA

Esta é uma característica fundamental do nosso sistema.

Não serão dois sistemas independentes.

Serão duas camadas sobre o mesmo modelo semântico.

```text
                 DRESBACH KNOWLEDGE GRAPH
                          │
             ┌────────────┴────────────┐
             │                         │
       GENEALOGIA                 ENCICLOPÉDIA
             │                         │
       Pessoas                    Artigos
       Famílias                   História
       Relações                   Cultura
       Eventos                    Lugares
       Documentos                 Fontes
             │                         │
             └────────────┬────────────┘
                          │
                    BANCO SEMÂNTICO
```

Por exemplo:

Um artigo sobre uma família pode apontar para a árvore daquela família.

Uma pessoa dentro da árvore pode apontar para o artigo histórico da família.

Um documento pode estar relacionado simultaneamente a:

* pessoa;
* família;
* local;
* evento;
* artigo.

---

# 8. REFERÊNCIA DE NAVEGAÇÃO ENCICLOPÉDICA

O sistema deverá possuir navegação semelhante ao modelo enciclopédico observado na Wikipédia:

```text
Busca
Categorias
Artigos
Histórico
Referências
Fontes
Artigos relacionados
```

A página deverá suportar conteúdo hierárquico:

```text
1. História

1.1 Origem

1.2 Migração

1.3 Brasil

1.3.1 Rio Grande do Sul

1.3.2 Santa Catarina

1.3.3 Paraná
```

Isso deverá ser armazenado semanticamente, e não apenas como HTML solto.

---

# 9. HISTÓRICO E VERSIONAMENTO

Artigos importantes deverão possuir histórico de alterações.

```text
ARTICLE
   │
   ├── VERSION 1
   ├── VERSION 2
   ├── VERSION 3
   └── CURRENT VERSION
```

Registrar:

* autor;
* editor;
* data;
* alteração;
* versão;
* justificativa quando aplicável.

O mesmo princípio poderá ser aplicado a registros genealógicos críticos.

---

# 10. FONTES E REFERÊNCIAS

Nenhuma informação histórica relevante deverá depender exclusivamente de geração automática por IA.

O sistema deverá diferenciar:

```text
INFORMAÇÃO
     ↓
FONTE
     ↓
DOCUMENTO
     ↓
REFERÊNCIA
```

A IA pode auxiliar na organização, mas a fonte deverá permanecer identificável.

---

# 11. REGRA PARA A IA DE DESENVOLVIMENTO

A IA responsável pela implementação deverá receber esta instrução:

> **O módulo genealógico deverá utilizar MyHeritage como referência funcional principal para experiência de árvore, pessoas, famílias, relacionamentos e navegação genealógica. O módulo enciclopédico deverá utilizar a Wikipédia como referência funcional para artigos, índice, seções, subseções, referências, fontes, histórico e navegação de conhecimento.**
>
> **Não copiar código, identidade visual, textos, imagens ou elementos protegidos. Reproduzir apenas os conceitos funcionais necessários, implementados com arquitetura, componentes, banco de dados e identidade próprios da DRESBACH.**

---

# 12. REGRA DE ARQUITETURA SEMÂNTICA

E esta é a regra que eu considero **mais importante de todas**:

> **A IA não deverá criar telas isoladamente.**

Antes de criar:

```text
PessoaPage
FamiliaPage
ArtigoPage
TreePage
DocumentoPage
```

deverá existir:

```text
Person
Family
Relationship
Article
Document
Source
Place
Event
```

E os relacionamentos:

```text
Person ↔ Family
Person ↔ Person
Person ↔ Place
Person ↔ Event
Person ↔ Document
Family ↔ Article
Family ↔ Place
Article ↔ Source
Article ↔ Document
Event ↔ Place
```

Assim conseguimos chegar ao que você está buscando:

**MyHeritage para a genealogia + Wikipédia para o conhecimento histórico + um modelo semântico próprio conectando tudo.**

E essa mesma regra pode permanecer no nosso **documento universal de engenharia**, para que qualquer produto futuro consiga ativar esses módulos sem transformar o projeto em um conjunto de telas desconectadas.

Sim. Essa captura deixa muito mais claro o que você quer como **padrão funcional do módulo genealógico**. A referência não é apenas “ter uma árvore”; é reproduzir a profundidade operacional desse tipo de experiência, com identidade visual própria da DRESBACH.

O que devemos registrar no documento de engenharia é isto:

### Padrão Genealógico — DRESBACH

A área de genealogia deverá possuir uma interface de árvore interativa composta por três áreas principais:

```text
┌──────────────────────────────────────────────────────────────┐
│                    NAVEGAÇÃO PRINCIPAL                       │
├──────────────────────────────────────────────────────────────┤
│ Breadcrumb / Família / Pessoa / Modos de visualização        │
├───────────────────┬──────────────────────────────────────────┤
│                   │                                          │
│ PAINEL DA PESSOA  │          ÁRVORE GENEALÓGICA              │
│                   │                                          │
│ Foto              │        ┌──────────┐   ┌──────────┐       │
│ Nome              │        │   PAI    │   │   MÃE    │       │
│ nascimento        │        └────┬─────┘   └────┬─────┘       │
│                   │             │                │            │
│ Perfil            │          ┌───────────────────┐           │
│ Editar            │          │      PESSOA       │           │
│ Adicionar         │          └─────────┬─────────┘           │
│ Mais              │                    │                     │
│                   │              ┌─────┴─────┐               │
│ Fotos e vídeos    │              │  FILHOS   │               │
│ Biografia         │              └───────────┘               │
│ Família imediata  │                                          │
│ Fatos             │                                          │
│                   │                                          │
└───────────────────┴──────────────────────────────────────────┘
```

A captura mostra elementos que precisam entrar no requisito funcional:

**Pessoa central**

A pessoa selecionada deve possuir:

* fotografia;
* nome;
* indicação de que é a pessoa atualmente selecionada;
* data/ano de nascimento;
* idade quando calculável;
* perfil;
* edição;
* adição de familiares;
* menu de ações adicionais.

**Painel lateral contextual**

O painel esquerdo deve mudar conforme a pessoa selecionada.

Deve permitir acessar:

* Perfil;
* Editar;
* Adicionar;
* Mais;
* Fotos e vídeos;
* Biografia;
* Família imediata;
* Fatos/eventos;
* documentos;
* fontes;
* informações adicionais.

Isso é importante: **não devemos criar um painel lateral genérico**. Ele é um painel contextual da entidade `Person`.

### Árvore

A árvore deverá ser dinâmica.

Cada pessoa será um nó:

```text
PersonNode
├── personId
├── name
├── surname
├── photo
├── birthDate
├── deathDate
├── gender
├── relationship
└── actions
```

O nó deverá permitir:

```text
Adicionar pai
Adicionar mãe
Adicionar cônjuge
Adicionar filho
Adicionar irmão
Editar pessoa
Abrir perfil
```

Os botões `+` não são meramente visuais. Cada ação deverá abrir um fluxo de criação de relacionamento.

Por exemplo:

```text
Adicionar pai
      ↓
Localizar pessoa existente?
      ├── Sim → vincular pessoa
      └── Não → criar nova pessoa
```

Isso evita duplicação de indivíduos.

### Controles da árvore

A experiência deverá contemplar controles equivalentes aos observados na referência:

* número de pessoas exibidas;
* gerações;
* localizar pessoa;
* configurações da árvore;
* ajuda;
* diferentes modos de visualização;
* zoom;
* aproximação;
* afastamento;
* centralização;
* navegação;
* tela cheia;
* retorno ao centro.

A implementação deverá utilizar um **Genealogy Tree Engine** próprio.

```text
GenealogyTreeEngine
        │
        ├── loadTree()
        ├── expandPerson()
        ├── collapsePerson()
        ├── centerOnPerson()
        ├── changeGenerations()
        ├── addRelationship()
        ├── removeRelationship()
        └── navigateToPerson()
```

### Regra fundamental do banco

A árvore não será armazenada como uma estrutura gráfica.

Ela será reconstruída a partir dos relacionamentos:

```text
people
   │
   ├── parent_child_relationships
   │
   ├── spouse_relationships
   │
   ├── sibling_relationships
   │
   ├── events
   │
   ├── places
   │
   ├── documents
   │
   └── sources
```

Depois:

```text
Maria
  ↓
Relationship Engine
  ↓
Genealogy Tree Engine
  ↓
Árvore visual
```

Isso é essencial para que a mesma pessoa possa aparecer em diferentes árvores, pesquisas e artigos sem criar cópias.

### E a parte mais importante para o nosso projeto

A **árvore genealógica e a enciclopédia devem conversar entre si**.

Exemplo:

```text
Pessoa
  ↓
Família
  ↓
Artigo histórico da família
  ↓
Origem
  ↓
Localidade
  ↓
Migração
  ↓
Documentos históricos
  ↓
Fontes
```

Então, quando alguém estiver visualizando uma pessoa, poderá encontrar:

**Genealogia**
→ pais, filhos, cônjuge, ancestrais, descendentes.

**História**
→ família, sobrenome, origem, imigração e acontecimentos.

**Documentos**
→ registros associados.

**Fontes**
→ comprovação documental.

**Artigos**
→ conteúdo enciclopédico relacionado.

Essa captura, portanto, deve entrar no documento como **referência funcional do módulo Genealogia**, enquanto a referência da Wikipédia fica responsável pelo **módulo Enciclopédia/Conhecimento**.

E a identidade visual, marca, componentes e código serão **DRESBACH**, não uma cópia da interface da referência.


[1]: https://pt.wikipedia.org/wiki/Brasil "Brasil – Wikipédia, a enciclopédia livre"
[2]: https://www.myheritage.com.br/ "www.myheritage.com.br"
