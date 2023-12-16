import { Component, Input, OnInit, inject } from '@angular/core';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { iCDNService } from '../../../project.interfaces';
import { WebsiteConfigService } from '../../services/website-config.service';
import { MediaResolverService } from '../../services/media-resolver.service';
import { CommonModule } from '@angular/common';
import { CloudinaryModule } from '@cloudinary/ng';

@Component({
  selector: 'a4mbs-display-image',
  imports: [ CommonModule, CloudinaryModule ],
  templateUrl: './display-image.component.html',
  standalone: true
})
export class DisplayImageComponent implements OnInit{
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
  private websiteConfig: WebsiteConfigService = inject(WebsiteConfigService);
  private mediaResolver: MediaResolverService = inject(MediaResolverService);
  
  private CDNService: iCDNService;
  image!: CloudinaryImage;


  constructor() { 
    this.CDNService = this.websiteConfig.getCDN();
  }

  ngOnInit(): void {
    if (this.getCDNServiceName() === 'cloudinary') {
        this.image = this.mediaResolver.getMediaURL(this.imagePath, false, this.displayAsCircle, this.width, this.height);
    } 
    if (this.hasOverlay) {
      this.overlayColorTailwindClass = this.overlayColorTailwindClass?.trim() || 'bg-slate-900/80';
      this.overlayLinkButtonTailwindClass = this.overlayLinkButtonTailwindClass?.trim() || 'border border-warning hover:bg-warning';
    }
  }

  getCDNServiceName(): string {
    return this.CDNService.name;
  }

}