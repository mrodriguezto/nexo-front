import { IRegisterData } from '@/auth/types';
import { INewProfile } from 'common/types';
import { createFile } from 'common/utils';

export const getProfileToSend = async (profile: INewProfile) => {
  const mediaFilesPromises = profile.media.map((file) =>
    createFile(file.url, file.name!, file.metaType!),
  );

  let profileImgFile: null | File;

  if (profile.image) {
    profileImgFile = await createFile(
      profile.image.url,
      profile.image.name,
      profile.image.type,
    );
  } else {
    profileImgFile = null;
  }

  const {
    biography,
    disciplines,
    display_name: displayName,
    keywords,
    title,
    topics,
  } = profile;

  const profileToSend = {
    avatar: '',
    biography,
    disciplines,
    displayName,
    keywords,
    location: 'test',
    title,
    topics,
  };

  console.log({ profileToSend });

  return profileToSend;
};
