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

export {
  iButton,
  iDisplayImage,
  iImage,
  iListItem,
  iStructreWtihIconAndText,
  iStrctureWithHeroImageAndText,
  iText,
  iFeaturesList,
  iCallToAction
}