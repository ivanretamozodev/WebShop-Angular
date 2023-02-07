import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '@models/cart.model';
import { CartService } from '@services/cart.service';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent implements OnInit {
  constructor(private _cartService: CartService, private _httpClient: HttpClient) {}

  cart: Cart = { items: [] };

  displayedColumns: string[] = ['product', 'name', 'price', 'quantity', 'total', 'action'];

  dataSource: CartItem[] = [];

  ngOnInit(): void {
    this._cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }
  onRemoveQuantity(item: CartItem) {
    this._cartService.removeQuantity(item);
  }
  onAddQuantity(item: CartItem) {
    this._cartService.addToCart(item);
  }
  getTotal(items: CartItem[]): number {
    return this._cartService.getTotal(items);
  }
  onClearCart() {
    this._cartService.clearCart();
  }
  onRemoveFromCart(item: CartItem) {
    this._cartService.removeItemFromCart(item);
  }
  onCheckout() {
    this._httpClient
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(
          'pk_test_51MXV1jBW9RlpeT14SQTFs3vhVHT7XA4JdvRb1K5BMBQkiVrpOB90Bupf7iSMJlEDhIzLmp70YCBVJRhI11OVZASL00MJws7trt'
        );
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
}
