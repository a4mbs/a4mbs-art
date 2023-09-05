import { Component } from '@angular/core';
import { WebsiteConfigService } from 'src/app/services/website-config.service';

@Component({
  selector: 'sp-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class SPPrivacyPolicyComponent {
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

  getPrivacyPolicyLastUpdated(): string {
    return this.websiteConfigService.getLegalDetails().privacyPolicyLastUpdated;
  }

  getContactEmail(): string {
    return this.websiteConfigService.getLegalDetails().contactEmail;
  }
}
