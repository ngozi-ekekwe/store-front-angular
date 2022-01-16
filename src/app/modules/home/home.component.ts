import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: object[] = [];
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.productList = products.slice(0,3);
    });
  }

  openProducts() { 
    this.router.navigate(['/','products']);
  }

}
