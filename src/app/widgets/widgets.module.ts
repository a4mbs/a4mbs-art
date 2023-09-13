//define a module for the widgets
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { wTimelineComponent } from './timeline/timeline.component';
import { wFooterComponent } from './footer/footer.compoenent';
import { wImageDisplayComponent } from './imagine-display/image-display.component';
import { CloudinaryModule } from "@cloudinary/ng";
import { wHeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    wTimelineComponent,
    wFooterComponent,
    wImageDisplayComponent,
    wHeroComponent
  ],
  imports: [
    CommonModule,
    CloudinaryModule   
  ],
  exports: [
    wTimelineComponent,
    wFooterComponent,
    wImageDisplayComponent,
    wHeroComponent
  ]
})
export class WidgetsModule { }
