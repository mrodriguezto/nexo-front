import type { NextPage } from 'next';
import Image from 'next/image';
import { Box, Button, Stack, Typography } from '@mui/material';

import AuthLayout from 'common/layouts/AuthLayout';
import { registerStrings } from 'modules/auth/strings';

const RegisterFinishedPage: NextPage = () => {
  const { finishedRegistrationPage: strings } = registerStrings;

  return (
    <AuthLayout
      pageTitle={strings.title}
      pageDescription={strings.description}
      mainContent={<MainContent />}
      decoration={<Decoration />}
    />
  );
};

const MainContent = () => {
  const {
    finishedRegistrationPage: { content: strings },
  } = registerStrings;

  return (
    <Stack
      rowGap={4}
      maxWidth={500}
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Typography variant="h1" color="primary" textTransform="uppercase">
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
          src="/images/auth-thumbs.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Box>

      <Typography>{strings.info}</Typography>
      <Box
        display="flex"
        justifyContent={{
          xs: 'center',
          sm: 'flex-start',
        }}
      >
        <Button>{strings.begin_btn}</Button>
      </Box>
    </Stack>
  );
};

const Decoration = () => {
  return (
    <Box position="relative" width="100%" height="100%" maxHeight={500}>
      <Image
        src="/images/auth-thumbs.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default RegisterFinishedPage;
