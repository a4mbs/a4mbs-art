import { Component } from '@angular/core';
import { WebsiteConfigService } from 'src/app/services/website-config.service';

@Component({
  selector: 'php-expertise-intro',
  templateUrl: './expertise-intro.component.html',
  styles: []
})
export class phpExpertiseIntroComponent {
  logoResource: string;

  constructor(private websiteConfigService: WebsiteConfigService) {
    this.logoResource = websiteConfigService.getBranding().logoResources.color;
  }

  goToAdobeBehance() {
    window.open(this.websiteConfigService.getSocialMedia().find(sm => sm.title.toLowerCase()==='behance')?.link, '_blank');
  }

}