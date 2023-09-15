import { Component, Input } from '@angular/core'; 
import { iCallToAction } from 'src/project.interfaces';

@Component({
  selector: 'w-call-to-action',
  templateUrl: './call-to-action.component.html',
  styles: []
})
export class wCallToActionComponent {
  @Input() data!: iCallToAction;
  goToLink(){
    window.open(this.data.button.link, "_blank");
  }
}