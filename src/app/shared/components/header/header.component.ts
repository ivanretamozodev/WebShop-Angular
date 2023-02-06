import { Component, Input } from '@angular/core';
import { Cart, CartItem } from '@models/cart.model';
import { CartService } from '@services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private _cartService: CartService) {}

  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items.map((item) => item.quantity).reduce((prev, current) => prev + current, 0);
  }

  getTotal(items: CartItem[]): number {
    return this._cartService.getTotal(items);
  }

  onClearCart() {
    this._cartService.clearCart();
  }
}
