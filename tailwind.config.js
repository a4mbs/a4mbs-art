/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        'success': {
          '50': '#effefa',
          '100': '#c8ffee',
          '200': '#92fdde',
          '300': '#53f5cc',
          '400': '#20e1b6',
          '500': '#08c49e',
          DEFAULT: '#03a688',
          '700': '#077e6a',
          '800': '#0b6456',
          '900': '#0f5248',
          '950': '#01322c'
        },
        'secondary': {
          '50': '#f6f3f0',
          '100': '#e8e2d9',
          '200': '#d4c5b4',
          '300': '#bba289',
          DEFAULT: '#a68568',
          '500': '#97755b',
          '600': '#825e4c',
          '700': '#694a3f',
          '800': '#5a3f39',
          '900': '#4e3935',
          '950': '#2c1e1c'
        },
        'danger': {
          '50': '#fcf5f4',
          '100': '#f9e9e7',
          '200': '#f5d7d3',
          '300': '#edbbb4',
          '400': '#e09389',
          DEFAULT: '#cc6052',
          '600': '#bc5446',
          '700': '#9d4438',
          '800': '#833a31',
          '900': '#6e352e',
          '950': '#3b1814'
        },
        'dark': {
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
          DEFAULT: '#003341'
        },
        'info': {
          '50': '#edfdfe',
          '100': '#d2f7fb',
          '200': '#aaedf7',
          '300': '#6fdff1',
          '400': '#2dc7e3',
          '500': '#12aac8',
          '600': '#1288a8',
          '700': '#156e89',
          '800': '#1a5970',
          DEFAULT: '#19475a',
          '950': '#0b3141'
        },
        'primary': {
          '50': '#f3faf9',
          '100': '#d8efed',
          '200': '#b1dedb',
          DEFAULT: '#6fbdbb',
          '400': '#58a8a9',
          '500': '#3e8c8e',
          '600': '#306e71',
          '700': '#2a585b',
          '800': '#25474a',
          '900': '#223d3f',
          '950': '#0f2224'
        },
        'light': {
          DEFAULT: '#fef8ec',
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
        'warning': {
          '50': '#fcf9f0',
          '100': '#f7f1dd',
          '200': '#eee1ba',
          '300': '#e2ca8f',
          DEFAULT: '#d7b065',
          '500': '#cd9842',
          '600': '#bf8237',
          '700': '#9f672f',
          '800': '#80522c',
          '900': '#674427',
          '950': '#372213'
        }
      }
    },
    fontFamily: {
      'sans': ['IBM Plex Sans', 'sans-serif'],
      'serif': ['Playfair Display', 'serif'],
      'mono': ['Share Tech Mono', 'monospace'],
      'special-alternate': ['Montserrat Alternates', 'sans-serif'],
      'special': ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}