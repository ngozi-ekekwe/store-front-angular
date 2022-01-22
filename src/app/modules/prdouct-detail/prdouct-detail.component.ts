import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-prdouct-detail',
  templateUrl: './prdouct-detail.component.html',
  styleUrls: ['./prdouct-detail.component.css'],
})
export class PrdouctDetailComponent implements OnInit {
  public id: string | null = null;

  quantity: number = 1;

  quantityList : number[] = [1,2,3,4,5,6,7,8,9,10]


  product: any = {
    description: '',
    id: '',
    name: '',
    price: 0,
    url: '',
  };

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.id).subscribe((p) => {
      this.product = p
    });
  }

  addToCart(item: any) {
    item.quantity = this.quantity;
    let cart =localStorage.getItem('cart')
    if(cart) {
      const cartArray = JSON.parse(cart);
      cartArray.push(item);
      localStorage.setItem('cart', JSON.stringify(cartArray));
    }else {
      const cartArray = [];
      cartArray.push(item);
      localStorage.setItem('cart', JSON.stringify(cartArray));
    }  
  }

  removeItemFromCart(id:any) {

  }
}
