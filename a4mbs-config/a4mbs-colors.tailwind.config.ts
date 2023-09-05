const NIAGARA = {
  'niagara': {
    '50': '#effefa',
    '100': '#c8ffee',
    '200': '#92fdde',
    '300': '#53f5cc',
    '400': '#20e1b6',
    '500': '#08c49e',
    '600': '#03a688',
    '700': '#077e6a',
    '800': '#0b6456',
    '900': '#0f5248',
    '950': '#01322c'
  }
}

const SANDAL = {      
  'sandal': {
    '50': '#f6f3f0',
    '100': '#e8e2d9',
    '200': '#d4c5b4',
    '300': '#bba289',
    '400': '#a68568',
    '500': '#97755b',
    '600': '#825e4c',
    '700': '#694a3f',
    '800': '#5a3f39',
    '900': '#4e3935',
    '950': '#2c1e1c'
  } 
}

const CHESTNUT_ROSE = {
  'chestnut-rose': {
    '50': '#fcf5f4',
    '100': '#f9e9e7',
    '200': '#f5d7d3',
    '300': '#edbbb4',
    '400': '#e09389',
    '500': '#cc6052',
    '600': '#bc5446',
    '700': '#9d4438',
    '800': '#833a31',
    '900': '#6e352e',
    '950': '#3b1814'
  }
}

const CYPRUS = {
  'cyprus': {
    '50': '#e9fffe',
    '100': '#c9fffb',
    '200': '#99fffb',
    '300': '#54fffb',
    '400': '#07f8ff',
    '500': '#00d9ef',
    '600': '#00adc9',
    '700': '#0089a1',
    '800': '#086d82',
    '900': '#0c5a6d',
    '950': '#003341'
  }
}

const NILE_BLUE = {
  'nile-blue': {
    '50': '#edfdfe',
    '100': '#d2f7fb',
    '200': '#aaedf7',
    '300': '#6fdff1',
    '400': '#2dc7e3',
    '500': '#12aac8',
    '600': '#1288a8',
    '700': '#156e89',
    '800': '#1a5970',
    '900': '#19475a',
    '950': '#0b3141'
  }  
}

const NEPTUNE = {
  'neptune': {
    '50': '#f3faf9',
    '100': '#d8efed',
    '200': '#b1dedb',
    '300': '#6fbdbb',
    '400': '#58a8a9',
    '500': '#3e8c8e',
    '600': '#306e71',
    '700': '#2a585b',
    '800': '#25474a',
    '900': '#223d3f',
    '950': '#0f2224'
  }
}

const ASTRA = {
  'astra': {
    '50': '#fef8ec',
    '100': '#fae3b5',
    '200': '#f8d58f',
    '300': '#f4ba55',
    '400': '#f1a02e',
    '500': '#ea7f16',
    '600': '#cf5d10',
    '700': '#ac3f11',
    '800': '#8c3214',
    '900': '#732914',
    '950': '#421306'
  },
}

const TACHA = {
  'tacha': {
    '50': '#fcf9f0',
    '100': '#f7f1dd',
    '200': '#eee1ba',
    '300': '#e2ca8f',
    '400': '#d7b065',
    '500': '#cd9842',
    '600': '#bf8237',
    '700': '#9f672f',
    '800': '#80522c',
    '900': '#674427',
    '950': '#372213'
  }
}

export const THEME_COLORS_CONFIG = {
  colors: {
    // 'primary-default': '#08c49e'
    'primary-default': NEPTUNE.neptune['300'],
    'primary-light': NEPTUNE.neptune['100'],
    'primary-dark': NEPTUNE.neptune['500'],
    // 'secondary-default': '#1288a8'
    'secondary-default': NILE_BLUE['nile-blue']['900'],
    'secondary-light': NILE_BLUE['nile-blue']['700'],
    'secondary-dark': NILE_BLUE['nile-blue']['950'],
    // 'warning-default': '#cd9842'
    'warning-default': TACHA.tacha['400'], 
    'warning-light': TACHA.tacha['200'],
    'warning-dark': TACHA.tacha['600'],
    // 'danger-default': '#cc6052'
    'danger-default': CHESTNUT_ROSE['chestnut-rose']['500'],
    'danger-light': CHESTNUT_ROSE['chestnut-rose']['300'],
    'danger-dark': CHESTNUT_ROSE['chestnut-rose']['700'],
    // 'success-default': '#03a688'
    'success-default': NIAGARA.niagara['600'],
    'success-light': NIAGARA.niagara['400'],
    'success-dark': NIAGARA.niagara['800'],    
    // 'info-default': '#a68568'
    'info-default': SANDAL.sandal['400'],
    'info-light': SANDAL.sandal['200'],
    'info-dark': SANDAL.sandal['600'],
    // lignt and dark
    'light-default': ASTRA.astra['300'],
    'dark-default': CYPRUS.cyprus['950'],
    // remaining colors
    'warning': TACHA.tacha,
    'light': ASTRA.astra,
    'primary': NEPTUNE.neptune,
    'secondary': NILE_BLUE['nile-blue'],
    'dark': CYPRUS.cyprus,
    'danger': CHESTNUT_ROSE['chestnut-rose'],
    'success': NIAGARA.niagara,
    'info': SANDAL.sandal
  }
}

