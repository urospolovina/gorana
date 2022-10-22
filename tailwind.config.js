module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '855px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      '2lg': '1125px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1536px) { ... }
      'max': '1334px',
      // => @media (min-width: 1280px) { ... }
      'total': '1610px',
    },
    extend: {
      colors: {
        'inbox': {  
          'primary': '#5918C0',  
          'secondary': '#FFB81A',
          'tertiary': '#A5D6FF',
          'greenLight': '#C8FFE6',
          'green': '#47FFAC',
          'greenHard': '#103F2A', 
          'gray': '#F0F2F6',
          'grayA': '#7D98AA',
          'hr': '#E8E7ED',
          'graytext': '#8B8B8B',
          'mangolia': '#FAF8FF',
          'lila': '#AF92DD',
          'error': '#E55026',
          'frozen': '#D3C1F0',
          'pink': "#E52C66",
          'fog': "#D3C1F0",
          'imgbg':'#C4C4C4',
        },
        'gamma': {  
          'blue': '#003878',  
          'green': '#74c202', 
          'gray': '#F0F2F6',
          'grayA': '#7D98AA',
          'error': '#E55026',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
