import { Component } from "@angular/core";
import { WebsiteConfigService } from 'src/app/services/website-config.service';

@Component({
    selector: 'pag-copyright-for-resources',
    templateUrl: './copyright-for-resources.component.html',
    styles: []
})
export class pCopyrightForResources { 
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