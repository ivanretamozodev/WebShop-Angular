import { Component, OnInit } from '@angular/core';
import { Product } from '@models/product.model';
import { CartService } from '@services/cart.service';

const ROW_HEIGHTS: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  cols: number = 3;
  rowHeight: number = ROW_HEIGHTS[this.cols];
  category: string | undefined = undefined;

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {}

  columnCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHTS[this.cols];
  }
  onShowCategory(category: string): void {
    this.category = category;
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
}
