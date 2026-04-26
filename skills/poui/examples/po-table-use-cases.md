# Exemplo: quando usar tabela em PO UI

## Erro comum

Usar tabela apenas como grade visual, tentando reproduzir uma tela legada.

## Abordagem correta

A tabela deve ser usada como ponto de decisão operacional.

Antes de propor colunas, pergunte:

- O que o usuário precisa decidir nessa tela?
- Qual informação muda a ação do usuário?
- Quais filtros reduzem ruído?
- Qual status precisa ficar evidente?
- O que deve abrir detalhe em vez de ocupar coluna?

## Exemplo: contas a pagar

Colunas recomendadas:

- Filial
- Fornecedor
- Documento
- Vencimento
- Valor
- Status financeiro
- Status integração
- Última atualização
- Ações

Evitar excesso de colunas como:

- campos técnicos internos;
- códigos sem descrição;
- logs completos;
- mensagens longas de erro.

Esses dados devem ir para o detalhe.

## Ganho prático

A tabela deixa de ser uma cópia do banco de dados e passa a ser uma ferramenta de operação.
