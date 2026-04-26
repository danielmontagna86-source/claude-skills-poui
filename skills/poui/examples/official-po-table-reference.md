# Exemplo: uso profissional de PO Table com referência oficial

Referência base:

```text
https://po-ui.io/llms-generated/po-table.md
```

## Objetivo

Usar a documentação oficial do PO UI como base para orientar uma IA na criação de tabelas corporativas mais úteis, especialmente em processos de Protheus.

O foco não é dizer apenas "use uma tabela". O foco é definir:

- quais dados realmente ajudam o usuário a decidir;
- quais ações devem existir por linha;
- quais filtros reduzem ruído;
- quais informações devem ir para detalhe;
- como evitar transformar a tabela em uma cópia bruta do banco de dados.

## Cenário prático

Tela para monitorar títulos a pagar em fluxo bancário:

```text
SE2 -> Conciliação -> Agrupamento -> Borderô -> ZAK -> VAN -> Retorno -> SEB -> SE5
```

A tabela precisa permitir que o operador identifique rapidamente:

- títulos prontos para envio;
- títulos bloqueados por regra;
- títulos com erro de integração;
- títulos retornados pelo banco;
- títulos já baixados;
- itens que exigem ação manual.

## Modelo de raciocínio para IA

Antes de sugerir colunas, a IA deve responder:

1. Qual decisão o usuário toma nessa tela?
2. Qual status muda a prioridade do atendimento?
3. Quais dados são necessários na visão principal?
4. Quais dados devem ficar no detalhe?
5. Quais ações são seguras para execução em massa?
6. Quais ações precisam de confirmação?
7. Quais erros devem ser traduzidos para linguagem operacional?

## Estrutura sugerida da tabela

### Colunas principais

```text
Filial
Fornecedor
Documento
Parcela
Vencimento
Valor
Status financeiro
Status integração
Borderô/Lote
Última atualização
Ações
```

### Dados que devem ir para detalhe

```text
Log técnico completo
Payload enviado
Payload de retorno
Mensagem original da VAN
Histórico de reprocessamentos
Usuário responsável pela ação
Dados internos de relacionamento
```

## Ações recomendadas

### Ações por linha

```text
Visualizar detalhe
Ver histórico
Ver erro de integração
Reprocessar, quando permitido
```

### Ações em lote

```text
Reprocessar selecionados
Exportar visão filtrada
Marcar para revisão, se existir regra de negócio
```

Ações em lote devem ser usadas com cuidado em processos financeiros. Sempre validar permissão, status e elegibilidade no backend.

## Filtros recomendados

```text
Filial
Fornecedor
Período de vencimento
Status financeiro
Status integração
Borderô/Lote
Banco
Última atualização
```

## Estados da tela

A tela deve prever:

- carregamento;
- sem registros;
- erro de consulta;
- erro de permissão;
- sucesso após ação;
- reprocessamento em andamento;
- resultado parcial em ações em lote.

## Cuidados técnicos

- Não carregar grandes volumes de dados no frontend.
- Usar paginação e filtros no backend.
- Não expor mensagens técnicas cruas para o usuário final.
- Registrar auditoria para ações críticas.
- Validar regras de negócio no backend, não apenas na interface.
- Tratar multiempresa e multifilial.
- Evitar colunas em excesso.
- Usar tags/status para leitura rápida.

## Prompt de uso

```text
Com base na documentação oficial do PO Table e no contexto Protheus abaixo, proponha uma tabela operacional.

Contexto:
[descreva o processo]

Responda com:
1. objetivo da tabela;
2. colunas essenciais;
3. filtros;
4. ações por linha;
5. ações em lote;
6. dados que devem ir para detalhe;
7. cuidados de backend;
8. riscos de UX;
9. ganho para analista ADVPL.
```

## Ganho para o projeto

Este exemplo transforma a documentação do componente em uma orientação de uso real. Isso ajuda o agente de IA a não tratar PO UI como biblioteca visual, mas como ferramenta de produtividade, governança e padronização de telas corporativas.
