import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';  
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts() : Observable<[]> {
    return this.httpClient.get<[]>('assets/data.json');
  }

  getProduct(id: any) {
    return this.getProducts().pipe(
      map((prod) => {
        return prod.find((p : any) => p.id === Number(id));
      })
    )
  };
}
