import { useRef } from 'react';
import Image from 'next/image';
import { Add, AddAPhoto, Cancel, CancelOutlined } from '@mui/icons-material';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { withStyles } from 'tss-react/mui';
import { useSnackbar } from 'notistack';

import { imgTypes, IMG_MAX_SIZE } from 'common/constants';
import { isFileValid } from 'common/utils';
import { useAppDispatch, useAppSelector } from 'store';
import { updateMediaFiles } from '../state';

import { newAdSideinfo as strings } from '../strings';

const MAX_FILES = 3;

const MediaUploadField = () => {
  const files = useAppSelector((state) => state.newJobAd.ad.media);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    if (!file) return;

    if (files.length >= MAX_FILES) {
      enqueueSnackbar(strings.max_files_error, {
        variant: 'error',
        autoHideDuration: 3000,
      });
      return;
    }

    // VALIDATIONS

    const validation = isFileValid(file, imgTypes, IMG_MAX_SIZE);

    if (!validation.isValid) {
      validation.messages.forEach((message) => {
        enqueueSnackbar(message, { variant: 'error', autoHideDuration: 4000 });
      });

      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      dispatch(updateMediaFiles([...files, String(reader.result)]));
    };

    reader.readAsDataURL(file);

    e.target.value = ''; // little hack for updating the event
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...files];

    newFiles.splice(index, 1);

    dispatch(updateMediaFiles(newFiles));
  };

  const ImagesContainer = ({ children }: { children: React.ReactNode }) => {
    return (
      <Box position="relative" height="100%">
        <Button
          sx={{ position: 'absolute', zIndex: 10, top: 8, left: 8 }}
          color="light"
          size="small"
          onClick={() => fileInputRef.current?.click()}
        >
          <Add fontSize="small" />
          {strings.add_more_photos}
        </Button>
        <Box height="100%">{children}</Box>
      </Box>
    );
  };

  const AddImagesButton = () => {
    return (
      <Stack alignItems="center" justifyContent="center" height="100%">
        <IconButton
          sx={{
            backgroundColor: 'white',
          }}
          size="large"
          onClick={() => fileInputRef.current?.click()}
          color="secondary"
        >
          <AddAPhoto />
        </IconButton>
        <Typography
          mt={1}
          color="black"
          variant="body2"
          maxWidth={200}
          textAlign="center"
        >
          {strings.add_photos}
        </Typography>
      </Stack>
    );
  };

  return (
    <FieldContainer>
      {files.length <= 0 ? (
        <AddImagesButton />
      ) : (
        <ImagesContainer>
          {files.map((file, index) => (
            <Box key={file + index} height="100%" position="relative">
              <RemoveButton size="small" onClick={() => handleRemoveFile(index)}>
                <CancelOutlined color="primary" fontSize="inherit" />
              </RemoveButton>
              <Image src={file} alt="" layout="fill" objectFit="cover" />
            </Box>
          ))}
        </ImagesContainer>
      )}

      <input
        accept={imgTypes.join(',')}
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFilesChange}
        multiple={false}
      />
    </FieldContainer>
  );
};

const FieldContainer = withStyles(Box, (theme) => ({
  root: {
    width: '100%',
    minHeight: 280,
    borderWidth: 1,
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderRadius: 10,
    marginBottom: '2em',
    backgroundColor: '#f3f3f3',
    overflow: 'auto',
  },
}));

const RemoveButton = withStyles(IconButton, (theme) => ({
  root: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 99,
    padding: 0,
    fontSize: '26px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
}));

export default MediaUploadField;
