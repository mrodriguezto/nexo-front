export type IRegisterData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export type ISendUser = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordCheck: string;
  token: string;
};
