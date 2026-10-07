# ADR-0064 — Repositories

A aplicação não deverá espalhar SQL diretamente pelos componentes.

Utilizar:

Repository
Service
Use Case
Domain

Exemplo:

UserRepository
MemberRepository
PageRepository
GenealogyPersonRepository
BookRepository

O frontend nunca deve conhecer detalhes de PostgreSQL.