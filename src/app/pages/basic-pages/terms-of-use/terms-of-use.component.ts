import { Component } from "@angular/core";
import { WebsiteConfigService } from 'src/app/services/website-config.service';

@Component({
    selector: 'bp-terms-of-use',
    templateUrl: './terms-of-use.component.html',
    styles: []
})
export class bpTermsOfUseComponent { 
  constructor(private websiteConfigService: WebsiteConfigService) { } 

  getWebsiteTitle(): string {
    return this.websiteConfigService.getWebsiteSettings().title;
  }

  getWebsiteShortTitle(): string {
    return this.websiteConfigService.getWebsiteSettings().shortTitle;
  }

  getWebsiteURL(): string {
    return this.websiteConfigService.getWebsiteSettings().URL;
  }

  getPrivacyTermsOfUseUpdated(): string {
    return this.websiteConfigService.getLegalDetails().termsOfUseLastUpdated;
  }

  getContactEmail(): string {
    return this.websiteConfigService.getLegalDetails().contactEmail;
  }
}