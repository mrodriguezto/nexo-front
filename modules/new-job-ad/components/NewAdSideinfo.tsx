import { AddCircleOutline } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import UploaderButton from 'common/components/Button/UploaderButton';
import { PreviewJobAd } from '.';
import { newAdSideinfo as strings } from '../strings';

const NewAdSideinfo = () => {
  return (
    <Box position="relative" width="100%" height="100%" paddingTop={16}>
      <Stack height="100%" width="100%">
        <UploaderButton
          accept=".png, .jpg, .jpeg, .webp"
          width="100%"
          height="40vh"
          onChange={() => {}}
        >
          <>
            <AddCircleOutline fontSize="large" color="inherit" />
            <Typography
              variant="body2"
              color="primary"
              fontWeight={500}
              marginTop={1.5}
            >
              {strings.upload_lbl}
            </Typography>
          </>
        </UploaderButton>
        <Box flex={1} />
        <PreviewJobAd />
      </Stack>
    </Box>
  );
};

export default NewAdSideinfo;
