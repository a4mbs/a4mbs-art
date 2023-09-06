import type { Config } from 'tailwindcss';
import { THEME_COLORS_CONFIG } from './a4mbs-config/a4mbs-colors.tailwind.config';
import { FONT_FAMILY } from './a4mbs-config/a4mbs-typography.tailwind.config';
import { SCREENS } from './a4mbs-config/a4mbs-screens.tailwind.config';

const aspectRatio = require('@tailwindcss/aspect-ratio');
const flowbite = require('flowbite/plugin');

const config: Config = {
  content: [
    "./src/**/*.{html,ts}",
    './src/**/*.tsx'
  ],
  theme: {   
    extend: {
      ...THEME_COLORS_CONFIG,
      ...SCREENS
    },
    ...FONT_FAMILY
  },
  plugins: [
    aspectRatio,
    flowbite
  ]
}

export default config;