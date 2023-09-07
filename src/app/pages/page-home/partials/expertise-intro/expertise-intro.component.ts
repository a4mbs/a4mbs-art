import { Component } from '@angular/core';
import { MediaResolverService } from 'src/app/services/media-resolver.service';
import { WebsiteConfigService } from 'src/app/services/website-config.service';

@Component({
  selector: 'php-expertise-intro',
  templateUrl: './expertise-intro.component.html',
  styleUrls: ['./expertise-intro.component.css']
})
export class PHPExpertiseIntroComponent {
  logoResource: string;

  constructor(private websiteConfigService: WebsiteConfigService, mediaResolverService: MediaResolverService) {
    this.logoResource = websiteConfigService.getBranding().logoResources.color;
  }

}