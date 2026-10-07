# PRD — DRESBACH EDITORA

## 1. Visão
A DRESBACH EDITORA é uma plataforma editorial que conecta leitores, escritores, produção sob demanda, vendas, pagamentos e distribuição.

## 2. Personas
- Leitor
- Escritor
- Escritor candidato/pendente
- Editor
- Operador de produção
- Financeiro
- Suporte
- Administrador
- Superadministrador

## 3. Princípio de onboarding
O cadastro pergunta explicitamente:

**Como você pretende utilizar a DRESBACH?**
- Quero ler e comprar livros
- Quero publicar livros

A escolha não concede automaticamente permissões editoriais. Ela define o onboarding.

### Leitor
Recebe:
- catálogo
- favoritos
- carrinho
- pedidos
- pagamentos
- perfil
- endereços
- avaliações
- suporte

### Escritor
Recebe o mesmo núcleo do leitor e um fluxo de ativação de escritor:
- candidatura/ativação
- dados editoriais
- dados de pagamento
- catálogo autoral
- livros
- manuscritos
- capas
- royalties
- serviços editoriais

As funcionalidades editoriais permanecem bloqueadas até `writer_profile.status = ACTIVE`.

## 4. Objetivos
- permitir cadastro simples;
- permitir ativação de escritor sem criar uma segunda conta;
- publicar livros;
- vender livros;
- processar pagamentos via Stripe;
- controlar pedidos;
- preparar integração POD;
- manter dados em MariaDB local na VPS;
- possuir administração completa.

## 5. Não objetivos do MVP
- fabricar livros internamente;
- construir um ERP contábil completo;
- marketplace aberto de terceiros sem moderação;
- microsserviços distribuídos desde o primeiro release.
