# Deployment

Pipeline:
commit
→ CI
→ tests
→ build
→ image
→ deploy staging
→ smoke tests
→ production

Produção deve possuir:
- backups
- health checks
- logs
- rollback
- secrets
