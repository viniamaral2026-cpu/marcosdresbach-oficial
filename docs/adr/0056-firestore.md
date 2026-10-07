# ADR-0056 — Firestore

Firestore NÃO é o banco relacional principal.

Somente utilizar Firestore quando houver uma necessidade específica, por exemplo:

- dados altamente dinâmicos;
- funcionalidades realtime;
- sincronizações específicas;
- recursos que realmente se beneficiem do modelo NoSQL.

Não copiar automaticamente os registros do PostgreSQL para Firestore.

Não manter duas fontes de verdade para o mesmo dado.

Para cada entidade deve existir uma fonte oficial.