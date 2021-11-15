import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts() : Observable<[]> {
    return this.httpClient.get<[]>('assets/data.json');
  }

  getProduct(id: string | null) {
    // let product = this.getProducts().find(product => product?.id === id);
    // if(product?.id) {
    //   return product;
    // }
    // return {} as any;
  }
}
