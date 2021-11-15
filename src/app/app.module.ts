import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './modules/home/home.component';
import { AppComponent } from './app.component';
import { PrdouctDetailComponent } from './modules/prdouct-detail/prdouct-detail.component';
import { CartComponent } from './modules/cart/cart.component';
import { SuccessPageComponent } from './modules/success-page/success-page.component';
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import { ProductsComponent } from './modules/products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrdouctDetailComponent,
    CartComponent,
    SuccessPageComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
