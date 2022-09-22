import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { palette, typography } from './base';
import { components } from './components';

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

let defaultTheme = createTheme({
  palette,
  typography,
  components,
});

defaultTheme = responsiveFontSizes(defaultTheme);

export default defaultTheme;
