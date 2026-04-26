# Claude Skills PO UI

Skill para Claude Code focada em **PO UI**, **Angular**, **TOTVS Protheus** e **ADVPL**.

O objetivo é reduzir código inventado por IA ao gerar telas com `@po-ui/ng-components`, especialmente em cenários corporativos com tabelas, filtros, ações, status, backend, auditoria e performance.

## Problema que resolve

Quem usa PO UI com IA conhece alguns erros comuns:

- input que não existe;
- output errado;
- tipo de coluna inconsistente;
- método inventado no `ViewChild`;
- exemplo Angular visualmente bonito, mas frágil;
- tela gerada sem considerar backend, permissão e volume de dados.

Esta skill força o agente a consultar referências locais antes de gerar código.

## O que existe hoje

- `SKILL.md` com regras anti-hallucination.
- Referência curada para `po-table`.
- Exemplo Angular mínimo de `po-table`.
- Prompts para análise e geração de telas PO UI.
- Guia de contribuição para novos componentes.
- Roadmap para `po-page-list`, `po-modal` e outros componentes.
- Manifestos para Claude Code plugin/marketplace.

## Instalação no Claude Code

```bash
/plugin marketplace add danielmontagna86-source/claude-skills-poui
```

Depois, instale o plugin disponível no marketplace adicionado conforme o fluxo do Claude Code.

## Estrutura

```text
claude-skills-poui/
├── .claude-plugin/
│   ├── marketplace.json
│   └── plugin.json
├── examples/
│   └── angular-po-table-demo/
│       ├── README.md
│       ├── payable-titles-table.component.html
│       ├── payable-titles-table.component.scss
│       └── payable-titles-table.component.ts
├── skills/
│   └── poui/
│       ├── SKILL.md
│       ├── references/
│       │   ├── po-ui-context.md
│       │   └── po-table-api.md
│       └── examples/
│           ├── advpl-to-poui-modernization.md
│           ├── official-po-table-reference.md
│           ├── po-table-use-cases.md
│           └── screen-analysis.md
├── prompts/
│   ├── analista-poui-senior.md
│   └── gerador-telas-poui.md
├── docs/
│   ├── arquitetura.md
│   ├── awesome-claude-skills-submission.md
│   └── roadmap.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## Como usar

Exemplo de prompt:

```text
Use a skill PO UI.
Crie um po-table para títulos a pagar com seleção, ações, status financeiro, status de integração e carregamento incremental.
Não invente propriedades. Consulte a referência local antes de responder.
```

## Foco técnico

- PO UI aplicado ao mundo real.
- Angular com tipos mais seguros.
- Redução de propriedades inventadas.
- Ganho de produtividade para analistas técnicos.
- Modernização de telas ADVPL.
- Padronização de telas corporativas.
- Backend, permissão, auditoria e performance.

## Próximos componentes

- `po-page-list`
- `po-modal`
- `po-page-dynamic-table`
- `po-page-dynamic-edit`

Consulte `docs/roadmap.md`.

## Contribuição

Consulte `CONTRIBUTING.md` para adicionar novas referências de componentes PO UI.

## Licença

MIT.
