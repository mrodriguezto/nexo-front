import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { resetPasswordPage as pageStrings } from '../strings';

const RESEND_DELAY = 30;

const EmailSentContent = () => {
  const { emailSentContent: strings } = pageStrings;
  const [countDown, setCountDown] = useState(RESEND_DELAY);
  const [canResendEmail, setCanResendEmail] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (canResendEmail) return;

    const interval = setInterval(() => {
      if (countDown > 1) {
        setCountDown((value) => value - 1);
        return;
      }

      setCanResendEmail(true);
      setCountDown(RESEND_DELAY);
    }, 1000);

    return () => clearInterval(interval);
  }, [canResendEmail, countDown]);

  const handleResend = () => {
    if (!canResendEmail) return;

    try {
      // TODO: Request for resending the confirmation email
      // await sendEmail()

      enqueueSnackbar(strings.feedback.success, {
        variant: 'success',
      });

      setCanResendEmail(false);
    } catch (error) {
      enqueueSnackbar(strings.feedback.error, {
        variant: 'error',
      });
    }
  };

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
          src="/images/auth/cannon.svg"
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
          <Button onClick={handleResend} disabled={!canResendEmail}>
            {canResendEmail ? strings.resend_btn : `${countDown} s para reenviar`}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default EmailSentContent;
