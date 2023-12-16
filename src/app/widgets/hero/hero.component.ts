import { Component, inject, Input } from '@angular/core';
import { CommonModule, ViewportScroller } from "@angular/common";
import { MediaResolverService } from '../../services/media-resolver.service';
import { iDisplayImage } from '../../../project.interfaces';

@Component({
  selector: 'a4mbs-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  @Input() data!: iDisplayImage;
  @Input() fullHeight: boolean = false;
  heroImageURL: string='';
  private mediaResolver: MediaResolverService = inject(MediaResolverService);
  private  viewportScroller: ViewportScroller = inject(ViewportScroller);


  ngOnInit(): void {
    this.heroImageURL = this.mediaResolver.getMediaURL(this.data.image.path, true).toURL();
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
