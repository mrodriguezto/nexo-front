import { NextPage } from 'next';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import AuthLayout from 'common/layouts/AuthLayout';
import LoginForm from 'modules/auth/components/LoginForm';
import { loginStrings } from 'modules/auth/strings';

const LoginPage: NextPage = () => {
  return (
    <AuthLayout
      pageTitle={loginStrings.page_title}
      pageDescription={loginStrings.page_description}
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
        {loginStrings.content_title}
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
