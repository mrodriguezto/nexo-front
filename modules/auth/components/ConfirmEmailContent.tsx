import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useLazyQuery, useMutation } from '@apollo/client';

import LoadingButton from 'common/components/Button/LoadingButton';
import { verifyEmailContent as strings } from '@/auth/strings';
import { store, useAppDispatch, useAppSelector } from 'store';
import { REGISTER_USER, SEND_TOKEN } from '../utils';
import { updateStep } from '../state';

const RESEND_DELAY = 30;

const ConfirmEmailContent = () => {
  const [countDown, setCountDown] = useState(RESEND_DELAY);
  const [canResendEmail, setCanResendEmail] = useState(true);
  const [inCode, setInCode] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.register.data);

  const [addUser, { loading: isVerifying }] = useMutation(REGISTER_USER);
  const [sendToken, { loading: isSending }] = useLazyQuery(SEND_TOKEN);

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
      await sendToken({
        variables: { email: user!.email },
        onCompleted: () => {
          enqueueSnackbar(strings.feedback.success, {
            variant: 'success',
          });
          setCanResendEmail(false);
        },
        onError: (error) => {
          enqueueSnackbar(strings.feedback.error, {
            variant: 'error',
          });
          setCanResendEmail(true);
        },
      });
    } catch (error) {
      enqueueSnackbar(strings.feedback.error, {
        variant: 'error',
      });
    }
  };

  // Sends the user with the code
  const handleVerifyCode = async () => {
    const user = store.getState().register.data!;

    await addUser({
      variables: {
        email: user.email,
        firstName: user.firstname,
        lastName: user.lastname,
        password: user.password,
        passwordCheck: user.password,
        token: inCode,
      },
      onCompleted: (data) => {
        dispatch(updateStep(2));
      },
      onError: (error) => {
        dispatch(updateStep(2)); // TODO: Delete this after
        enqueueSnackbar(strings.feedback.error, {
          variant: 'error',
        });
      },
    });
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
        <LoadingButton onClick={handleVerifyCode} loading={isVerifying}>
          {strings.verify_btn}
        </LoadingButton>
        <LoadingButton
          size="small"
          variant="outlined"
          color="secondary"
          onClick={handleResend}
          disabled={!canResendEmail}
          loading={isSending}
        >
          {canResendEmail ? strings.resend_btn : `${countDown} s para reenviar`}
        </LoadingButton>
      </Stack>
    </Stack>
  );
};

export default ConfirmEmailContent;
