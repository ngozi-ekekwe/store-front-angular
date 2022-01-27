import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any;
  total: any;

  fullname: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItem();
    this.total = this.cartService.getTotalPrice();
  }

  removeItemFromCart(id: any) {
    this.cartService.removeItemFromCart(id);
    this.cartItems = this.cartService.getCartItem();
  }

  submitForm() {
    const user = {
      fullName: this.fullname,
      shippingAddress: this.address,
      creditCard: this.creditCard,
    };
    this.cartService.completeOrder(user)
  }
}
