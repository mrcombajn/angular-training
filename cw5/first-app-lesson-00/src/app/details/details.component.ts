import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule]
    ,
  template: `
    <article>
      <img [src]="housingLocation?.photo" alt="tekst"> <br>
      {{housingLocation?.city}} <br>
      {{housingLocation?.name}} <br>
      {{housingLocation?.state}} <br>
      {{housingLocation?.wifi}} <br>
      {{housingLocation?.laundry}}
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocationId = -1;
  housingLocation: Housinglocation | undefined;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHouseLocationById(this.housingLocationId);
  }
}
