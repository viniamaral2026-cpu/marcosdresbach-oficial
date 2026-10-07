# Migrations e Seed

Toda alteração estrutural deve ser migration versionada.

Pipeline:
1. criar migration
2. executar localmente
3. executar testes
4. aplicar staging
5. backup
6. aplicar produção
7. validar schema

Seeds:
- roles
- permissions
- categorias iniciais
- produtos de impressão
- configurações públicas

Nunca usar seed destrutivo em produção.
