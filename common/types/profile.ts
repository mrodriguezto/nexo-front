export type IBasicInfo = {
  display_name: string;
  title: string;
  location: string;
  birthday: string;
};

export type INewProfile = IBasicInfo & {
  id?: string;
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
