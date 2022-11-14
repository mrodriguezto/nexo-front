import { Box, Stack } from '@mui/material';
import { PreviewJobAd } from '.';
import MediaUploadField from './MediaUploadField';

const NewAdSideinfo = () => {
  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      paddingTop={{
        xs: 0,
        md: 16,
      }}
    >
      <Stack height="100%" width="100%">
        <MediaUploadField />
        <Box flex={1} />
        <PreviewJobAd />
      </Stack>
    </Box>
  );
};

export default NewAdSideinfo;
