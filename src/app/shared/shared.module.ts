import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
  ],
  providers: [],
  exports: [
    
  ]
})

export class SharedModule { }