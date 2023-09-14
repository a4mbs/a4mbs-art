import { Component, Input } from '@angular/core';
import { iStrctureWithHeroImageAndText } from 'src/project.interfaces';

@Component({
  selector: 'w-feature-with-image-on-the-left-and-bullet-points',
  templateUrl: './feature-with-image-on-the-left-and-bullet-points.component.html',
  styles: []
})
export class wFeatureWithImageOnTheLeftAndBulletPointsComponent {
  @Input() data!: iStrctureWithHeroImageAndText;
}