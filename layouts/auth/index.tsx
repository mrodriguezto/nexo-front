import { Box, Container } from '@mui/material';
import Head from 'next/head';
import { AuthNavbar } from './components';

type Props = {
  children: React.ReactNode;
  pageTitle: string;
  pageDescription: string;
};

const AuthLayout = ({ children, pageTitle, pageDescription }: Props) => {
  const title = `${pageTitle} | Nexo`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <AuthNavbar />
      <Container sx={{ paddingTop: 8 }} maxWidth="lg" component="main">
        {children}
      </Container>
    </>
  );
};

export default AuthLayout;
