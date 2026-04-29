# Patch manual para travisvn/awesome-claude-skills

Use este conteúdo para abrir uma PR manual no repositório `travisvn/awesome-claude-skills`.

## Arquivo alvo

```text
README.md
```

## Seção alvo

```text
Community Skills > Individual Skills
```

## Linha para adicionar na tabela

Adicionar abaixo de uma linha existente da tabela `Individual Skills`:

```markdown
| **[poui-protheus / po-table](https://github.com/danielmontagna86-source/claude-skills-poui)** | PO UI and Protheus/ADVPL skill that helps reduce hallucinated Angular code by using local `po-table` references, typed examples and anti-hallucination rules. |
```

## PR title

```text
Add PO UI and Protheus skill
```

## PR description

```markdown
## Summary

Adds `poui-protheus`, a Claude Skill focused on PO UI, Angular and TOTVS Protheus/ADVPL.

The skill helps reduce hallucinated Angular code by requiring Claude Code to consult local component references before generating examples. It currently focuses on `po-table` and includes:

- `SKILL.md` with anti-hallucination rules;
- curated local reference for common `po-table` inputs, outputs and column patterns;
- Angular example with selection, actions, labels, currency/date columns and loading state;
- Protheus-oriented guidance for backend, auditability, permissions and performance;
- contribution guide and roadmap for more PO UI components.

## Repository

https://github.com/danielmontagna86-source/claude-skills-poui

## License

MIT

## Notes

- Does not require a paid SaaS or external service to provide value.
- Includes more than a single `SKILL.md` file: references, examples, prompts, roadmap and contribution guide.
- Intended for developers working with `@po-ui/ng-components`, Angular and Protheus/ADVPL.
```

## Checklist antes de enviar

- [ ] Confirmar que o repositório público mostra 10+ stars.
- [ ] Abrir fork pessoal de `travisvn/awesome-claude-skills`.
- [ ] Editar `README.md` no fork.
- [ ] Adicionar a linha na tabela `Individual Skills`.
- [ ] Abrir PR com o título e descrição acima.
- [ ] Não declarar que a PR foi gerada automaticamente por IA.
