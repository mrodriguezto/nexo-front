import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { resetPasswordPage as pageStrings } from '../strings';

const EmailSentContent = () => {
  const { emailSentContent: strings } = pageStrings;

  return (
    <Box
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Typography variant="h1" color="primary">
        {strings.title}
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
        maxHeight={250}
        marginY={4}
      >
        <Image
          src="/images/auth-cannon.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Stack
        maxWidth={{
          xs: undefined,
          sm: 350,
        }}
        marginY={4}
        spacing={4}
      >
        <Typography>{strings.info}</Typography>

        {/* TODO: change for real email */}
        <Box sx={{ backgroundColor: '#f3f3f3', p: 2, borderRadius: 1 }}>
          <Typography color="primary" fontWeight={600}>
            correo@correo.com
          </Typography>
        </Box>

        <Stack
          justifyContent={{
            xs: 'center',
            sm: 'flex-start',
          }}
          spacing={2}
        >
          <Typography>{strings.info2}</Typography>
          <Button>{strings.resend_btn}</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default EmailSentContent;
