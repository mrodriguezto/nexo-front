import { PlaceType } from './location';

export type IBasicInfo = {
  display_name: string;
  title: string;
  location: PlaceType | null;
  birthday: string;
};

export type INewProfile = IBasicInfo & {
  id?: string;
  image: IProfileImage | null;
  biography: string;
  disciplines: string[];
  keywords: string[];
  topics: string[];
  media: IMedia[];
};

export type IMedia = {
  type: 'video' | 'image';
  metaType: string;
  name: string;
  url: string;
};

export type IProfileImage = {
  type: string;
  name: string;
  url: string;
};

export type IProfileCardInfo = {
  display_name: string;
  title: string;
  image: IProfileImage | null;
  location: PlaceType | null;
  calification: number | string;
  contacts: number | string;
};
