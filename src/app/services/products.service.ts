import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts() {
    return [
      {
        id: '1',
        name: 'Book',
        price: 9.99,
        url: '../../../../assets/product1.jpg',
        description: 'You can read it!',
      },
      {
        id: '2',
        name: 'Headphones',
        price: 249.99,
        url: '../../../../assets/product3.jpg',
        description: 'Listen to stuff!',
      },
      {
        id: '3',
        name: 'Backpack',
        price: 79.99,
        url: '../../../../assets/product4.jpg',
        description: 'Carry things around town!',
      },
      {
        id: '4',
        name: 'Glasses',
        price: 129.99,
        url: '../../../../assets/product5.jpg',
        description: 'Now you can see!',
      },
      {
        id: '5',
        name: 'Glasses',
        price: 129.99,
        url: '../../../../assets/product6.jpg',
        description: 'Now you can see!',
      },
      {
        id: '6',
        name: 'Cup',
        price: 4.99,
        url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'Drink anything with it!',
      },
      {
        id: '7',
        name: 'Shirt',
        price: 29.99,
        url: '../../../../assets/cover1.jpg',
        description: 'Wear it with style!',
      },
    ];
  }

  getProduct(id: string | null) {
    let product = this.getProducts().find(product => product?.id === id);
    if(product?.id) {
      return product;
    }
    return {} as any;
  }
}
