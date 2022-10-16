import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { verifyEmailContent as strings } from '@/auth/strings';

const RESEND_DELAY = 30;

const ConfirmEmailContent = () => {
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

  const handleResend = async () => {
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
          src="/images/auth/lock.svg"
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
        <Button variant="outlined" onClick={handleResend} disabled={!canResendEmail}>
          {canResendEmail ? strings.resend_btn : `${countDown} s para reenviar`}
        </Button>
      </Box>
    </Stack>
  );
};

export default ConfirmEmailContent;
