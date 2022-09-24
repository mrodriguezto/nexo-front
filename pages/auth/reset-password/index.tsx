import { useState } from 'react';
import AuthLayout from 'common/layouts/AuthLayout';
import type { NextPage } from 'next';
import { Box, Button, Stack, Typography } from '@mui/material';
import SendEmailForm from 'modules/auth/components/SendEmailForm';
import { resetPasswordPage as pageStrings } from 'modules/auth/strings';
import Image from 'next/image';
import { ArrowBack } from '@mui/icons-material';

type Step = 'enterEmail' | 'emailSent';

const stepsContent = {
  enterEmail: <EnterEmailContent />,
  emailSent: <EmailSentContent />,
};

const stepsDecoration = {
  enterEmail: <EnterEmailDecoration />,
  emailSent: <EmailSentDecoration />,
};

const ResetPasswordPage: NextPage = () => {
  // TODO: change local state for global context
  const [currentStep, setCurrentStep] = useState<Step>('emailSent');

  return (
    <AuthLayout
      pageTitle={pageStrings.title}
      pageDescription={pageStrings.description}
      mainContent={stepsContent[currentStep]}
      decoration={stepsDecoration[currentStep]}
    />
  );
};

function EnterEmailContent() {
  const { enterEmailContent: strings } = pageStrings;

  return (
    <Box
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Box marginBottom={2} textAlign="left">
        <Button
          sx={{
            maxWidth: 300,
            padding: '0.6em 1.2em',
          }}
          variant="text"
          startIcon={<ArrowBack />}
        >
          {strings.go_back_btn}
        </Button>
      </Box>

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

        <SendEmailForm />
      </Box>
    </Box>
  );
}

function EnterEmailDecoration() {
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
}

function EmailSentContent() {
  const { emailSentContent: strings } = pageStrings;

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
          src="/images/auth-cannon.svg"
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

        {/* TODO: change for real email */}
        <Box sx={{ backgroundColor: '#f3f3f3', p: 2, borderRadius: 1 }}>
          <Typography color="primary" fontWeight={600}>
            correo@correo.com
          </Typography>
        </Box>

        <Stack
          justifyContent={{
            xs: 'center',
            sm: 'flex-start',
          }}
          spacing={2}
        >
          <Typography>{strings.info2}</Typography>
          <Button>{strings.resend_btn}</Button>
        </Stack>
      </Stack>
    </Box>
  );
}

function EmailSentDecoration() {
  return (
    <Box position="relative" width="100%" height="100%" maxHeight={500}>
      <Image
        src="/images/auth-cannon.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
}

export default ResetPasswordPage;
