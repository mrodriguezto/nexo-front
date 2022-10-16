import { Box, Container, Grid } from '@mui/material';
import Head from 'next/head';
import SimpleNavbar from 'common/components/Navbar/SimpleNavbar';

type Props = {
  mainContent: React.ReactNode;
  sideinfo?: React.ReactNode;
  pageTitle: string;
  pageDescription: string;
};

const BasicLayout = ({
  mainContent,
  sideinfo,
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
      <SimpleNavbar />
      <Container
        sx={{
          paddingTop: {
            xs: 5,
            md: 10,
          },
        }}
        disableGutters
        fixed
      >
        {sideinfo ? (
          <Grid
            container
            columnSpacing={{
              xs: 0,
              md: 4,
              lg: 0,
            }}
            paddingY={0}
            paddingX={{
              xs: 3,
              sm: 2,
              md: 1,
              lg: 2,
              xl: 0,
            }}
          >
            <Grid
              item
              xs={12}
              md={8}
              lg={9}
              component="main"
              minHeight="calc(100vh - 8em)"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              {mainContent}
            </Grid>
            <Grid
              paddingLeft={2}
              item
              xs={12}
              md={4}
              lg={3}
              display={{ xs: 'none', md: 'flex' }}
              minHeight="calc(100vh - 10em)"
              flexDirection="column"
              justifyContent="center"
            >
              {sideinfo}
            </Grid>
          </Grid>
        ) : (
          <Box
            paddingY={2}
            paddingX={{
              xs: 1,
              sm: 2,
              md: 4,
            }}
          >
            {mainContent}
          </Box>
        )}
      </Container>
    </>
  );
};

export default BasicLayout;
