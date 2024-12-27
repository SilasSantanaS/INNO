import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() data: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Input() columns: { field: string; header: string }[] = [];

  editItem(item: any): void {
    this.edit.emit(item);
  }

  deleteItem(item: any): void {
    this.delete.emit(item);
  }
}
