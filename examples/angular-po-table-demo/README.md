# Angular PO Table demo

Demo mínima para validar o uso de `po-table` com seleção, ações, tipos de coluna e eventos.

O objetivo deste exemplo não é ser uma aplicação completa. Ele serve como referência visual e técnica para o Claude Code evitar propriedades inventadas ao gerar código com `@po-ui/ng-components`.

## O que este exemplo cobre

- `PoTableColumn`
- `PoTableAction`
- colunas com tipos `date`, `currency` e `label`
- seleção de linha
- ações por linha
- evento de ordenação
- evento de carregar mais
- estado de loading
- estrutura de dados tipada

## Arquivos

```text
examples/angular-po-table-demo/
├── README.md
├── payable-titles-table.component.html
├── payable-titles-table.component.ts
└── payable-titles-table.component.scss
```

## Como usar em um projeto Angular

1. Instale o PO UI no projeto Angular, conforme a documentação oficial.
2. Copie os arquivos deste diretório para uma pasta de componente.
3. Importe `PoModule` no módulo ou configure os imports equivalentes em standalone component, conforme a versão do projeto.
4. Ajuste o endpoint/backend real.

## Observação

Sempre valide os inputs/outputs contra a versão instalada de `@po-ui/ng-components`.
