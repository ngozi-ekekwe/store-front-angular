import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
  totalPrice: number = 0;

  constructor() { }

  getCartItem() {
    let cart = localStorage.getItem('cart') || '[]';
    this.cartItems = JSON.parse(cart);  
    return this.cartItems;
  }

  emptyCart() {
    this.cartItems = [];  
    localStorage.setItem('cart', '[]');
  }

  getTotalPrice() {
    if(this.cartItems.length > 0) {
      this.cartItems.forEach((item:any) => {
        this.totalPrice += (item.price * item.quantity);
      });
    }
  }

  updateCartItem(id: string) {

  }

  addToCart() {

  }

  increaseQuantity() {

  }

  decreaseQuantity() {

  }
}
