# Universal prompts

Prompts para usar este repositório como base de conhecimento em outras IAs além do Claude Code.

## Arquivos

- `chatgpt.md`: uso com ChatGPT.
- `gemini.md`: uso com Gemini.
- `cursor.md`: uso com Cursor.
- `vscode-coding-assistant.md`: uso com assistentes de código no VS Code.
- `local-model.md`: uso com modelos locais, Continue.dev ou ferramentas similares.

## Regra central

Independentemente da IA usada, mantenha esta regra:

```text
Não invente propriedades, eventos, tipos, métodos ou comportamentos de PO UI.
Use apenas o que estiver nas referências locais ou o que for confirmado na versão instalada do projeto.
```

## Ordem de contexto recomendada

1. `skills/poui/SKILL.md`
2. `skills/poui/references/po-table-api.md`
3. `skills/poui/references/po-ui-context.md`
4. requisito da tela ou rotina
5. código existente, quando houver
