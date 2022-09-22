import { Box, Container, Grid } from '@mui/material';
import Head from 'next/head';
import { AuthNavbar } from './components';

type Props = {
  mainContent: React.ReactNode;
  decoration: React.ReactNode;
  pageTitle: string;
  pageDescription: string;
};

const AuthLayout = ({
  mainContent,
  decoration,
  pageTitle,
  pageDescription,
}: Props) => {
  const title = `${pageTitle} | Nexo`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <AuthNavbar />
      <Container sx={{ paddingTop: 8 }} maxWidth="lg">
        <Grid
          container
          paddingY={4}
          paddingX={{
            xs: 1,
            sm: 2,
            md: 4,
          }}
        >
          <Grid item xs={12} sm={6} md={8} component="main">
            {mainContent}
          </Grid>
          <Grid
            paddingLeft={2}
            item
            xs={12}
            sm={6}
            md={4}
            display={{ xs: 'none', sm: 'block' }}
          >
            {decoration}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AuthLayout;
