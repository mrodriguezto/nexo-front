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
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: '9999px',
      },
    },
  },
};
