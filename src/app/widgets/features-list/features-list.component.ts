import { Component, Input } from '@angular/core';
import { iFeaturesList } from 'src/project.interfaces';

@Component({
  selector: 'w-features-list',
  templateUrl: './features-list.component.html',
  styles: []
})  
export class wFeaturesListComponent {
  @Input() data!: iFeaturesList;
}