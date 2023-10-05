import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationsComponent } from '../housing-locations/housing-locations.component';
import { Housinglocation } from '../housinglocation';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';

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
      <app-housing-locations [Housinglocation]="housingLocation"></app-housing-locations>
    </section>
    <section class="listing-products">
      <app-product [Product]="product"></app-product>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly baseUri = 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1650447482/b5d46983-5b20-4e42-867e-ad9ccd7b2de2.jpg';

  // tworzenie obiektu interfejsu
  housingLocation: Housinglocation[] = [{
    id: 200,
    name: 'Apartament Osowa',
    city: 'Gdańsk',
    state: 'Polska',
    photo: this.baseUri,
    availableUnit: 1,
    wifi: true,
    laundry: false,
  },
  {
    id: 400,
    name: 'Apartament Wiślinka',
    city: 'Sobieszewo',
    state: 'Polska',
    photo: this.baseUri,
    availableUnit: 1,
    wifi: true,
    laundry: false,
  },
  {
    id: 500,
    name: 'Apartament Pruszcz',
    city: 'Pruszcz Gdański',
    state: 'Polska',
    photo: this.baseUri,
    availableUnit: 1,
    wifi: true,
    laundry: false,
  },
  {
    id: 21,
    name: 'Apartament Startowa',
    city: 'Gdańsk',
    state: 'Polska',
    photo: this.baseUri,
    availableUnit: 1,
    wifi: true,
    laundry: false,
  },
  {
    id: 27,
    name: 'Apartament WSB',
    city: 'Gdańsk',
    state: 'Polska',
    photo: this.baseUri,
    availableUnit: 1,
    wifi: true,
    laundry: false,
  },
  {
    id: 63,
    name: 'Apartament OBC',
    city: 'Gdańsk',
    state: 'Polska',
    photo: this.baseUri,
    availableUnit: 1,
    wifi: true,
    laundry: false,
  },
  {
    id: 98,
    name: 'Apartament Banino',
    city: 'Gdańsk',
    state: 'Polska',
    photo: this.baseUri,
    availableUnit: 1,
    wifi: true,
    laundry: false,
  },
  {
    id: 100,
    name: 'Apartament Batorego',
    city: 'Gdańsk',
    state: 'Polska',
    photo: this.baseUri,
    availableUnit: 1,
    wifi: true,
    laundry: false,
  },
]

  product: Product = {
    id: 21,
    product_name: 'ciastka',
    price: 21.37,
    photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_524,h_524/v1676072815/14990_813.png',
    quantity: 32,
    available: true,
  }
}