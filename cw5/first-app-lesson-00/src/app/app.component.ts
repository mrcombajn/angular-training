import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutusComponent,
  ],
  template: `
  <!-- Komponent App -->
    <main>
      <header class="brand-name">
        <img class="brand-header" src="/assets/logo.svg">
      </header>
      <section class="content">

        <!-- Import kontrolera home -->
        <app-home></app-home>
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
