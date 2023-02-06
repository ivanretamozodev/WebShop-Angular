import { CartItem } from './../../../models/cart.model';
import { Component, OnInit } from '@angular/core';
import { Cart } from '@models/cart.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'Samsung Galaxy',
        price: 150,
        id: 1,
        quantity: 2,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'Samsung Galaxy',
        price: 150,
        id: 1,
        quantity: 2,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'Samsung Galaxy',
        price: 150,
        id: 1,
        quantity: 2,
      },
    ],
  };

  displayedColumns: string[] = ['product', 'name', 'price', 'quantity', 'total', 'action'];

  dataSource: CartItem[] = [];
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
  onRemoveQuantity(element: string) {}
  onAddQuantity(element: string) {}
  getTotal(items: CartItem[]): number {
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
  }
  onClearCart() {}
  onRemoveFromCart(element: string) {}
  onCheckout() {}
}
