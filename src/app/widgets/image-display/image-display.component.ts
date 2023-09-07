import { Component, Input, OnInit } from '@angular/core';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { MediaResolverService } from 'src/app/services/media-resolver.service';
import { WebsiteConfigService, iCDNService } from 'src/app/services/website-config.service';

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
  @Input() hasOverlay?: boolean;
  @Input() overlayColorTailwindClass?: string;
  @Input() overlayTitle?: string;
  @Input() overlaySubtitle?: string;
  @Input() overlayHasLinkButton?: boolean;
  @Input() overlayLinkButtonLabel?: string;
  @Input() overlayLinkButtonURL?: string;
  @Input() overlayLinkButtonTailwindClass?: string;
  
  private CDNService: iCDNService;
  image!: CloudinaryImage;


  constructor(private websiteConfig:WebsiteConfigService
    , private mediaResolver: MediaResolverService) { 
    this.CDNService = this.websiteConfig.getCDN();
  }

  ngOnInit(): void {
    if (this.getCDNServiceName() === 'cloudinary') {
        this.image = this.mediaResolver.getMediaURL(this.imagePath, false, this.displayAsCircle, this.width, this.height);
    } 
    if (this.hasOverlay) {
      this.overlayColorTailwindClass = this.overlayColorTailwindClass?.trim() || 'bg-slate-900/80';
      this.overlayLinkButtonTailwindClass = this.overlayLinkButtonTailwindClass?.trim() || 'btn-outline-warning';
    }
  }

  getCDNServiceName(): string {
    return this.CDNService.name;
  }

}