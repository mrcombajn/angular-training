import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ol>
      <li>1. Jeden</li>
      <li>2. Dwa</li>
      <li>3. Trzy</li>
    </ol>
  `,
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

}
