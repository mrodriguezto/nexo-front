import NextLink from 'next/link';
import { Box, Grid, IconButton, Link, TextField, Typography } from '@mui/material';
import { routes } from 'lib/strings';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useToggle } from 'common/hooks';
import LoadingButton from 'common/components/Button/LoadingButton';
import { registerForm as strings } from '../strings';
import { registerResolver } from '../utils';
import { useAppDispatch, useAppSelector } from 'store';
import { sendRegisterCode } from '../state';
import { IRegisterData } from '../types';

const RegisterForm = () => {
  const { isActive: isPasswordVisible, toggle: toggleVisibility } = useToggle();

  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterData>({
    resolver: registerResolver,
    mode: 'onTouched'
  }); // prettier-ignore

  const isSending = useAppSelector((state) => state.register.isSending);
  const dispatch = useAppDispatch();

  const onLoginUser = async (data: IRegisterData) => {
    try {
      const obj = await dispatch(sendRegisterCode(data)).unwrap();
      console.log({ obj });
    } catch (error) {
      console.log('Alto error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onLoginUser)} noValidate>
      <Box marginY={4}>
        <Typography textAlign="center">{strings.btns.google_login}</Typography>
      </Box>
      <Grid
        container
        rowGap={2}
        columnSpacing={{
          xs: 2,
          md: 4,
          lg: 7,
        }}
      >
        <Grid xs={12} md={6} item>
          <TextField
            type="text"
            label={strings.inputs.firstname_lbl}
            {...register('firstname')}
            error={Boolean(errors.firstname)}
            helperText={errors.firstname?.message}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField
            type="text"
            label={strings.inputs.lastname_lbl}
            {...register('lastname')}
            error={Boolean(errors.lastname)}
            helperText={errors.lastname?.message}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField
            type="email"
            label={strings.inputs.email_lbl}
            {...register('email')}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField
            type={isPasswordVisible ? 'text' : 'password'}
            label={strings.inputs.pass_lbl}
            {...register('password')}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => toggleVisibility()}
                  size="small"
                  sx={{ position: 'relative', left: 8 }}
                >
                  {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Box marginY={3.2} display="flex" justifyContent="center">
        <Typography maxWidth={380} variant="body2" color="GrayText" textAlign="center">
          {strings.terms.info}{' '}
          <NextLink href={routes.terms} passHref>
            <Link>{strings.terms.link}</Link>
          </NextLink>
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <LoadingButton type="submit" size="large" loading={isSending}>
          Registrarme
        </LoadingButton>
      </Box>

      <Box marginY={3} display="flex" justifyContent="center">
        <Typography variant="body2" color="GrayText" textAlign="center">
          {strings.has_account.info}{' '}
          <NextLink href={routes.login} passHref>
            <Link>{strings.has_account.link}</Link>
          </NextLink>
        </Typography>
      </Box>
    </form>
  );
};

export default RegisterForm;
