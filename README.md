# Claude Skills PO UI

Projeto com skills, prompts e referências para usar IA como apoio técnico na criação, análise e evolução de interfaces com **PO UI**, especialmente em cenários ligados ao ecossistema **TOTVS Protheus / ADVPL**.

O objetivo não é apenas gerar componentes isolados. A proposta é transformar documentação técnica de PO UI em um conjunto reutilizável de instruções para acelerar análise, desenho de telas, padronização visual, revisão de UX e geração assistida de código.

## Objetivo

Este repositório organiza uma base de conhecimento para agentes de IA capazes de:

- Interpretar documentação de componentes PO UI.
- Sugerir telas e fluxos com foco em produtividade operacional.
- Apoiar analistas ADVPL na modernização de interfaces.
- Criar padrões reutilizáveis para listas, formulários, filtros e ações.
- Reduzir retrabalho na leitura manual da documentação.
- Ajudar na transição de telas legadas para experiências mais modernas.

## Estrutura

```text
claude-skills-poui/
├── skills/
│   └── poui/
│       ├── SKILL.md
│       ├── references/
│       │   └── po-ui-context.md
│       └── examples/
│           ├── screen-analysis.md
│           ├── po-table-use-cases.md
│           └── advpl-to-poui-modernization.md
├── prompts/
│   ├── analista-poui-senior.md
│   └── gerador-telas-poui.md
└── docs/
    └── arquitetura.md
```

## Como usar

Use os arquivos em `skills/poui` como contexto para um agente de IA. O agente deve atuar como um analista técnico sênior, interpretando a necessidade de negócio antes de sugerir componentes.

Exemplo de uso:

```text
Você é um especialista em PO UI e Protheus.
Analise este processo financeiro e proponha uma tela moderna com filtros, tabela, ações e validações.
Use a skill PO UI deste repositório como referência.
```

## Foco do projeto

- PO UI aplicado ao mundo real.
- Ganho de produtividade para analistas técnicos.
- Uso de IA como copiloto de arquitetura e interface.
- Padronização de telas corporativas.
- Documentação reaproveitável para agentes.

## Status

Base inicial do projeto.
