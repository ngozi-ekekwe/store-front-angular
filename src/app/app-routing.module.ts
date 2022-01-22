import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {HomeComponent} from "./modules/home/home.component"
import {PrdouctDetailComponent} from './modules/prdouct-detail/prdouct-detail.component'
import {SuccessPageComponent} from "./modules/success-page/success-page.component"
import { ProductsComponent } from './modules/products/products.component';
import {CartComponent} from "./modules/cart/cart.component"

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product-detail/:id',
    component: PrdouctDetailComponent
  },
  {
    path: 'success',
    component: SuccessPageComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
