import { Component, ViewChild } from '@angular/core';
import { WebsiteConfigService } from 'src/app/services/website-config.service';
import { phpAboutCraftingComponent } from './partials/about-crafting/about-crafting.component';
import { HomepageContentService } from './services/home-content.service';

@Component({
  selector: 'pag-home',
  templateUrl: './home.component.html',
  styles: []  
})
export class pHomeComponent {

  constructor(private homeContentService: HomepageContentService) { }

  getHomeContent() {
    return this.homeContentService.pageContent;
  }
 
}