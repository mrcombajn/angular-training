import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-locations',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
      <section class="listing">
          <img [src]="Housinglocation.photo" alt="tekst" class="listing-photo">
          <h2 class="listing-heading">{{ Housinglocation.name }}</h2>
          <p class="listing-location">{{ Housinglocation.city }}, {{Housinglocation.state}} </p>
      </section>
      <a [routerLink]="['/details', Housinglocation.id]">Read more</a>
  `,
  styleUrls: ['./housing-locations.component.css']
})
export class HousingLocationsComponent {
  @Input() Housinglocation!: Housinglocation;
}
