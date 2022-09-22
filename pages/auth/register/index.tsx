import { Box, Grid, Typography } from '@mui/material';
import AuthLayout from 'layouts/auth';
import RegisterForm from 'modules/auth/components/RegisterForm';
import type { NextPage } from 'next';
import Image from 'next/image';

const RegisterPage: NextPage = () => {
  return (
    <AuthLayout
      pageTitle="Registro"
      pageDescription="Empieza la experiencia nexo ahora"
    >
      <Grid
        container
        paddingY={4}
        paddingX={{
          xs: 1,
          sm: 2,
          md: 4,
        }}
      >
        <Grid item xs={12} sm={6} md={8}>
          <Typography
            variant="h1"
            color="primary"
            textTransform="uppercase"
            textAlign={{
              xs: 'center',
              sm: 'left',
            }}
          >
            Empieza la experiencia nexo ahora
          </Typography>
          <RegisterForm />

          {/* TODO: Implement Google OAuth */}
        </Grid>
        <Grid
          paddingLeft={2}
          item
          xs={12}
          sm={6}
          md={4}
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

export default RegisterPage;
