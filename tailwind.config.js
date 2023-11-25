/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1920px',
      Msm: {'max': '479px'},
      Mmd: {'max': '767px'},
      Mlg: {'max': '975px'},
      Mxl: {'max': '1439px'},
      Mxxl: {'max': '1919px'},
    },
    colors: {
      // green
      'green-60': '#CAFF33',
      'green-65': '#D1FF4C',
      'green-70': '#D8FF66',
      'green-80': '#E5FF99',
      'green-90': '#F2FFCC',
      'green-95': '#F8FFE5',
      'green-97': '#FBFFF0',
      'green-99': '#FEFFFA',
      // white
      'white-90': '#E4E4E7',
      'white-95': '#F1F1F3',
      'white-97': '#F7F7F8',
      'white-99': '#FCFCFD',
      // Grey
      'grey-10': '#191919',
      'grey-11': '#1C1C1C',
      'grey-15': '#262626',
      'grey-20': '#333333',
      'grey-30': '#4C4C4D',
      'grey-35': '#59595A',
      'grey-40': '#656567',
      'grey-60': '#98989A',
      'grey-70': '#B3B3B3',
      'grey-75': '#BFBFBF',
      // black
      'black': '#000',
      // white
      'white': '#fff'
    },
    extend: {
      fontSize: {
        18: '18px',
        48: '48px',
        24: '24px',
        20: '20px',
        38: '38px',
        16: '16px',
        14: '14px',
        28: '28px'
      },
      backgroundColor: {
        'bg-grey-10': '#191919',
        'bg-grey-11': '#1C1C1C',
        'bg-grey-15': '#262626',
        'bg-green-60': '#CAFF33',
        'bg-black': '#000',
        'bg-white': '#fff'
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        'grey-15': '#262626',
        'green-60': '#CAFF33'
      },
      width: {
        720: '720px',
        940: '940px',
        1280: '1280px',
        1528: '1528px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [],
}
