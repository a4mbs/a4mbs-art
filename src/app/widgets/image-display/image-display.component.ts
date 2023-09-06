import { Component, Input, OnInit } from '@angular/core';
import { CloudinaryImage, Cloudinary } from '@cloudinary/url-gen';
import { MediaResolverService } from 'src/app/services/media-resolver.service';
import { WebsiteConfigService, iCDNService } from 'src/app/services/website-config.service';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius, max } from '@cloudinary/url-gen/actions/roundCorners';


@Component({
  selector: 'w-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class WImageDisplayComponent implements OnInit{
  @Input() imagePath!: string;
  @Input() imageAlt!: string;
  @Input() displayAsCircle?: boolean;
  @Input() width?: string;
  @Input() height?: string;  
  @Input() stretch?: boolean;
  private CDNService: iCDNService;
  image!: CloudinaryImage;


  constructor(private websiteConfig:WebsiteConfigService) { 
    this.CDNService = this.websiteConfig.getCDN();
  }

  ngOnInit(): void {
    if (this.getCDNServiceName() === 'cloudinary') {
      const cld = new Cloudinary({
        cloud: {
          cloudName: this.CDNService.username
        }
      });  
      this.image = cld.image(`${this.CDNService.mainFolder}/${this.imagePath}`);
      if (this.width && this.height) {
        this.width = this.width.replace('px', ''); //cloudinary requires width and height to be numbers
        this.height = this.height.replace('px', ''); //cloudinary requires width and height to be numbers
        this.image.resize(fill().width(this.width).height(this.height));
        if (this.displayAsCircle) this.image.roundCorners(max());
      }
    } 
  }

  getCDNServiceName(): string {
    return this.CDNService.name;
  }

}