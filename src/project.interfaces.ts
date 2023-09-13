type tWidgets = 'hero' | 
    'iconAndContentWithTwoButtons' | 
    'featureWithImageOnTheLeftAndBulletPoints' | 
    'alternatedTimeline' | 
    'alternatedFeatureWithImagesAndText' | 
    'featuresList' | 
    'galleryOfFour' | 
    'galleryOfThere' | 
    'callToAction';

  type tWidgetsInterfaces = iDisplayImage | 
    iStructreWtihIconAndText |
    iStrctureWithHeroImageAndText |
    Array<iStrctureWithHeroImageAndText> |
    Array<iText> |
    iFeaturesList |
    Array<iDisplayImage> |
    iCallToAction |
    null;  

interface iHomepageContent {
  hero: iDisplayImage;
  iconAndContentWithTwoButtons: iStructreWtihIconAndText;
  featureWithImageOnTheLeftAndBulletPoints: iStrctureWithHeroImageAndText;
  alternatedTimeline: Array<iText>;
  alternatedFeatureWithImagesAndText: Array<iStrctureWithHeroImageAndText>;
  featuresList: iFeaturesList;
  galleryOfFour: Array<iDisplayImage>;
  galleryOfTThere: Array<iDisplayImage>;
  callToAction: iCallToAction;
}

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

interface iResponsiveStyle {
  small?: string;
  large?: string;
}

export {
  iButton,
  iDisplayImage,
  iImage,
  iListItem,
  iStructreWtihIconAndText,
  iStrctureWithHeroImageAndText,
  iText,
  iFeaturesList,
  iCallToAction,
  tWidgets,
  iHomepageContent,
  iWebsiteSettings,
  iLogoResources,
  iBranding,
  iSocialMedia,
  iSellingMedia,
  iCDNService,
  iCDN,
  iLegalDetails,
  iA4MBSConfig,
  iResponsiveStyle,
  tWidgetsInterfaces
}