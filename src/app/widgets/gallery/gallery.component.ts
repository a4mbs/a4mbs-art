import { Component, Input } from '@angular/core'; 
import { iDisplayImage } from 'src/project.interfaces';

@Component({
  selector: 'w-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class wGalleryComponent {
  public dataLength!: number;

  @Input() data!: Array<iDisplayImage>;

  ngOnInit() {
    this.dataLength = this.data.length;
  }
}