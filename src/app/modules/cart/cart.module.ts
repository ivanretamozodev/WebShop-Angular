import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, CartRoutingModule, MaterialModule],
})
export class CartModule {}
