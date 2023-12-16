import { Component, OnInit, inject } from "@angular/core";
import { HomepageContentService } from "../../../../../services/home.content.service";
import { iDisplayImage } from "../../../../../../project.interfaces";
import { CommonModule } from "@angular/common";
import { DisplayImageComponent } from "../../../../../widgets/display-image/display-image.component";

@Component({
  selector: 'php-about-crafting',
  templateUrl: './about-crafting.component.html',
  standalone: true,
  imports: [CommonModule,DisplayImageComponent]
})
export class phpAboutCraftingComponent implements OnInit {

  image!: iDisplayImage;
  private homepageContentService: HomepageContentService = inject(HomepageContentService);

  ngOnInit(): void {
    // this.image = this.homepageContentService.getImagesForComponent();
  }

}