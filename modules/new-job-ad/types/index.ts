import { PlaceType } from 'common/types';

export type INewJobAdDesc = {
  title: string;
  description: string;
};

export type INewJobAdExtraInfo = {
  location: PlaceType | null;
  expiration_date: string;
  tags: string[];
};

export type INewJobAd = INewJobAdDesc &
  INewJobAdExtraInfo & {
    persona: string;
    media: string[];
  };
