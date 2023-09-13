import { Component } from '@angular/core';
import { WebsiteConfigService } from 'src/app/services/website-config.service';

@Component({
  selector: 'pag-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styles: []
})
export class pPrivacyPolicyComponent {
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

  getPrivacyPolicyLastUpdated(): string {
    return this.websiteConfigService.getLegalDetails().privacyPolicyLastUpdated;
  }

  getContactEmail(): string {
    return this.websiteConfigService.getLegalDetails().contactEmail;
  }
}