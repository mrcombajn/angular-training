import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-locations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
        <img [src]="Housinglocation.photo" alt="tekst" class="listing-photo">
        <h2 class="listing-heading">{{ Housinglocation.name }}</h2>
        <p class="listing-location">{{ Housinglocation.city }}, {{Housinglocation.state}} </p>
    </section>
  `,
  styleUrls: ['./housing-locations.component.css']
})
export class HousingLocationsComponent {
  @Input() Housinglocation!: Housinglocation;
}
