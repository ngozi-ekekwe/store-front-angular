import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { PrdouctDetailComponent } from './modules/prdouct-detail/prdouct-detail.component';
import { CartComponent } from './modules/cart/cart.component';
import { SuccessPageComponent } from './modules/success-page/success-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrdouctDetailComponent,
    CartComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
