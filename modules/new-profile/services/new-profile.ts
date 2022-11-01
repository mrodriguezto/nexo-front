import { INewProfile } from 'common/types';
import { createFile } from 'common/utils';

export const createProfile = async (profile: INewProfile): Promise<string> => {
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

  const profileToSend = { ...profile, media: mediaFiles, image: profileImgFile };

  console.log({ profileToSend });

  return new Promise(async (resolve, reject) => {
    try {
      // mutation
      // const res = await mutation(awa);
      resolve('algo');
    } catch (e) {
      reject('un error');
    }
  });
};
