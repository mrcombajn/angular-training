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
        <input type="text" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-locations *ngFor="let Housinglocation of filteredLocationList" [Housinglocation]="Housinglocation"></app-housing-locations>
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
  filteredLocationList: Housinglocation[] = []

  constructor() {
    this.housingService.getHousingLocation().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = this.housingLocationList;
    });
  }

  filterResults(text: string) {
    if(!text) {
      this.filteredLocationList = this.housingLocationList;
    }
    this.filteredLocationList = this.housingLocationList.filter((house) => house.city.includes(text));
  }
}