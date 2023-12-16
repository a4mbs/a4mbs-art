import { Component, inject } from '@angular/core';
import { HomepageContentService } from '../../../services/home.content.service';
import { iPageContent, tWidgets } from '../../../../project.interfaces';
import { CommonModule } from '@angular/common';
import { RenderWidgetsComponent } from '../../../widgets/render-widgets.component';

@Component({
  selector: 'a4mbs-home',
  standalone: true,
  imports: [CommonModule, RenderWidgetsComponent],
  templateUrl: './home.component.html'  
})
export class HomeComponent {
  private homeContentService: HomepageContentService = inject(HomepageContentService);


  getSections(): Array<tWidgets> {
    return this.homeContentService.getSections();
  }

  getContent(): iPageContent {
    return this.homeContentService.getContent();
  }
}
