import { NextPage } from 'next';
import NextLink from 'next/link';
import Image from 'next/image';

import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import AuthLayout from 'layouts/auth';

const LoginPage: NextPage = () => {
  return (
    <AuthLayout pageTitle="Iniciar sesión" pageDescription="Iniciar sesión">
      <Grid
        container
        paddingY={4}
        paddingX={{
          xs: 1,
          sm: 2,
          md: 5,
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h1"
            color="primary"
            textTransform="uppercase"
            textAlign={{
              xs: 'center',
              sm: 'left',
            }}
          >
            Iniciar Sesión
          </Typography>

          {/* TODO: Implement Google OAuth */}

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
                sx={{ textAlign: 'center' }}
              >
                <Typography>¿No tienes una cuenta?</Typography>
                <NextLink href="/auth/register" passHref>
                  <Link>Regístrate</Link>
                </NextLink>
              </Stack>
            </Stack>
          </form>
        </Grid>
        <Grid
          paddingLeft={8}
          item
          xs={12}
          sm={6}
          display={{ xs: 'none', sm: 'block' }}
        >
          <Box position="relative" width="100%" height="100%">
            <Image
              src="/images/auth-1.png"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};

export default LoginPage;
