import { Star } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { withStyles } from 'tss-react/mui';
import { uploadsSideinfo as strings } from '../strings';

const UploadsSideinfo = () => {
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
        <Box
          sx={{
            padding: 4,
            backgroundColor: '#F3F3F3',
            borderRadius: 2,
            marginTop: 16,
          }}
        >
          <Typography variant="h3" color="primary" gutterBottom>
            {strings.title}
          </Typography>
          <Typography variant="body2">{strings.desc}</Typography>
        </Box>
      </Box>
      <Box flex={1} />
      <Button>{strings.next_btn}</Button>
    </Stack>
  );
};

export default UploadsSideinfo;
