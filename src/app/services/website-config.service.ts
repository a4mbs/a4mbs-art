import { Injectable } from '@angular/core';
import  { A4MBS_CONFIG } from '../../../a4mbs-config/_a4mbs-general.config';

interface iWebsiteSettings {
  title: string;
  shortTitle: string;
  motto: string;
  URL: string;
}

interface iLogoResources {
  png: string;
  white: string;
  black: string;
  darkBlue: string;
  color: string;
}

interface iBranding {
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
  CDN: iCDN;
  legalDetails: iLegalDetails; 
}

@Injectable({
  providedIn: 'root'
})
class WebsiteConfigService {
  private config: iA4MBSConfig = A4MBS_CONFIG;

  getWebsiteSettings(): iWebsiteSettings {
    return this.config.websiteSettings;
  }

  getBranding(): iBranding {
    return this.config.branding;
  }

  getSocialMedia(): Array<iSocialMedia> {
    return this.config.socialMedia;
  }

  getStockImages(): Array<iSellingMedia> {
    return this.config.stockImages;
  }

  getPrintOnDemand(): Array<iSellingMedia> {
    return this.config.printOnDemand;
  }

  getCDN(): iCDNService {
    return this.config.CDN.services[this.config.CDN.currentServiceIndex];
  }

  getLegalDetails(): iLegalDetails {
    return this.config.legalDetails;
  }
}

export { 
  iBranding,
  iCDN,
  iCDNService,
  iSocialMedia,
  iSellingMedia,
  iWebsiteSettings,
  iLegalDetails, 
  WebsiteConfigService
}