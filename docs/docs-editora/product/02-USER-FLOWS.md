# Fluxos de Usuário

## Cadastro — Leitor
1. Nome
2. E-mail
3. Senha
4. Aceite de termos
5. Escolha: Leitor
6. Verificação de e-mail
7. Dashboard do leitor

## Cadastro — intenção de Escritor
1. Cadastro
2. Escolha: Quero publicar
3. Conta criada como `WRITER_PENDING`
4. Dashboard híbrido
5. Banner: `Ative seu perfil de escritor`
6. Formulário de ativação
7. Dados editoriais
8. Dados financeiros necessários
9. Termos de publicação
10. Envio da solicitação
11. Análise/validação
12. Ativação
13. Módulo editorial desbloqueado

## Escritor ativo
O mesmo usuário possui uma única identidade e acessa:
- Minha loja/leitura
- Meus livros
- Novo livro
- Produção
- Vendas
- Royalties
- Serviços editoriais

Não duplicar conta de leitor e escritor.

## Compra
Catálogo → livro → carrinho → checkout → Stripe → webhook confirmado → pedido pago → produção → envio → entrega.

## Publicação
Novo livro → metadados → manuscrito → validação → capa → produto de impressão → preço → revisão → envio para análise → aprovação → publicado.
