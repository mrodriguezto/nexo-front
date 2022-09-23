import NextLink from 'next/link';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { loginStrings } from '../strings';
import { routes } from 'lib/strings';

const LoginForm = () => {
  const { loginForm: strings } = loginStrings;
  // TODO: add logic
  return (
    <form>
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
        <TextField label={strings.inputs.email_lbl} />
        <TextField label={strings.inputs.pass_lbl} /> {/* TODO: eye icon */}
        <NextLink href={routes.restore_password} passHref>
          <Link>{strings.links.forgot_pass_link}</Link>
        </NextLink>
        <Button type="submit" size="large">
          {strings.btns.login}
        </Button>
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={1}
          sx={{ textAlign: 'center' }}
        >
          <Typography>{strings.no_account.info}</Typography>
          <NextLink href={routes.register} passHref>
            <Link>{strings.no_account.link}</Link>
          </NextLink>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
