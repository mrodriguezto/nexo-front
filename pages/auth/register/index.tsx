import type { NextPage } from 'next';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import AuthLayout from 'common/layouts/AuthLayout';
import RegisterForm from 'modules/auth/components/RegisterForm';
import { registerStrings as strings } from 'modules/auth/strings';

const RegisterPage: NextPage = () => {
  return (
    <AuthLayout
      pageTitle={strings.registerPage.title}
      pageDescription={strings.registerPage.description}
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
        {strings.registerPage.content_title}
      </Typography>
      <RegisterForm />
      {/* TODO: Implement Google OAuth */}
    </>
  );
};

const Decoration = () => {
  return (
    <Box position="relative" width="100%" height="100%">
      <Image src="/images/auth-1.svg" alt=" " layout="fill" objectFit="contain" />
    </Box>
  );
};

export default RegisterPage;
