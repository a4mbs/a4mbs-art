import { Component } from "@angular/core";
import { WebsiteConfigService } from 'src/app/services/website-config.service';

@Component({
    selector: 'pag-terms-of-use',
    templateUrl: './terms-of-use.component.html',
    styles: []
})
export class pTermsOfUseComponent { 
  constructor(private websiteConfigService: WebsiteConfigService) { } 

  getWebsiteTitle(): string {
    return this.websiteConfigService.getBranding().title;
  }

  getWebsiteShortTitle(): string {
    return this.websiteConfigService.getBranding().shortTitle;
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