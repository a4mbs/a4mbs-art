import { ViewportScroller } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MediaResolverService } from "src/app/services/media-resolver.service";
// import { WebsiteConfigService } from "src/app/services/website-config.service";

@Component({
  selector: 'w-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class wHeroComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() fullHeight?: boolean;
  @Input() heroImageResource!: string;
  heroImageURL: string='';

   constructor(private mediarResolverService: MediaResolverService,private  viewportScroller: ViewportScroller ) {
  }

  ngOnInit(): void {
    this.heroImageURL = this.mediarResolverService.getMediaURL(this.heroImageResource, true).toURL();
  }

  scrollDown() {
    const currentScrollPosition = this.viewportScroller.getScrollPosition()[1];
    const targetScrollPosition = currentScrollPosition + window.innerHeight;
    this.viewportScroller.scrollToPosition([0, targetScrollPosition]);
  }
  
}