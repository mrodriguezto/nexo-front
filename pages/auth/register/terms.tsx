import type { NextPage } from 'next';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import AuthLayout from 'common/layouts/AuthLayout';
import { termsPage as pageStrings } from 'modules/auth/strings';

const TermsPage: NextPage = () => {
  return (
    <AuthLayout
      pageTitle={pageStrings.title}
      pageDescription={pageStrings.description}
      mainContent={<MainContent />}
    />
  );
};

const MainContent = () => {
  const { content: strings } = pageStrings;

  return (
    <Box maxWidth={720} marginX="auto">
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
