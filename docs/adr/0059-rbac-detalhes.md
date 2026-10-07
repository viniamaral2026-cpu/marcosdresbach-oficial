# ADR-0059 — Autorização

Firebase autentica.

A aplicação autoriza.

Não utilizar apenas:

if (userLoggedIn)

Criar RBAC.

Papéis previstos:

SUPER_ADMIN
ADMIN
EDITOR
ARCHIVIST
GENEALOGIST
RESEARCHER
PUBLISHER
MEMBER_MANAGER
MEMBER
AUTHOR
COLLABORATOR

Permissões devem ser granulares.

Exemplos:

site.pages.read
site.pages.create
site.pages.update
site.pages.publish

archive.article.read
archive.article.create
archive.article.update
archive.article.publish

genealogy.person.read
genealogy.person.create
genealogy.person.update

members.read
members.create
members.update
members.designate

admin.users.read
admin.users.update

audit.read

etc.

A API deve verificar autorização no backend.

Nunca confiar apenas na interface.