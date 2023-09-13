import { 
  iDisplayImage, 
  iStrctureWithHeroImageAndText, 
  iStructreWtihIconAndText, 
  iText, 
  iFeaturesList, 
  iCallToAction } from '../widgets/widgets.interfaces';

type tWidgets = 'hero' | 
    'iconAndContentWithTwoButtons' | 
    'featureWithImageOnTheLeftAndBulletPoints' | 
    'alternatedTimeline' | 
    'alternatedFeatureWithImagesAndText' | 
    'featuresList' | 
    'galleryOfFour' | 
    'galleryOfTThere' | 
    'callToAction';

interface iPageHomeContent {
  sections: [
    {
      type: tWidgets;
      sectionContent: iDisplayImage;
    },
    {
      type: tWidgets;
      sectionContent: iStructreWtihIconAndText;
    },
    {
      type: tWidgets;
      sectionContent: iStrctureWithHeroImageAndText;
    },
    {
      type: tWidgets;
      sectionContent: Array<iText>;
    },
    {
      type: tWidgets;
      sectionContent: Array<iStrctureWithHeroImageAndText>;
    },
    {
      type: tWidgets;
      sectionContent: iFeaturesList;
    },
    {
      type: tWidgets;
      sectionContent: Array<iDisplayImage>;
    },
    {
      type: tWidgets; 
      sectionContent: Array<iDisplayImage>;
    },
    {
      type: tWidgets;
      sectionContent: iCallToAction;
    }
  ]
}

export {
  tWidgets,
  iPageHomeContent,
}