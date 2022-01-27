import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import Product from 'src/app/models/Product';


@Component({
  selector: 'app-prdouct-detail',
  templateUrl: './prdouct-detail.component.html',
  styleUrls: ['./prdouct-detail.component.css'],
})
export class PrdouctDetailComponent implements OnInit {
  public id: string | null = null;

  quantity: number = 1;

  quantityList : number[] = [1,2,3,4,5,6,7,8,9,10]


  product: Product = new Product()

  constructor(
    private productService: ProductsService,
    private cartService : CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.id).subscribe((p) => {
      this.product = (p as unknown ) as Product;
    });
  }

  addItemToCart(item: Product) {
    this.cartService.addToCart(item, this.quantity); 
    alert(`${item.name} has been added to cart`)
    this.router.navigate(['/','cart']);
  }
}
