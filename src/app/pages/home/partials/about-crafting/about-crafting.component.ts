import { Component } from "@angular/core";
import { iDisplayImage } from "src/app/widgets/widgets.interfaces";
import { HomepageContentService } from "../../services/home-content.service";

@Component({
  selector: 'php-about-crafting',
  templateUrl: './about-crafting.component.html',
  styles: [],
})
export class phpAboutCraftingComponent {

  image!: iDisplayImage;

  constructor(private homepageContentService: HomepageContentService) {}

  ngOnInit(): void {
    this.image = this.homepageContentService.getImagesForComponent();
  }

}