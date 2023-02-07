import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '@models/product.model';
import { CartService } from '@services/cart.service';
import { StoreService } from '@services/store.service';
import { Subscription } from 'rxjs';

const ROW_HEIGHTS: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnDestroy {
  cols: number = 3;
  rowHeight: number = ROW_HEIGHTS[this.cols];
  category: string | undefined = undefined;
  products: Product[] | undefined;
  sort: any = 'desc';
  count: number = 15;
  productsSuscription$: Subscription | undefined;

  constructor(private _cartService: CartService, private _storeService: StoreService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsSuscription$ = this._storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_product) => (this.products = _product));
  }

  columnCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHTS[this.cols];
  }
  onShowCategory(category: string): void {
    this.category = category;
    this.getProducts();
  }

  onAddCart(product: Product): void {
    const { image, title, price, id } = product;
    this._cartService.addToCart({
      id,
      product: image,
      name: title,
      price,
      quantity: 1,
    });
  }

  onItemsCountChange(newCount: any): void {
    this.count = newCount;
    this.getProducts();
  }
  onSortChange(newSort: any): void {
    this.sort = newSort;
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.productsSuscription$?.unsubscribe();
  }
}
