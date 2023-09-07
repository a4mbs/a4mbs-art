import { Injectable } from "@angular/core";
import { WebsiteConfigService, iCDNService } from "./website-config.service";
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius, max } from '@cloudinary/url-gen/actions/roundCorners';

@Injectable({
  providedIn: 'root'
})
export class MediaResolverService {
  private CDNService: iCDNService;

  constructor(private websiteConfigService: WebsiteConfigService) {
    this.CDNService = websiteConfigService.getCDN();
  }

  getMediaURL(
      mediaPath: string, 
      stretch?: boolean,
      displayAsCircle?: boolean, 
      width?: string, 
      height?: string,
      ): CloudinaryImage {
    if (this.CDNService.name === 'cloudinary') {
      const cld = new Cloudinary({
        cloud: {
          cloudName: this.CDNService.username
        }
      });
      const img = cld.image(`${this.CDNService.mainFolder}/${mediaPath}`);
      if (stretch) return img.resize(fill()); //this is for hero images
      if (width && height) {
        width = width.replace('px', ''); //cloudinary requires width and height to be numbers
        height = height.replace('px', ''); //cloudinary requires width and height to be numbers
        img.resize(fill().width(width).height(height));
      }
      if (displayAsCircle) img.roundCorners(max());       
      return img;
    } else return {} as CloudinaryImage; //this is a non-sense return value, but it is required to make the compiler happy
  }
}