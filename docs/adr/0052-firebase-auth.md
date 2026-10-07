# ADR-0052 — Firebase Authentication

Todo login do ecossistema deverá utilizar Firebase Authentication.

Implementar:

- cadastro;
- login;
- logout;
- verificação de e-mail;
- recuperação de senha;
- redefinição de senha;
- sessão autenticada;
- persistência de sessão;
- proteção contra acesso não autenticado;
- tratamento de sessão expirada;
- tratamento de conta desabilitada;
- identificação única do usuário através do Firebase UID.

Rotas:

/login
/cadastro
/cadastro/sucesso
/verificar-email
/esqueci-senha
/redefinir-senha
/confirmar-conta
/sessao-expirada
/acesso-negado

O usuário deverá possuir uma única identidade de autenticação.

NÃO criar login independente para:

- Acervo;
- Genealogia;
- Editora;
- Pesquisa;
- Área do membro;
- Administração.

Todos utilizam a mesma identidade Firebase.