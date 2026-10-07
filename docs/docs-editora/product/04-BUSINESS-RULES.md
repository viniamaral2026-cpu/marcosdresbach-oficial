# Regras de Negócio

1. Um e-mail corresponde a uma identidade de usuário.
2. Um usuário pode ser leitor e escritor simultaneamente após ativação.
3. A ativação de escritor não cria nova conta.
4. Somente escritor ativo pode criar/publicar livros.
5. Livro publicado precisa possuir versão editorial válida.
6. Livro pode ser público, privado, rascunho ou arquivado.
7. Alterações críticas em livro publicado devem criar nova versão.
8. Pagamento confirmado pelo webhook Stripe é a fonte de verdade do pagamento.
9. Cliente não deve receber produto antes da confirmação de pagamento.
10. Royalty deve ser registrado em ledger imutável.
11. Saque depende de saldo elegível.
12. Toda operação administrativa sensível gera audit log.
13. Uploads devem ser validados e armazenados fora do banco.
14. phpMyAdmin é ferramenta administrativa; não faz parte da aplicação pública.
