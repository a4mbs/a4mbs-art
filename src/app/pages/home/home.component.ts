import { Component } from '@angular/core';
import { HomepageContentService } from './home.content.service';
import { tWidgets, iPageContent } from 'src/project.interfaces';

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