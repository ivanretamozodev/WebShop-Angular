import { Subscription } from 'rxjs';
import { StoreService } from '@services/store.service';
import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] = [];
  categories$: Subscription | undefined;
  constructor(private _storeService: StoreService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this._storeService.getAllCategories().subscribe((_category) => (this.categories = _category));
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    this.categories$?.unsubscribe();
  }
}
