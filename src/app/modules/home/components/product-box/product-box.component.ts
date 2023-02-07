import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullScreenMode: boolean = false;
  @Output() addToCart = new EventEmitter<Product>();
  @Input() product: Product | undefined;

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
