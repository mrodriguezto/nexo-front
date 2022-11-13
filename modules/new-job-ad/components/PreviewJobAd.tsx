import { Close } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'store';
import { previewJobAd as strings } from '../strings';
import JobAd from 'common/components/Content/JobAd';
import { updatePreview } from '../state';
import { useSnackbar } from 'notistack';

const PreviewJobAd = () => {
  const dispatch = useAppDispatch();
  const adContent = useAppSelector((state) => state.newJobAd.ad);
  const isOpened = useAppSelector((state) => state.newJobAd.isPreviewOpened);
  const isValid = useAppSelector((state) => state.newJobAd.isValid);
  const { enqueueSnackbar } = useSnackbar();

  const canPreview = Boolean(isValid && adContent.persona.length !== 0);

  const handleOpenPreview = () => {
    if (!canPreview) {
      enqueueSnackbar(strings.feedback.form_not_valid, {
        variant: 'error',
      });
      return;
    }

    dispatch(updatePreview(true));
  };

  return (
    <>
      <Button disabled={!canPreview} onClick={handleOpenPreview}>
        {strings.preview_btn}
      </Button>
      <Dialog
        open={isOpened}
        onClose={() => dispatch(updatePreview(false))}
        fullWidth
        maxWidth="md"
      >
        <Box padding={2}>
          <DialogTitle>
            <IconButton
              sx={{ position: 'absolute', top: 12, right: 12 }}
              onClick={() => dispatch(updatePreview(false))}
              size="medium"
            >
              <Close color="primary" fontSize="medium" />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <JobAd
              jobAd={{
                ...adContent,
                calification: 3.7,
                num_applicants: 7,
                creation_date: new Date(Date.now()),
                location: adContent.location?.description,
              }}
            />
          </DialogContent>
          <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button size="large">{strings.publish_btn}</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default PreviewJobAd;
