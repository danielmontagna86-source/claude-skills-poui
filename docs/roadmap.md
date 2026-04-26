# Roadmap

Este roadmap organiza a evolução das skills PO UI para Claude Code.

## Status atual

### Disponível

- Skill base `poui-protheus`.
- Regras anti-hallucination para geração de código.
- Referência curada para `po-table`.
- Exemplo Angular mínimo com `po-table`.
- Prompts para análise de tela e geração de tela PO UI.
- Manifestos para Claude Code plugin/marketplace.

## Próximos componentes

### 1. po-page-list

Objetivo:

- Criar referência local de inputs/outputs.
- Definir padrão de tela de listagem corporativa.
- Criar exemplo com filtros, ações e tabela.
- Mapear uso típico em rotinas Protheus.

### 2. po-modal

Objetivo:

- Criar referência local de inputs/outputs.
- Definir padrão para confirmação, detalhe e ação crítica.
- Criar exemplo com confirmação de reprocessamento financeiro.
- Evitar uso indevido de modal para fluxo complexo.

### 3. po-page-dynamic-table

Objetivo:

- Avaliar uso em cenários com metadados.
- Criar exemplo com backend Protheus.
- Documentar riscos de acoplamento excessivo.

### 4. po-page-dynamic-edit

Objetivo:

- Avaliar uso para cadastro e manutenção.
- Criar exemplo de cadastro com validação.
- Documentar integração com API e regras legadas.

## Padrão para novas referências

Cada componente deve ter:

```text
skills/poui/references/<component>-api.md
examples/angular-<component>-demo/
skills/poui/examples/<component>-use-cases.md
```

## Checklist para cada componente

- [ ] Mapear inputs principais.
- [ ] Mapear outputs principais.
- [ ] Mapear tipos TypeScript relevantes.
- [ ] Criar exemplo Angular mínimo.
- [ ] Criar anti-patterns.
- [ ] Criar orientações para Protheus.
- [ ] Atualizar README.
- [ ] Testar com Claude Code.

## Prioridade

1. `po-table`
2. `po-page-list`
3. `po-modal`
4. `po-page-dynamic-table`
5. `po-page-dynamic-edit`
6. componentes de formulário
7. componentes de feedback
