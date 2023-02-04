import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomePageComponent,
    FiltersComponent,
    ProductBoxComponent,
    ProductHeaderComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
