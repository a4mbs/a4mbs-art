import { Injectable } from "@angular/core";
import { WebsiteConfigService, iCDNService } from "./website-config.service";
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';

@Injectable({
  providedIn: 'root'
})
export class MediaResolverService {
  private CDNService: iCDNService;

  constructor(private websiteConfigService: WebsiteConfigService) {
    this.CDNService = websiteConfigService.getCDN();
  }

  getMediaURL(media: string): CloudinaryImage {
    if (this.CDNService.name === 'cloudinary') {
      const cld = new Cloudinary({
        cloud: {
          cloudName: this.CDNService.username
        }
      });
      const img = cld.image(`${this.CDNService.mainFolder}/${media}`);
      return img;
    } else return {} as CloudinaryImage; //this is a non-sense return value, but it is required to make the compiler happy
  }
}