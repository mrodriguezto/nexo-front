import { NextPage } from 'next';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import BasicLayout from 'common/layouts/BasicLayout';
import LoginForm from '@/auth/components/LoginForm';
import { loginPage as pageStrings } from '@/auth/strings';

const LoginPage: NextPage = () => {
  return (
    <BasicLayout
      pageTitle={pageStrings.title}
      pageDescription={pageStrings.description}
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
        textAlign={{
          xs: 'center',
          sm: 'left',
        }}
      >
        {pageStrings.content.title}
      </Typography>

      <LoginForm />
    </>
  );
};

const Sideinfo = () => {
  return (
    <Box position="relative" width="100%" height="100%">
      <Image src="/images/auth-1.svg" alt="" layout="fill" objectFit="contain" />
    </Box>
  );
};

export default LoginPage;
