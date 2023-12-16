import { Component, Input } from '@angular/core';
import { iStrctureWithHeroImageAndText } from '../../../project.interfaces';
import { CommonModule } from '@angular/common';
import { DisplayImageComponent } from '../display-image/display-image.component';

@Component({
  selector: 'a4mbs-feature-with-image-on-the-left-and-bullet-points',
  templateUrl: './feature-with-image-on-the-left-and-bullet-points.component.html',
  standalone: true,
  imports: [CommonModule, DisplayImageComponent]
})
export class FeatureWithImageOnTheLeftAndBulletPointsComponent {
  @Input() data!: iStrctureWithHeroImageAndText;
}