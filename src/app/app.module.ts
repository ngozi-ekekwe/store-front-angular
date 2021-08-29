import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './modules/home/home.component';
import { AppComponent } from './app.component';
import { PrdouctDetailComponent } from './modules/prdouct-detail/prdouct-detail.component';
import { CartComponent } from './modules/cart/cart.component';
import { SuccessPageComponent } from './modules/success-page/success-page.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrdouctDetailComponent,
    CartComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
