# Storage

Arquivos grandes não ficam no MariaDB.

Estrutura:
storage/
├── manuscripts/
├── covers/
├── previews/
├── invoices/
└── exports/

Cada arquivo possui checksum e metadados no banco.

Para produção, avaliar storage compatível com S3 ou volume persistente da VPS. O domínio não deve depender do tipo de storage.
