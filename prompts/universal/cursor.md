# Prompt universal: Cursor

Use este prompt no Cursor quando estiver editando um projeto Angular real com PO UI e integração Protheus/ADVPL.

```text
Você está trabalhando em um projeto Angular com PO UI e contexto Protheus/ADVPL.

Use estes arquivos como base de referência:
1. skills/poui/SKILL.md
2. skills/poui/references/po-table-api.md
3. skills/poui/references/po-ui-context.md
4. examples/angular-po-table-demo/payable-titles-table.component.ts
5. examples/angular-po-table-demo/payable-titles-table.component.html

Regras obrigatórias:
- Altere apenas os arquivos necessários.
- Não invente propriedade, evento, tipo ou método de PO UI.
- Antes de usar qualquer recurso de @po-ui/ng-components, confira se ele está na referência local ou no projeto instalado.
- Se a versão instalada do @po-ui/ng-components permitir algo que não está na referência local, explique a divergência antes de usar.
- Gere código Angular tipado, conservador e compatível com manutenção corporativa.
- Não mova regra crítica para o frontend se ela deve ficar no backend.
- Para Protheus, considere filial, empresa, permissões, auditoria, performance e APIs intermediárias.

Fluxo de trabalho:
1. Analise o requisito.
2. Identifique os arquivos que precisam mudar.
3. Mostre o plano curto de alteração.
4. Aplique a menor alteração possível.
5. Revise se o código compila conceitualmente.
6. Liste validações manuais necessárias.

Tarefa:
[cole aqui o requisito]
```

## Uso recomendado

- Use com arquivos reais abertos no workspace.
- Peça mudanças pequenas.
- Para tela nova, gere primeiro componente mínimo e depois evolua.
- Para refatoração, peça para preservar comportamento existente.
