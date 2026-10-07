# Ativação de Escritor

## Estado inicial
Todo cadastro cria um usuário.

Se escolher leitor:
`account_type = READER`

Se escolher publicar:
`account_type = WRITER_PENDING`

## Ativação
O usuário acessa `Tornar-se escritor`.

Formulário:
- nome editorial
- biografia
- foto
- documento/dados exigidos pela operação
- dados bancários quando aplicável
- aceite de contrato/termos
- declaração de direitos da obra

Após envio:
`WRITER_PENDING → UNDER_REVIEW → ACTIVE`

## Regra de UI
WRITER_PENDING vê somente as funcionalidades necessárias para concluir ativação. O módulo completo de publicação aparece somente em `WRITER_ACTIVE`.

## Regra de backend
Mesmo que o usuário manipule a URL, endpoints editoriais verificam `writer.active`.
