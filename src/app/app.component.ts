import { Component,  OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './widgets/footer/footer.component';
import { initFlowbite } from 'flowbite';
import { UpdateTitleService } from './services/update-title.service';

@Component({
  selector: 'a4mbs-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'a4mbs';

  showScrollButton = false;


  constructor(private titleService: UpdateTitleService) {}

  ngOnInit(): void {
    // initFlowbite();
    this.titleService.init();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop > 200) {
      this.showScrollButton = true;
    } else if (this.showScrollButton && window.scrollY || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.showScrollButton = false;
    }
  }

  scrollToTop() {
    (window as any).scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
