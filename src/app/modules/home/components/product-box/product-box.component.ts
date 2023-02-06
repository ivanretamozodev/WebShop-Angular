import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullScreenMode: boolean = false;
  @Output() addToCart = new EventEmitter<Product>();
  product: Product | undefined = {
    id: 1,
    title: 'Samsung a31',
    category: 'cellphones',
    price: 135,
    description: 'sdadhaoifidgfa adpifhpaidhfpaidfaidfhadf,apdgfpaidf',
    image: 'https://via.placeholder.com/150',
  };

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
