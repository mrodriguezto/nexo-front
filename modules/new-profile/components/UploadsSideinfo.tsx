import { Box, Typography } from '@mui/material';
import { uploadsSideinfo as strings } from '../strings';

const UploadsSideinfo = () => {
  return (
    <Box position="relative" width="100%" overflow="auto">
      <Box
        sx={{
          padding: 4,
          backgroundColor: '#F3F3F3',
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" color="primary" gutterBottom>
          {strings.title}
        </Typography>
        <Typography variant="body2">{strings.desc}</Typography>
      </Box>
    </Box>
  );
};

export default UploadsSideinfo;
