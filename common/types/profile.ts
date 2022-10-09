import { PlaceType } from './location';

export type IBasicInfo = {
  display_name: string;
  title: string;
  location: PlaceType | null;
  birthday: string;
};

export type INewProfile = IBasicInfo & {
  id?: string;
  image: string;
  biography: string;
  disciplines: string[];
  keywords: string[];
  topics: string[];
  avatar_profile?: string;
  media: IMedia[];
};

export type IMedia = {
  type: 'video' | 'image';
  url: string;
};

export type IProfileCardInfo = {
  display_name: string;
  title: string;
  image: string;
  location: PlaceType | null;
  calification: number | string;
  contacts: number | string;
};
