import { Component } from '@angular/core';
import { MediaResolverService } from 'src/app/services/media-resolver.service';
import { WebsiteConfigService, iSellingMedia, iSocialMedia } from 'src/app/services/website-config.service';

@Component({
  selector: 'w-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class WFooterComponent {

  constructor(
    private websiteConfigService: WebsiteConfigService,
    private mediaResolverService: MediaResolverService
    ) { 
  }

  getCurrentYear(): number {
    const currentDate = new Date();
    return currentDate.getFullYear();
  } 

  getWebsiteTitle(): string {
    return this.websiteConfigService.getWebsiteSettings().title;
  }

  getWebsiteURL(): string {
    return this.websiteConfigService.getWebsiteSettings().URL;
  }

  getShortTitle(): string {
    return this.websiteConfigService.getWebsiteSettings().shortTitle;
  }

  getSocialMediaResources(): Array<iSocialMedia> {
    return this.websiteConfigService.getSocialMedia();
  }

  getStockImagesResources(): Array<iSellingMedia> {
    return this.websiteConfigService.getStockImages();
  }

  getPrintOnDemandResources(): Array<iSellingMedia> {
    return this.websiteConfigService.getPrintOnDemand();
  }

  getLogoResource(): string {
    return this.websiteConfigService.getBranding().logoResources.white;
  }
}
