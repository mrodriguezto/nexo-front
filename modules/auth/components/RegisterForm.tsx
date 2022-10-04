import NextLink from 'next/link';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { routes } from 'lib/strings';
import { useForm } from 'react-hook-form';

import { registerForm as strings } from '../strings';
import { registerResolver } from '../utils';
import { useToggle } from 'common/hooks';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const { isActive: isPasswordVisible, toggle: togglePasswordVisibility } =
    useToggle();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: registerResolver,
    mode: 'onTouched'
  }); // prettier-ignore

  const onLoginUser = async (data: FormData) => {
    console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit(onLoginUser)} noValidate>
      <Box marginY={4}>
        <Typography textAlign="center">{strings.btns.google_login}</Typography>
      </Box>
      <Grid
        container
        rowGap={3}
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
                  onClick={togglePasswordVisibility}
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

      <Box marginY={4} display="flex" justifyContent="center">
        <Typography
          maxWidth={380}
          variant="body2"
          color="GrayText"
          textAlign="center"
        >
          {strings.terms.info}{' '}
          <NextLink href={routes.terms} passHref>
            <Link>{strings.terms.link}</Link>
          </NextLink>
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button type="submit" size="large">
          Registrarme
        </Button>
      </Box>

      <Box marginY={4} display="flex" justifyContent="center">
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
