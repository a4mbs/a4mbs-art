import { Component, ViewChild, ViewContainerRef, TemplateRef, AfterViewInit, createComponent } from '@angular/core';
import { HomepageContentService } from './services/home-content.service';
import { tWidgetsInterfaces, tWidgets, iDisplayImage, iText } from 'src/project.interfaces';
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

  // getContent(sectionId: tWidgets): tWidgetsInterfaces {
  //   return this.homeContentService.getSectionContent(sectionId);
  // }
  getHeroContent(): iDisplayImage {
    return this.homeContentService.getHeroSection();
  }

  getTimelineContent(): Array<iText> {
    return this.homeContentService.getTimelineSection();
  }

}