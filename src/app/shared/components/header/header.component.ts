import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItems : any

  constructor() { }

  ngOnInit(): void {
    const cart = localStorage.getItem('cart');
    if(cart) {
      this.cartItems = JSON.parse(cart);
    }else{
      this.cartItems = [];
    }
  }

}
