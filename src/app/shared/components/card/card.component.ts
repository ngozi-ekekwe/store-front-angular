import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: any;
  constructor(private router: Router ) { 
    this.product = {
      name: '',
      price: 0,
      url: '',
      description: '',
    }
  }

  ngOnInit(): void {
  }

  openProduct(id: string) {
    this.router.navigate(['/','product-detail', id ? id : '']);
  }

}
