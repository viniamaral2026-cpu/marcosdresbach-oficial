# ADR — Decisões Arquiteturais

## ADR-001 — MariaDB
Escolha: MariaDB na VPS.
Motivo: operação local, controle do ambiente e simplicidade de infraestrutura.

## ADR-002 — phpMyAdmin
Escolha: usar apenas para administração operacional/manual.
Motivo: não misturar ferramenta administrativa com camada de aplicação.

## ADR-003 — Stripe
Escolha: Stripe como gateway de pagamentos.
Motivo: checkout, Payment Intents, webhooks, refunds e recursos antifraude.

## ADR-004 — Modular Monolith
Escolha: modular monolith no início.
Motivo: menor custo operacional e fronteiras de domínio claras.

## ADR-005 — Uma identidade por usuário
Leitor e escritor usam o mesmo `users.id`.
Motivo: evita contas duplicadas e permite ativação posterior.

## ADR-006 — Webhook como fonte de verdade
Estado final do pagamento não deve depender somente do retorno do browser.
