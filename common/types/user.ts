export type IUser = {
  Id: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  userProfile?: IUserProfile;
};

export type IUserProfile = {
  avatar: string;
  biography: string;
  displayName: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  location: string;
  disciplines: string[];
  keywords: string[];
  topics: string[];
};
