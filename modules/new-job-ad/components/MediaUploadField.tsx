import { useRef } from 'react';
import Image from 'next/image';
import { Cancel, CancelOutlined } from '@mui/icons-material';
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
  const reader = new FileReader();

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

  const MediaWrapper = ({
    children,
    index,
  }: {
    children: React.ReactNode;
    index: number;
  }) => {
    return (
      <Box position="relative">
        <RemoveButton size="small" onClick={() => handleRemoveFile(index)}>
          <CancelOutlined color="primary" fontSize="inherit" />
        </RemoveButton>
        {children}
      </Box>
    );
  };

  return (
    <FieldContainer>
      <Stack minHeight={200} flexDirection="row" gap={2} flexWrap="wrap" px={1} py={2}>
        {files.length <= 0 ? (
          <Typography textAlign="center" variant="body2">
            {strings.files_empty}
          </Typography>
        ) : (
          files.map((file, index) => (
            <MediaWrapper index={index} key={file + index}>
              <Image src={file} alt="" width={100} height={100} objectFit="cover" />
            </MediaWrapper>
          ))
        )}
      </Stack>
      <Button
        onClick={() => fileInputRef.current?.click()}
        size="medium"
        fullWidth
        variant="outlined"
      >
        {strings.upload_btn}
      </Button>

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
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: '1em',
    marginBottom: '2em',
  },
}));

const RemoveButton = withStyles(IconButton, (theme) => ({
  root: {
    position: 'absolute',
    top: -14,
    right: -14,
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
