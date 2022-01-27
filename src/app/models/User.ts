export default class User {
  fullName: string;
  shippingAddress: string;
  creditCard: string;

  constructor() {
    this.fullName = '';
    this.shippingAddress = '';
    this.creditCard = '';
  }
}