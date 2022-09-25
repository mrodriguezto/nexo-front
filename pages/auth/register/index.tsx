import type { NextPage } from 'next';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

import BasicLayout from 'common/layouts/BasicLayout';
import RegisterForm from 'modules/auth/components/RegisterForm';
import { registerPage } from 'modules/auth/strings';

const RegisterPage: NextPage = () => {
  return (
    <BasicLayout
      pageTitle={registerPage.title}
      pageDescription={registerPage.description}
      mainContent={<MainContent />}
      sideinfo={<Sideinfo />}
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
        {registerPage.content.title}
      </Typography>
      <RegisterForm />
      {/* TODO: Implement Google OAuth */}
    </>
  );
};

const Sideinfo = () => {
  return (
    <Box position="relative" width="100%" height="100%">
      <Image src="/images/auth-1.svg" alt=" " layout="fill" objectFit="contain" />
    </Box>
  );
};

export default RegisterPage;
