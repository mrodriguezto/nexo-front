import { Box, Button, Stack, Typography } from '@mui/material';
import BasicLayout from 'common/layouts/BasicLayout';
import type { NextPage } from 'next';
import Image from 'next/image';
import { verifyEmailPage as pageStrings } from 'modules/auth/strings';

const VerifyEmailPage: NextPage = () => {
  return (
    <BasicLayout
      pageTitle={pageStrings.title}
      pageDescription={pageStrings.description}
      mainContent={<MainContent />}
      sideinfo={<Decoration />}
    />
  );
};

const MainContent = () => {
  const { content: strings } = pageStrings;

  return (
    <Stack
      rowGap={4}
      maxWidth={500}
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Typography variant="h1" color="primary">
        {strings.title}
      </Typography>

      <Box
        display={{
          xs: 'block',
          sm: 'none',
        }}
        position="relative"
        width="100%"
        height="100%"
        minHeight={200}
      >
        <Image
          style={{ rotate: '8.72deg' }}
          src="/images/auth-lock.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Box>

      <Typography>
        {strings.info1} <strong>{strings.email_verification_btn}</strong>
        <br />
        <br />
        {strings.info2}
      </Typography>
      <Box
        display="flex"
        justifyContent={{
          xs: 'center',
          sm: 'flex-start',
        }}
      >
        <Button variant="outlined">{strings.resend_btn}</Button>
      </Box>
    </Stack>
  );
};

const Decoration = () => {
  return (
    <Box position="relative" width="100%" height="100%" maxHeight={400}>
      <Image
        style={{ rotate: '8.72deg' }}
        src="/images/auth-lock.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default VerifyEmailPage;
