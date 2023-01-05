import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

import LoadingButton from 'common/components/Button/LoadingButton';
import { verifyEmailContent as strings } from '@/auth/strings';
import { store, useAppDispatch, useAppSelector } from 'store';
import { sendRegisterCode } from '../state';
import { useRouter } from 'next/router';
import { routes } from 'lib/strings';

const RESEND_DELAY = 30;

const ConfirmEmailContent = () => {
  const [countDown, setCountDown] = useState(RESEND_DELAY);
  const [canResendEmail, setCanResendEmail] = useState(true);
  const [inCode, setInCode] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const currentCode = useAppSelector((state) => state.register.code);
  const router = useRouter();

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
      await dispatch(sendRegisterCode()).unwrap();

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

  const handleVerifyCode = () => {
    if (currentCode !== inCode) {
      enqueueSnackbar(strings.feedback.invalid_code, {
        variant: 'error',
      });
      return;
    }

    // TODO: send request to verify the code against the backend

    localStorage.setItem('register-data', JSON.stringify(store.getState().register.data));

    router.replace(routes.newProfile);
  };

  return (
    <Stack
      rowGap={3}
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
        {strings.info1}
        <br />
        <br />
        {strings.info2}
      </Typography>
      <TextField
        label={strings.code_input.lbl}
        onChange={(e) => {
          setInCode(e.target.value);
        }}
      />
      <Stack
        alignItems={{
          xs: 'center',
          sm: 'flex-start',
        }}
        rowGap={3}
      >
        <LoadingButton onClick={handleVerifyCode}>{strings.verify_btn}</LoadingButton>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={handleResend}
          disabled={!canResendEmail}
        >
          {canResendEmail ? strings.resend_btn : `${countDown} s para reenviar`}
        </Button>
      </Stack>
    </Stack>
  );
};

export default ConfirmEmailContent;
