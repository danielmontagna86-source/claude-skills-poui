# Arquitetura do projeto

## Visão geral

Este projeto organiza uma base de conhecimento para uso de IA em cenários com PO UI e Protheus.

A arquitetura é simples:

```text
Documentação técnica + padrões de uso + exemplos + prompts
                 ↓
              Skill PO UI
                 ↓
          Agente de IA especializado
                 ↓
   Análise, desenho de telas e apoio técnico
```

## Camadas

### 1. Skill

Define o comportamento do agente.

Arquivo principal:

```text
skills/poui/SKILL.md
```

Responsável por orientar:

- papel do agente;
- estilo de resposta;
- critérios técnicos;
- foco em Protheus e PO UI;
- padrões de recomendação.

### 2. Referências

Arquivos usados como contexto técnico complementar.

Exemplo:

```text
skills/poui/references/po-ui-context.md
```

Responsável por consolidar diretrizes, casos de uso e padrões.

### 3. Exemplos

Mostram como o agente deve raciocinar em situações reais.

Exemplos atuais:

```text
skills/poui/examples/screen-analysis.md
skills/poui/examples/po-table-use-cases.md
skills/poui/examples/advpl-to-poui-modernization.md
```

### 4. Prompts

Prompts prontos para uso em ferramentas de IA.

Exemplos:

```text
prompts/analista-poui-senior.md
prompts/gerador-telas-poui.md
```

## Evolução recomendada

Próximos incrementos úteis:

1. Adicionar referências específicas da documentação oficial do PO UI.
2. Criar exemplos por processo:
   - financeiro;
   - compras;
   - faturamento;
   - cadastro;
   - aprovação;
   - monitoramento.
3. Criar templates de API para integração com Protheus.
4. Criar padrões de JSON para telas PO UI.
5. Criar exemplos de modernização de rotinas ADVPL.

## Padrão de contribuição

Ao adicionar uma nova skill ou referência:

- explique o problema que ela resolve;
- use exemplos práticos;
- evite conteúdo genérico;
- mantenha foco em operação real;
- conecte PO UI com ganho técnico e de negócio.
