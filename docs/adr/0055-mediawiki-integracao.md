# ADR-0055 — Integração MediaWiki

O Acervo institucional utiliza MediaWiki como motor especializado.

Arquitetura:

Astro
↓
API/Adapter
↓
MediaWiki
↓
Banco próprio do MediaWiki

O frontend NÃO deverá acessar diretamente o banco do MediaWiki.

Não implementar novamente funcionalidades que o MediaWiki já fornece, como:

- histórico de revisões;
- páginas;
- categorias;
- versões;
- usuários próprios do MediaWiki, quando aplicável;
- mecanismos internos de edição.

Criar uma camada Adapter/Service para integração.

Exemplo:

packages/
└── archive-client/

ou

services/
└── mediawiki/

A aplicação deve abstrair a comunicação com MediaWiki.