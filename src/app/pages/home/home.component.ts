import { Component, ViewChild, ViewContainerRef, TemplateRef, AfterViewInit, createComponent } from '@angular/core';
import { HomepageContentService } from './home.content.service';
import {  tWidgets, iDisplayImage, iText, iPageContent } from 'src/project.interfaces';
import { wGalleryOfFourComponent } from 'src/app/widgets/gallery-of-four/gallery-of-four.component';
import { wGalleryOfThreeComponent } from 'src/app/widgets/gallery-of-three/gallery-of-three.component';
// import { WidgetsModule } from 'src/app/widgets/widgets.module';

@Component({
  selector: 'pag-home',
  templateUrl: './home.component.html',
  styles: []  
})
export class pHomeComponent {

  constructor(private homeContentService: HomepageContentService) { }


  getSections(): Array<tWidgets> {
    return this.homeContentService.getSections();
  }

  getContent(): iPageContent {
    return this.homeContentService.getContent();
  }


}