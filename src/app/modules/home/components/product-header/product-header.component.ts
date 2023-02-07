import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
})
export class ProductHeaderComponent {
  @Output() columnCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<string>();
  @Output() sortChange = new EventEmitter<string>();

  sort: string = 'desc';
  itemShowCount: number = 15;

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }
  onItemUpdate(count: number): void {
    this.itemShowCount = count;
    this.itemsCountChange.emit(count.toString());
  }
  onColumnsUpdate(colsNum: number): void {
    this.columnCountChange.emit(colsNum);
  }
}
