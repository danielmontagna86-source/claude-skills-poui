# Claude Skills PO UI

Skill para Claude Code focada em **PO UI**, **Angular**, **TOTVS Protheus** e **ADVPL**.

> Projeto comunitário e independente. Não é afiliado oficialmente à TOTVS, PO UI, Anthropic ou Claude.

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

## Status do projeto

Versão atual: **v1.1.0**.

Este repositório está pronto para uso como **skill de contexto para Claude Code** e como **base de conhecimento multi-IA** para geração assistida de telas PO UI.

Ele **não** é uma biblioteca Angular, não publica pacote `npm` e não substitui a validação no projeto real. O exemplo Angular incluído é propositalmente mínimo para servir como referência técnica e visual, não como aplicação completa.

## Versão de referência e validação

Referências validadas inicialmente em:

- Data de validação: **2026-07-04**.
- Componente principal: `po-table`.
- Fonte de referência local: `skills/poui/references/po-table-api.md`.
- Fonte pública indicada na referência: `https://po-ui.io/llms-generated/po-table.md`.
- Escopo: inputs comuns, outputs comuns, tipos de coluna, ações, eventos e padrões seguros de uso.

PO UI evolui entre versões. Antes de usar código gerado em produção, compare as referências locais deste repositório com a versão instalada de `@po-ui/ng-components` no projeto.

## O que existe hoje

- `SKILL.md` com regras anti-hallucination.
- Referência curada para `po-table`.
- Exemplo Angular mínimo de `po-table`.
- Prompts para análise e geração de telas PO UI.
- Guia multi-IA em `AI_USAGE.md`.
- Prompts universais para ChatGPT, Gemini, Cursor, assistentes de código no VS Code e modelos locais.
- Guia de contribuição para novos componentes.
- Roadmap para `po-page-list`, `po-modal` e outros componentes.
- Manifestos para Claude Code plugin/marketplace.

## Coverage status

### Current focus

- `po-table`.
- Local reference for common inputs, outputs and column patterns.
- Typed Angular example with selection, actions, labels, currency/date columns and loading state.
- Anti-hallucination rules for inputs, outputs, column types and `ViewChild` usage.
- Protheus/ADVPL guidance for backend, auditability, permissions and performance.

### Planned coverage

- Deeper `po-table` API coverage.
- CSS tokens validation.
- Public methods validation.
- `po-page-list`.
- `po-modal`.
- `po-page-dynamic-table`.
- `po-page-dynamic-edit`.

### Important note

PO UI evolves across versions. Always compare the local references in this repository with the installed version of `@po-ui/ng-components` before using generated code in production.

## Instalação no Claude Code

```bash
/plugin marketplace add danielmontagna86-source/claude-skills-poui
```

Depois, instale o plugin disponível no marketplace adicionado conforme o fluxo do Claude Code.

## Uso com outras IAs

Este repositório também pode ser usado como **pacote de contexto técnico** para outras IAs.

Nesse modo, a IA não instala a skill nativamente. Ela usa os arquivos Markdown como base de conhecimento para reduzir alucinação ao gerar ou revisar código PO UI.

Compatível como contexto para:

- ChatGPT;
- Gemini;
- Cursor;
- assistentes de código no VS Code;
- Windsurf;
- Continue.dev;
- modelos locais.

Consulte `AI_USAGE.md` e os prompts em `prompts/universal/`.

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
│   ├── gerador-telas-poui.md
│   └── universal/
│       ├── README.md
│       ├── chatgpt.md
│       ├── gemini.md
│       ├── cursor.md
│       ├── vscode-coding-assistant.md
│       └── local-model.md
├── docs/
│   ├── arquitetura.md
│   ├── awesome-claude-skills-submission.md
│   ├── github-publication-checklist.md
│   └── roadmap.md
├── AI_USAGE.md
├── CHANGELOG.md
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

## Quando usar esta skill

Use quando precisar:

- desenhar uma tela PO UI a partir de um requisito de negócio;
- modernizar uma rotina ADVPL para uma interface web mais clara;
- gerar `po-table` com seleção, ações, status, paginação ou carregamento incremental;
- revisar se uma proposta de tela está operacional, auditável e simples;
- conectar decisões de frontend com backend Protheus, permissões, auditoria e performance.

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
