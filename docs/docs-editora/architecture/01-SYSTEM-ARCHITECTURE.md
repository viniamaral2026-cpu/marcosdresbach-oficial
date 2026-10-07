# Arquitetura do Sistema

## Decisão principal
Começar com um **modular monolith** em PHP 8.4. O domínio será dividido por módulos e preparado para extração futura.

## Topologia

Internet
→ Cloudflare/WAF opcional
→ Nginx
→ Next.js
→ API PHP
→ MariaDB
→ Redis
→ RabbitMQ
→ Workers

## VPS
A VPS executará:
- Nginx
- PHP-FPM
- aplicação PHP
- MariaDB
- Redis
- RabbitMQ
- workers
- armazenamento local/volume
- monitoramento

## phpMyAdmin
phpMyAdmin ficará protegido por autenticação e, preferencialmente, acesso restrito por VPN/IP allowlist. Não deve ser exposto publicamente sem proteção.

## Frontend
Next.js separado do backend.

## Backend
Camadas:
- Domain
- Application
- Infrastructure
- Presentation

## Dependências
Domain não conhece framework, banco, Stripe ou filesystem.
Infrastructure implementa ports.
Application orquestra casos de uso.
Presentation adapta HTTP para casos de uso.
