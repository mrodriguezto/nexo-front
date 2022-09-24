import { Box, Button, Stack, Typography } from '@mui/material';
import AuthLayout from 'common/layouts/AuthLayout';
import type { NextPage } from 'next';
import { newPasswordPage as pageStrings } from 'modules/auth/strings';
import { useState } from 'react';
import NewPasswordForm from 'modules/auth/components/NewPasswordForm';
import Image from 'next/image';

type Step = 'newPassword' | 'resetCompleted';

const stepsContent = {
  newPassword: <NewPasswordContent />,
  resetCompleted: <ResetCompletedContent />,
};

const stepsDecoration = {
  newPassword: <NewPasswordDecoration />,
  resetCompleted: <ResetCompletedDecoration />,
};

const NewPasswordPage: NextPage = () => {
  // TODO: change local state for global context
  const [currentStep, setCurrentStep] = useState<Step>('resetCompleted');

  return (
    <AuthLayout
      pageTitle={pageStrings.title}
      pageDescription={pageStrings.description}
      mainContent={stepsContent[currentStep]}
      decoration={stepsDecoration[currentStep]}
    />
  );
};

function NewPasswordContent() {
  const { newPasswordContent: strings } = pageStrings;

  return (
    <Box
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Typography variant="h1" color="primary">
        {strings.title}
      </Typography>
      <Box
        maxWidth={{
          xs: undefined,
          sm: 350,
        }}
        marginY={4}
      >
        <Typography variant="body1" marginBottom={3}>
          {strings.info}
        </Typography>

        <NewPasswordForm />
      </Box>
    </Box>
  );
}

// TODO: add decoration image
function NewPasswordDecoration() {
  return <></>;
}

function ResetCompletedContent() {
  const { resetCompletedContent: strings } = pageStrings;

  return (
    <Box
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
        maxHeight={250}
        marginY={4}
      >
        <Image
          src="/images/auth-thumbs.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Stack
        maxWidth={{
          xs: undefined,
          sm: 350,
        }}
        marginY={4}
        spacing={4}
      >
        <Typography>{strings.info}</Typography>

        <Stack
          justifyContent={{
            xs: 'center',
            sm: 'flex-start',
          }}
          spacing={2}
        >
          <Button>{strings.access_btn}</Button>
        </Stack>
      </Stack>
    </Box>
  );
}

function ResetCompletedDecoration() {
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
}

export default NewPasswordPage;
