# DRESBACH

## Livro de Engenharia de Software

### Arquitetura, Produto, Domínio, Dados, APIs, Segurança, Infraestrutura, POD e Operações

**Versão:** 1.0  
**Status:** Engineering Master Document  
**Data:** 2026-10-01  
**Projeto:** DRESBACH Editora  
**Formato:** A5 (148 × 210 mm)  
**Orientação:** Retrato  

---
CAPA
---
TÍTULO
# DRESBACH

## Livro de Engenharia de Software

### Arquitetura, Produto, Domínio, Dados, APIs, Segurança, Infraestrutura, POD e Operações

Subtítulo
Livreira técnica completa que especifica a concepção, projeto, construção, teste, proteção, implantação, operação, monitoramento e evolução da plataforma DRESBACH desde o zero até uma plataforma de produção.

---
AUTOR / RESPONSÁVEL
Equipe DRESBACH — Arquiteto de Software Principal, Engenheiro Sênior, Arquiteto de Produto, Arquiteto de Segurança, Engenheiro DevOps e Technical Writer

---
ÍNDICE
...
PARTE I — FUNDAMENTOS DO PROJETO
---
CAPÍTULO 1 — APRESENTAÇÃO DA DRESBACH
...

(ESTRUTURA DO LIVRO CONTINUA...)
---
PARTE II — FASE ZERO
---
CAPÍTULO 3 — DESCOBERTA E ENGENHARIA INICIAL

Documentação da fase anterior ao desenvolvimento.

Incluir:
- descoberta do problema;
- levantamento de requisitos;
- entrevistas;
- personas;
- jornada do usuário;
- análise de stakeholders;
- requisitos funcionais;
- requisitos não funcionais;
- restrições;
- premissas;
- riscos;
- dependências;
- critérios de sucesso.

Criar uma matriz:
ID	Requisito	Tipo	Prioridade	Origem	Status

CAPÍTULO 4 — PERSONAS

Documentar profundamente:

Leitor
Escritor
Administrador
Freelancer
Profissional editorial
Operador de produção
Parceiro gráfico
Equipe financeira

Para cada persona explicar:
- objetivo;
- necessidades;
- permissões;
- jornada;
- funcionalidades;
- riscos;
- informações acessíveis.

CAPÍTULO 5 — JORNADAS DOS USUÁRIOS

Documentar jornadas completas.

Exemplo:

Cadastro
↓
Conta criada
↓
Leitor
↓
Solicitação de escritor
↓
Ativação
↓
Dashboard de escritor
↓
Criação do livro
↓
Upload
↓
Validação
↓
Revisão
↓
Publicação
↓
Venda
↓
Produção
↓
Entrega
↓
Royalty

Faça o mesmo para:
- leitor;
- escritor;
- administrador;
- freelancer;
- gráfica.

---
PARTE III — MODELAGEM DO PRODUTO
---
CAPÍTULO 6 — PERSONAS

Documentar profundamente as personas do sistema DRESBACH.

LEITOR
- Objetivo: Descobrir e comprar livros que correspondam aos seus interesses.
- Necessidades: Catálogo pesquisável, busca avançada, filtros, detalhes do livro, bio do autor, avaliações, carrinho, checkout, favoritos, perfil, endereços, pedidos.
- Permissões: Acessar catálogo, buscar livros, visualizar detalhes, adicionar ao carrinho, comprar, avaliar, ver perfil, ver pedidos.
- Jornada: Landing page → Busca → Filtro → Detalhe do livro → Carrinho → Checkout → Pagamento → Recebimento → Avaliação.
- Funcionalidades: Busca por título/autor/gênero/filtros, favoritos, comparação, recomendações, avaliações, perfil com endereços, histórico de compras.
- Riscos: Dificuldade de descoberta, livros não encontrados, problemas de pagamento.
- Informações acessíveis: Bio do autor, avaliações, detalhes técnicos, amostras.

ESCRITOR
- Objetivo: Publicar e vender livros através da plataforma.
- Necessidades: Ativação de perfil, wizard de publicação, upload de PDF, validação, precificação, especificação física, visualização de vendas e royalties, painel de controle.
- Permissões: Acessar dashboard, criar/editar livros, upload de arquivos, consultar royalties, solicitar serviços editoriais.
- Jornada: Cadastro → Leitor ativo → Selecionar "Quero publicar" → WRITER_PENDING → Aprovação → WRITER_ACTIVE → Novo livro → Upload PDF → Validação → Precificação → Submissão → Revisão → Publicado → Vendas → Royalties.
- Funcionalidades: Perfil de escritor, wizard de publicação, upload de manuscrito/capa, validação PDF, precificação automática, dashboard de vendas, royalties, serviços editoriais.
- Riscos: Rejeição durante ativação, validação de PDF falha, precificação inadequada, baixas vendas.
- Informações acessíveis: Status da ativação, painel de controle, estatísticas de vendas.

ADMINISTRADOR
- Objetivo: Operar a plataforma DRESBACH como um todo.
- Necessidades: Gestão de usuários, gestão de escritores, gestão de livros, gestão de pedidos, gestão de pagamentos, gestão de gráficas, relatórios, CMS, configurações.
- Permissões: Acessar todas as áreas, modificar configurações, gerenciar usuários, visualizar relatórios.
- Jornada: Login → Dashboard → Usuários → Escritores → Livros → Pedidos → Pagamentos → Produção → CMS → Configurações.
- Funcionalidades: Painel administrativo, gestão completa, relatórios, CMS, configurações, auditoria.
- Riscos: Erro de configuração, dados inconsistentes, falhas de segurança.
- Informações acessíveis: Todos os relatórios, configurações, lista de usuários.

FREELANCER
- Objetivo: Oferecer serviços editoriais na plataforma.
- Necessidades: Cadastro de perfil, portfólio, disponibilidade, precificação, pedidos, comunicação, entrega, avaliação.
- Permissões: Acessar painel de freelancer, gerenciar serviços, receber pedidos, enviar entregas, receber pagamentos.
- Jornada: Cadastro → Perfil com portfólio → Listar serviços → Receber pedido de serviço → Executar serviço → Entregar → Receber aprovação → Pagamento.
- Funcionalidades: Perfil com portfólio, lista de serviços, disponibilidade, precificação, mensageria com autor, entrega de arquivos, recebimento de pagamento.
- Riscos: Falta de disponibilidade, qualidade do serviço, disputa de pagamento.
- Informações acessíveis: Portfólio, disponibilidade, status dos pedidos, histórico de pagamentos.

PROFISSIONAL EDITORIAL
- Objetivo: Prestar serviços editoriais para autores.
- Necessidades: Cadastro, ofertas de serviços, comunicação com autor, entrega, aprovação, pagamento.
- Permissões: Acessar painel editorial, gerenciar solicitações, enviar entregas, receber pagamentos.
- Jornada: Cadastro → Oferecer serviços → Autor solicita serviço → Aceitar → Executar → Entregar → Aprovar → Receber.
- Funcionalidades: Catálogo de serviços, comunicação com autor, entrega de arquivos, aprovação, recebimento.
- Riscos: Desacordo sobre entregas, pagamento não recebido.
- Informações acessíveis: Solicitações, status, pagamentos.

OPERADOR DE PRODUÇÃO
- Objetivo: Gerenciar a produção dos livros impressos.
- Necessidades: Fila de produção, seleção de gráfica, acompanhamento, qualidade, embalagem, expedição.
- Permissões: Acessar painel de produção, ver fila, atribuir gráfica, atualizar status, cancelar.
- Jornada: Receber ordem de produção → Selecionar gráfica → Iniciar produção → Controle de qualidade → Embalar → Expedição → Entregue.
- Funcionalidades: Fila de print jobs, seleção de provedor, acompanhamento de produção, qualidade, rastreamento.
- Riscos: Falha da gráfica, atraso na produção, erro de qualidade.
- Informações acessíveis: Fila, status dos jobs, gráficas disponíveis.

CAPÍTULO 7 — JORNADAS DOS USUÁRIOS

Documentar jornadas completas.

LEITOR:
Cadastro
↓
Conta criada
↓
Explorar catálogo
↓
Busca por título/autor/gênero
↓
Aplicar filtros (formato, preço, páginas)
↓
Visualizar detalhes do livro
↓
Ver bio do autor
↓
Adicionar ao carrinho
↓
Finalizar checkout
↓
Payment via Stripe
↓
Webhook payment confirmado
↓
Order = PAID
↓
Print Job creation
↓
Production
↓
Quality Control
↓
Packaging
↓
Shipment
↓
Delivered
↓
Receber royalty (escritor)

ESCRITOR:
Cadastro
↓
Selecionar "Quero publicar"
↓
WRITER_PENDING
↓
Ativação interna
↓
UNDER_REVIEW
↓
ACTIVE
↓
Dashboard escritor
↓
Novo livro
↓
Preencher metadados
↓
Upload PDF miolo
↓
Validação automática
↓
Especificações físicas
↓
Precificação (calculadora DRESBACH)
↓
Submeter para revisão
↓
Revisão (Under Review)
↓
Aprovado
↓
Publicado
↓
Vendas no Store
↓
Print Job creation
↓
Produção
↓
Entrega
↓
Royalty

ADMINISTRADOR:
Login
↓
Dashboard
↓
Gestão de usuários
↓
Gestão de escritores
↓
Gestão de livros
↓
Gestão de pedidos
↓
Gestão de pagamentos
↓
Gestão de produção
↓
CMS
↓
Configurações
↓
Relatórios

FAZENTE:
Receber ordem de produção
↓
Selecionar gráfica
↓
Iniciar produção
↓
Controle de qualidade
↓
Embalar
↓
Expedição
↓
Entregue

FREELANCER:
Cadastro
↓
Perfil com portfólio
↓
Listar serviços oferecidos
↓
Receber pedido de serviço
↓
Aceitar pedido
↓
Executar serviço
↓
Entregar ao autor
↓
Aprovação do autor
↓
Receber pagamento

---
PARTE IV — REQUISITOS
---
CAPÍTULO 6 — REQUISITOS FUNCIONAIS

Documentar todos os requisitos.

Usar identificadores:
FR-001
FR-002
FR-003
...

Para cada requisito:
- descrição;
- ator;
- pré-condições;
- fluxo principal;
- fluxos alternativos;
- exceções;
- pós-condições;
- dependências;
- critérios de aceitação.

Exemplos:

FR-001: Como escritor, eu quero me cadastrar na plataforma para obter uma conta de escritor.
FR-002: Como leitor, eu quero buscar livros por título, autor ou categoria.
FR-003: Como escritor, eu quero uploadar o PDF do meu livro para validação estrutural.
...
FR-100: Como websocket, eu quero receber eventos de status da produção.

CAPÍTULO 7 — REQUISITOS NÃO FUNCIONAIS

Documentar:

- performance;
- disponibilidade;
- escalabilidade;
- segurança;
- observabilidade;
- acessibilidade;
- compatibilidade;
- manutenção;
- backup;
- recuperação;
- auditoria;
- privacidade;
- LGPD;
- disaster recovery.

Exemplos:

NF-001: O sistema deverá suportar até 1000 escritores ativos simultâneos.
NF-002: O tempo de resposta da API não deverá exceder 200ms para 95% das requisições.
NF-003: O sistema deverá ter disponibilidade de 99.9% ao mês.
NF-004: Todos os dados sensíveis deverão ser criptografados em repouso.
NF-005: O sistema deverá ser compatível com a legislação LGPD.
NF-006: Backups diários com teste de restauração mensal.
NF-007: O sistema deverá processar no máximo 500 pedidos por hora.
NF-008: A API deverá rate limit de 100 requisições por minuto por usuário.
NF-009: Os logs de auditoria deverão ser imutáveis e armazenados por 12 meses.
NF-010: O sistema deverá se recuperar de falha de nó em até 5 minutos.

---
PARTE V — ARQUITETURA
---
CAPÍTULO 8 — ARQUITETURA GERAL

Apresentar a arquitetura completa.

Explicar:
- Frontend
- API
- Application Layer
- Domain Layer
- Infrastructure
- Database

Expl também:
- modular monolith inicial;
- possibilidade de evolução para microsserviços;
- bounded contexts;
- APIs;
- eventos;
- filas;
- workers;
- integrações externas.

CAPÍTULO 9 — STACK TECNOLOGICA

Documentar profundamente a stack.

Frontend:
- Next.js;
- React;
- TypeScript;
- Tailwind;
- componentes;
- design system.

Backend:
- PHP 8.4;
- ou tecnologia definida nos documentos existentes;
- Clean Architecture;
- DDD;
- SOLID;
- REST;
- workers.

Infraestrutura:
- Linux;
- VPS;
- Docker;
- Nginx;
- MariaDB;
- Redis;
- RabbitMQ ou mecanismo de filas definido;
- armazenamento de arquivos;
- backups;
- observabilidade.

Não substituir decisões já existentes sem documentar a alteração.

CAPÍTULO 10 — CLEAN ARCHITECTURE

Explicar:
- Domain
- Application
- Infrastructure
- Interface

Mostrar:
- entidades;
- value objects;
- aggregates;
- repositories;
- use cases;
- services;
- ports;
- adapters;
- DTOs;
- commands;
- queries;
- domain events.

Incluir exemplos reais relacionados à DRESBACH.

CAPÍTULO 11 — DDD

Modelar os bounded contexts.

No mínimo:
- Identity
- Users
- Authors
- Books
- Publishing
- Catalog
- Pricing
- Orders
- Payments
- Print
- Logistics
- Editorial
- Notifications
- Audit

Explicar os limites de cada contexto.

---
PARTE VI — DOMÍNIO
---
CAPÍTULO 12 — MODELO DE DOMÍNIO

Criar as entidades.

No mínimo:

User
- atributos: id, email, password_hash, name, status, account_type, email_verified_at, created_at, updated_at
- relacionamentos: 1:N writer_profile, 1:N orders
- invariantes: email único, status válido, account_type válido

AuthorProfile
- atributos: id, user_id, pen_name, bio, avatar_url, country, state, city, status, submitted_at, activated_at
- relacionamentos: 1:1 user, 1:N books
- invariantes: user_id único, status consistente

Book
- atributos: id, writer_id, title, subtitle, slug, description, language, isbn, edition, status, visibility, published_at, created_at, updated_at
- relacionamentos: N:1 writer (AuthorProfile), 1:N versions, 1:N products, 1:N order_items
- invariantes: slug único, isbn único (opcional), status consistente

BookEdition
- atributos: id, book_id, version_number, manuscript_file_id, cover_file_id, page_count, width_mm, height_mm, validation_status, validation_report_json, created_at
- relacionamentos: N:1 book, N:1 manuscript_file (Files), N:1 cover_file (Files)
- invariantes: version_number consistente, page_count >= 1

BookFile
- atributos: id, book_id, original_filename, storage_path, file_type, file_size_bytes, mime_type, checksum_sha256, validation_status, validation_report_json, uploaded_at, processed_at
- relacionamentos: N:1 book, criado por user
- invariantes: checksum único, mime_type válido

Order
- atributos: id, user_id, status, currency, subtotal, discount, shipping, tax, total, stripe_payment_intent_id, created_at, updated_at
- relacionamentos: N:1 user, N:M order_items, 1:1 payments
- invariantes: status consistente, total = subtotal - discount + shipping + tax

OrderItem
- atributos: id, order_id, product_id, book_id, writer_id, quantity, unit_price, production_cost, author_margin, platform_fee, total
- relacionamentos: N:1 order, N:1 product, N:1 book, N:1 writer
- invariantes: total = unit_price * quantity + production_cost + author_margin + platform_fee

Payment
- atributos: id, order_id, provider, provider_payment_id, status, amount, currency, paid_at, created_at, updated_at
- relacionamentos: N:1 order, 1:N ledger_entries
- invariantes: status consistente, amount >= 0

Royalty
- atributos: id, writer_id, order_id, order_item_id, gross_sale, production_cost, platform_fee, payment_fee, writer_amount, status, paid_at
- relacionamentos: N:1 writer (User), N:1 order, N:1 order_item
- invariantes: writer_amount = gross_sale - production_cost - platform_fee - payment_fee

PrintJob
- atributos: id, uuid, order_id, order_item_id, book_id, provider_id, status, external_reference, priority, queued_at, started_at, completed_at, failure_reason
- relacionamentos: N:1 order, N:1 order_item, N:1 provider (PrintProviders)
- invariantes: status consistente, external_reference único quando presente

PrintProvider
- atributos: id, name, status, api_base_url, capabilities_json, configuration_json, sla_hours, minimum_order
- invariantes: name único, capabilities consistente

Shipment
- atributos: id, order_id, carrier, tracking_code, status, shipped_at, delivered_at
- relacionamentos: 1:1 order
- invariantes: status consistente, tracking_code único

EditorialRequest
- atributos: id, author_id, book_id, service_type, status, price, description, deliverable_path, completed_at
- relacionamentos: N:1 author (User), N:1 book (Book)
- invariantes: service_type válido, price >= 0

Freelancer
- atributos: id, user_id, full_name, bio, portfolio_url, rating, total_orders, completed_orders, hour_rate, status
- relacionamentos: 1:1 user
- invariantes: user_id único, rating >= 0, rating <= 5

Review
- atributos: id, order_item_id, user_id, rating, title, comment, photos_json, is_verified_purchase, created_at
- relacionamentos: N:1 order_item, N:1 user
- invariantes: rating >= 1, rating <= 5, is_verified_purchase boolean

Notification
- atributos: id, user_id, type, title, message, data_json, read, created_at
- relacionamentos: N:1 user
- invariantes: type válido, lida ou não

AuditLog
- atributos: id, actor_user_id, action, resource_type, resource_id, before_json, after_json, ip_address, user_agent, created_at
- invariantes: actor pode ser null, action registrada, resource identificado

---
PARTE VII — DRESBACH PUBLISH
---
CAPÍTULO 14 — PORTAL DO ESCRITOR

Explique todas as funcionalidades.

Incluir:
- dashboard;
- livros;
- criação;
- edição;
- metadados;
- capa;
- PDF;
- especificações;
- preço;
- margem;
- preview;
- submissão;
- revisão;
- publicação;
- vendas;
- royalties;
- financeiro.

CAPÍTULO 15 — WIZARD DE PUBLICAÇÃO

Documentar passo a passo.

Exemplo:

1. Dados do livro
   - título;
   - subtítulo;
   - descrição;
   - categoria;
   - gênero;
   - idioma;

2. Autor
   - seleção de escritor ativo;
   - pen name (opcional);

3. Categoria
   - seleção de categorias;

4. Sinopse
   - descrição curta;

5. Palavras-chave
   - tags;

6. ISBN
   - validação;

7. Capa
   - upload;
   - validação de dimensões;
   - verificação de bleed;

8. Manuscrito
   - upload PDF;
   - validação automática (poppler, pymupdf);
   - contagem real de páginas;
   - verificação de fontes embutidas;
   - dimensões (MediaBox, CropBox, TrimBox, BleedBox);
   - verificação de sangria;
   - resolução de imagens;

9. Formato
   - seleção de formato pré-definido (14x21, 16x23, etc.);

10. Papel
    - tipo de papel (OFFSET_75, OFFSET_90, AVENA_80, COLOR_90);
    - peso do papel;

11. Acabamento
    - tipo de capa (SOFTCOVER, HARDCOVER);
    - acabamento (MATTE, GLOSSY, UV_COATING);

12. Precificação
    - margem do autor (% ou valor fixo);
    - cálculo automático (calculadora DRESBACH);
    - preço sugerido;
    - taxas (plataforma + pagamento);

13. Preview
    - visualização do livro;
    - verificação de layout;

14. Validação
    - verificação de erros;
    - relatório de validação;

15. Termos
    - aceite dos termos;

16. Envio
    - submissão para revisão;

17. Revisão
    - status Under Review;

18. Publicação
    - status Published;
    - disponível na Store.

---
PARTE VIII — MOTOR DE PDF
---
CAPÍTULO 16 — PIPELINE DE VALIDAÇÃO

Documentar:

upload;
antivirus;
MIME;
tamanho;
hash;
armazenamento;
isolamento;
contagem de páginas;
dimensões;
fontes;
imagens;
sangria;
margens;
orientação;
PDF version;
integridade;
geração de preview.

Explique bibliotecas e infraestrutura recomendadas.

Bibliotecas recomendadas:

Poppler:
- pdfinfo → metadados;
- pdffonts → fontes;
- pdfimages → imagens;
- pdftoppm → renderização;

PyMuPDF:
- análise programática do PDF;
- contagem de páginas;
- extração de texto;
- dimensões;

QPDF:
- inspeção estrutural;
- validação;
- operações controladas;

Pipeline recomendado:

UPLOAD
 ↓
QUARENTENA
 ↓
MALWARE SCAN
 ↓
SANITIZATION / VALIDATION
 ↓
PROCESSING
 ↓
RabbitMQ
 ↓
PDF Worker (sandboxed container)
 ↓
Validation Report

O worker deverá possuir:
- filesystem temporário;
- usuário sem privilégios;
- CPU limit;
- memória limit;
- timeout;
- network disabled quando possível;
- tamanho máximo de arquivo;
- número máximo de páginas;
- limpeza automática.

---
PARTE IX — DRESBACH STORE
---
CAPÍTULO 17 — MARKETPLACE

Documentar:

- home;
- catálogo;
- categorias;
- busca;
- filtros;
- página do livro;
- bio do autor;
- carrinho;
- checkout;
- pedidos;
- avaliações;
- favoritos;
- SEO.

CAPÍTULO 18 — PÁGINA DO LIVRO

A página deverá conter:

- capa;
- título;
- autor;
- bio resumida;
- descrição;
- preço;
- formato;
- páginas;
- ISBN;
- avaliações;
- detalhes técnicos;
- livros relacionados.

CAPÍTULO 19 — BIO DO AUTOR

Cada escritor ativo terá:

- /avatar;
- /nome;
- /bio;
- /livros;
- /redes sociais;

URL:

- /autores/{slug}

Exemplo:

dresbach.com/autores/marcos-dresbach

---
PARTE X — PAGAMENTOS
---
CAPÍTULO 20 — STRIPE

Documentar profundamente a integração.

Incluir:
- Checkout;
- Payment Intent;
- Customer;
- webhook;
- idempotência;
- refund;
- chargeback;
- reconciliação;
- estados financeiros;
- segurança;
- logs.

Fluxo:

Store
↓
Checkout
↓
Stripe
↓
Webhook
↓
Payment
↓
Order
↓
PrintJob

Explicar por que o backend nunca deve confiar apenas no frontend.

A confirmação financeira definitiva vem do processamento do evento recebido do provedor.

A regra mais importante:

Nenhum frontend terá acesso direto ao banco de dados.

Todos os dados serão acessados através das APIs dos respectivos serviços.

A regra mais importante:

> Nenhum frontend terá acesso direto ao banco de dados.

Todos os dados serão acessados através das APIs dos respectivos serviços.

CAPÍTULO 21 — CÁLCULO DE PREÇO

Documentar a calculadora DRESBACH.

A calculadora deve separar:

Custo de produção
+
Taxas
+
Margem do autor
=
Preço comercial

Para margem percentual sobre o preço final, a equação correta é:

Preço =
(Custo + Taxas Fixas)
/
(1 - MargemAutor - TaxaPagamento - TaxaPlataforma)

Isso é diferente de simplesmente:

Custo × 1,20

Tabela de custos gráficos:

paper_type	cost_per_page
OFFSET_75	0,045
OFFSET_90	0,055
AVENA_80	0,070
COLOR_90	0,180

Tabela de capas:

cover_type	finish	base_cost
SOFTCOVER	MATTE	4,50
SOFTCOVER	GLOSSY	5,20
HARDCOVER	base	18,00

Algoritmo:

type BookCostInput = {
  pages: number;
  paperCostPerPage: number;
  coverCost: number;
  finishingCost: number;
  fixedProductionCost: number;

  authorMarginPercent: number;
  platformFeePercent: number;
  paymentFeePercent: number;
};

type BookPriceResult = {
  productionCost: number;
  suggestedPrice: number;
  authorAmount: number;
  platformAmount: number;
};

export function calculateBookPrice(
  input: BookCostInput
): BookPriceResult {

  const productionCost =
    (input.pages * input.paperCostPerPage) +
    input.coverCost +
    input.finishingCost +
    input.fixedProductionCost;

  const margin =
    input.authorMarginPercent / 100;

  const platformFee =
    input.platformFeePercent / 100;

  const paymentFee =
    input.paymentFeePercent / 100;

  const denominator =
    1 - margin - platformFee - paymentFee;

  if (denominator <= 0) {
    throw new Error(
      "Margens e taxas inviabilizam o cálculo."
    );
  }

  const suggestedPrice =
    productionCost / denominator;

  const authorAmount =
    suggestedPrice * margin;

  const platformAmount =
    suggestedPrice * platformFee;

  return {
    productionCost: Math.round(productionCost),
    suggestedPrice: Math.round(suggestedPrice),
    authorAmount: Math.round(authorAmount),
    platformAmount: Math.round(platformAmount)
  };
}

---
PARTE XI — DRESBACH PRINT
---
CAPÍTULO 22 — PRINT ON DEMAND

Documentar:

- PrintJob;
- fornecedor;
- custos;
- fila;
- arquivos;
- produção;
- qualidade;
- embalagem;
- expedição.

Incluir abstração para gráficas:

PrintProvider

Nenhuma regra central deve depender diretamente de uma gráfica específica.

CAPÍTULO 23 — ABSTRAÇÃO DE GRÁFICAS

Documentar o padrão PrintProvider:

interface PrintProvider {
  quote(input: PrintQuoteInput): Promise<PrintQuote>;

  createJob(
    input: PrintJobInput
  ): Promise<ExternalPrintJob>;

  getJobStatus(
    externalId: string
  ): Promise<PrintStatus>;

  cancelJob(
    externalId: string
  ): Promise<void>;
}

Implementações:

ProviderA
ProviderB
ProviderC
ManualProvider

CAPÍTULO 24 — FILA DE PRODUÇÃO

Documentar:

- PrintJob;
- estados: CREATED → QUEUED → ASSIGNED → IN_PRODUCTION → QUALITY_CONTROL → PACKAGING → READY_FOR_SHIPMENT → COMPLETED → FAILED → CANCELLED;

Estratégia de retry:

1º retry: 30s
2º retry: 2min
3º retry: 10min
4º retry: 30min

Depois:
- Dead Letter Queue

Se a gráfica estiver indisponível:

Order = PAID
      ↓
Print Job = QUEUED
      ↓
Retry

Nunca marcar pedido como cancelado simplesmente porque a gráfica está temporariamente indisponível.

---
PARTE XII — DRESBACH EDITORIAL
---
CAPÍTULO 25 — MARKETPLACE B2B

Documentar:

- profissionais;
- serviços;
- propostas;
- contratação;
- projeto;
- entrega;
- avaliação;
- pagamentos;
- disputa;
- comissão.

CAPÍTULO 26 — FLUXO DE SERVIÇOS EDITORIAIS

Documentar:

Autor
 ↓
Serviço
 ↓
Freelancer
 ↓
Pedido
 ↓
Pagamento
 ↓
Execução
 ↓
Entrega
 ↓
Aprovação

CAPÍTULO 27 — TIPOS DE SERVIÇO

- Revisão
- Preparação
- Diagramação
- Capa
- Projeto gráfico
- Ficha catalográfica
- Consultoria

Cada serviço terá:
- descrição;
- preço;
- prazo de entrega;
- disponibilidade do freelancer;
- rating;
- ordem de execução.

---
PARTE XIII — ADMIN
---
CAPÍTULO 28 — DRESBACH ADMIN

Documentar o backoffice completo.

Incluir:

- dashboard;
- usuários;
- escritores;
- livros;
- revisão;
- catálogo;
- pedidos;
- pagamentos;
- impressão;
- gráficas;
- logística;
- freelancers;
- suporte;
- auditoria;
- relatórios;
- configurações.

CAPÍTULO 29 — MÓDULOS DO ADMIN

Dashboard: visão geral do sistema, KPIs principais, alertas rápidos.

Usuários: lista de todos os usuários, filtro por account_type, status, busca, ações (bloquear/desbloquear, promover, demitir).

Escritores: lista de escritores, filtro por status (PENDING, ACTIVE, SUSPENDED, REJECTED), ações (ativar, suspender, rejeitar), detalhes do perfil.

Livros: lista de todos os livros, filtro por status (DRAFT, PROCESSING, REVIEW, APPROVED, PUBLISHED, PRIVATE, ARCHIVED), busca, ações (editar, archive, suspender).

Revisão: fila de livros em revisão, ações (aprovar, rejeitar, solicitar mais informações), estatísticas.

Catálogo: visualização do catálogo público, filtros, busca, ordenação.

Pedidos: lista de todos os pedidos, filtro por status (CREATED, PAYMENT_PENDING, PAID, PROCESSING, IN_PRODUCTION, QUALITY_CONTROL, PACKAGED, SHIPPED, DELIVERED, CANCELLED, REFUNDED), detalhes, ações (cancelar, reembolsar, mudar status).

Pagamentos: relatórios de vendas, royalties, commissions, pagamentos pendentes, histórico, exportar dados.

Impressão: fila de print jobs, seleção de gráfica, status dos jobs, ações (cancelar, priorizar), gráficas cadastradas.

Gríficas: cadastro de provedores, capacidades, SLA, contato, status (ACTIVE, INACTIVE, MAINTENANCE).

Logística: rastreamento de envios, transportadoras, códigos de rastreamento, estatísticas de entrega.

Freelancers: lista de freelancers, filtro por status, ações (ativar, suspender), portfólio, serviços oferecidos.

Suporte: tickets, comentários, denúncias, histórico de suporte, respostas.

Configurações: parâmetros do sistema, taxas (platform fee, payment fee), moedas, formatações, SMS/email configs, integrações.

CAPÍTULO 30 — SEGURANÇA NO ADMIN

- MFA;
- sessão curta;
- RBAC;
- auditoria;
- IP/device awareness quando necessário;
- reautenticação para operações financeiras críticas.

Operações como:

- refund
- approve writer
- change royalty
- change price
- change provider

devem gerar audit log.

---
PARTE XIV — BANCO DE DADOS
---
CAPÍTULO 31 — MODELO RELACIONAL

Definir todas as tabelas.

Para cada tabela:
- finalidade;
- PK;
- FK;
- índices;
- constraints;
- enumerações;
- timestamps;
- soft delete;
- auditoria.

Incluir SQL quando apropriado.

Documente:

users
- finalidade: armazenar identidade e autenticação de todos os usuários do sistema.
- PK: id (UUID);
- FK: writer_profile (1:1);
- índices: idx_users_email (unique), idx_users_account_type, idx_users_status;
- constraints: email UNIQUE, account_type ENUM('READER', 'WRITER_PENDING', 'WRITER_ACTIVE'), status ENUM('ACTIVE', 'SUSPENDED', 'DELETED');
- timestamps: created_at, updated_at;
- soft delete: flag status 'DELETED' em vez de remover fisicamente.

roles
- finalidade: definir perfis de permissão do sistema.
- PK: id;
- FK: none system;
- índices: none específico;
- constraints: name UNIQUE;
- enumerações: READER, WRITER, EDITOR, FINANCE, PRODUCTION, SUPPORT, ADMIN, SUPER_ADMIN, FREELANCER;

permissions
- finalidade: definir ações específicas que podem ser executadas.
- PK: id;
- FK: none;
- índices: none;
- constraints: key UNIQUE;
- exemplos: book.create, book.update, book.submit, book.publish, order.read, order.manage, payment.refund, writer.approve, print.manage, user.manage;

user_roles
- finalidade: relacionamento N:M entre users e roles.
- PK: (user_id, role_id);
- FK: usuario → users(id), role → roles(id);
- índices: none adicional;

authors (writer_profiles)
- finalidade: perfil editorial do autor/escritor.
- PK: id;
- FK: user_id → users(id) ON DELETE CASCADE;
- índices: idx_writer_user_id (unique), idx_writer_status;
- constraints: user_id UNIQUE, status ENUM('PENDING', 'FORM_INCOMPLETE', 'SUBMITTED', 'UNDER_REVIEW', 'ACTIVE', 'SUSPENDED', 'REJECTED');

books
- finalidade: obras/livros publicados na plataforma.
- PK: id (UUID);
- FK: writer_id → writer_profiles(id) ON DELETE RESTRICT;
- índices: idx_books_writer_id, idx_books_status, idx_books_isbn, idx_books_slug, idx_books_published_at;
- constraints: slug UNIQUE, isbn UNIQUE (opcional), status ENUM('DRAFT', 'PROCESSING', 'REVIEW', 'APPROVED', 'PUBLISHED', 'PRIVATE', 'ARCHIVED', 'REJECTED'), visibility ENUM('PUBLIC', 'PRIVATE', 'UNLISTED');
- soft delete: status 'ARCHIVED' ou 'PRIVATE' ao invés de DELETE;

book_versions
- finalidade: versões específicas de um livro (manuscrito, capa, validação).
- PK: id (UUID);
- FK: book_id → books(id) ON DELETE CASCADE;
- FK: manuscript_file_id → files(id) ON DELETE SET NULL;
- FK: cover_file_id → files(id) ON DELETE SET NULL;
- índices: idx_bv_book_id, idx_bv_validation_status;
- constraints: version_number VARCHAR, page_count INT UNSIGNED, color_mode ENUM('BW', 'COLOR');

book_print_specs
- finalidade: especificações físicas para impressão sob demanda.
- PK: id (UUID);
- FK: book_id → books(id) ON DELETE CASCADE;
- índices: uq_book_specs (unique book_id);
- constraints: format VARCHAR, width_mm DECIMAL, height_mm DECIMAL, page_count INT UNSIGNED, paper_type VARCHAR, paper_weight DECIMAL, cover_type ENUM, cover_finish ENUM, binding ENUM, color_mode ENUM, bleed_mm DECIMAL;
- soft delete: none necessário (única linha por book);

products
- finalidade: configurações comerciais do livro (SKU, preço, margens).
- PK: id (UUID);
- FK: book_id → books(id) ON DELETE CASCADE;
- índices: idx_products_book_id, idx_products_sku (unique);
- constraints: sku UNIQUE, status ENUM('ACTIVE', 'INACTIVE', 'EXPIRED');
- soft delete: status 'INACTIVE' ou 'EXPIRED';

orders
- finalidade: pedidos de compra dos leitores.
- PK: id (UUID);
- FK: user_id → users(id) ON DELETE RESTRICT;
- índices: idx_orders_user_id, idx_orders_status, idx_orders_stripe;
- constraints: status ENUM('CREATED', 'PAYMENT_PENDING', 'PAID', 'PROCESSING', 'IN_PRODUCTION', 'QUALITY_CONTROL', 'PACKAGED', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'REFUNDED');
- soft delete: status 'CANCELLED' ou 'REFUNDED' ao invés de DELETE;

order_items
- finalidade: itens individuais dentro de um pedido.
- PK: id (UUID);
- FK: order_id → orders(id) ON DELETE CASCADE;
- FK: product_id → products(id) ON DELETE RESTRICT;
- FK: book_id → books(id) ON DELETE RESTRICT;
- FK: writer_id → writer_profiles(id) ON DELETE RESTRICT;
- índices: idx_oi_order_id, idx_oi_product_id;
- constraints: quantity INT UNSIGNED DEFAULT 1;

payments
- finalidade: registros de pagamentos por ordem.
- PK: id BIGINT AUTO_INCREMENT;
- FK: order_id → orders(id) ON DELETE CASCADE;
- índices: uk_payments_order_id (unique), idx_payments_provider, idx_payments_status;
- constraints: status ENUM('PENDING', 'PROCESSING', 'SUCCEEDED', 'FAILED', 'REFUNDED');

royalties
- finalidade: cálculo e repasse de royalties aos autores.
- PK: id BIGINT AUTO_INCREMENT;
- FK: writer_id → users(id) ON DELETE CASCADE;
- FK: order_id → orders(id) ON DELETE RESTRICT;
- FK: order_item_id → order_items(id) ON DELETE RESTRICT;
- índices: idx_royalties_writer_id, idx_royalties_order_id;
- constraints: status ENUM('PENDING', 'CALCULATED', 'PAID', 'REFUNDED');

print_jobs
- finalidade: jobs de impressão em fila.
- PK: id (UUID);
- FK: order_id → orders(id) ON DELETE CASCADE;
- FK: order_item_id → order_items(id) ON DELETE RESTRICT;
- FK: book_id → books(id) ON DELETE RESTRICT;
- FK: provider_id → print_providers(id) ON DELETE RESTRICT;
- índices: idx_pj_order_id, idx_pj_provider_id, idx_pj_status;
- constraints: status ENUM('CREATED', 'QUEUED', 'ASSIGNED', 'IN_PRODUCTION', 'QUALITY_CONTROL', 'PACKAGING', 'READY_FOR_SHIPMENT', 'COMPLETED', 'FAILED', 'CANCELLED');

print_providers
- finalidade: gráficas parceiras para impressão sob demanda.
- PK: id (UUID);
- FK: none;
- índices: uk_providers_name (unique);
- constraints: name UNIQUE, status ENUM('ACTIVE', 'INACTIVE', 'MAINTENANCE');

shipments
- finalidade: informações de expedição e rastreamento.
- PK: id (UUID);
- FK: order_id → orders(id) ON DELETE CASCADE;
- UNIQUE: uk_shipments_order_id;
- índices: idx_shipments_status;
- constraints: status ENUM('CREATED', 'LABEL_CREATED', 'PICKED_UP', 'IN_TRANSIT', 'OUT_FOR_DELIVERY', 'DELIVERED', 'EXCEPTION');

editorial_requests
- finalidade: solicitações de serviços editoriais.
- PK: id BIGINT AUTO_INCREMENT;
- FK: author_id → users(id) ON DELETE RESTRICT;
- FK: book_id → books(id) ON DELETE SET NULL;
- índices: idx_er_author_id, idx_er_book_id;
- constraints: service_type ENUM('REVISION', 'DIAGRAMATION', 'COVER_DESIGN', 'CATALOGATION', 'CONSULTING', 'OTHER');

freelancers
- finalidade: freelancers/prestadores de serviços editoriais.
- PK: id (UUID);
- FK: user_id → users(id) ON DELETE CASCADE;
- índices: idx_freelancers_user_id (unique);
- constraints: user_id UNIQUE, status ENUM('ACTIVE', 'INACTIVE', 'BUSY');

reviews
- finalidade: avaliações de leitores sobre livros.
- PK: id BIGINT AUTO_INCREMENT;
- FK: order_item_id → order_items(id) ON DELETE CASCADE;
- FK: user_id → users(id) ON DELETE RESTRICT;
- índices: idx_reviews_order_item_id, idx_reviews_user_id;
- constraints: rating TINYINT UNSIGNED CHECK(rating >= 1 AND rating <= 5);

notifications
- finalidade: notificações enviadas aos usuários.
- PK: id BIGINT AUTO_INCREMENT;
- FK: user_id → users(id) ON DELETE CASCADE;
- índices: idx_notifications_user_id, idx_notifications_read;
- constraints: type VARCHAR(50), read TINYINT(1) DEFAULT 0;

audit_logs
- finalidade: log de auditoria para rastreamento de mudanças.
- PK: id BIGINT AUTO_INCREMENT;
- FK: actor_user_id → users(id) (pode ser null);
- índices: idx_audit_actor, idx_audit_resource, idx_audit_created;
- constraints: action VARCHAR(100), resource_type VARCHAR(50), resource_id UUID;

---
PARTE XV — API
---
CAPÍTULO 32 — REST API

Documentar os endpoints.

Exemplos:

POST /api/v1/books
PATCH /api/v1/books/{id}
PATCH /api/v1/books/{id}/pricing
POST /api/v1/books/{id}/submit
POST /api/v1/books/{id}/publish
GET /api/v1/books/{id}
POST /api/v1/orders
GET /api/v1/orders/{id}
POST /api/v1/webhooks/stripe
POST /api/v1/webhooks/print-status

Para cada endpoint:

método;
URL;
autenticação;
autorização;
request;
response;
códigos HTTP;
erros;
idempotência;
rate limit;
auditoria.

CAPÍTULO 33 — ENDPOINTS POR MÓDULO

PUBLISH:

POST   /api/v1/books              → Criar rascunho de livro
GET    /api/v1/books              → Listar livros do escritor
GET    /api/v1/books/{id}         → Detalhes do livro
PATCH  /api/v1/books/{id}         → Atualizar rascunho
POST   /api/v1/books/{id}/manuscript  → Upload PDF miolo
POST   /api/v1/books/{id}/cover       → Upload capa
POST   /api/v1/books/{id}/validate    → Validar PDF estrutural
PATCH  /api/v1/books/{id}/physical-specs → Especificações físicas
PATCH  /api/v1/books/{id}/pricing       → Calcular precificação
POST   /api/v1/books/{id}/submit        → Submeter para revisão
POST   /api/v1/books/{id}/publish       → Publicar na Store
POST   /api/v1/books/{id}/archive       → Arquivar livro

STORE:

GET    /api/v1/catalog/books            → Listar catálogo público
GET    /api/v1/catalog/books/{slug}     → Página do livro
GET    /api/v1/catalog/authors/{slug}   → Bio do autor
GET    /api/v1/catalog/categories       → Categorias
POST   /api/v1/cart/items               → Adicionar ao carrinho
PATCH  /api/v1/cart/items/{id}          → Atualizar quantidade
DELETE /api/v1/cart/items/{id}          → Remover do carrinho
POST   /api/v1/checkout                 → Finalizar pedido
GET    /api/v1/orders                   → Minhas ordens
GET    /api/v1/orders/{id}              → Detalhes do pedido

PRINT:

POST   /api/v1/print-jobs               → Criar job de impressão
GET    /api/v1/print-jobs/{id}          → Status do job
POST   /api/v1/print-jobs/{id}/cancel   → Cancelar job
GET    /api/v1/providers                 → Lista de gráficas
POST   /api/v1/providers                 → Cadastrar gráfica
POST   /api/v1/webhooks/print-status    → Webhook status produção

EDITORIAL:

GET    /api/v1/services                 → Lista de serviços
GET    /api/v1/freelancers              → Lista de freelancers
GET    /api/v1/freelancers/{id}         → Perfil freelancer
POST   /api/v1/service-orders            → Criar pedido de serviço
GET    /api/v1/service-orders/{id}      → Status do pedido
POST   /api/v1/service-orders/{id}/approve → Aprovar serviço
POST   /api/v1/service-orders/{id}/complete → Concluir serviço

IDENTITY:

POST   /api/v1/auth/register              → Registrar usuário
POST   /api/v1/auth/login                 → Login
POST   /api/v1/auth/refresh               → Refresh token
POST   /api/v1/auth/verify-email          → Verificar e-mail
GET    /api/v1/auth/me                    → Dados do usuário
PATCH  /api/v1/auth/password              → Alterar senha

STORE (Checkout):

POST   /api/v1/checkout                 → Finalizar pedido

WEBHOOKS:

POST   /api/v1/webhooks/stripe          → Webhook Stripe
POST   /api/v1/webhooks/print-status    → Webhook produção

Para cada endpoint o contrato deverá especificar:

- método HTTP e caminho completo;
- nível de autenticação necessário (publico, escritor, admin);
- nível de autorização (quem pode executar);
- body da requisição com tipos e validações;
- body da resposta com estrutura esperada;
- códigos HTTP de retorno (200, 201, 400, 401, 403, 404, 422, 500);
- mensagens de erro padrão;
- requisitos de idempotência (chave Idempotency-Key);
- limites de rate limiting;
- requisitos de auditoria (registro em AuditLog).

---
PARTE XVI — EVENTOS E MENSAGERIA
---
CAPÍTULO 34 — EVENT BUS

Documentar:

BookPublished
OrderCreated
PaymentConfirmed
PrintJobCreated
PrintJobCompleted
ShipmentCreated
OrderDelivered

Para cada evento:

- producer;
- consumer;
- payload;
- versionamento;
- retry;
- dead-letter;
- idempotência.

CAPÍTULO 35 — DOMÍNIO EVENTOS

Documentar eventos principais:

UserRegistered
WriterActivationRequested
WriterActivated
BookCreated
BookSubmitted
BookValidated
BookApproved
BookPublished
BookArchived
OrderCreated
PaymentSucceeded
PaymentFailed
PrintJobCreated
PrintJobCompleted
QualityControlPassed
ShipmentCreated
OrderDelivered
OrderCancelled
OrderRefunded
RoyaltyCalculated
RoyaltyPaid
FreelancerServiceRequested
FreelancerServiceCompleted
CouponUsed
SystemConfigurationChanged

Cada evento deverá possuir:

- event_id: identificador único (UUID);
- event_type: tipo do evento;
- version: versão do evento (para versionamento);
- occurred_at: data/hora do ocorrido;
- producer: serviço que gerou o evento;
- payload: dados do evento (JSON);
- correlation_id: ID para correlacionar com outros eventos (opcional).

CAPÍTULO 36 — RABBITMQ

Configuração do Message Broker:

Exchanges:
- dresbach.events: exchange tópico para todos os eventos;
- dresbach.orders: exchange específico para eventos de ordem;
- dresbach.print: exchange específico para eventos de impressão;

Queues:
- dresbach.events.queue: fila principal, consumida por todos os interessados;
- dresbach.orders.queue: fila de eventos de pedido;
- dresbach.print.queue: fila de eventos de impressão;
- dresbach.print.dead-letter: fila dead-letter para retry esgotado;

Routing Keys:
- order.created → dresbach.orders.key;
- payment.succeeded → dresbach.orders.key;
- print.job.created → dresbach.print.key;
- print.job.completed → dresbach.print.key;
- shipment.created → dresbach.orders.key;

Stratégia de retry:
1º retry: 30s
2º retry: 2min
3º retry: 10min
4º retry: 30min
5º retry: descarta para dead-letter queue;

Idempotência:
- Cada evento deve possuir event_id único;
- Consumidores devem verificar se já processaram este event_id;
- Tabela webhook_events para registrar processamento;

Versionamento de eventos:
- Não alterar silenciosamente: order.paid v1;
- Quando houver breaking change: order.paid v2;
- Consumidores antigos poderão continuar processando v1 durante a transição.

---
PARTE XVII — SEGURANÇA
---
CAPÍTULO 36 — SEGURANÇA DA INFORMAÇÃO

Princípios Fundamentais:

Segurança por Design — Toda a arquitetura deve considerar segurança desde o início.
Princípio do Menor Privilégio — Usuários e serviços só podem acessar o necessário.
Defesa em Profundidade — Múltiplas camadas de segurança.
Observabilidade — Todos os eventos de segurança devem ser logados e monitorados.

CAPÍTULO 37 — AUTENTICAÇÃO E AUTORIZAÇÃO

Autenticação:

Quem é você?

Mecanismo:
- E-mail + senha (hash bcrypt/argon2);
- Opção Google/GitHub OAuth (future);
- MFA (autenticação de dois fatores) para operações sensíveis;

Armazenamento de senha:
- Nunca em texto puro;
- bcrypt com custo 12+ ou argon2id;
- Nunca armazenar salt separadamente em código;

Fluxo de login:
1. Receber e-mail/senha;
2. Validar credenciais no backend;
3. Gerar JWT (com expiration curto: 15min para sessão, 24h para refresh);
4. Retornar tokens + refresh token;
5. Armazenar refresh token httpOnly cookie ou state management;

Autorização:

O que você pode fazer?

RBAC (Role-Based Access Control):
- roles: READER, WRITER, EDITOR, FINANCE, PRODUCTION, SUPPORT, ADMIN, SUPER_ADMIN, FREELANCER;
- permissions granulares: book.create, book.publish, order.manage, payment.refund, user.manage, etc.;
- Middleware de verificação em cada endpoint crítico;

Exemplo de verificação:
```
if (!user.hasPermission('book.publish')) {
  return ForbiddenError();
}
```

CAPÍTULO 38 — SEGURANÇA NO BANCO DE DADOS

- Todas as conexões devem usar o usuário editora_dresbach_app;
- Este usuário possui privilégios RESTRICTOS em editora_dresbach.*;
- NUNCA usar root na aplicação;
- Conexões devem ser via 127.0.0.1 (localhost apenas);
- SSL/TLS obrigatório em produção;
- Connection pooling com limitações;

Tabelas sensíveis (dados de usuários, financeiros):
- Criptografia em repouso (InnoDB native + filesystem encryption);
- Auditoria de todas as escritas (INSERT/UPDATE/DELETE logs);
- Backup criptografado e testado periodicamente;

Restrições de segurança:
- Query parameters sempre parameterized (prevent SQL Injection);
- LIMIT em queries de listagem;
- NUNCA SELECT * em produção;
- Validação de entrada em todas as APIs;

CAPÍTULO 39 — SEGURANÇA DE API

Headers obrigatórios em todas as APIs:
- Authorization: Bearer <jwt>;
- X-Requested-With: XMLHttpRequest (quando aplicável);
- Content-Type: application/json (POST/PUT/DELETE);

Rate Limiting:
- Login: 5 tentativas por 15 minutos por IP;
- Registro: 10 por hora por IP;
- API pública: 100 requisições por minuto por usuário;
- Webhooks: validar signature Stripe;

Headers de Segurança (HTTP Reheaders):
- X-Content-Type-Options: nosniff;
- X-Frame-Options: DENY;
- X-XSS-Protection: 1; mode=block;
- Strict-Transport-Security: max-age=31536000; includeSubDomains;
- Referrer-Policy: strict-origin-when-cross-origin;

CORS:
- Apenas origens conhecidas (dresbach.com, subdomínios);
- Métodos: GET, POST, PUT, DELETE, OPTIONS;
- Headers: Content-Type, Authorization;

CAPÍTULO 40 — LGPD

Dados pessoais que manipulamos:
- Nome completo;
- E-mail;
- CPF/CNPJ (quando fornecido);
- Endereço de entrega;
- Dados bancários (PIX, conta);
- Histórico de compras;

Princípios LGPD:
- Finalidade específica para cada dado;
- Consentimento explícito quando necessário;
- Retenção definida (policy de retention);
- Direito de acesso, correção e exclusão;
- Não compartilhar com terceiros sem consentimento;
- Anonimização em logs;

Ações obrigatórias:
- RGPD policy page visível no site;
- Link de "excluir minha conta" no perfil;
- Portal de consentimento no cadastro;
- Logs de acesso a dados pessoais por auditoria;
- Relatórios trimestrais de tratamento de dados;

CAPÍTULO 41 — UPLOAD SEGURO

Upload de PDFs (manuscritos, capas):
- Validar MIME type (apenas application/pdf);
- Validar "magic bytes" no início do arquivo;
- Limite de tamanho configurado (ex: 100MB);
- Limite de páginas (ex: max 5000);
- Scanner de vírus na quarantine;
- Processamento em sandbox isolado;
- Nunca executar código do upload diretamente;
- Sanitizar nomes de arquivo (sem extensões executáveis);
- Escaneamento com Poppler/pdffonts para validar estrutura;

Armazenamento:
- Caminhos sem informações sensíveis;
- URLsassinadas temporárias (signed URLs);
- Controle de acesso por usuário/autorização;
- Versionamento de arquivos;

CAPÍTULO 42 — THREAT MODEL

Principais ameaças e mitigações:

1. SQL Injection:
   - Mitigação: usar queries parameterized, ORM com prepared statements;
   - Nível: crítico;

2. XSS (Cross-Site Scripting):
   - Mitigação: sanitizar saída, usar textContent em vez de innerHTML;
   - Nível: alto;

3. CSRF (Cross-Site Request Forgery):
   - Mitigação: tokens CSRF em formulários state-changing, validar origin/header;
   - Nível: médio;

4. Upload de arquivos maliciosos:
   - Mitigação: validação MIME + magic bytes, sandbox, scanner de vírus;
   - Nível: crítico;

5. Acesso não autorizado:
   - Mitigação: RBAC, princípio do menor privilégio, MFA para operações sensíveis;
   - Nível: alto;

6. Vazamento de secrets:
   - Mitigação: never no código, usar secret manager, rotação periódica;
   - Nível: crítico;

7. Rate limit bypass:
   - Mitigação: IP-based limiting, token-based limiting, monitoring;
   - Nível: médio;

8. Webhook replay:
   - Mitigação: validar signature, event_id idempotência, timestamps;
   - Nível: alto;

---
PARTE XVIII — INFRAESTRUTURA
---
CAPÍTULO 43 — VPS

Explique a infraestrutura inicial.

Inclua:

Internet
↓
Firewall
↓
Nginx
↓
Frontend/API
↓
Workers
↓
Redis
↓
MariaDB
↓
Storage

Documente:

- Docker;
- volumes;
- rede;
- secrets;
- firewall;
- SSH;
- usuários;
- backups;
- certificados;
- domínio;
- DNS.

Topologia de rede:

                                      +------------------+
                                      |    Internet      |
                                      +---------+--------+
                                                |
                          +-----------------+-----------------+
                          |   Cloudflare/WAF (opcional)     |
                          +--------------------+----------------+
                                |                       |
                          +---------v-----------+     +-----v-----+
                          |        Nginx        |     |  Frontend |
                          +--------------------+     +-----+-----+
                                |                       |
                      +---------v-----------+     +-----v-----+
                      |       API (PHP)     |     | Next.js   |
                      +--------------------+     +-----+-----+
                                |                       |
                      +---------v-----------+     +-----v-----+
                      |      MariaDB        |     |  Redis    |
                      +---------+-----------+     +-----+-----+
                                |                       |
                      +---------v-----------+     +-----v-----+
                      |     RabbitMQ        |     | Storage   |
                      +---------+-----------+     +-----+-----+
                                |                       |
                      +---------v-----------+     +-----v-----+
                      |      Workers        |     +-----+-----+
                      +---------+-----------+          +-----+-----+
                                |                       |
                                      +-------------+

VPS Services:

- Nginx: proxy reverso, terminação SSL, rate limiting, cache estático;
- PHP-FPM: processamento de requisições PHP;
- Aplicação: serviço da DRESBACH (Publish, Store, Print, Editorial);
- MariaDB: banco de dados principal;
- Redis: cache, sessões, rate limiting;
- RabbitMQ: fila de eventos e jobs;
- Workers: processamento em background (PDF, emails, imports);
- Storage: volume local ou S3 para arquivos de manuscrito e capa;
- Monitoramento: Prometheus + Grafana para métricas;
- Logs: estrutura JSON, rota para ELK/Datadog;
- Firewall: portas 80/443 públicas, SSH restrito (chave SSH), DB/Redis/RabbitMQ não públicas;
- Backup: volume externo, snapshots diários, retenção 30 dias;
- SSL: certificados Let's Encrypt ou AWS ACM;
- Domínio: DNS pointing to IP VPS, renovação automática;
- SSH: acesso apenas via chave, porta não padrão, fail2ban;

CAPÍTULO 44 — CI/CD

Documentar pipeline completo:

Git
↓
Pull Request
↓
Lint
↓
Static Analysis
↓
Unit Tests
↓
Integration Tests
↓
Build
↓
Security Scan
↓
Deploy Staging
↓
E2E
↓
Production

Para cada etapa:

Lint: ESLint + PHP CodeSniffer para padronização de código;
Static Analysis: SonarQube ou equivalente para análise estática;
Unit Tests: testes de entidades, value objects, business rules;
Integration Tests: testes de integração com banco de dados mockado ou testcontainer;
Build: compilação do Next.js e empacotamento da aplicação PHP;
Security Scan: Snyk, dependabot, verificação de vulnerabilidades;
Deploy Staging: deploy no ambiente de homologação;
E2E: testes end-to-end com Playwright/Cypress cobrindo fluxos críticos;
Production: deploy produção com validação de health checks;

Rollback Strategy:

1. Identificar o problema rapidamente;
2. Aplicar rollback para versão anterior:
   docker compose up -d --force-recreate <service_name>@<tag_anterior>
3. Restaurar banco se houver migration problemática:
   npx prisma migrate rollback <step>
4. Verificar healthchecks após rollback;
5. Comunicar stakeholders;
6. Analisar causa raiz e melhorar processo;

Rollback should be achievable within 15-30 minutes.

Git Branching Strategy:

- main: apenas código liberado em produção;
- develop: código em integração, pronto para próxima release;
- feature/*: branches para novas funcionalidades;
- hotfix/*: branches para correções urgentes em produção;
- release/*: branches para preparação de release;

Pull Request Requirements:

- todos os requisitos de Definition of Done devem ser atendidos;
- código review por pelo menos um desenvolvedor;
- todos os testes (unit, integration) passando;
- segurança review passada;
- documentação atualizada;
- changelog atualizado.

CAPÍTULO 45 — MONITORAMENTO E OBSERVABILIDADE

Métricas essenciais:

- Taxa de erro API: erros totais / requisições totais;
- Latência média API: tempo médio de resposta;
- Taxa de conexão banco: conexões ativas / máximo permitido;
- Depth fila RabbitMQ: mensagens aguardando processamento;
- Taxa de sucesso payment: pagamentos bem-sucedidos / totais;
- Latência webhook: tempo desde recebimento até processamento;
- Uptime do sistema;
- Uso de CPU e RAM por serviço;
- Erros não tratados em produção;

Ferramentas:

- Prometheus + Grafana para métricas;
- OpenTelemetry para tracing distribuído;
- Sentry para error tracking;
- Logs estruturados em arquivo/ELK;

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
- Senhas completas;
- Números de cartão de crédito;
- Chaves secretas Stripe;
- Dados sensíveis do usuário em plain text;

Healthcheck Endpoint:

GET /health

Retorno esperado:
{
  "status": "healthy",
  "database": "connected",
  "queue": "connected",
  "timestamp": "ISO datetime",
  "version": "1.0.0"
}

Status codes possíveis:
200 - Healthy (todos os serviços OK);
503 - Unhealthy (qualquer dependência falha);

---
PARTE XIX — TESTES
---
CAPÍTULO 46 — ESTRATÉGIA DE TESTES

Documentar:

unit;
integration;
contract;
E2E;
security;
performance;
load;
regression;
smoke;
acceptance.

Criar matriz de testes.

CAPÍTULO 47 — TIPOS DE TESTE

Unit Tests:
- testar entidades, value objects, business rules;
- mockar dependências externas;
- cobertura esperada: >= 80%;
- framework: PHPUnit para backend, Jest para frontend;

Integration Tests:
- testar fluxos completos (order creation, book publication);
- testar integração com banco de dados;
- testar integração com Stripe (modo test);
- testar integração com RabbitMQ;
- cobertura esperada: >= 70%;

Contract Tests:
- validar schemas OpenAPI;
- testar contratos de API;
- testar serialização/deserialização JSON;
- garantir compatibilidade entre versões;

E2E Tests:
- testar fluxos completos do usuário;
- registrar: registro de leitor, ativação de escritor, criação de livro, compra, pagamento, produção, entrega;
- framework: Playwright ou Cypress;
- ambientes: DEVELOPMENT, STAGING, Production;

Security Tests:
- testar SQL Injection;
- testar XSS;
- testar CSRF;
- testar upload de arquivos;
- testar rate limiting;
- testar autenticação e autorização;

Performance Tests:
- testar latência API;
- testar throughput;
- testar concorrência;
- testar carga esperada;

Load Tests:
- simular múltiplos usuários simultâneos;
- testar limite de taxa;
- testar pontos de quebra;

Regression Tests:
- garantir que novas funcionalidades não quebrem o existente;
- rodar após cada deploy;

Smoke Tests:
- validar build;
- validar deployment;
- validar endpoints críticos;

Acceptance Tests:
- validar requisitos funcionais;
- validar requisitos não funcionais;
- aprovação do Product Owner.

Matriz de Testes Exemplo:

| Módulo | Unit | Integration | E2E | Security | Performance |
|--------|------|-------------|-----|----------|-------------|
| Auth   | 15   | 8           | 5   | 3        | 2           |
| Books  | 25   | 12          | 10  | 4        | 3           |
| Orders | 20   | 15          | 12  | 4        | 3           |
| Payments| 10  | 8           | 10  | 5        | 4           |
| Print  | 15   | 10          | 8   | 3        | 2           |

---
PARTE XX — PERFORMANCE
---
CAPÍTULO 48 — ENGENHARIA DE PERFORMANCE

Documentar:

- cache;
- Redis;
- database indexing;
- queries;
- pagination;
- CDN;
- image optimization;
- PDF processing;
- background jobs;
- queues;
- concurrency;
- rate limits.

CAPÍTULO 49 — OTIMIZAÇÃO

Cache:

- Redis para sessões e dados frequentemente acessados;
- Chaves: "user:{id}", "book:{id}", "order:{id}";
- TTL configurado (sessão: 120min, book details: 24h);
- Cache invalidation em eventos (book published → invalidar cache);
- Estratégia: cache-aside pattern;

Database Indexing:

- Índices críticos: users.email (unique), books.slug (unique), orders.status, print_jobs.status;
- Índices compostos: orders(user_id, status), order_items(order_id, product_id);
- Evitar over-indexing (impacta INSERT/UPDATE);
- Analisar queries lentas mensalmente;

Queries:

- usar parameterized queries;
- evitar SELECT *;
- usar LIMIT para listagens;
- usar JOINs estratégicos;
- testar EXPLAIN para queries críticas;

Pagination:

- pagination cursor-based para listas grandes;
- parâmetros: page e limit (máximo 50 itens por página);
- headers: X-Total-Count, X-Page-Count;
- próxima/anterior links;

CDN:

- Next.js Image component para otimização de imagens;
- CDN para assets estáticos (CSS, JS, imagens);
- Cache headers adequados;
- origens separadas para conteúdo dinâmico vs estático;

Image Optimization:

- Next.js Image component with proper formats;
- WebP/AVIF para imagens modernas;
- Otimização automática no upload;
- Sprites quando aplicável;

PDF Processing:

- processamento em workers isolados;
- limite de páginas (max 5000);
- limite de tamanho (max 100MB);
- processamento assíncrono via RabbitMQ;
- geração de preview thumbnails;

Background Jobs:

- filas RabbitMQ para jobs pesados;
- priorização de jobs (urgente, normal, baixa);
- timeout configurado por job;
- retry automático com DLQ;

Rate Limits:

- login: 5/min por IP;
- register: 10/hora por IP;
- API pública: 100/min por usuário;
- upload: 10/hora por usuário;
- configuráveis via environment variables;

---
PARTE XXI — BACKUP E RECUPERAÇÃO DE DESASTRES
---
CAPÍTULO 50 — CONTINUIDADE

Documentar:

- backup MariaDB;
- backup de arquivos;
- retenção;
- criptografia;
- restauração;
- RPO;
- RTO;
- disaster recovery;
- failover;
- testes de restauração.

CAPÍTULO 51 — BACKUP MARIADB

Backup diário:

mysqldump -u dresbach_user -p'SENHA' --all-databases --single-transaction | gzip > /backup/full_$(date +%F).sql.gz

Backup incremental quando aplicável:

mysqldump -u dresbach_user -p'SENHA' --database editora_dresbach --skip-add-dump-tables --no-create-info --single-transaction | gzip > /backup/incremental_$(date +%F).sql.gz

Cópia externa:

- rsync /backup/ /external-backup-server/backup/
- s3 sync /backup/ s3://dresbach-backups/;

Criptografia:

- gpg --symmetric --cipher-algo AES256 /backup/full_$(date +%F).sql.gz;
- chaves armazenadas em cofre (HashiCorp Vault, AWS KMS);

Retenção:

- daily: 7 dias;
- weekly: 4 semanas;
- monthly: 12 meses;
- off-site: 3 anos;

Teste periódico de restauração:

- restaurar em ambiente de staging;
- validar integridade dos dados;
- testar restorepoint em horários diferentes;
- documentar tempo de restauração (RTO);

RPO definido pelo negócio:
- Perda de dados aceitável: no máximo 1 hora de dados (backup a cada hora);

RTO definido pela infraestrutura:
- Tempo máximo de recuperação: 4 horas;

Disaster Recovery:

- ambiente de standby pronto para promoção;
- documented procedure for failover;
- teste trimestral de DR;
- comunicação com stakeholders;

Failover:

- promote standby MariaDB to primary;
- update DNS/connection strings;
- verify application connectivity;
- monitor for 24 hours;

CAPÍTULO 52 — RPO E RTO

RPO (Recovery Point Objective):

- definicion: quantidade máxima de perda de dados aceita, medida em tempo;
- valor: 1 hora (backups a cada hora);
- medição: diferença entre tempo do desastre e último backup bem-sucedido;

RTO (Recovery Time Objective):

- definicion: tempo máximo aceito para restaurar o serviço após desastre;
- valor: 4 horas;
- medição: tempo decorrido desde início do desastre até serviço totalmente operacional;

Testes:

- testes de RTO a cada trimestre;
- testes de RPO a cada mês;
- documentar resultados;
- ajustar valores se necessário;

---
PARTE XXII — DEPLOYMENT
---
CAPÍTULO 53 — AMBIENTES

Documentar:

- LOCAL;
- DEVELOPMENT;
- STAGING;
- PRODUCTION;

Para cada ambiente:

- infraestrutura;
- banco de dados;
- secrets;
- domínio;
- observabilidade;
- permissões.

CAPÍTULO 54 — CONFIGURAÇÃO POR AMBIENTE

DEVELOPMENT:

- banco local Docker (editora_dresbach_dev);
- secrets em arquivos .env;
- modo debug ativo;
- Stripe modo test;
- observabilidade basic;

STAGING:

- banco isolado na VPS (editora_dresbach_staging);
- secrets injetadas via CI/CD;
- modo debug desativado;
- Stripe modo test com chaves específicas;
- observabilidade completa;

PRODUCTION:

- banco produção (editora_dresbach);
- secrets via HashiCorp Vault / AWS Secrets Manager;
- modo produção;
- Stripe modo live;
- observabilidade completa (Prometheus, Grafana, Sentry);

CAPÍTULO 55 — CHECKLIST DE PREPARAÇÃO PARA LANÇAMENTO

Produto:

- código fonte versionado;
- migrations executadas e validadas;
- schema do banco atualizado;
- dados de seed em produção;
- funcionalidades testadas;

Banco:

- backup completo realizado;
- restore testado;
- migrations versão compatível;
- dados de produção preservados;

Segurança:

- todas as credenciais rotacionadas;
- secrets removidos do código;
- RBAC configurada;
- WAF rules atualizadas;
- SSL certificates válidos;

Stripe:

- chaves enviadas para ambiente live;
- webhooks configurados no dashboard;
- modo test desativado;
- testes de pagamento realizados;

POD:

- gráficas cadastradas e testadas;
- fila de produção esvaziada ou testada;
- provedores configurados;

E-mails:

- templates testados;
- SMTP configurado;
- taxas de entrega monitoradas;

Domínio:

- DNS apontando para IP correto;
- SSL renovado;
- redirect HTTP → HTTPS;

Backup:

- backup completo realizado;
- restore testado em staging;
- cópia externa verificada;

Monitoramento:

- health checks configurados;
- alertas ativados;
- dashboards populados;

LGPD:

- política de privacidade atualizada;
- consentimento coletado;
- dados sensíveis protegidos;

Suporte:

- equipe de plantão definida;
- runbooks disponíveis;
- canais de comunicação definidos;

Analytics:

- tracking code implementado;
- eventos definidos;
- dashboards configurados;

SEO:

- meta tags configuradas;
- sitemap.xml gerado;
- robots.txt configurado;

Testes:

- smoke test passado;
- critical E2E tests passing;
- performance benchmarks ok;

Rollback:

- rollback procedure documentada e testada;
- last known good version identified;

Code Freeze:

- data e hora do freeze comunicadas;
- novas funcionalidades pós-freeze para próxima release;
- bug fixes excepcionais com aprovação;

Deploy:

- deploy executado via GitHub Actions ou script;
- health checks passando;
- smoke test passando;
- monitoramento ativo pelos próximos 30 minutos;

Go Live:

- todas as vérifications passadas;
- equipe de plantão alertada;
- comunicação para stakeholders;
- monitoramento ativo durante primeiras 24h;

Pós-lançamento (Primeiras 24h):

- verificar health checks;
- monitorar erros de produção;
- verificar métricas de pagamento;
- monitorar fila de print jobs;
- verificar logs de auditoria;
- coletar feedback inicial;

---
PARTE XXIII — GO-LIVE
---
CAPÍTULO 35 — PREPARAÇÃO PARA LANÇAMENTO

Criar um checklist extremamente completo.

Inclua itens idênticos ao Capítulo 55 do Parte XXII, mas focados exclusivamente no pré-lançamento imediato.

CAPÍTULO 36 — PLANO DE LANÇAMENTO

Documentar:

Code Freeze
↓
Backup
↓
Migration
↓
Deploy
↓
Smoke Test
↓
Payment Test
↓
Order Test
↓
Print Test
↓
Monitoring
↓
Go Live
↓
Pós-lançamento (24h)

Para cada etapa:

Code Freeze:

- data e hora do freeze comunicadas a toda a equipe;
- novas funcionalidades somente para próxima release;
- correções de bugs excepcionais com aprovação do Tech Lead;
- congelamento de API contracts;
- branch main protegida;

Backup:

- backup completo do banco de dados (mysqldump + gzip);
- backup de arquivos de manifesto e capa;
- armazenamento em local externo;
- validação de integridade (checksum);
- retenção mínima 7 dias;

Migration:

- executar migrations versionadas em staging primeiro;
- validar schema após migrations;
- verificar integridade dos dados;
- rollback plan ready;
- migração de dados se necessária (ex: novo campo em users);

Deploy:

- deploy production via GitHub Actions ou script oficial;
- health checks automáticos;
- smoke test suite executada;
- critical E2E tests passing;

Payment Test:

- teste de pagamento com Stripe Test Mode;
- criação de pedido completo até webhook;
- validação de royalties gerados;
- verificação de ledger entries;

Order Test:

- teste de criação de pedido até status DELIVERED (modo simulação);
- verificação de estoque (se aplicável);
- teste de cancelamento e reembolso;
- validação de fluxo de Print Job;

Print Test:

- teste de criação de Print Job com provedor manual;
- verificação de status de produção;
- teste de qualidade controlada;
- validação de embalagem e rastreamento;

Monitoring:

- health checks passing;
- métricas principais dentro do esperado;
- alertas configurados;
- logs estruturados ativos;
- Sentry erros monitorados;

Go Live:

- todas as vérifications acima passadas;
- equipe de plantão acionada;
- comunicação para stakeholders (CEO, CTO, Product);
- domínio apontado oficialmente;
- HTTPS forçado;

Pós-lançamento (Primeiras 24h):

- verificar health checks a cada hora;
- monitorar erros de produção no Sentry;
- monitorar métricas de pagamento (success rate);
- monitorar fila de print jobs (status, tempo);
- verificar logs de auditoria (nada anômalo);
- coletar feedback inicial de usuários piloto;
- verificar domínio e SSL renovação;
- confirmar envios de e-mail (confirmation, receipts);

---
PARTE XXIV — GOVERNANÇA
---
CAPÍTULO 37 — ADR

Explique como registrar decisões arquiteturais.

Modelo:

# ADR-XXXX — Título

## Contexto

## Problema

## Decisão

## Alternativas

## Consequências

## Status

CAPÍTULO 38 — VERSIONAMENTO

Documentar:

- Git;
- branches;
- pull requests;
- semantic versioning;
- changelog;
- releases;
- tags;
- migrations.

Semantic Versioning:

MAJOR (2.0.0): Breaking changes;
MINOR (1.1.0): Novas funcionalidades (non-breaking);
PATCH (1.0.1): Correções e melhorias;

Changelog:

- lista de mudanças por versão;
- agrupado por categorias (Added, Changed, Deprecated, Removed, Fixed, Security);
- baseado no princípio doKeep a Changelog;

Releases:

- tags de versão (v1.0.0, v1.1.0, v2.0.0);
- notes de release;
- datas de lançamento;

Migrations:

- versionamento de migrations;
- naming convention: V001_initial_schema.sql, V002_add_users_table.sql;
- rollback scripts;
- teste de migrations em staging antes de produção;

---
PARTE XXV — DEFINIÇÃO DE PRONTO
---
CAPÍTULO 39 — DEFINITION OF DONE

Uma feature só pode ser considerada concluída se:

- código implementado;
- revisão realizada;
- testes realizados (unit, integration, E2E quando aplicável);
- segurança validada (threat model, código review security);
- documentação atualizada (README, API docs, inline comments);
- logs implementados (estrutura JSON, nível adequado);
- tratamento de erro implementado (exceptions customizadas, mensagens amigáveis);
- métricas quando necessárias (contadores, timers, logs estruturados);
- migration criada quando necessária (com script de rollback);
- rollback conhecido (passos documentados e testados);
- QA aprovado (quando houver equipe QA);

Checklist de Definition of Done:

[ ] Código implementado seguindo padrões do projeto
[ ] Code review concluído por pares
[ ] Todos os testes unitários passando
[ ] Testes de integração passando
[ ] Testes E2E passando (quando aplicável)
[ ] Validações de segurança passadas
[ ] Documentação atualizada (README, docs, comentários)
[ ] Logs de auditoria implementados
[ ] Tratamento de erros implementado
[ ] Métricas de negócio implementadas (se necessárias)
[ ] Migration versionada criada (se necessário)
[ ] Script de rollback testado
[ ] QA aprovado (se houver equipe)
[ ] Índice de documentação atualizado
[ ] Changelog atualizado

Uma feature somente pode ser mergeada quando TODOS os itens acima estiverem marcados como concluídos.

---
PARTE XXVI — LANÇAMENTO V1.0
---
CAPÍTULO 40 — DRESBACH V1.0 PRODUCTION READY

Significa que a plataforma DRESBACH atende a todos os critérios técnicos, funcionais e operacionais para estar disponível em ambiente de produção.

CRITÉRIOS TÉCNICOS:

- código fonte versionado no Git (tag v1.0.0);
- todas as migrations versionadas e executadas no banco produção;
- schema do banco consistente com o ERD documentado;
- health checks passando em todos os serviços;
- backups realizados e teste de restauração validado;
- certificados SSL válidos e domínio configurado;
- firewall e segurança configurados conforme política definida;
- Redis e RabbitMQ conectados e operacionais;
- métricas de monitoramento ativas (Prometheus + Grafana);

CRITÉRIOS FUNCIONAIS:

- cadastro de leitor funcional (registro, login, perfil);
- ativação de escritor (WRITER_PENDING → ACTIVE);
- wizard de publicação completando fluxo DRAFT → PUBLISHED;
- catálogo de livros pesquisável e filtrável;
- checkout e pagamento via Stripe (modo test validado);
- criação de pedido até status DELIVERED (modo simulação);
- geração de royalties e ledger entries;
- Print Job creation com provedor manual;
- validação de PDF (poppler, pdffonts) funcionando;
- cálculo de precificação (calculadora DRESBACH);

CRITÉRIOS DE SEGURANÇA:

- RBAC configurada e testada;
- autenticação (login/logout/refresh) funcionando;
- autorização por permissões operando;
- webhooks Stripe validando signature;
- upload de PDF com validação (MIME, magic bytes, sandbox);
- nenhuma credencial no código-fonte;
- LGPD compliance validado (política, consentimento);

CRITÉRIOS OPERACIONAIS:

- equipe de plantão definida e comunicada;
- runbooks disponíveis para cenários críticos;
- backups testados com restauração bem-sucedida;
- procedimentos de rollback documentados e testados;
- SLA de resposta definido;
- escalation matrix definida;

CRITÉRIOS DE DOCUMENTAÇÃO:

- DRESBACH-ENGINEERING-BOOK.md versão 1.0 completado;
- resumo.md com métricas editoriais geradas;
- todos os capítulos documentados;
- API contracts documentados (OpenAPI);
- ADRs registrados;
- Definition of Done estabelecido e comunicado;
- roadmap de evolução definido;

CONFIGURAÇÕES FINAIS:

- ambiente PRODUCTION configurado;
- secrets injetadas via HashiCorp Vault / AWS Secrets Manager;
- environment variables definidas (.env.production);
- domínio dresbach.com apontado;
- HTTPS enforçado (HSTS);
- CDN configurada (se aplicar);

ROADMAP PÓS-V1.0:

FASE 1 — Otimização:
- performance tuning;
- indexação adicional;
- cache strategy refinada;

FASE 2 — Escalabilidade:
- sharding MariaDB se necessário;
- auto-scaling Kubernetes;
- multi-region deployment;

FASE 3 — Recursos Avançados:
- analytics avançado;
- recomendações personalizadas;
- assinaturas mensais;
- marketplace de serviços expandido;

FASE 4 — Internacionalização:
- suporte a múltiplos idiomas;
- moedas estrangeiras;
- conformidade regulatória global;

Ao atingir DRESBACH V1.0 PRODUCTION READY, a equipe deve:

1. celebrar o marco alcançado;
2. comunicar oficialmente o lançamento;
3. iniciar monitoramento contínuo;
4. planejar a próxima fase de evolução;
5. coletar métricas de baseline para comparação futura.

DEFINIÇÃO DE PRONTO PARA V1.0:

A release V1.0 só será marcada quando TODOS os critérios acima estiverem validados e aprovados pelo Tech Lead, Product Owner e Security Lead.

Após o lançamento, a equipe entrará na fase de pós-produção com monitoramento reforçado durante as primeiras 2 semanas, seguido de avaliação quinzenal de métricas e planejamento da roadmap definido.
