import { Component, inject } from '@angular/core';
import { WebsiteConfigService } from '../../../services/website-config.service';

@Component({
  selector: 'a4mbs-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html'
})
export class PrivacyPolicyComponent {
  private websiteConfigService: WebsiteConfigService = inject(WebsiteConfigService);

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
