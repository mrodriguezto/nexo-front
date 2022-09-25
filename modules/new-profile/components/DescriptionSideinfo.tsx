import { Star } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { withStyles } from 'tss-react/mui';
import { descriptionSideinfo as strings } from '../strings';

const DescriptionSideinfo = () => {
  return (
    <Stack height="100%">
      <Box
        position="relative"
        width="100%"
        height="100%"
        maxHeight={500}
        marginTop={4}
        overflow="auto"
      >
        <Typography color="primary" gutterBottom>
          {strings.example_lbl}
        </Typography>
        <Box sx={{ padding: 4, backgroundColor: '#E7E7E7', borderRadius: 2 }}>
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
          <Typography variant="body2">{strings.example_description}</Typography>
        </Box>
      </Box>
      <Box flex={1} />
      <Button>{strings.next_btn}</Button>
    </Stack>
  );
};

const CalificationText = withStyles(Typography, (theme) => ({
  root: {
    color: theme.palette.warning.main,
  },
}));

export default DescriptionSideinfo;
