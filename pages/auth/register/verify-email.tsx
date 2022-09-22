import { Box, Button, Stack, Typography } from '@mui/material';
import AuthLayout from 'layouts/auth';
import type { NextPage } from 'next';
import Image from 'next/image';

const VerifyEmailPage: NextPage = () => {
  return (
    <AuthLayout
      pageTitle="Verificación de cuenta"
      pageDescription="Verifica tu correo electrónico"
      mainContent={<MainContent />}
      decoration={<Decoration />}
    />
  );
};

const MainContent = () => {
  return (
    <Stack
      rowGap={4}
      maxWidth={500}
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Typography variant="h1" color="primary" textTransform="uppercase">
        Ya casi terminamos, verifica tu cuenta
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
          src="/images/auth-lock.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Box>

      <Typography>
        Hemos enviado un mensaje de confirmación a tu correo, revisa tu bandeja, y
        haz click en <strong>“CONFIRMAR”</strong>
        <br />
        <br />
        Si no recibiste el correo, da click en reenviar
      </Typography>
      <Box
        display="flex"
        justifyContent={{
          xs: 'center',
          sm: 'flex-start',
        }}
      >
        <Button variant="outlined">Reenviar</Button>
      </Box>
    </Stack>
  );
};

const Decoration = () => {
  return (
    <Box position="relative" width="100%" height="100%" maxHeight={400}>
      <Image
        style={{ rotate: '8.72deg' }}
        src="/images/auth-lock.svg"
        alt=""
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default VerifyEmailPage;
