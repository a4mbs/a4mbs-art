import { Component, Input } from "@angular/core";
import { iStrctureWithHeroImageAndText } from "../../../project.interfaces";
import { CommonModule } from "@angular/common";
import { DisplayImageComponent } from "../display-image/display-image.component";

@Component({
  selector: 'a4mbs-alternated-feature-with-images-and-text',
  templateUrl: './alternated-feature-with-images-and-text.component.html',
  standalone: true,
  imports: [CommonModule, DisplayImageComponent]  
})
export class AlternatedFeatureWithImagesAndTextComponent {
  @Input() data!: Array<iStrctureWithHeroImageAndText>;
}