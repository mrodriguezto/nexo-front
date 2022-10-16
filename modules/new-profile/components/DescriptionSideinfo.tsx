import { Star } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { withStyles } from 'tss-react/mui';
import { descriptionSideinfo as strings } from '../strings';

const DescriptionSideinfo = () => {
  return (
    <Box position="relative" width="100%" overflow="auto">
      <Typography color="primary" gutterBottom>
        {strings.example_lbl}
      </Typography>
      <Box sx={{ padding: 3.2, backgroundColor: '#F3F3F3', borderRadius: 2 }}>
        <Stack flexDirection="row" alignItems="center" gap={1} marginBottom={2}>
          <Box
            width={64}
            height={64}
            sx={{ borderRadius: '999px', backgroundColor: 'lightgray' }}
          />

          <Stack>
            <NameText variant="h3" color="primary" fontWeight={700} gutterBottom>
              {strings.example_username}
            </NameText>{' '}
            <CalificationText>
              <Star fontSize="inherit" /> {strings.example_calification}
            </CalificationText>
          </Stack>
        </Stack>
        <Typography variant="body2" fontSize="0.75rem">
          {strings.example_description}
        </Typography>
      </Box>
    </Box>
  );
};

const CalificationText = withStyles(Typography, (theme) => ({
  root: {
    color: theme.palette.warning.main,
  },
}));

const NameText = withStyles(Typography, (theme) => ({
  h3: {
    fontSize: '1.25rem !important',
  },
}));

export default DescriptionSideinfo;
