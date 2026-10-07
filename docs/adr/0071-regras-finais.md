# ADR-0071 — Regras de Execução

Não invente uma nova arquitetura.

Não crie outro sistema de autenticação.

Não crie outro banco principal.

Não coloque banco diretamente nos componentes.

Não permita acesso direto do frontend ao PostgreSQL.

Não misture AdminLayout com PublicLayout.

Não duplique dados sem motivo.

Antes de alterar qualquer decisão estrutural, consulte os ADRs.

Se surgir uma necessidade que contradiga esta arquitetura, documente a necessidade e crie/atualize o ADR correspondente antes de alterar a estrutura.

Implemente por dependências:

1. Firebase Authentication
2. modelo User no Neon
3. integração Firebase → API → Neon
4. autorização/RBAC
5. API protegida
6. Member Portal
7. Admin
8. módulos especializados
9. MediaWiki
10. testes
11. segurança
12. documentação

O resultado deve ser uma infraestrutura de dados real, funcional, segura e preparada para produção.
Não entregar mock, placeholder ou integração fictícia.