import { Injectable } from '@angular/core';
import  { A4MBS_CONFIG } from '../../../a4mbs.config';

interface iWebsiteSettings {
  title: string;
  shortTitle: string;
  motto: string;
  URL: string;
}

interface iLogoURLs {
  png: string;
  white: string;
  black: string;
  darkBlue: string;
  color: string;
}

interface iBranding {
  heroImageURL: string;
  logoURLs: iLogoURLs;
}

interface iSocialMedia {
  [key: string]: string;
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
  socialMedia: iSocialMedia;
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

  getSocialMediaLinks(): iSocialMedia {
    return this.config.socialMedia;
  }

  getCDN(): iCDN {
    return this.config.CDN;
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
  iWebsiteSettings,
  iLegalDetails, 
  WebsiteConfigService
}