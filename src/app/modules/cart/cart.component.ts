import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : any
  total : any;

  fullname: string = '';
  address : string = '';
  creditCard : string = ''

  constructor() { }

  ngOnInit(): void {
    this.total = 0
    const cart = localStorage.getItem('cart');
    if(cart) {
      this.cartItems = JSON.parse(cart);
    }else{
      this.cartItems = [];
    }
    for(let i = 0; i < this.cartItems.length; i++) {
      this.total += this.cartItems[i].price;
    }

    this.total = this.total.toFixed(2);
  }

  getShoppingCart() {
    let cart = localStorage.getItem('cart');
    if(cart) {
      return JSON.parse(cart);
    }else {
      return [];
    }
  }

  removeItemFromCart(id:any) {
    let cart =localStorage.getItem('cart');
    if(cart) {
      const cartArray = JSON.parse(cart);
      for(let i = 0; i < cartArray.length; i++) {
        if(cartArray[i].id === id) {
          cartArray.splice(i, 1);
        }
      }
      localStorage.setItem('cart', JSON.stringify(cartArray));
    }
  }



  submitForm() {
    alert("hello")
  }


}
