import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutusComponent,
    RouterModule
  ],
  template: `
  <!-- Komponent App -->
    <main>
    <header class="brand-name">
        <a [routerLink]="['/']">
            <img class="brand-header" src="/assets/logo.svg">
        </a>
      </header>
      <section class="content">

        <!-- Import kontrolera home -->
        <router-outlet></router-outlet>
        <!-- <app-home></app-home> -->
      </section>

      <footer>
        <!-- <app-aboutus></app-aboutus> -->
      </footer>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mateuszostrowski';
}
