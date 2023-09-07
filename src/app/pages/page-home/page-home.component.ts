import { Component, ViewChild } from '@angular/core';
import { WebsiteConfigService } from 'src/app/services/website-config.service';
import { PHPAboutCraftingComponent } from './partials/about-crafting/about-crafting.component';

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']  
})
export class PageHomeComponent {

  title: string;
  subtitle: string;
  homePageHeroImageURL: string;
  @ViewChild(PHPAboutCraftingComponent) aboutCraftingComponent!: PHPAboutCraftingComponent;


  constructor(private websiteConfigService: WebsiteConfigService) {
    this.title = this.websiteConfigService.getWebsiteSettings().title;
    this.subtitle = this.websiteConfigService.getWebsiteSettings().motto;
    this.homePageHeroImageURL = this.websiteConfigService.getBranding().heroImageResource;
  }


 
}