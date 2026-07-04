# Multi-AI usage guide

Este repositório foi criado como uma **Claude Code Skill**, mas também pode ser usado como **base de conhecimento multi-IA** para ChatGPT, Gemini, Cursor, assistentes de código no VS Code, Windsurf, Continue.dev e modelos locais.

## Dois modos de uso

### 1. Claude Code plugin

Use o modo nativo quando estiver no Claude Code:

```bash
/plugin marketplace add danielmontagna86-source/claude-skills-poui
```

Neste modo, os manifestos em `.claude-plugin/` são usados pelo Claude Code.

### 2. Context pack para outras IAs

Em outras IAs, o repositório deve ser usado como pacote de contexto.

A IA não instala a skill nativamente. Ela lê os arquivos Markdown como referência técnica para reduzir erro na geração de código PO UI.

## Arquivos principais para fornecer como contexto

Prioridade recomendada:

1. `skills/poui/SKILL.md`
2. `skills/poui/references/po-table-api.md`
3. `skills/poui/references/po-ui-context.md`
4. `examples/angular-po-table-demo/README.md`
5. `examples/angular-po-table-demo/payable-titles-table.component.ts`
6. `examples/angular-po-table-demo/payable-titles-table.component.html`
7. `prompts/analista-poui-senior.md`
8. `prompts/gerador-telas-poui.md`

## Prompt universal

Use este prompt em qualquer IA:

```text
Use este repositório como base de conhecimento para PO UI, Angular e Protheus/ADVPL.

Antes de gerar código, leia e respeite estes arquivos:
1. skills/poui/SKILL.md
2. skills/poui/references/po-table-api.md
3. skills/poui/references/po-ui-context.md

Regras obrigatórias:
- Não invente propriedades PO UI.
- Não invente eventos.
- Não invente métodos de ViewChild.
- Não invente tipos de coluna.
- Se algo não estiver mapeado na referência local, informe que precisa validar na versão instalada de @po-ui/ng-components.
- Priorize código Angular simples, tipado, conservador e compilável.
- Quando envolver Protheus/ADVPL, considere backend, filial, empresa, permissão, auditoria, performance e regras legadas.

Tarefa:
[descreva aqui o requisito]
```

## Como usar por ferramenta

### ChatGPT

Use quando quiser análise, revisão, arquitetura, prompts ou geração de código.

Recomendado:

1. Anexe ou cole `SKILL.md`.
2. Anexe ou cole `po-table-api.md`.
3. Peça para a IA não responder antes de validar a referência.
4. Depois envie o requisito da tela.

Prompt específico: `prompts/universal/chatgpt.md`.

### Gemini

Use quando quiser análise multimodal, revisão de tela, entendimento de requisitos ou proposta visual/UX.

Recomendado:

1. Cole o prompt universal.
2. Cole os arquivos principais de referência.
3. Peça saída objetiva e conservadora.
4. Evite pedir código muito extenso sem dividir em etapas.

Prompt específico: `prompts/universal/gemini.md`.

### Cursor

Use quando estiver editando projeto Angular real.

Recomendado:

1. Adicione este repositório ou os arquivos principais ao contexto do workspace.
2. Peça para alterar arquivos específicos.
3. Exija que qualquer propriedade PO UI venha da referência local ou da versão instalada no `package.json`.

Prompt específico: `prompts/universal/cursor.md`.

### Assistentes de código no VS Code

Use para revisão incremental dentro do VS Code.

Recomendado:

1. Abra os arquivos da referência no editor.
2. Abra o componente Angular que será alterado.
3. Peça mudanças pequenas e verificáveis.
4. Não peça para gerar uma tela inteira sem contexto dos arquivos abertos.

Prompt específico: `prompts/universal/vscode-coding-assistant.md`.

### Modelos locais / Continue.dev

Use quando quiser um agente local ou barato para tarefas repetitivas.

Recomendado:

1. Use contexto curto.
2. Inclua apenas `SKILL.md`, `po-table-api.md` e o requisito.
3. Peça saída em etapas.
4. Valide manualmente qualquer API não mapeada.

Prompt específico: `prompts/universal/local-model.md`.

## Cuidados

- Este repositório não substitui a documentação oficial do PO UI.
- Sempre compare com a versão instalada de `@po-ui/ng-components`.
- Não use código gerado diretamente em produção sem revisão.
- Para telas críticas, valide backend, permissão, auditoria e volume de dados.
- Para Protheus, evite mapear tabelas físicas diretamente para tela sem uma camada de API/regra.

## Posicionamento recomendado

Use este projeto como:

```text
Base de conhecimento multi-IA para PO UI + Protheus/ADVPL.
```

Resumo:

- Claude Code: usa como plugin/skill.
- Outras IAs: usam como pacote de contexto técnico.
