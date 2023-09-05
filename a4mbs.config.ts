export const A4MBS_CONFIG = {
  // Website General Settings
  websiteSettings: {
    title: 'Aiming for My Best Self',
    shortTitle: 'a4mbs',
    motto: 'Intriguing disturbance sparks artistic innovation',    
    URL:  'http://localhost:4200',    
  },

  // Legal Details
  legalDetails: {
    privacyPolicyLastUpdated: '2023-09-04',
    termsOfUseLastUpdated: '2023-09-01',
    contactEmail: 'contact@a4mbs.art'
  },

  // Branding
  branding: {
    heroImageURL: 'home-page/homepage_hero.jpg',
    logoURLs: {
      png:'logo/logo.png',
      white: 'logo/logo_white.svg',
      black: 'logo/logo_black.svg',
      darkBlue: 'logo/logo_dark_blue.svg',
      color: 'logo/logo_color.svg'
    }
  },

  // Social Media Links
  socialMedia: {
    'behance': 'https://www.behance.net/a4mbs',
    'facebook': 'https://www.facebook.com/a4mbs',
  },

  // CDN Configuration
  CDN: {
    currentServiceIndex: 0, // Index in CDNServices array
    services: [
      {
        name: 'cloudinary',
        username: 'a4mbs',
        mainFolder: 'a4mbs.art',
      },
      // Add more services here
    ]
  },
};