# ADR-0009 — Isolamento Administrativo

O Admin é uma aplicação independente.

O Admin não aparece no:

- header público;
- footer público;
- menu público;
- sitemap público;
- navegação do usuário comum.

A existência do Admin não depende de esconder links.

Ele deverá possuir autenticação e autorização próprias.