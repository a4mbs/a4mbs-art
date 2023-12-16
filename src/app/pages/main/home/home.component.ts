import { Component } from '@angular/core';
import { HeroComponent } from '../../../widgets/hero/hero.component';

@Component({
  selector: 'a4mbs-home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
