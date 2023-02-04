import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
})
export class ProductHeaderComponent {
  @Output() columnCountChange = new EventEmitter<number>();
  sort: string = 'desc';
  itemShowCount: number = 15;
  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }
  onItemUpdate(count: number): void {
    this.itemShowCount = count;
  }
  onColumnsUpdate(colsNum: number): void {
    this.columnCountChange.emit(colsNum);
  }
}
