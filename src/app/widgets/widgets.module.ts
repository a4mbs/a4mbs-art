//define a module for the widgets
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { wTimelineComponent } from './timeline/timeline.component';
import { wFooterComponent } from './footer/footer.compoenent';
import { wDisplayImageComponent } from './display-image/display-image.component';
import { CloudinaryModule } from "@cloudinary/ng";
import { wHeroComponent } from './hero/hero.component';
import { wIconAndContentWithTwoButtonsComponent } from './icon-and-content-with-two-buttons/icon-and-content-with-two-buttons.component';
import { wFeatureWithImageOnTheLeftAndBulletPointsComponent } from './feature-with-image-on-the-left-and-bullet-points/feature-with-image-on-the-left-and-bullet-points.component';
import { wAlternatedFeatureWithImagesAndTextComponent } from './alternated-feature-with-images-and-text/alternated-feature-with-images-and-text.component';
import { wFeaturesListComponent } from './features-list/features-list.component';
import { wGalleryOfFourComponent } from './gallery-of-four/gallery-of-four.component';
import { wGalleryOfThreeComponent } from './gallery-of-three/gallery-of-three.component';
import { wCallToActionComponent } from './call-to-action/call-to-action.component';

const WIDGETS = [
  wDisplayImageComponent,
  wTimelineComponent,
  wFooterComponent,
  wHeroComponent,
  wIconAndContentWithTwoButtonsComponent,
  wFeatureWithImageOnTheLeftAndBulletPointsComponent,
  wAlternatedFeatureWithImagesAndTextComponent,
  wFeaturesListComponent,
  wGalleryOfFourComponent,
  wGalleryOfThreeComponent,
  wCallToActionComponent
];

@NgModule({
  declarations: [
    ...WIDGETS
  ],
  imports: [
    CommonModule,
    CloudinaryModule   
  ],
  exports: [
    ...WIDGETS
  ]
})
export class WidgetsModule { }
