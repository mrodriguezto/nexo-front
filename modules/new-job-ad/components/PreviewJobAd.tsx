import { useState } from 'react';
import { Close } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useAppSelector } from 'store';
import { previewJobAd as strings } from '../strings';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const PreviewJobAd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const adContent = useAppSelector((state) => state.newJobAd.ad);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>{strings.preview_btn}</Button>
      <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="md">
        <Box paddingY={3}>
          <DialogTitle>
            <Typography
              textAlign="center"
              color="primary"
              variant="h3"
              component="h3"
              gutterBottom
            >
              {strings.title}
            </Typography>
            <Typography variant="h6" fontWeight={600} textAlign="center">
              {strings.subtitle}
            </Typography>
            <IconButton
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
              }}
              onClick={handleClose}
              size="medium"
            >
              <Close color="primary" fontSize="medium" />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {/* Ad Header */}
            <Stack flexDirection="row" marginBottom={3}>
              <Box flex={1}>
                <Typography variant="h2" component="h4" color="primary">
                  {adContent.title}
                </Typography>
                <Stack flexDirection="row" columnGap={1} alignItems="center">
                  <Typography variant="h6">{adContent.persona}</Typography>
                  <Typography variant="body2">Hace 1 semana</Typography>
                  <Typography variant="body2">• 7 solicitudes</Typography>
                  <Typography variant="body2">
                    • {adContent.location?.description}
                  </Typography>
                </Stack>
              </Box>
              <Stack>
                <Button disabled>{strings.apply_btn}</Button>
                <Typography marginTop={0.4} textAlign="center" variant="caption">{`${
                  strings.expires_in
                } ${dayjs(adContent.expiration_date)
                  .locale('es')
                  .fromNow(true)}`}</Typography>
              </Stack>
            </Stack>

            {/* Ad Description */}
            <Box marginBottom={2}>
              <Typography>{adContent.description}</Typography>
            </Box>

            {/* TODO: Ad images */}

            {/* Ad tags */}

            <Stack columnGap={1} flexDirection="row" alignItems="center">
              <Typography color="primary" fontWeight={600}>
                {strings.tags_lbl}
              </Typography>
              {adContent.tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </Stack>
          </DialogContent>
          <DialogActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button size="large">{strings.publish_btn}</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default PreviewJobAd;
