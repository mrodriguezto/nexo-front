import { Box, Grid, Typography } from '@mui/material';
import AuthLayout from 'layouts/auth';
import RegisterForm from 'modules/auth/components/RegisterForm';
import type { NextPage } from 'next';
import Image from 'next/image';

const RegisterPage: NextPage = () => {
  return (
    <AuthLayout
      pageTitle="Registro"
      pageDescription="Empieza la experiencia nexo ahora"
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
        Empieza la experiencia nexo ahora
      </Typography>
      <RegisterForm />
      {/* TODO: Implement Google OAuth */}
    </>
  );
};

const Decoration = () => {
  return (
    <Box position="relative" width="100%" height="100%">
      <Image src="/images/auth-1.png" alt=" " layout="fill" objectFit="contain" />
    </Box>
  );
};

export default RegisterPage;
