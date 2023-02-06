import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart, CartItem } from '@models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items });
    this._snackBar.open('el producto ah sido añadido al carrito', 'Ok', { duration: 3000 });
  }

  getTotal(items: CartItem[]): number {
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('el carrito esta vacío', 'OK', { duration: 3000 });
  }

  removeItemFromCart(item: CartItem) {
    const itemsFiltered = this.cart.value.items.filter((_item) => item.id != _item.id);
    this.cart.next({ items: itemsFiltered });
    this._snackBar.open(`el producto ${item.name} ah sido removido`, 'OK', { duration: 3000 });
  }

  removeQuantity(item: CartItem): void {
    let itemRemoval: CartItem | undefined;

    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemRemoval = _item;
        }
      }
      return _item;
    });

    if (itemRemoval) {
      this.removeItemFromCart(itemRemoval);
    }
  }
}
