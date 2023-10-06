import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
    ,
  template: `
    <article>
      <img [src]="housingLocation?.photo" alt="tekst">
      <h2>{{housingLocation?.name}}</h2>
      <p>{{housingLocation?.city}}</p>
      <p>{{housingLocation?.state}}</p>
      <p>{{housingLocation?.wifi}}</p>
      <p>{{housingLocation?.laundry}}</p>
    </article>
    <section class="listing-apply">
      <form [formGroup]="applyForm" (submit)="submitApplication();">
        <label for="first-name">Imię</label>
        <input type="text" id="first-name" formControlName="firstName">
        <label for="last-name">Nazwisko</label>
        <input type="text" id="lastName" formControlName="lastName">
        <label for="email">Email</label>
        <input type="email" id="email" formControlName="email">

        <button type="submit">Wyślij</button>
      </form>
    </section>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocationId = -1;
  housingLocation: Housinglocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(this.housingLocationId).then((house) => {
      this.housingLocation = house;
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
