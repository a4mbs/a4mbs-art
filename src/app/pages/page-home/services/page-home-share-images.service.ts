import { Injectable } from '@angular/core';
import { iImage } from '../../pages.interfaces';

interface iComponentMapping {
  [key: string]: Array<number>;
}


@Injectable()
export class PageHomeComponentShareImagesService {

  images: Array<iImage> = [
    {
      path: 'home-page/homepage_img01.jpg',
      alt: 'Radio Lady artwork',
      caption: 'Radio Lady',
      details: 'illustation, generative art',
      overlayButtonTitle: 'View on Behance',
      overlayButtonLink: 'https://www.behance.net/gallery/176659279/Radio-Lady',
    }
  ]
  
  private componentMapping: iComponentMapping = {
    'PHPAboutCraftingComponent': [0]
  }

  constructor() { }

  getImagesForComponent(componentName: string): Array<iImage> | null {
    const indexes = this.componentMapping[componentName];
    if (indexes) {
      return indexes.map(index => this.images[index]);
    }
    return null;
  }
  
}