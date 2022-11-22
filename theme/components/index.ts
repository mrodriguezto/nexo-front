import { Components } from '@mui/material';

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    light: true;
  }
}

export const components: Components = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'white',
        boxShadow: '0px 4px 4px rgba(140, 124, 202, 0.1)',
        justifyContent: 'center',
      },
    },
    defaultProps: {
      elevation: 0,
      color: 'transparent',
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
      sizeSmall: {
        padding: '0.3em 1.8em',
      },
      sizeMedium: {
        padding: '0.5em 2em',
      },
      sizeLarge: {
        padding: '0.6em 4em',
      },
      outlined: {
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
        },
      },
    },
  },
  MuiIcon: {
    defaultProps: {
      color: 'inherit',
    },
  },
};
