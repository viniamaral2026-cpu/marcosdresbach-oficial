# Banco de Dados — MariaDB

## Princípios
- InnoDB
- UTF8MB4
- foreign keys
- índices explícitos
- migrations versionadas
- timestamps UTC no banco quando possível
- soft delete apenas quando fizer sentido
- nenhuma regra crítica somente em trigger

MariaDB roda na VPS. phpMyAdmin é apenas interface de administração.

## Separação
Banco da aplicação e banco/credenciais de administração devem seguir menor privilégio.
