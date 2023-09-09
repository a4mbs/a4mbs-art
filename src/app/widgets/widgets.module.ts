//define a module for the widgets
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { wTimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    wTimelineComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    wTimelineComponent
  ]
})
export class WidgetsModule { }
