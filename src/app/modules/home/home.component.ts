import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: object[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    let products = this.productsService.getProducts();
    this.productList = products.slice(0,3)
  }

}
