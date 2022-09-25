import { Components } from '@mui/material';

export const components: Components = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'white',
        height: '60px',
        boxShadow: '0px 4px 4px rgba(140, 124, 202, 0.1)',
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      margin: 'dense',
      fullWidth: true,
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      disableElevation: true,
      size: 'large',
    },
    styleOverrides: {
      root: {
        fontWeight: 600,
        textTransform: 'none',
        borderRadius: '9999px',
      },
      sizeLarge: {
        padding: '0.6em 4em',
      },
    },
  },
};