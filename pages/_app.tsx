import type { AppProps } from 'next/app';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { Grow } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { Provider as ReduxProvider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ApolloProvider } from '@apollo/client';
import 'dayjs/locale/es';

import { store } from 'store';
import defaultTheme from 'theme';
import { nexoClient } from 'lib/api/client';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <ApolloProvider client={nexoClient}>
        <ReduxProvider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              autoHideDuration={2000}
              TransitionComponent={Grow}
            >
              <CssBaseline />
              <Component {...pageProps} />
            </SnackbarProvider>
          </ThemeProvider>
        </ReduxProvider>
      </ApolloProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
