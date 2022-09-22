import { NextPage } from 'next';
import Image from 'next/image';

import { Box, Grid, Typography } from '@mui/material';
import AuthLayout from 'layouts/auth';
import LoginForm from 'modules/auth/components/LoginForm';

const LoginPage: NextPage = () => {
  return (
    <AuthLayout
      pageTitle="Iniciar sesión"
      pageDescription="Iniciar sesión"
      mainContent={<MainContent />}
      decoration={<Decoration />}
    />
  );
};

const MainContent = () => {
  return (
    <>
      <Typography
        variant="h1"
        color="primary"
        textTransform="uppercase"
        textAlign={{
          xs: 'center',
          sm: 'left',
        }}
      >
        Iniciar Sesión
      </Typography>

      {/* TODO: Implement Google OAuth */}

      <LoginForm />
    </>
  );
};

const Decoration = () => {
  return (
    <Box position="relative" width="100%" height="100%">
      <Image src="/images/auth-1.svg" alt="" layout="fill" objectFit="contain" />
    </Box>
  );
};

export default LoginPage;
