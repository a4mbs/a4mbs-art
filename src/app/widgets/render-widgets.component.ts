import { Component, Input, OnInit } from '@angular/core';
import { 
  iDisplayImage, 
  iStructreWtihIconAndText,
  iStrctureWithHeroImageAndText,
  iText,
  iFeaturesList,
  iCallToAction,
  tWidgets,
  tWidgetInterfaces
} from '../../project.interfaces';
import { HeroComponent } from './hero/hero.component';
import { CommonModule } from '@angular/common';
import { IconAndContentWithTwoButtonsComponent } from './icon-and-content-with-two-buttons/icon-and-content-with-two-buttons.component';
import { FeatureWithImageOnTheLeftAndBulletPointsComponent } from './feature-with-image-on-the-left-and-bullet-points/feature-with-image-on-the-left-and-bullet-points.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FeaturesListComponent } from './features-list/features-list.component';
import { AlternatedFeatureWithImagesAndTextComponent } from './alternated-feature-with-images-and-text/alternated-feature-with-images-and-text.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';

@Component({
  selector: 'a4mbs-render-widgets',
  templateUrl: './render-widgets.component.html',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    IconAndContentWithTwoButtonsComponent,
    FeatureWithImageOnTheLeftAndBulletPointsComponent,
    TimelineComponent,
    FeaturesListComponent,
    AlternatedFeatureWithImagesAndTextComponent,
    GalleryComponent,
    CallToActionComponent
  ]
})
export class RenderWidgetsComponent implements OnInit {

  @Input() widgetType!: tWidgets;
  @Input() data!: tWidgetInterfaces;
  heroData?: iDisplayImage;
  headerData?: iDisplayImage;
  iconAndContentWithTwoButtonsData?: iStructreWtihIconAndText;
  featureWithImageOnTheLeftAndBulletPointsData?: iStrctureWithHeroImageAndText;
  alternatedTimelineData?: Array<iText>;
  alternatedFeatureWithImagesAndTextData?: Array<iStrctureWithHeroImageAndText>;
  featuresListData?: iFeaturesList;
  gallery?: Array<iDisplayImage>;
  gallery1?: Array<iDisplayImage>;
  callToActionData?: iCallToAction;

  ngOnInit(){
    switch (this.widgetType) {
      case 'hero':
        this.heroData = this.data as iDisplayImage;
        break;
      case 'header':
        this.headerData = this.data as iDisplayImage;
        break;
      case 'iconAndContentWithTwoButtons':
        this.iconAndContentWithTwoButtonsData = this.data as iStructreWtihIconAndText;
        break;
      case 'featureWithImageOnTheLeftAndBulletPoints':
        this.featureWithImageOnTheLeftAndBulletPointsData = this.data as iStrctureWithHeroImageAndText;
        break;
      case 'alternatedTimeline':
        this.alternatedTimelineData = this.data as Array<iText>;
        break;
      case 'alternatedFeatureWithImagesAndText':
        this.alternatedFeatureWithImagesAndTextData = this.data as Array<iStrctureWithHeroImageAndText>;
        break;
      case 'featuresList':
        this.featuresListData = this.data as iFeaturesList;
        break;
      case 'gallery':
        this.gallery = this.data as Array<iDisplayImage>;
        break;
      case 'gallery1':   
        this.gallery1 = this.data as Array<iDisplayImage>;
        break;
      case 'callToAction':
        this.callToActionData = this.data as iCallToAction;
        break;    
    }

  }


}
