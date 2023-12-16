import { Injectable } from '@angular/core';

import { 
  iA4MBSConfig,
  iBranding,
  iCDN,
  iCDNService,
  iSocialMedia,
  iSellingMedia,
  iWebsiteSettings,
  iLegalDetails  
 } from '../../project.interfaces';
import { A4MBS_CONFIG } from '../../a4mbs-general.config';

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
    return this.config.websiteSettings.CDN.services[this.config.websiteSettings.CDN.currentServiceIndex];
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