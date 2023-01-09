import { Box, Button, Stack, Typography } from '@mui/material';
import { routes } from 'lib/strings';
import Image from 'next/image';
import NextLink from 'next/link';
import { withStyles } from 'tss-react/mui';
import { finishedRegistrationPage as strings } from '../strings';

const RegisterCompletedContent = () => {
  return (
    <Stack
      rowGap={4}
      maxWidth={500}
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Title variant="h1" color="primary">
        {strings.title}
      </Title>

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
        <Image src="/images/auth/thumbs.svg" alt="" layout="fill" objectFit="contain" />
      </Box>

      <Typography>{strings.content.info}</Typography>
      <Box
        display="flex"
        justifyContent={{
          xs: 'center',
          sm: 'flex-start',
        }}
      >
        <NextLink href={routes.newProfile} passHref>
          <a>
            <Button>{strings.content.begin_btn}</Button>
          </a>
        </NextLink>
      </Box>
    </Stack>
  );
};

const Title = withStyles(Typography, (theme) => ({
  root: {
    color: theme.palette.success.main,
  },
}));

export default RegisterCompletedContent;
