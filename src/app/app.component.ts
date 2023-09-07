import { Component, OnInit, HostListener  } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { filter, map, mergeMap } from 'rxjs/operators';
import { UpdateTitleService } from './services/update-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showScrollButton = false;


  constructor(private titleService: UpdateTitleService) {}

  ngOnInit(): void {
    initFlowbite();
    this.titleService.init();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop > 200) {
      this.showScrollButton = true;
    } else if (this.showScrollButton && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.showScrollButton = false;
    }
  }

  scrollToTop() {
    (window as any).scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}