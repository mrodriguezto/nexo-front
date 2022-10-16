import Image from 'next/image';
import { Box, Button, Stack, Typography } from '@mui/material';
import { newPasswordPage } from '@/auth/strings';
import NextLink from 'next/link';
import { routes } from 'lib/strings';

const ResetCompletedContent = () => {
  const { resetCompletedContent: strings } = newPasswordPage;

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
          src="/images/auth-thumbs.svg"
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

        <Stack
          justifyContent={{
            xs: 'center',
            sm: 'flex-start',
          }}
          spacing={2}
        >
          <NextLink href={routes.login} passHref>
            <a>
              <Button>{strings.access_btn}</Button>
            </a>
          </NextLink>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ResetCompletedContent;
