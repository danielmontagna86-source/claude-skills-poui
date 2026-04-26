# Contexto PO UI

## O que é PO UI neste projeto

PO UI é tratado aqui como um conjunto de padrões para criar interfaces corporativas consistentes, principalmente em aplicações web ligadas ao ecossistema TOTVS.

Neste repositório, o foco não é decorar nomes de componentes. O foco é entender como os componentes ajudam a organizar processos reais.

## Casos comuns

### Consulta operacional

Uso típico:

- Listagem de registros.
- Filtros por status, data, filial, cliente, fornecedor ou responsável.
- Ações por linha.
- Paginação.
- Exportação ou detalhamento.

Componentes associados:

- Tabela.
- Filtros.
- Botões de ação.
- Tags de status.
- Modal ou página de detalhe.

### Manutenção cadastral

Uso típico:

- Inclusão e edição de registros.
- Validação de campos obrigatórios.
- Agrupamento de dados por seções.
- Mensagens claras de erro.

Componentes associados:

- Formulários.
- Inputs.
- Selects.
- Steps, tabs ou sections.
- Botões de salvar, cancelar e revisar.

### Monitoramento

Uso típico:

- Acompanhamento de processos.
- Estados como pendente, processando, erro, concluído.
- Drill-down para logs e histórico.
- Painéis de exceção.

Componentes associados:

- Tabela com status.
- Cards de resumo.
- Filtros rápidos.
- Detalhe lateral ou modal.
- Timeline/log.

### Aprovação

Uso típico:

- Lista de itens aguardando decisão.
- Visualização de evidências.
- Ações de aprovar, reprovar ou solicitar ajuste.
- Registro de justificativa.

Componentes associados:

- Tabela.
- Formulário de decisão.
- Modal de confirmação.
- Alertas.
- Histórico.

## Diretrizes de arquitetura

- Separar tela de consulta da tela de operação quando o processo for complexo.
- Usar tabela para visão geral, não para esconder regra crítica.
- Evitar excesso de ações na mesma linha.
- Priorizar filtros realmente usados pelo operador.
- Trabalhar com paginação e busca backend em grandes volumes.
- Exibir erro técnico de forma útil, mas sem vazar detalhes sensíveis.
- Registrar logs quando houver ação crítica.

## Diretrizes para Protheus

Ao aplicar PO UI com Protheus, considere:

- Multiempresa e multifilial.
- Permissões por perfil.
- Regras legadas em ADVPL.
- Pontos de entrada e customizações existentes.
- Performance de queries em tabelas grandes.
- APIs intermediárias para proteger regra de negócio.
- Auditoria para operações financeiras e cadastrais.
