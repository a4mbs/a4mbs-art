import { Component, Input } from '@angular/core';
import { iStructreWtihIconAndText } from '../../../project.interfaces';
import { CommonModule } from '@angular/common';
import { DisplayImageComponent } from '../display-image/display-image.component';

@Component({
  selector: 'a4mbs-icon-and-content-with-two-buttons',
  templateUrl: './icon-and-content-with-two-buttons.component.html',
  standalone: true,
  imports: [CommonModule, DisplayImageComponent]
})
export class IconAndContentWithTwoButtonsComponent {

  @Input() data!: iStructreWtihIconAndText;

  constructor() {
  }

  goToButtonLink(index: number) {
    if (this.data.buttons && this.data.buttons[index]){
      if (this.data.buttons[index].link?.startsWith('http')) { 
        window.open(this.data.buttons[index].link, '_blank');
      } else {
        window.open(this.data.buttons[index].link, '_self');
      }
    }
  }

  getButtonTitle(index: number) {
    if (this.data.buttons && this.data.buttons[index]){
      return this.data.buttons[index].title;
    }
    return '';
  }

}