import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '@models/cart.model';
import { CartService } from '@services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent implements OnInit {
  constructor(private _cartService: CartService) {}

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
  onCheckout() {}
}
