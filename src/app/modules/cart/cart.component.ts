import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Product from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Output() remove: EventEmitter<number> = new EventEmitter

  cartItems: any;
  total: any;

  fullname: string = '';
  address: string = '';
  creditCard: string = '';

  errorStatus = {
    fullName: {
      status: false,
      message: '',
    },
    address: {
      status: false,
      message: '',
    },
    creditCard: {
      status: false,
      message: '',
    }
  }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItem();
    this.total = this.cartService.getTotalPrice();
  }

  removeItemFromCart(id: any) {
    this.remove.emit(id);
    this.cartService.removeItemFromCart(id);
    this.cartItems = this.cartService.getCartItem();
    this.total = this.cartService.getTotalPrice();
  }

  submitForm() {
    const user = {
      fullName: this.fullname,
      shippingAddress: this.address,
      creditCard: this.creditCard,
    };
    this.cartService.completeOrder(user)
  }

  validateName(name: string) {
    if(name.length < 3) {
      this.errorStatus.fullName.status = true;
      this.errorStatus.fullName.message = 'Name must be at least 3 characters long';
    }if(name.length >= 3 && (/^[A-Za-z\s]*$/.test(name))) {
      this.errorStatus.fullName.status = false;
      this.errorStatus.fullName.message = '';
    }
    if(!(/^[A-Za-z\s]*$/.test(name))) {
      this.errorStatus.fullName.status = true;
      this.errorStatus.fullName.message = 'Name must contain only letters and spaces';
    }
  }

  validateAddress(address:string) {
    if(address.length < 6) {
      this.errorStatus.address.status = true;
      this.errorStatus.address.message = 'Address must be at least 6 characters long';
    }if(address.length >= 6) {
      this.errorStatus.address.status = false;
      this.errorStatus.address.message = '';
    }
  }

  validateCreditCard(creditCard: string) {
    if(creditCard.length < 12) {
      this.errorStatus.creditCard.status = true;
      this.errorStatus.creditCard.message = 'Credit Card Number (12 digit number)';
    }if(creditCard.length >= 12 && (/^[0-9]*$/.test(creditCard))) {
      this.errorStatus.creditCard.status = false;
      this.errorStatus.creditCard.message = '';
    }
    if((/^[A-Za-z\s]*$/.test(creditCard))) {
      this.errorStatus.creditCard.status = true;
      this.errorStatus.creditCard.message = 'Credit Card must contain only numbers';
    }
  }

}
