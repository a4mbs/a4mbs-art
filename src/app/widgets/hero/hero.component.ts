import { Component } from "@angular/core";
import { WebsiteConfigService } from "src/app/services/website-config.service";

@Component({
  selector: 'w-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class WHeroComponent {

  title = 'Aiming for My Best Self';
  subtitle = 'Intriguing disturbance sparks artistic innovation';
  fullHeight = true;
  heroImageURL = 'https://res.cloudinary.com/a4mbs/image/upload/v1693474304/a4mbs.art/home-page/homepage_hero.jpg';

  constructor(private websiteConfigService: WebsiteConfigService ) {}

  getHomePageHeroImageURL(): string {
    return this.websiteConfigService.getBranding().heroImageURL;
  }

}