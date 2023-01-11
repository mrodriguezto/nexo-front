import NextLink from 'next/link';
import {
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

import { routes } from 'lib/strings';
import { useToggle } from 'common/hooks';
import { loginForm as strings } from '../strings';
import { loginResolver, LOGIN_USER } from '../utils';
import { useLazyQuery } from '@apollo/client';
import LoadingButton from 'common/components/Button/LoadingButton';
import { useRouter } from 'next/router';

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { isActive: isPasswordVisible, toggle: togglePasswordVisibility } = useToggle();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: loginResolver,
    mode: 'onTouched'
  }); // prettier-ignore

  const [loginUser, { loading, error }] = useLazyQuery(LOGIN_USER);

  const onRegisterUser = async (data: FormData) => {
    await loginUser({
      variables: { email: data.email, password: data.password },
      onCompleted: () => {
        console.log('onCompleted');
        router.replace(routes.profile);
      },
      onError: (error) => {
        console.log('onError', error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onRegisterUser)} noValidate>
      <Stack
        spacing={4}
        maxWidth={{
          xs: '100%',
          sm: 310,
        }}
      >
        <Box marginY={4}>
          <Typography textAlign="center">{strings.btns.google_login}</Typography>
        </Box>
        <TextField
          label={strings.inputs.email_lbl}
          {...register('email')}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />

        <TextField
          label={strings.inputs.pass_lbl}
          type={isPasswordVisible ? 'text' : 'password'}
          {...register('password')}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => togglePasswordVisibility()}
                size="small"
                sx={{ position: 'relative', left: 8 }}
              >
                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />

        <NextLink href={routes.restore_password} passHref>
          <Link variant="body2">{strings.links.forgot_pass_link}</Link>
        </NextLink>
        <LoadingButton type="submit" size="large" loading={loading}>
          {strings.btns.login}
        </LoadingButton>
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={1}
          sx={{ textAlign: 'center' }}
        >
          <Typography variant="body2">{strings.no_account.info}</Typography>
          <NextLink href={routes.register} passHref>
            <Link variant="body2">{strings.no_account.link}</Link>
          </NextLink>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
