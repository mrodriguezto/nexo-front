import { TypographyOptions } from '@mui/material/styles/createTypography';

const bodyFontFamily = ['Montserrat', 'Roboto', 'Helvetica', 'sans-serif'].join(',');
const headingFontFamily = ['Oswald', 'Roboto', 'sans-serif'].join(',');

export const typography: TypographyOptions = {
  fontFamily: bodyFontFamily,
  h1: { fontFamily: headingFontFamily, fontSize: '3rem', fontWeight: 700 },
  h2: { fontFamily: headingFontFamily, fontSize: '2.25rem', fontWeight: 500 },
  h3: { fontFamily: headingFontFamily, fontSize: '1.5rem', fontWeight: 500 },
  h4: { fontFamily: bodyFontFamily, fontSize: '1.375rem', fontWeight: 500 },
  h5: { fontFamily: bodyFontFamily, fontSize: '1.25rem', fontWeight: 500 },
  h6: { fontFamily: bodyFontFamily, fontSize: '1rem', fontWeight: 500 },
  body1: { fontFamily: bodyFontFamily, fontSize: '1rem' },
  body2: { fontFamily: bodyFontFamily, fontSize: '0.875rem' },
};
