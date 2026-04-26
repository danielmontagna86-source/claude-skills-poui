# Claude Skills PO UI

Projeto com skills, prompts e referencias para usar IA como apoio tecnico na criacao, analise e evolucao de interfaces com PO UI, especialmente em cenarios ligados ao ecossistema TOTVS Protheus e ADVPL.

O objetivo nao e apenas gerar componentes isolados. A proposta e transformar documentacao tecnica de PO UI em um conjunto reutilizavel de instrucoes para acelerar analise, desenho de telas, padronizacao visual, revisao de UX e geracao assistida de codigo.

## Objetivo

Este repositorio organiza uma base de conhecimento para agentes de IA capazes de:

- Interpretar documentacao de componentes PO UI.
- Sugerir telas e fluxos com foco em produtividade operacional.
- Apoiar analistas ADVPL na modernizacao de interfaces.
- Criar padroes reutilizaveis para listas, formularios, filtros e acoes.
- Reduzir retrabalho na leitura manual da documentacao.
- Ajudar na transicao de telas legadas para experiencias mais modernas.

## Estrutura

- .gitignore
- LICENSE
- README.md
- skills/poui/SKILL.md
- skills/poui/references/po-ui-context.md
- skills/poui/examples/screen-analysis.md
- skills/poui/examples/po-table-use-cases.md
- skills/poui/examples/advpl-to-poui-modernization.md
- skills/poui/examples/official-po-table-reference.md
- prompts/analista-poui-senior.md
- prompts/gerador-telas-poui.md
- docs/arquitetura.md

## Como usar

Use os arquivos em skills/poui como contexto para um agente de IA. O agente deve atuar como um analista tecnico senior, interpretando a necessidade de negocio antes de sugerir componentes.

Exemplo de uso:

Voce e um especialista em PO UI e Protheus. Analise este processo financeiro e proponha uma tela moderna com filtros, tabela, acoes e validacoes. Use a skill PO UI deste repositorio como referencia.

## Referencia oficial usada

O exemplo skills/poui/examples/official-po-table-reference.md foi criado para orientar o uso profissional de tabelas PO UI a partir da documentacao oficial em formato LLM do PO UI.

## Foco do projeto

- PO UI aplicado ao mundo real.
- Ganho de produtividade para analistas tecnicos.
- Uso de IA como copiloto de arquitetura e interface.
- Padronizacao de telas corporativas.
- Documentacao reaproveitavel para agentes.

## Licenca

Este projeto utiliza licenca MIT.

## Status

Base inicial profissional do projeto criada.
