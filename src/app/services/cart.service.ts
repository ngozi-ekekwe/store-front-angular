import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Product from '../models/Product';
import User from '../models/User';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(
    private router: Router
  ) {}

  getCartItem() {
    let cart = localStorage.getItem('cart') || '[]';
    this.cartItems = JSON.parse(cart);
    return this.cartItems;
  }

  setCartItems() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  emptyCart() {
    this.cartItems = [];
    localStorage.setItem('cart', '[]');
  }

  getTotalPrice() {
    let cart = this.getCartItem()
    if (cart.length > 0) {
      cart.forEach((item: any) => {
        this.totalPrice += item.price * item.quantity;
      });
    }
    return this.totalPrice.toFixed(2)
  }

  removeItemFromCart(id:any) {
    let cart = this.getCartItem()
    if(cart) {
      for(let i = 0; i < cart.length; i++) {
        if(cart[i].id === id) {
          cart.splice(i, 1);
        }
      }
      this.cartItems = cart;
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }


  updateCartItem(id: number, quantity: number) {
    let cart = this.getCartItem()
    this.cartItems = cart.filter((item: any) => {
      return item.id === id ? (item.quantity = Number(item.quantity) + Number(quantity)) : item;
    });
  }

  checkIfProductExistsInCart(item: Product) {
    let cartItems: Product[] = this.getCartItem();
    if (cartItems.length > 0) {
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === item.id) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  addToCart(item: Product, quantity: number) {
    if (this.checkIfProductExistsInCart(item)) {
      this.updateCartItem(item.id, quantity)
      this.setCartItems()
    } else {
      item.quantity = quantity;
      this.cartItems.push(item);
      this.setCartItems();
    }
  }

  completeOrder(user: User) {
    this.emptyCart();
    this.router.navigate(['/','success']);
  }


}
