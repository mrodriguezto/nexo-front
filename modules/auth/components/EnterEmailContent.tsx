import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { resetPasswordPage as pageStrings } from '../strings';
import SendEmailForm from './SendEmailForm';

const EnterEmailContent = () => {
  const { enterEmailContent: strings } = pageStrings;

  return (
    <Box
      textAlign={{
        xs: 'center',
        sm: 'left',
      }}
    >
      <Box marginBottom={2} textAlign="left">
        <Button
          sx={{
            maxWidth: 300,
            padding: '0.6em 1.2em',
          }}
          variant="text"
          startIcon={<ArrowBack />}
        >
          {strings.go_back_btn}
        </Button>
      </Box>

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

        <SendEmailForm />
      </Box>
    </Box>
  );
};

export default EnterEmailContent;
