/**
/ Widgets 
/**/
type tWidgets = 
  'hero' | 
  'header' |
  'iconAndContentWithTwoButtons' | 
  'featureWithImageOnTheLeftAndBulletPoints' | 
  'alternatedTimeline' | 
  'alternatedFeatureWithImagesAndText' | 
  'featuresList' | 
  'gallery' | 
  'gallery1' |
  'callToAction' ;

type tWidgetInterfaces = iDisplayImage | 
  iStructreWtihIconAndText |
  iStrctureWithHeroImageAndText |
  Array<iStrctureWithHeroImageAndText> |
  Array<iText> |
  iFeaturesList |
  Array<iDisplayImage> |
  iCallToAction |
  null;

interface iPageContent {
  hero?: iDisplayImage;
  iconAndContentWithTwoButtons?: iStructreWtihIconAndText;
  featureWithImageOnTheLeftAndBulletPoints?: iStrctureWithHeroImageAndText;
  alternatedTimeline?: Array<iText>;
  alternatedFeatureWithImagesAndText?: Array<iStrctureWithHeroImageAndText>;
  featuresList?: iFeaturesList;
  gallery?: Array<iDisplayImage>;
  gallery1?: Array<iDisplayImage>;
  callToAction?: iCallToAction;
  header?: iDisplayImage;
}


interface iButton {
  title: string;
  link?: string;
  method?: 'scrollingDown' | 'scrollingUp';
}

interface iImage {
  path: string;
  alt: string;
}

interface iText {
  title: string;
  subtitle?: string;
  content: string
}

interface iListItem {
  icon: string;
  content: string;
}

interface iDisplayImage {
  image: iImage;
  text: iText;
  button?: iButton;
}

interface iStructreWtihIconAndText {
  image: iImage;
  text: iText;
  buttons?: Array<iButton>;
}

interface iStrctureWithHeroImageAndText {
  hero: iDisplayImage;
  text: iText;
  listItems?: Array<iListItem>;
}

interface iFeaturesList {
  text: iText;
  features: Array<iStructreWtihIconAndText>
}

interface iCallToAction {
  text: iText;
  listItems: Array<iListItem>;
  button: iButton
}



/**
/ website config
/**/
interface iWebsiteSettings {
  URL: string;
  CDN: iCDN;
}

interface iLogoResources {
  png: string;
  white: string;
  black: string;
  darkBlue: string;
  color: string;
}

interface iBranding {
  title: string;
  shortTitle: string;
  motto: string;
  heroImageResource: string;
  logoResources: iLogoResources;
}

interface iSocialMedia {
  title: string;
  icon: string;
  link: string;  
}

interface iSellingMedia {
  title: string;
  link: string;
}

interface iCDNService {
  name: string;
  username: string;
  mainFolder: string;
}

interface iCDN {
  currentServiceIndex: number;
  services: iCDNService[];
}

interface iLegalDetails {
  privacyPolicyLastUpdated: string;
  termsOfUseLastUpdated: string;
  contactEmail: string;
}

interface iA4MBSConfig {
  websiteSettings: iWebsiteSettings;
  branding: iBranding;
  socialMedia: Array<iSocialMedia>;
  stockImages: Array<iSellingMedia>;
  printOnDemand: Array<iSellingMedia>;  
  legalDetails: iLegalDetails; 
}



/**
/ Misc
/**/
interface iResponsiveStyle {
  small?: string;
  large?: string;
}

export {

  // Widgets
  tWidgets,
  tWidgetInterfaces,
  iButton,
  iDisplayImage,
  iImage,
  iListItem,
  iStructreWtihIconAndText,
  iStrctureWithHeroImageAndText,
  iText,
  iFeaturesList,
  iCallToAction,
  iPageContent,

  // Website config
  iWebsiteSettings,
  iLogoResources,
  iBranding,
  iSocialMedia,
  iSellingMedia,
  iCDNService,
  iCDN,
  iLegalDetails,
  iA4MBSConfig,  

  // Misc
  iResponsiveStyle
}