import { Close } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import JobAd from 'common/components/Content/JobAd';
import { useAppDispatch, useAppSelector } from 'store';
import { previewJobAd as strings } from '../strings';
import { setDefaultDate, togglePrevDialog } from '../state';

const THIRTY_DAYS_IN_MS = 2592000000;

const PreviewJobAd = () => {
  const dispatch = useAppDispatch();
  const adContent = useAppSelector((state) => state.newJobAd.ad);
  const isOpened = useAppSelector((state) => state.newJobAd.isPreviewOpened);
  const isValid = useAppSelector((state) => state.newJobAd.isValid);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const canPreview = Boolean(isValid && adContent.persona.length !== 0);

  const handleOpenPreview = () => {
    if (!canPreview) return;

    if (adContent.expiration_date.length <= 0)
      dispatch(setDefaultDate(new Date(Date.now() + THIRTY_DAYS_IN_MS).toISOString()));

    dispatch(togglePrevDialog(true));
  };

  const handlePublish = () => {
    // TODO: Verify required fields are filled
  };

  return (
    <>
      <Button disabled={!canPreview} onClick={handleOpenPreview}>
        {strings.preview_btn}
      </Button>
      <Dialog
        open={isOpened}
        onClose={() => dispatch(togglePrevDialog(false))}
        fullWidth
        maxWidth="md"
        fullScreen={fullScreen}
        scroll="body"
      >
        <Box padding={2} pt={4}>
          <DialogTitle>
            <IconButton
              sx={{ position: 'absolute', top: 12, right: 12 }}
              onClick={() => dispatch(togglePrevDialog(false))}
              size="medium"
            >
              <Close color="primary" fontSize="medium" />
            </IconButton>
          </DialogTitle>
          <Box
            px={{
              xs: 1,
              md: 3,
            }}
          >
            <JobAd
              jobAd={{
                ...adContent,
                calification: 3.7,
                num_applicants: 7,
                creation_date: new Date(Date.now()),
                location: adContent.location?.description,
              }}
            />
          </Box>
          <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={handlePublish} size="large">
              {strings.publish_btn}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default PreviewJobAd;
