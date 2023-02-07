import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '@models/product.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  baseUrl: string = environment.baseUrl;
  constructor(private _httpClient: HttpClient) {}

  getAllProducts(limit: number = 15, sort: string = 'desc', category?: string): Observable<Product[]> {
    return this._httpClient.get<Product[]>(
      `${this.baseUrl}/products${category ? /category/ + category : ''}?limit=${limit}&sort=${sort}`
    );
  }

  getAllCategories(): Observable<string[]> {
    return this._httpClient.get<string[]>(`${this.baseUrl}/products/categories`);
  }
}
