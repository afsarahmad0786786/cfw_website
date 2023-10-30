import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategorys() {
      //let url = 'https://fakestoreapi.com/products/categories'
      let url = 'https://dev-snk6jsiyetwxpix.api.raw-labs.com/json-programming-heroes'
      return this.http.get(url)
  }

}
