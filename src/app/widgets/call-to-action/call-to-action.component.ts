import { Component, Input } from '@angular/core'; 
import { iCallToAction } from '../../../project.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'a4mbs-call-to-action',
  templateUrl: './call-to-action.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CallToActionComponent {
  @Input() data!: iCallToAction;
  goToLink(){
    window.open(this.data.button.link, "_blank");
  }
}