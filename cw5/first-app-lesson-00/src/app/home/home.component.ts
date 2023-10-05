import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationsComponent } from '../housing-locations/housing-locations.component';
import { Housinglocation } from '../housinglocation';
import { ProductComponent } from '../product/product.component';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationsComponent,
    ProductComponent
  ],
  template: `
  <!-- Komponent home -->
    <section>
      <form action="">
        <input type="text">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-locations *ngFor="let Housinglocation of housingLocationList" [Housinglocation]="Housinglocation"></app-housing-locations>
    </section>
    <section class="listing-products">
      <!-- <app-product [Product]="product"></app-product> -->
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList:Housinglocation[] =  [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocation();
  }
}