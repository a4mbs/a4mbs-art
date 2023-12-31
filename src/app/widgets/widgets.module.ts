import { NgModule } from "@angular/core";
import { WFooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { WImageDisplayComponent } from "./image-display/image-display.component";
import { CloudinaryModule } from "@cloudinary/ng";
import { WHeroComponent } from "./hero/hero.component";
import { WTimelineComponent } from "./timeline/timeline-component";

@NgModule({
  declarations: [
    WFooterComponent,
    WImageDisplayComponent,
    WHeroComponent,
    WTimelineComponent
  ],
  imports: [
    CommonModule,
    CloudinaryModule   
  ],
  exports : [
    WFooterComponent,
    WImageDisplayComponent,
    WHeroComponent,
    WTimelineComponent
  ]
})
export class WidgetsModule {}