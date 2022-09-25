import { Box, Typography } from '@mui/material';
import NewPasswordForm from './NewPasswordForm';
import { newPasswordPage } from 'modules/auth/strings';

const NewPasswordContent = () => {
  const { newPasswordContent: strings } = newPasswordPage;

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
        maxWidth={{
          xs: undefined,
          sm: 350,
        }}
        marginY={4}
      >
        <Typography variant="body1" marginBottom={3}>
          {strings.info}
        </Typography>

        <NewPasswordForm />
      </Box>
    </Box>
  );
};

export default NewPasswordContent;
