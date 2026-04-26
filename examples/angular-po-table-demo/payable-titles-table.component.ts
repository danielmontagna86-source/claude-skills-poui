import { Component, ViewChild } from '@angular/core';
import {
  PoTableAction,
  PoTableColumn,
  PoTableColumnSort,
  PoTableComponent,
  PoTableLiterals
} from '@po-ui/ng-components';

export interface PayableTitle {
  id: string;
  branch: string;
  supplier: string;
  document: string;
  installment: string;
  dueDate: string;
  amount: number;
  financialStatus: 'ready' | 'blocked' | 'paid';
  integrationStatus: 'pending' | 'sent' | 'error' | 'returned';
  lot?: string;
  updatedAt: string;
}

@Component({
  selector: 'app-payable-titles-table',
  templateUrl: './payable-titles-table.component.html',
  styleUrls: ['./payable-titles-table.component.scss']
})
export class PayableTitlesTableComponent {
  @ViewChild('table') table?: PoTableComponent;

  loading = false;
  page = 1;
  selectedItem?: PayableTitle;
  sort?: PoTableColumnSort;

  readonly literals: PoTableLiterals = {
    noData: 'Nenhum título encontrado',
    loadMoreData: 'Carregar mais títulos'
  };

  readonly columns: Array<PoTableColumn> = [
    { property: 'branch', label: 'Filial' },
    { property: 'supplier', label: 'Fornecedor' },
    { property: 'document', label: 'Documento' },
    { property: 'installment', label: 'Parcela' },
    { property: 'dueDate', label: 'Vencimento', type: 'date', format: 'dd/MM/yyyy' },
    { property: 'amount', label: 'Valor', type: 'currency', format: 'BRL' },
    {
      property: 'financialStatus',
      label: 'Status financeiro',
      type: 'label',
      labels: [
        { value: 'ready', color: 'color-10', label: 'Pronto' },
        { value: 'blocked', color: 'color-07', label: 'Bloqueado' },
        { value: 'paid', color: 'color-11', label: 'Baixado' }
      ]
    },
    {
      property: 'integrationStatus',
      label: 'Integração',
      type: 'label',
      labels: [
        { value: 'pending', color: 'color-03', label: 'Pendente' },
        { value: 'sent', color: 'color-10', label: 'Enviado' },
        { value: 'error', color: 'color-08', label: 'Erro' },
        { value: 'returned', color: 'color-11', label: 'Retornado' }
      ]
    },
    { property: 'lot', label: 'Lote/Borderô' },
    { property: 'updatedAt', label: 'Atualização', type: 'date', format: 'dd/MM/yyyy HH:mm' }
  ];

  readonly actions: Array<PoTableAction> = [
    { label: 'Visualizar', icon: 'an an-eye', action: this.view.bind(this) },
    { label: 'Ver histórico', icon: 'an an-clock-counter-clockwise', action: this.viewHistory.bind(this) },
    { label: 'Reprocessar', icon: 'an an-clockwise', action: this.reprocess.bind(this) }
  ];

  items: Array<PayableTitle> = [
    {
      id: '1',
      branch: '0101',
      supplier: 'Fornecedor Alfa',
      document: 'NF-10001',
      installment: '01',
      dueDate: '2026-04-28',
      amount: 1250.75,
      financialStatus: 'ready',
      integrationStatus: 'pending',
      lot: 'BRD-000123',
      updatedAt: '2026-04-26T10:15:00'
    },
    {
      id: '2',
      branch: '0101',
      supplier: 'Fornecedor Beta',
      document: 'NF-10002',
      installment: '01',
      dueDate: '2026-04-30',
      amount: 899.9,
      financialStatus: 'blocked',
      integrationStatus: 'error',
      lot: 'BRD-000124',
      updatedAt: '2026-04-26T11:20:00'
    }
  ];

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

  view(item: PayableTitle): void {
    console.log('Visualizar título', item);
  }

  viewHistory(item: PayableTitle): void {
    console.log('Histórico do título', item);
  }

  reprocess(item: PayableTitle): void {
    console.log('Reprocessar título', item);
  }

  private loadItems(append = false): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;

      if (!append) {
        this.page = 1;
      }
    }, 300);
  }
}
