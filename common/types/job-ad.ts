export type IJobAd = {
  title: string;
  persona: string;
  calification: string | number;
  num_applicants: string | number;
  location?: string;
  creation_date: string | Date;
  expiration_date: string | Date;
  description: string;

  imgs_url?: string[];
  tags?: string[];
  isAvailable?: boolean;
  media: string[];
};
