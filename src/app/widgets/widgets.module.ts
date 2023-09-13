//define a module for the widgets
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { wTimelineComponent } from './timeline/timeline.component';
import { wFooterComponent } from './footer/footer.compoenent';
import { wDisplayImageComponent } from './display-image/display-image.component';
import { CloudinaryModule } from "@cloudinary/ng";
import { wHeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    wDisplayImageComponent,
    wTimelineComponent,
    wFooterComponent,
    wHeroComponent
  ],
  imports: [
    CommonModule,
    CloudinaryModule   
  ],
  exports: [
    wDisplayImageComponent,
    wTimelineComponent,
    wFooterComponent,
    wHeroComponent
  ]
})
export class WidgetsModule { }
