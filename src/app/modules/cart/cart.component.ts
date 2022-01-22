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

    console.log(this.fullname, this.creditCard, this.address)
  }

  submitForm() {
    alert("hello")
  }


}
