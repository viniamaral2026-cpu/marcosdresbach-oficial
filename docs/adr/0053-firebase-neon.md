# ADR-0053 — Relação Firebase → Neon

Firebase Authentication é responsável pela identidade.

Neon PostgreSQL é responsável pelos dados da aplicação.

Nunca utilizar o Firebase UID como substituto de todo o modelo de usuário.

Criar uma relação consistente:

Firebase Authentication
        ↓
Firebase UID
        ↓
API Central
        ↓
User no PostgreSQL
        ↓
Profile / Member / Roles / Permissions

Exemplo conceitual:

users
- id
- firebase_uid
- email
- name
- status
- created_at
- updated_at

O firebase_uid deve possuir índice/constraint apropriado.

O e-mail não deve ser utilizado como chave primária do usuário.

A identidade principal da aplicação deve possuir ID interno próprio.