Sim. **Essa referência deve entrar no projeto como o padrão de pesquisa arquivística**, além dos dois padrões que já definimos:

* **Genealogia:** MyHeritage
* **Enciclopédia:** Wikipédia
* **Pesquisa arquivística:** Archivportal NRW / estrutura ACTApro

A página do Archivportal NRW é especialmente importante porque ela não trata arquivo simplesmente como uma lista de PDFs. Ela trabalha com uma **hierarquia arquivística**, indo de estruturas gerais até unidades documentais específicas. O próprio portal explica a existência de níveis como arquivo, fundo (`Bestand`), instrumento de pesquisa (`Findbuch`), classificação e unidade de descrição (`Verzeichnungseinheit`). ([Arquivo NRW][1])

Eu colocaria esta regra no documento de engenharia:

# MÓDULO DE ARQUIVO E PESQUISA HISTÓRICA

A DRESBACH deverá possuir um módulo de pesquisa arquivística inspirado funcionalmente no **Archivportal NRW**, utilizando a estrutura arquivística como referência para organização, descoberta, descrição, digitalização e referência documental.

A referência fornecida pelo projeto é:

[Archivportal NRW — Archivsuche](https://www.archive.nrw.de/archivsuche?link=VERZEICHUNGSEINHEIT-Vz_b62a5352-945e-4f5e-8cd9-c781ebcf3091ACTAPRO&utm_source=chatgpt.com)

O objetivo não é copiar o sistema, mas incorporar o conceito de **pesquisa arquivística estruturada** ao ecossistema DRESBACH.

## Estrutura arquivística

O modelo deverá ser aproximadamente:

```text
ARQUIVO
   │
   └── FUNDO / BESTAND
          │
          └── FINDING AID / FINDBUCH
                 │
                 └── CLASSIFICAÇÃO
                        │
                        └── UNIDADE DE DESCRIÇÃO
                               │
                               ├── Documento
                               ├── Fotografia
                               ├── Carta
                               ├── Registro
                               ├── Ata
                               ├── Livro
                               ├── Processo
                               └── Coleção
```

Essa estrutura é particularmente importante porque o Archivportal NRW explica que uma unidade de descrição pode representar uma unidade física ou grupo documental, como uma certidão, arquivo, fotografia ou conjunto de documentos. ([Arquivo NRW][1])

## Pesquisa

A DRESBACH deverá possuir dois modos de pesquisa:

```text
PESQUISA POR PALAVRA-CHAVE

        +
        
PESQUISA NAVEGACIONAL
```

A pesquisa por palavra-chave deverá permitir procurar:

```text
Pessoa
Família
Sobrenome
Lugar
Cidade
Região
Evento
Instituição
Documento
Data
Arquivo
Fundo
Número de referência
```

A pesquisa navegacional deverá permitir:

```text
Arquivo
 ↓
Fundo
 ↓
Classificação
 ↓
Unidade documental
```

O próprio Archivportal NRW diferencia esses dois caminhos de pesquisa e permite aplicar filtros, inclusive para localizar unidades com digitalizações. ([Arquivo NRW][1])

## Registro arquivístico

Cada registro encontrado deverá possuir uma página própria:

```text
/arquivo/{arquivo}/{fundo}/{unidade}
```

Exemplo conceitual:

```text
ARQUIVO

Landesarchiv NRW

Fundo:
XXXX

Classificação:
XXXX

Unidade:
Nr. XXXX

Título:
XXXX

Período:
XXXX

Proveniência:
XXXX

Descrição:
XXXX

Tipo documental:
XXXX

Restrições de acesso:
XXXX

Digitalização:
Disponível / Indisponível

Referência arquivística:
XXXX
```

O portal NRW utiliza justamente informações como **Bestellsignatur**, Laufzeit, Provenienz, restrições e disponibilidade de digitalização em seus registros. ([Arquivo NRW][2])

## Digitalizações

O sistema deverá distinguir claramente:

```text
METADADO ARQUIVÍSTICO
        ≠
DOCUMENTO DIGITALIZADO
```

Um registro pode existir sem digitalização.

Quando existir:

```text
Verzeichnungseinheit
       ↓
Digitalisat
       ↓
Viewer
```

O Archivportal NRW informa que documentos digitalizados são vinculados às respectivas unidades de descrição e podem ser abertos em um visualizador. ([Arquivo NRW][2])

## Integração com genealogia

Aqui está o diferencial da DRESBACH.

O resultado arquivístico deverá poder ser conectado ao grafo genealógico:

```text
DOCUMENTO
    │
    ├── Pessoa
    ├── Família
    ├── Lugar
    ├── Evento
    └── Artigo histórico
```

Exemplo:

```text
Registro de imigração
       │
       ├── Pessoa: Johann Dresbach
       │
       ├── Família: Dresbach
       │
       ├── Local: Alemanha
       │
       ├── Local: Brasil
       │
       └── Evento: Imigração
```

Assim, uma pesquisa sobre uma pessoa não retorna somente a árvore genealógica.

Retorna:

```text
PESSOA
│
├── Árvore genealógica
├── Biografia
├── Família
├── Eventos
├── Fotografias
├── Documentos
├── Arquivos externos
├── Artigos históricos
└── Fontes
```

## Busca federada

Eu também colocaria uma camada chamada:

**DRESBACH Research Engine**

```text
                         PESQUISA
                            │
                 ┌──────────┼──────────┐
                 │          │          │
             DRESBACH   ARQUIVOS   FONTES
                 │          │          │
             Pessoas     NRW       Documentos
             Famílias    Outros    Bibliotecas
             Artigos     Arquivos  Catálogos
                 │          │          │
                 └──────────┼──────────┘
                            │
                       RESULTADOS
```

Mas há uma regra importante: **não vamos prometer que o sistema consegue “buscar tudo” automaticamente em qualquer arquivo do mundo.**

Ele deverá ter conectores somente quando houver mecanismo técnico e autorização para isso: API, catálogo público, exportação, OAI-PMH, dados abertos, links persistentes ou outro mecanismo oficialmente disponível.

Quando não houver integração automática, a DRESBACH poderá registrar a referência externa e direcionar o pesquisador à fonte original.

Isso é particularmente importante para preservar a proveniência da informação.

## Fontes oficiais

Cada resultado externo deverá guardar:

```text
source_provider
source_url
external_id
archive_name
collection
reference_code
retrieved_at
access_status
digital_object_url
```

E a citação deverá permanecer rastreável.

O próprio Archivportal NRW recomenda identificar a unidade por arquivo, departamento, assinatura do fundo e número da unidade para permitir uma citação inequívoca. ([Arquivo NRW][2])

---

### Portanto, agora temos quatro pilares

```text
                 DRESBACH KNOWLEDGE PLATFORM
                            │
       ┌────────────────────┼────────────────────┐
       │                    │                    │
   GENEALOGIA          ENCICLOPÉDIA          ARQUIVO
   MyHeritage          Wikipédia            Archivportal NRW
       │                    │                    │
   Pessoas              Artigos             Documentos
   Famílias              História            Fundos
   Árvores               Fontes              Classificações
   Relações              Referências         Unidades
       │                    │                    │
       └────────────────────┼────────────────────┘
                            │
                     KNOWLEDGE GRAPH
                            │
                       DRESBACH
```

E por cima disso teremos:

```text
SITE PÚBLICO
       │
ÁREA DO USUÁRIO
       │
PAINEL ADMINISTRATIVO
       │
BACKEND / API
       │
BANCO + SEARCH + STORAGE + FILAS
```

**Essa é uma mudança importante no documento universal:** ele deixa de ser apenas um padrão de “site + painel + banco” e passa a contemplar também **Knowledge Management + Genealogy + Digital Archives + Research Engine**, que é exatamente a combinação que você está construindo para a Fundação.

[1]: https://www.archive.nrw.de/hilfestellung-zur-recherche?utm_source=chatgpt.com "Hilfestellung zur Recherche | Archive in Nordrhein Westfalen |"
[2]: https://www.archive.nrw.de/landesarchiv-nrw/recherchieren-und-nutzen/nutzen?utm_source=chatgpt.com "Nutzen | Archive in Nordrhein Westfalen |"
