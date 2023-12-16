import { Component, Input } from '@angular/core';
import { iFeaturesList } from '../../../project.interfaces';
import { CommonModule } from '@angular/common';
import { DisplayImageComponent } from '../display-image/display-image.component';

@Component({
  selector: 'a4mbs-features-list',
  templateUrl: './features-list.component.html',
  standalone: true,
  imports: [CommonModule, DisplayImageComponent]
})  
export class FeaturesListComponent {
  @Input() data!: iFeaturesList;
}