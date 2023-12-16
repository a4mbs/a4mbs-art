import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './widgets/footer/footer.component';

@Component({
  selector: 'a4mbs-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'a4mbs';
}
