import { Component, OnInit } from '@angular/core';
import { CartService } from '@services/cart.service';
import { Cart } from '@models/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.cart.subscribe((_cart) => (this.cart = _cart));
  }
}
