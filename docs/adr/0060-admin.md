# ADR-0060 — Administração

O painel administrativo é um ambiente protegido.

Rotas:

/admin
/admin/dashboard
/admin/site
/admin/acervo
/admin/genealogia
/admin/editora
/admin/pesquisa
/admin/membros
/admin/comunicacao
/admin/midia
/admin/relatorios
/admin/usuarios
/admin/configuracoes
/admin/auditoria

O administrador deve autenticar utilizando o mesmo Firebase Authentication.

Porém, depois da autenticação, a API deve verificar:

- Firebase UID;
- usuário existente no Neon;
- status da conta;
- roles;
- permissions;
- módulo autorizado.

Um usuário comum não deve acessar o painel administrativo apenas porque está autenticado.