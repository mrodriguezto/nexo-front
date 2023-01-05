import { PaletteColor, PaletteColorOptions, PaletteOptions } from '@mui/material';
declare module '@mui/material/styles' {
  interface PaletteOptions {
    light?: PaletteColorOptions;
  }

  interface Palette {
    light: PaletteColor;
  }
}

export const palette: PaletteOptions = {
  primary: { main: '#8D7BDC', contrastText: '#ffffff' },
  secondary: { main: '#53429E', contrastText: '#ffffff' },
  info: { main: '#312662', contrastText: '#ffffff' },
  success: { main: '#3BC6C6', contrastText: '#ffffff' },
  error: { main: '#EB5B66', contrastText: '#ffffff' },
  warning: { main: '#FAC247', contrastText: '#ffffff' },
  light: { main: '#FAFAFA', contrastText: '#8D7BDC' },
};
