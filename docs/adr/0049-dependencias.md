# ADR-0049 — Dependências entre Módulos

Nenhum módulo pode importar internamente outro módulo.

Somente:

packages públicos
interfaces
API
contratos

podem ser compartilhados.

Proibido criar dependências circulares.