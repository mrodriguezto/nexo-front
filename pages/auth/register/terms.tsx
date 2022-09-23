import type { NextPage } from 'next';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import AuthLayout from 'common/layouts/AuthLayout';
import { registerStrings } from 'modules/auth/strings';

const TermsPage: NextPage = () => {
  const { termsPage: strings } = registerStrings;

  return (
    <AuthLayout
      pageTitle={strings.title}
      pageDescription={strings.description}
      mainContent={<MainContent />}
    />
  );
};

const MainContent = () => {
  const {
    termsPage: { content: strings },
  } = registerStrings;

  return (
    <Box maxWidth={800} marginX="auto">
      <Button
        sx={{ maxWidth: 300, padding: '0.6em 1.2em' }}
        variant="text"
        startIcon={<ArrowBack />}
      >
        {strings.go_back_btn}
      </Button>

      <Typography color="primary" textAlign="center" variant="h1" gutterBottom>
        {strings.title}
      </Typography>
      <Typography textAlign="justify" variant="body2">
        {strings.info}
      </Typography>
    </Box>
  );
};

export default TermsPage;
