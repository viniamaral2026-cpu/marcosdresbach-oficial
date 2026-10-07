# ADR-0003 — Separação das Aplicações

## Aplicações

apps/public-site
apps/public-acervo
apps/public-genealogia
apps/public-editora
apps/public-pesquisa
apps/member-portal
apps/auth
apps/admin

## Regra

Cada aplicação possui:

- rotas;
- layouts;
- componentes locais;
- serviços;
- tipos;
- estilos;
- assets;

mas pode importar recursos públicos dos packages compartilhados.

## Proibição

Não colocar todas as aplicações dentro de:

src/app