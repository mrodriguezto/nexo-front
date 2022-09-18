/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/components/*.{js,ts,jsx,tsx}",
    "./modules/**/components/*.{js,ts,jsx,tsx}",
    "./common/**/components/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        transparent: "transparent",
        primary: {
          900: '#8D7BDC', 800: '#9B8CE0', 700: '#AA9CE5', 600: '#B8ADE9',
          500: '#C6BDEE', 400: '#D4CEF2', 300: '#E3DEF6', 200: '#F1EFFB'
        },
        secondary: {
          900: '#53429E', 800: '#614EB6', 700: '#7868C0', 600: '#8E81CB',
          500: '#A59AD5', 400: '#BBB3E0', 300: '#D2CDEA', 200: '#E8E6F5',
        },
        info: {
          900: '#312662', 800: '#423384', 700: '#5340A5', 600: '#6957BE',
          500: '#8778CB', 400: '#A59AD8', 300: '#C3BCE5', 200: '#E1DDF2',
        },
        'light-info': {
          900: '#F0C5E6', 800: '#F2CCE9', 700: '#F4D3EC', 600: '#F6DBF0',
          500: '#F8E2F3', 400: '#F9E9F6', 300: '#FBF0F9', 200: '#FDF8FC',
        },
        success: {
          900: '#3BC6C6', 800: '#53CDCC', 700: '#6BD4D4', 600: '#84DBDB',
          500: '#9DE3E2', 400: '#B5EAE9', 300: '#CEF1F1', 200: '#E6F8F8',
        },
        error: {
          900: '#EB5B66', 800: '#EE7079', 700: '#F0848C', 600: '#F3999F',
          500: '#F5ADB3', 400: '#F8C2C6', 300: '#FAD6D9', 200: '#FDEBEC',
        },
        warning: {
          900: '#FAC247', 800: '#FBCA5E', 700: '#FBD175', 600: '#FCD98C',
          500: '#FDE1A3', 400: '#FDE8BA', 300: '#FEF0D1', 200: '#FEF7E8',
        },
        onyx: {
          900: '#202020', 800: '#404040', 700: '#606060', 600: '#808080',
          500: '#9F9F9F', 400: '#BFBFBF', 300: '#DFDFDF', 200: '#FFFFFF',
        },
        dull: {
          900: '#EBEBEB', 800: '#EDEDED', 700: '#F0F0F0', 600: '#F2F2F2',
          500: '#F5F5F5', 400: '#F7F7F7', 300: '#FAFAFA', 200: '#FCFCFC',
        }
      },
    }
  }
}