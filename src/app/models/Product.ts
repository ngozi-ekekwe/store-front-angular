export default class Product {
  id : number;
  name: string;
  price: number;
  description: string;
  url: string;
  quantity?: number = 0;

  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 0.00;
    this.description = '';
    this.url = '';
  }
}