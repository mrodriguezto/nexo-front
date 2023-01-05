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

  const mediaFiles = await Promise.all([...mediaFilesPromises]);

  // const profileToSend = { ...profile, media: mediaFiles, image: profileImgFile };

  const {
    biography,
    disciplines,
    display_name: displayName,
    keywords,
    title,
    topics,
  } = profile;

  // TODO: Delete this
  const {
    email,
    firstname: firstName,
    lastname: lastName,
    password,
  } = JSON.parse(localStorage.getItem('register-data') || '') as IRegisterData;

  const profileToSend = {
    avatarProfile: '',
    biography,
    disciplines,
    displayName,
    email,
    firstName,
    keywords,
    lastName,
    location: 'test',
    password,
    passwordCheck: password,
    title,
    topics,
  };

  console.log({ profileToSend });

  return profileToSend;
};
