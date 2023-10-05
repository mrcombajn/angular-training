import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="item-product">
      <img [src]="Product.photo" alt="tekst">
      <p>{{Product.id}}</p>
      <p>{{Product.product_name}}</p>
      <p>{{Product.quantity}}</p>
    </div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() Product!:Product;
}
