import { useRef } from 'react';
import { Add, AddAPhoto } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { isFileValid } from 'common/utils';
import { useSnackbar } from 'notistack';
import { withStyles } from 'tss-react/mui';
import { useAppDispatch, useAppSelector } from 'store';
import { updateProfileImg } from '../state';
import { basicInfoContent as strings } from '../strings';
import Image from 'next/image';

const imgTypes = ['.png', '.jpeg', '.jpg', '.webp'];

const IMG_MAX_SIZE = 5000000;

const ProfileImageUploader = () => {
  const profileImg = useAppSelector((state) => state.newProfile.profile.image);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const file = event.target.files[0];

    if (!file) return;

    // VALIDATIONS

    const { isValid, messages } = isFileValid(file, imgTypes, IMG_MAX_SIZE);

    if (!isValid) {
      messages.forEach((message) => {
        enqueueSnackbar(message, {
          variant: 'error',
          autoHideDuration: 4000,
        });
      });

      return;
    }

    dispatch(
      updateProfileImg({
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
      }),
    );
    enqueueSnackbar(strings.upload_image.success, { variant: 'success' });
  };

  return (
    <>
      <UploadImageButton
        aria-label={strings.upload_image.aria}
        onClick={() => fileInputRef.current?.click()}
      >
        {profileImg ? (
          <Image
            src={profileImg.url}
            alt="your image profile"
            layout="fill"
            objectFit="cover"
            style={{
              borderRadius: 999,
            }}
          />
        ) : (
          <AddAPhoto color="disabled" fontSize="inherit" />
        )}
      </UploadImageButton>
      <input
        accept={imgTypes.join(',')}
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleChange}
      />
    </>
  );
};

const UploadImageButton = withStyles(IconButton, (theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '120px',
    height: '120px',
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },
}));

export default ProfileImageUploader;
