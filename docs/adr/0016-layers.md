# ADR-0016 — Layers

Separar:

Presentation
Application
Domain
Infrastructure
Persistence

Componentes não devem conter regra de negócio complexa.

Controllers não devem conter regra de domínio.

Banco não deve conter lógica de apresentação.