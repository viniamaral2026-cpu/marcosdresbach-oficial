# Guia de Deploy — DRESBACH Editora

## Ambientes

```text
O projeto possui três ambientes principais:

1. DEVELOPMENT  → Ambiente de desenvolvimento local
2. STAGING      → Ambiente de homologação (aprovação antes de produção)
3. PRODUCTION   → Ambiente de produção "real"
```

### Configuração por Ambiente

```text
Cada ambiente deve possuir configurações isoladas:

.benvariables:

  DEVELOPMENT:
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=editora_dresbach
    DB_USERNAME=editora_dresbach_app
    DB_PASSWORD=senha_desenvolvimento
    STRIPE_MODE=test
    NODE_ENV=development
    APP_URL=http://localhost:3000
    
  STAGING:
    DB_HOST=staging-db.example.com
    DB_PORT=3306
    DB_DATABASE=editora_dresbach
    DB_USERNAME=editora_dresbach_app
    DB_PASSWORD=senha_staging (injeção via secret manager)
    STRIPE_MODE=test
    NODE_ENV=staging
    APP_URL=http://staging.dresbach.com
    
  PRODUCTION:
    DB_HOST=prod-db.example.com
    DB_PORT=3306
    DB_DATABASE=editora_dresbach
    DB_USERNAME=editora_dresbach_app
    DB_PASSWORD=senha_producao (via HashiCorp Vault/AWS Secrets Manager)
    STRIPE_MODE=live
    NODE_ENV=production
    APP_URL=https://dresbach.com
```

## Docker Deploy

```text
Estrutura de containers recomendada:

docker-compose.yml (desenvolvimento/local):
services:
  db:
    image: mariadb:11.8
    container_name: mxq-editorial-mariadb
    restart: unless-stopped
    environment:
      MARIADB_DATABASE: editora_dresbach
      MARIADB_USER: editora_dresbach_app
      MARIADB_PASSWORD: ${DB_PASSWORD}
    volumes:
      - db_data:/var/lib/mysql
    ports:
      - "3306:3306"
    command: --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:7-alpine
    container_name: mxq-editorial-redis
    restart: unless-stopped
    ports:
      - "6379:6379"

  rabbitmq:
    image: rabbitmq:3-management
    container_name: mxq-editorial-rabbitmq
    restart: unless-stopped
    ports:
      - "5672:5672"
      - "15672:15672"

  api:
    build: ./services/editorial
    container_name: mxq-editorial-api
    restart: unless-stopped
    depends_on:
      - db
      - redis
      - rabbitmq
    environment:
      DB_HOST: db
      DB_PORT: 3306
      DB_DATABASE: editora_dresbach
      DB_USERNAME: editora_dresbach_app
      DB_PASSWORD: ${DB_PASSWORD}
    ports:
      - "8000:8000"

  nginx:
    image: nginx:alpine
    container_name: mxq-editorial-nginx
    restart: unless-stopped
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - ./ssl:/etc/nginx/ssl:ro
    ports:
      - "80:80"
      - "443:443"

volumes:
  db_data:

Arquivo .env (nunca commitar):
  # Este arquivo deve estar no .gitignore
  DB_PASSWORD=minhasenha
  # Outras vars...
```

### Dockerfile (exemplo para service)

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder /app/package*.json ./
RUN npm install --production-only
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
USER appuser
EXPOSE 3000
CMD ["node", "server.js"]
```

## Deploy via GitHub Actions

```name: CI/CD Pipeline
on:
  push:
    branches: [main, staging]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm test
      - run: npm run build

  security-scan:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - run: npm run security-scan

  deploy:
    needs: security-scan
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to staging
        run: |
          ssh ${{ secrets.SERVER_USER }}@${{ secrets.SERVER_IP }} << 'EOF'
          cd /opt/dresbach
          git pull origin staging
          docker compose -f docker-compose.staging.yml up -d
          EOF

  staging-deploy:
    needs: test
    if: github.ref == 'refs/heads/staging'
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy em staging"
```

## Passos de Deploy Produção

```text
1. Backup do banco de dados atual (se houver dados)
   mysqldump -u editora_dresbach_app -p editora_dresbach > backup_$(date +%F).sql

2. Executar migrations novas
   npx prisma migrate deploy  # ou equivalent

3. Verificar schema do banco
   npx prisma migrate status

4. Reiniciar containers
   docker compose down
   docker compose up -d --build

5. Validar healthchecks
   curl -f http://localhost:8000/health || exit 1

6. Testar endpoints críticos
   - GET /api/v1/health
   - POST /api/v1/auth/login (com credenciais de teste)
   - GET /api/v1/books (catálogo público)
   - Verificar conexão com banco

7. Verificar logs de erro
   docker logs mxq-editorial-api --tail=50

8. Verificar métricas
   - API latency
   - Database connection count
   - Queue depth (RabbitMQ)
   - Error rates

9. Notificar equipe
   - Slack/Teams #deploy-notifications
   - Email crítico se houver falha
```

## Healthchecks

```text
Endpoint obrigatório em todos os serviços:

GET /health
# Ou POST /health

Retorno esperado:
{
  "status": "healthy",
  "database": "connected",
  "queue": "connected",  # se applicable
  "timestamp": "ISO datetime",
  "version": "1.0.0"
}

Status codes possíveis:
200 - Healthy (todos os serviços OK)
503 - Unhealthy (qualquer dependência falha)

Monitoramento:
- Prometheus scrapes /health endpoint
- Alertas se healthcheck falhar por 3 minutos consecutivos
- Grafana dashboards com métricas de saúde
```

## Rollback Strategy

```text
Se deploy falhar ou causar regressão:

1. Identificar o problema rapidamente
2. Aplicar rollback para versão anterior:
   docker compose up -d --force-recreate <service_name>@<tag_anterior>
   
3. Restaurar banco se houver migration problemática:
   npx prisma migrate rollback <step>

4. Verificar healthchecks após rollback
5. Comunicar stakeholders
6. Analisar causa raiz e melhorar processo

Rollback should be achievable within 15-30 minutes.
```

## Monitoramento e Observabilidade

```text
Métricas essenciais:

Taxa de erro API: erros totais / requisições totais
Latência média API: tempo médio de resposta
Taxa de conexão banco: conexões ativas / máximo permitido
Depth fila RabbitMQ: mensagens aguardando processamento
Taxa de sucesso payment: pagamentos bem-sucedidos / totais
Latência webhook: tempo desde recebimento até processamento

Ferramentas:
- Prometheus + Grafana para métricas
- OpenTelemetry para tracing distribuído
- Sentry para erro tracking
- Logs estruturados em arquivo/ELK

Logging estruturado (exemplo JSON):
{
  "timestamp": "2026-10-01T10:30:00Z",
  "level": "INFO",
  "service": "dresbach-editorial",
  "endpoint": "/api/v1/books",
  "method": "GET",
  "user_id": "user_123",
  "trace_id": "trace_abc123",
  "status_code": 200,
  "response_time_ms": 145
}

NUNCA logar:
- Senhas completas
- Números de cartão de crédito
- Chaves secretas Stripe
- Dados sensíveis do usuário em plain text
}