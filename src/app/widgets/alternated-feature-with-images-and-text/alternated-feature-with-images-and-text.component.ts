import { Component, Input } from "@angular/core";
import { iStrctureWithHeroImageAndText } from "src/project.interfaces";

@Component({
  selector: 'w-alternated-feature-with-images-and-text',
  templateUrl: './alternated-feature-with-images-and-text.component.html',
  styles: []
})
export class wAlternatedFeatureWithImagesAndTextComponent {
  @Input() data!: Array<iStrctureWithHeroImageAndText>;
}