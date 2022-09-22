import NextLink from 'next/link';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';

const RegisterForm = () => {
  return (
    <form>
      <Box marginY={4}>
        <Typography textAlign="center">Entrar con Google</Typography>
      </Box>
      <Grid
        container
        spacing={{
          xs: 2,
          md: 3,
        }}
      >
        <Grid xs={12} md={6} item>
          <TextField type="text" label="Nombre" />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField type="text" label="Apellido" />
        </Grid>
        <Grid xs={12} md={6} item>
          <TextField type="email" label="Correo electrónico" />
        </Grid>

        {/* TODO: add eye icon to show */}
        <Grid xs={12} md={6} item>
          <TextField type="password" label="Contraseña" />
        </Grid>
      </Grid>

      <Box marginY={4} display="flex" justifyContent="center">
        <Typography
          maxWidth={380}
          variant="body2"
          color="GrayText"
          textAlign="center"
        >
          Al dar clic en REGISTRARME estás aceptando nuestros{' '}
          <NextLink href="/" passHref>
            <Link>Términos y condiciones</Link>
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
          ¿Ya tienes una cuenta?{' '}
          <NextLink href="/auth/login" passHref>
            <Link>Iniciar Sesión</Link>
          </NextLink>
        </Typography>
      </Box>
    </form>
  );
};

export default RegisterForm;
