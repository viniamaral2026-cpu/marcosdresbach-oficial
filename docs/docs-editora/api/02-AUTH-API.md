# Auth API

POST /auth/register
POST /auth/login
POST /auth/logout
POST /auth/refresh
POST /auth/verify-email
POST /auth/forgot-password
POST /auth/reset-password
GET /me

POST /writer/activation
GET /writer/activation
PATCH /writer/activation
POST /writer/activation/submit

O backend deve impedir acesso editorial quando writer profile não estiver ACTIVE.
