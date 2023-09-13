import { Component } from "@angular/core";
import { iImage } from "src/app/pages/pages.interfaces";
import { PageHomeComponentShareImagesService } from "../../services/page-home-share-images.service";

@Component({
  selector: 'php-about-crafting',
  templateUrl: './about-crafting.component.html',
  styles: [],
})
export class phpAboutCraftingComponent {

  images!: Array<iImage>;

  constructor(private homepageShareImagesService: PageHomeComponentShareImagesService) {}

  ngOnInit(): void {
    const images = this.homepageShareImagesService.getImagesForComponent('PHPAboutCraftingComponent');
    if (images && images.length) {
      this.images = images;
    }
  }

}