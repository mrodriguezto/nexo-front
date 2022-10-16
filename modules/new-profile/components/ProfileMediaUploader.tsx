import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AddCircleOutline, Cancel } from '@mui/icons-material';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import UploaderButton from 'common/components/Button/UploaderButton';
import { uploadsContent as strings } from '../strings';
import { isFileValid } from 'common/utils';
import { useSnackbar } from 'notistack';
import { withStyles } from 'tss-react/mui';
import { useAppSelector, useAppDispatch } from 'store';
import { updateCanContinue, updateMedia } from '../state';

const imgTypes = ['.png', '.jpeg', '.jpg', '.webp'];

const videoTypes = ['.mp4', '.webm', '.mkv', '.mov', '.avi'];

const IMG_MAX_SIZE = 5000000; // 5MB
const VIDEO_MAX_SIZE = 20000000; // 20MB

const ProfileMediaUploader = () => {
  const mediaFiles = useAppSelector((state) => state.newProfile.profile.media);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mediaFiles.length >= 1) dispatch(updateCanContinue(true));
    else dispatch(updateCanContinue(false));
  }, [mediaFiles, dispatch]);

  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];

    if (!file) return;

    // VALIDATIONS

    let validation: { isValid: boolean; messages: string[] };
    let fileType: 'video' | 'image';

    if (file.type.startsWith('image')) {
      fileType = 'image';
      validation = isFileValid(file, imgTypes, IMG_MAX_SIZE);
    } else if (file.type.startsWith('video')) {
      fileType = 'video';

      validation = isFileValid(file, videoTypes, VIDEO_MAX_SIZE);
    } else {
      enqueueSnackbar(strings.uploads.type_not_valid, { variant: 'error' });
      return;
    }

    if (!validation.isValid) {
      validation.messages.forEach((message) => {
        enqueueSnackbar(message, {
          variant: 'error',
          autoHideDuration: 4000,
        });
      });

      return;
    }

    if (mediaFiles.length >= 3) return;

    dispatch(
      updateMedia([
        ...mediaFiles,
        {
          type: fileType,
          metaType: file.type,
          name: file.name,
          url: URL.createObjectURL(file),
        },
      ]),
    );
    enqueueSnackbar(strings.uploads.success, { variant: 'success' });
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...mediaFiles];

    newFiles.splice(index, 1);

    dispatch(updateMedia(newFiles));
  };

  const MediaWrapper = ({
    children,
    index,
  }: {
    children: React.ReactNode;
    index: number;
  }) => {
    return (
      <MediaContainer>
        <RemoveButton size="small" onClick={() => handleRemoveFile(index)}>
          <Cancel color="error" fontSize="inherit" />
        </RemoveButton>
        {children}
      </MediaContainer>
    );
  };

  return (
    <Stack
      flexDirection={{
        xs: 'column',
        sm: 'row',
      }}
      alignItems="center"
      gap={2.5}
      flexWrap="wrap"
    >
      {mediaFiles.map((file, index) => {
        if (file.type === 'image')
          return (
            <MediaWrapper key={file.url} index={index}>
              <Image
                src={file.url}
                alt={file.url}
                width={180}
                height={150}
                objectFit="cover"
                style={{
                  borderRadius: 15,
                }}
              />
            </MediaWrapper>
          );

        if (file.type === 'video')
          return (
            <MediaWrapper key={file.url} index={index}>
              <video
                style={{ objectFit: 'cover', borderRadius: 15 }}
                width={180}
                height={150}
                src={file.url}
              />
            </MediaWrapper>
          );
      })}
      {mediaFiles.length < 3 && (
        <UploaderButton
          accept={`${imgTypes.join(',')},${videoTypes.join(',')}`}
          onChange={handleFilesChange}
        >
          <>
            <AddCircleOutline color="inherit" />
            <Typography
              variant="caption"
              color="primary"
              fontWeight={500}
              marginTop={1.5}
            >
              {strings.uploads.input_lbl}
            </Typography>
          </>
        </UploaderButton>
      )}
    </Stack>
  );
};

const RemoveButton = withStyles(IconButton, (theme) => ({
  root: {
    position: 'absolute',
    top: -14,
    right: -14,
    zIndex: 99,
    padding: 0,
    fontSize: '26px',
  },
}));

const MediaContainer = withStyles(Box, (theme) => ({
  root: {
    borderRadius: 10,
    position: 'relative',
  },
}));

export default ProfileMediaUploader;
