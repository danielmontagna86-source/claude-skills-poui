# PO Table API reference for Claude Code

Reference source used by this skill:

```text
https://po-ui.io/llms-generated/po-table.md
```

This file is a curated local reference for the `po-table` component from `@po-ui/ng-components`.

The purpose is to reduce hallucinated Angular code by forcing Claude Code to check known inputs, outputs, types and usage patterns before generating examples.

> Important: PO UI evolves. When using this skill in a real project, always compare this file with the installed `@po-ui/ng-components` version.

## Rule for Claude

Before generating any `po-table` code:

1. Check this reference.
2. Use only mapped inputs, outputs, types and methods.
3. If a property/event/method is not listed here, do not invent it.
4. If the user asks for something not mapped, say that version validation is required.
5. Prefer strongly typed Angular code.

## Core imports

```ts
import {
  PoTableAction,
  PoTableColumn,
  PoTableColumnSort,
  PoTableComponent,
  PoTableLiterals
} from '@po-ui/ng-components';
```

## Common inputs

Use Angular binding syntax when the value is not a literal string.

| Input | Recommended binding | Purpose |
| --- | --- | --- |
| `p-columns` | `[p-columns]="columns"` | Column definition array. |
| `p-items` | `[p-items]="items"` | Table data array. |
| `p-actions` | `[p-actions]="actions"` | Row action array. |
| `p-literals` | `[p-literals]="literals"` | Custom table labels. |
| `p-loading` | `[p-loading]="loading"` | Loading state. |
| `p-height` | `[p-height]="400"` | Table height. |
| `p-selectable` | `p-selectable` or `[p-selectable]="true"` | Enables row selection. |
| `p-sort` | `p-sort` or `[p-sort]="true"` | Enables sorting. |
| `p-striped` | `p-striped` or `[p-striped]="true"` | Enables striped rows. |
| `p-container` | `p-container="shadow"` | Table container style. |
| `p-service-api` | `p-service-api="/api/resource"` | Remote data endpoint when applicable. |
|

## Common outputs

| Output | Example | Purpose |
| --- | --- | --- |
| `p-selected` | `(p-selected)="onSelected($event)"` | Triggered when an item is selected. |
| `p-unselected` | `(p-unselected)="onUnselected($event)"` | Triggered when an item is unselected. |
| `p-sort-by` | `(p-sort-by)="onSort($event)"` | Triggered when sorting changes. |
| `p-show-more` | `(p-show-more)="onShowMore($event)"` | Triggered when loading more data. |
| `p-delete-items` | `(p-delete-items)="onDeleteItems($event)"` | Used when the table exposes bulk delete behavior. Validate in project version. |

## Column type mapping

Use `PoTableColumn` for columns.

```ts
readonly columns: Array<PoTableColumn> = [
  { property: 'branch', label: 'Filial' },
  { property: 'supplier', label: 'Fornecedor' },
  { property: 'document', label: 'Documento' },
  { property: 'dueDate', label: 'Vencimento', type: 'date', format: 'dd/MM/yyyy' },
  { property: 'amount', label: 'Valor', type: 'currency', format: 'BRL' },
  {
    property: 'status',
    label: 'Status',
    type: 'label',
    labels: [
      { value: 'ready', color: 'color-10', label: 'Pronto' },
      { value: 'blocked', color: 'color-07', label: 'Bloqueado' },
      { value: 'error', color: 'color-08', label: 'Erro' }
    ]
  }
];
```

## Safe column types

Commonly used column types:

```text
string/default
label
currency
date
number
boolean
```

Do not invent a column `type`. If the type is not known, omit `type` and render as default text.

## Actions

Use `PoTableAction` for row actions.

```ts
readonly actions: Array<PoTableAction> = [
  { label: 'Visualizar', icon: 'an an-eye', action: this.view.bind(this) },
  { label: 'Reprocessar', icon: 'an an-clockwise', action: this.reprocess.bind(this) },
  { label: 'Excluir', icon: 'an an-trash', type: 'danger', action: this.delete.bind(this) }
];
```

## Event handler examples

```ts
onSelected(item: PayableTitle): void {
  this.selectedItem = item;
}

onUnselected(item: PayableTitle): void {
  if (this.selectedItem?.id === item.id) {
    this.selectedItem = undefined;
  }
}

onSort(sort: PoTableColumnSort): void {
  this.sort = sort;
  this.loadItems();
}

onShowMore(): void {
  this.page += 1;
  this.loadItems(true);
}

onDeleteItems(items: Array<PayableTitle>): void {
  this.itemsToDelete = items;
}
```

## ViewChild rule

Only use `PoTableComponent` when a real component method is required and documented for the installed version.

Avoid this pattern unless validated:

```ts
@ViewChild('table') table!: PoTableComponent;
this.table.someInventedMethod();
```

Preferred approach:

```ts
@ViewChild('table') table?: PoTableComponent;
```

Do not call methods that are not confirmed in the local reference or official documentation.

## Recommended template

```html
<po-table
  #table
  p-sort
  p-striped
  p-selectable
  [p-height]="400"
  [p-columns]="columns"
  [p-items]="items"
  [p-actions]="actions"
  [p-loading]="loading"
  [p-literals]="literals"
  (p-selected)="onSelected($event)"
  (p-unselected)="onUnselected($event)"
  (p-sort-by)="onSort($event)"
  (p-show-more)="onShowMore()"
  (p-delete-items)="onDeleteItems($event)">
</po-table>
```

## Protheus usage pattern

For Protheus/ADVPL scenarios, never map database fields blindly to table columns.

Use the table as an operational decision surface:

- display business status;
- hide technical logs in details;
- use backend pagination;
- validate permissions server-side;
- log critical actions;
- avoid loading large SE2/SE5 datasets directly in frontend memory.

## Anti-hallucination checklist

Before returning code, confirm:

- [ ] Every input used exists in this file or was explicitly provided by the user.
- [ ] Every output used exists in this file or was explicitly provided by the user.
- [ ] Every column type is mapped.
- [ ] Every action uses `PoTableAction`.
- [ ] Every column uses `PoTableColumn`.
- [ ] No `ViewChild` method was invented.
- [ ] Bulk actions are validated in backend.
- [ ] The code compiles as Angular TypeScript.
