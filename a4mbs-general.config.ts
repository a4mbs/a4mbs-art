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
    heroImageResource: 'home-page/homepage_hero.jpg',
    logoResources: {
      png:'logo/logo.png',
      white: 'logo/logo_white.svg',
      black: 'logo/logo_black.svg',
      darkBlue: 'logo/logo_dark_blue.svg',
      color: 'logo/logo_color.svg'
    }
  },

  // Social Media Links
  socialMedia: [
    {
      title: 'Behance',
      icon: 'behance',
      link: 'https://www.behance.net/a4mbs',
    },
    {
      title: 'Facebook',
      icon: 'facebook',
      link: 'https://www.facebook.com/a4mbs',
    },
    {
      title: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/a4mbs82',
    },
    {
      title: 'Instagram',
      icon: 'instagram',
      link: 'https://www.instagram.com/a4mbs82',
    },
    {
      title: 'ArtStation',
      icon: 'artstation',
      link: 'https://www.artstation.com/a4mbs',
    },
    {
      title: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/a4mbs',
    } 
  ],

  // Stock Images
  stockImages: [
    {
      title: 'FreePik',
      link: 'https://www.freepik.com/author/a4mbs',
    },
    {
      title: 'Shutterstock',
      link: 'https://www.shutterstock.com/g/a4mbs',
    },
    {
      title: 'Adobe Stock',
      link: 'https://stock.adobe.com/ro/contributor/211165577/a4mbs',
    }
  ],

  // Print on Demand
  printOnDemand: [
    { 
      title: 'RedBubble',
      link: 'https://www.redbubble.com/people/a4mbs',
    },
    {
      title: 'Society6',
      link: 'https://society6.com/vladimirioan6392535918cb7',
    },
    {
      title: 'TeePublic',
      link: 'https://www.teepublic.com/user/a4mbs',
    }
  ],

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