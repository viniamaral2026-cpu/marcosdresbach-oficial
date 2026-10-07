# ADR-0002 — Monorepo Modular

## Decisão

Utilizar um único repositório contendo múltiplas aplicações.

apps/
packages/
services/
database/
docs/
tests/

## Motivo

Permite:

- compartilhar componentes;
- compartilhar tipos;
- compartilhar Design System;
- compartilhar autenticação;
- compartilhar cliente API;
- compartilhar validações;
- compartilhar configurações;
- manter módulos isolados.

## Regra

Não criar repositórios independentes para cada módulo.

Não duplicar infraestrutura.