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
      <Box sx={{ padding: 4, backgroundColor: '#F3F3F3', borderRadius: 2 }}>
        <Stack flexDirection="row" alignItems="center" gap={1} marginBottom={2}>
          <Box
            width={64}
            height={64}
            sx={{ borderRadius: '999px', backgroundColor: 'lightgray' }}
          />

          <Stack>
            <Typography
              variant="h3"
              color="primary"
              fontSize="1.25rem"
              fontWeight={700}
              gutterBottom
            >
              {strings.example_username}
            </Typography>{' '}
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

export default DescriptionSideinfo;
