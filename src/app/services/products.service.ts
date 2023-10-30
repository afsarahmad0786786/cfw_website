import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { }

  getProducts(categoryName:string) {
    let url = `https://fakestoreapi.com/products/category/${categoryName}`;
    return this.http.get(url);
    
  }
}
