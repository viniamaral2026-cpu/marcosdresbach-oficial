# ADR-0054 — Neon PostgreSQL

O Neon será o banco relacional principal do Instituto.

Ele deverá armazenar os dados próprios da aplicação.

Organizar os domínios de maneira clara.

Principais domínios:

AUTH/USERS
- users
- profiles
- sessions_metadata
- user_preferences

MEMBERS
- members
- member_profiles
- regions
- nuclei
- designations
- referrals
- activities
- certificates

INSTITUTO
- institute_profile
- team
- projects
- institutional_documents
- transparency_records

CMS
- pages
- page_blocks
- page_versions
- menus
- menu_items
- banners
- publications
- scheduled_publications

CONTENT
- news
- events
- edicts
- documents
- categories
- tags

RESEARCH
- research_projects
- researchers
- studies
- research_articles
- research_sources

EDITORA
- books
- authors
- collections
- publications
- magazines
- manuscripts
- submissions

GENEALOGY
- persons
- families
- relationships
- genealogy_events
- genealogy_sources
- genealogy_documents
- locations

MEDIA
- media_assets
- media_folders
- media_metadata

AUDIT
- audit_logs
- permission_changes
- publication_logs

Não criar tabelas sem necessidade.

Não duplicar estruturas que já existam em módulos compartilhados.