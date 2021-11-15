import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-prdouct-detail',
  templateUrl: './prdouct-detail.component.html',
  styleUrls: ['./prdouct-detail.component.css'],
})
export class PrdouctDetailComponent implements OnInit {
  public id: string | null = null;

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
    // let product = this.productService.getProduct(this.id);
    // if(product?.id) {
    //   this.product = product;
    // }

  }
}
