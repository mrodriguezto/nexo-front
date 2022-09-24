import { NextPage } from 'next';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import BasicLayout from 'common/layouts/BasicLayout';
import LoginForm from 'modules/auth/components/LoginForm';
import { loginPage as pageStrings } from 'modules/auth/strings';

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

      {/* TODO: Implement Google OAuth */}

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
