import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { palette, typography } from './base';
import { components } from './components';

let defaultTheme = createTheme({
  palette,
  typography,
  components,
});

defaultTheme = responsiveFontSizes(defaultTheme);

export default defaultTheme;
