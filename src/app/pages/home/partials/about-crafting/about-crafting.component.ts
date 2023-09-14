import { Component } from "@angular/core";
import { iDisplayImage } from "src/project.interfaces";
import { HomepageContentService } from "../../home.content.service";

@Component({
  selector: 'php-about-crafting',
  templateUrl: './about-crafting.component.html',
  styles: [],
})
export class phpAboutCraftingComponent {

  image!: iDisplayImage;

  constructor(private homepageContentService: HomepageContentService) {}

  ngOnInit(): void {
    // this.image = this.homepageContentService.getImagesForComponent();
  }

}