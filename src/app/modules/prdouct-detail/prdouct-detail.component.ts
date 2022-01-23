import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';


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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.id).subscribe((p) => {
      this.product = p
    });
  }

  checkIfProductExistsInCart(item :any, cart : any) {
    for(let i = 0; i < cart.length; i++) {
      if(cart[i].id === item.id) {
        return true
      }
    }
    return false;
  }

  addToCart(item: any) {
    item.quantity = this.quantity;
    let cart =localStorage.getItem('cart')
    if(cart) {
      const cartArray = JSON.parse(cart);
      if(this.checkIfProductExistsInCart(item, cartArray)) {
        for(let i = 0; i < cartArray.length; i++) {
          if(cartArray[i].id === item.id) {
            cartArray[i].quantity = Number(item.quantity) + Number(cartArray[i].quantity);
          }
        }
      }else{
        cartArray.push(item);
      }
      localStorage.setItem('cart', JSON.stringify(cartArray));
    }else {
      const cartArray = [];
      cartArray.push(item);
      localStorage.setItem('cart', JSON.stringify(cartArray));
    } 
    alert(`${item.name} has been added to cart`)
    this.router.navigate(['/','cart']);

  }
}
