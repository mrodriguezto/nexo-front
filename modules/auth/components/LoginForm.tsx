import NextLink from 'next/link';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';

const LoginForm = () => {
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
          <Typography textAlign="center">Entrar con Google</Typography>
        </Box>
        <TextField label="Correo electrónico" />

        {/* TODO: eye icon */}
        <TextField label="Contraseña" />
        {/* TODO: change path */}
        <NextLink href="/" passHref>
          <Link>Olvidé mi clave</Link>
        </NextLink>
        <Button type="submit" size="large">
          Ingresar
        </Button>
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={1}
          sx={{ textAlign: 'center' }}
        >
          <Typography>¿No tienes una cuenta?</Typography>
          <NextLink href="/auth/register" passHref>
            <Link>Regístrate</Link>
          </NextLink>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginForm;
