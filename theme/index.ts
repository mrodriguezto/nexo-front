import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// declare module '@mui/material/styles' {
//   interface Palette {
//     neutral: Palette['primary'];
//   }

//   interface PaletteOptions {
//     neutral?: PaletteOptions['primary'];
//   }
// }

// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     neutral: true;
//   }
// }

const bodyFontFamily = ['Montserrat', 'Roboto', 'Helvetica', 'sans-serif'].join(',');
const headingFontFamily = ['Oswald', 'Roboto', 'sans-serif'].join(',');

let defaultTheme = createTheme({
  palette: {
    primary: { main: '#8D7BDC' },
    secondary: { main: '#53429E' },
  },
  typography: {
    fontFamily: bodyFontFamily,
    h1: { fontFamily: headingFontFamily, fontWeight: 700 },
    h2: { fontFamily: headingFontFamily },
    h3: { fontFamily: headingFontFamily },
    h4: { fontFamily: headingFontFamily },
    h5: { fontFamily: headingFontFamily },
    h6: { fontFamily: headingFontFamily },
  },
});

defaultTheme = responsiveFontSizes(defaultTheme);

export default defaultTheme;
