import { Component, inject } from '@angular/core';
import { WebsiteConfigService } from '../../../services/website-config.service';

@Component({
  selector: 'a4mbs-copyright',
  standalone: true,
  imports: [],
  templateUrl: './copyright.component.html',
})
export class CopyrightComponent {
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

  getPrivacyTermsOfUseUpdated(): string {
    return this.websiteConfigService.getLegalDetails().termsOfUseLastUpdated;
  }

  getContactEmail(): string {
    return this.websiteConfigService.getLegalDetails().contactEmail;
  }
}
