# Configurações do Sistema — DRESBACH Editora

## Sistema Global

```text
Essas configurações são armazenadas na tabela system_configurations e podem ser
alteradas via admin ou migrações quando necessárias para ajustes operacionais.
```

## Chave/Valor Esperadas

```text
app_name: "DRESBACH Editora"
app_version: "1.0.0"
timezone: "America/Sao_Paulo"
currency_default: "BRL"
date_format: "DD/MM/YYYY"
datetime_format: "DD/MM/YYYY HH:mm"

# Modo de operação
environment: "development"  # development, staging, production
debug_mode: false

# Configurações de PDF
pdf_max_file_size_mb: 100
pdf_max_pages: 5000
pdf_required_bleed_mm: 3
pdf_min_resolution_dpi: 150
pdf_allowed_formats: ["pdf"]

# Configurações de impressão
print_default_provider: "manual"  # ou nome do provider
print_sla_default_hours: 72
print_minimum_copies: 1
print_maximum_copies: 1000

# Configurações de royalties
royalty_default_percentage: 15.00
royalty_minimum_withdrawal: 50.00
royalty_payment_terms_days: 30

# Configurações de marketplace
marketplace_commission_percentage: 10.00
minimum_product_price: 1.00
maximum_product_price: 9999.99

# Configurações de envio
shipping_default_carrier: "correios"
shipping_minimum_price: 5.00
shipping_maximum_price: 100.00

# Configurações de e-mail
email_from_address: "noreply@dresbach.com"
email_templates_path: "/templates/email"

# Configurações de segurança
jwt_expiration_hours: 24
password_min_length: 8
mfa_required_for_sensitive_ops: true

# Taxas de plataforma
platform_fee_default_percentage: 10.00
payment_fee_default_percentage: 4.00

# Limites
maximum_book_pages: 10000
minimum_book_pages: 10
maximum_file_size_mb: 200
```