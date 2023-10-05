import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  readonly baseUri = 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1650447482/b5d46983-5b20-4e42-867e-ad9ccd7b2de2.jpg';

  // tworzenie obiektu interfejsu
  protected housingLocationList: Housinglocation[] = [{
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
];

  getAllHousingLocation(): Housinglocation[] {
    return this.housingLocationList;
  }

  getHouseLocationById(id: number): Housinglocation | undefined{
    return this.housingLocationList.find(h => h.id === id);
  }
}