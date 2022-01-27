import Product from './Product';
export default class OrderItem {
  id: number;
  totalPrice: number;
  shippingAddress: string;
  userFullName: string;
  cardInformation: string;
  order: Product[];

  constructor() {
    this.id = 0;
    this.totalPrice = 0.00;
    this.shippingAddress = '';
    this.userFullName = '';
    this.cardInformation = ''
    this.order = [];
  }
}