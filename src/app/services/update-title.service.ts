import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { WebsiteConfigService } from './website-config.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateTitleService {

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private websiteConfigService: WebsiteConfigService
  ) { }

  init() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    )
    .subscribe((event) => {
      const title = event['title'] ? 
        `${this.websiteConfigService.getBranding().shortTitle} - ${event['title']}` : `${this.websiteConfigService.getBranding().title}`;
      this.titleService.setTitle(title);
    });
  }
}