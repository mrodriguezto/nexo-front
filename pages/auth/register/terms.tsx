import type { NextPage } from 'next';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import SimpleLayout from '@/layouts/SimpleLayout';
import { termsPage as pageStrings } from '@/auth/strings';
import { useRouter } from 'next/router';
import { routes } from 'lib/strings';

const TermsPage: NextPage = () => {
  return (
    <SimpleLayout
      pageTitle={pageStrings.title}
      pageDescription={pageStrings.description}
      mainContent={<MainContent />}
    />
  );
};

const MainContent = () => {
  const { content: strings } = pageStrings;
  const router = useRouter();

  return (
    <Box maxWidth={720} marginX="auto">
      <Button
        sx={{ maxWidth: 300, padding: '0.6em 1.2em' }}
        variant="text"
        startIcon={<ArrowBack />}
        onClick={() => router.push(routes.register)}
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
