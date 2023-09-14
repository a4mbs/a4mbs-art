import { Component, Input } from '@angular/core';
import { iStructreWtihIconAndText } from 'src/project.interfaces';

@Component({
  selector: 'w-icon-and-content-with-two-buttons',
  templateUrl: './icon-and-content-with-two-buttons.component.html',
  styles: []

})
export class wIconAndContentWithTwoButtonsComponent {

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