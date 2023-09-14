import { ViewportScroller } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MediaResolverService } from "src/app/services/media-resolver.service";
import { iDisplayImage } from "src/project.interfaces";
// import { WebsiteConfigService } from "src/app/services/website-config.service";

@Component({
  selector: 'w-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class wHeroComponent {
  @Input() data!: iDisplayImage;
  @Input() fullHeight: boolean = false;
  heroImageURL: string='';

   constructor(private mediarResolverService: MediaResolverService,private  viewportScroller: ViewportScroller ) {
  }

  ngOnInit(): void {
    this.heroImageURL = this.mediarResolverService.getMediaURL(this.data.image.path, true).toURL();
  }

  scrollDown() {
    const currentScrollPosition = this.viewportScroller.getScrollPosition()[1];
    const targetScrollPosition = currentScrollPosition + window.innerHeight;
    this.viewportScroller.scrollToPosition([0, targetScrollPosition]);
  }
  
  getAction() {
    if (this.data.button?.method) {
      if (this.data.button.method === 'scrollingDown') {
        this.scrollDown();
      }
    } else {
      if (this.data.button?.link) {
        window.open(this.data.button.link, '_self');
      }
    }
 
  }

}