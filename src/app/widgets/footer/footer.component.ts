import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebsiteConfigService, iSellingMedia, iSocialMedia } from '../../services/website-config.service';
import { CommonModule } from '@angular/common';
import { DisplayImageComponent } from '../display-image/display-image.component';

@Component({
  selector: 'a4mbs-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, DisplayImageComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  isFormDisabled: boolean = true;

  constructor(
    private websiteConfigService: WebsiteConfigService,
    ) { 
  }

  getCurrentYear(): number {
    const currentDate = new Date();
    return currentDate.getFullYear();
  } 

  getWebsiteTitle(): string {
    return this.websiteConfigService.getBranding().title;
  }

  getWebsiteURL(): string {
    return this.websiteConfigService.getWebsiteSettings().URL;
  }

  getShortTitle(): string {
    return this.websiteConfigService.getBranding().shortTitle;
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
