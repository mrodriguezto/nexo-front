import NextLink from 'next/link';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { registerForm as strings } from '../strings';
import { routes } from 'lib/strings';

const RegisterForm = () => {
  return (
    <form>
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
          <TextField type="text" label={strings.inputs.firstname_lbl} />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField type="text" label={strings.inputs.lastname_lbl} />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField type="email" label={strings.inputs.email_lbl} />
        </Grid>
        {/* TODO: add eye icon to show */}
        <Grid xs={12} md={6} item>
          <TextField type="password" label={strings.inputs.pass_lbl} />
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
