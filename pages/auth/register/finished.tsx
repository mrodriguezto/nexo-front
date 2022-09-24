import type { NextPage } from 'next';
import Image from 'next/image';
import { Box, Button, Stack, Typography } from '@mui/material';
import { withStyles } from 'tss-react/mui';

import AuthLayout from 'common/layouts/AuthLayout';
import { finishedRegistrationPage as pageStrings } from 'modules/auth/strings';

const RegisterFinishedPage: NextPage = () => {
  return (
    <AuthLayout
      pageTitle={pageStrings.title}
      pageDescription={pageStrings.description}
      mainContent={<MainContent />}
      sideinfo={<Sideinfo />}
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
      <Title variant="h1" color="primary">
        {strings.title}
      </Title>

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

const Sideinfo = () => {
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

const Title = withStyles(Typography, (theme) => ({
  root: {
    color: theme.palette.success.main,
  },
}));

export default RegisterFinishedPage;
