import { Component, Input } from '@angular/core'; 
import { iDisplayImage } from '../../../project.interfaces';
import { CommonModule } from '@angular/common';
import { DisplayImageComponent } from '../display-image/display-image.component';

@Component({
  selector: 'a4mbs-gallery',
  templateUrl: './gallery.component.html',
  standalone: true,
  imports: [CommonModule, DisplayImageComponent]
})
export class GalleryComponent {
  public dataLength!: number;

  @Input() data!: Array<iDisplayImage>;

  ngOnInit() {
    this.dataLength = this.data.length;
  }
}