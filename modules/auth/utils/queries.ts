import { gql, TypedDocumentNode } from '@apollo/client';
import { IUser } from 'common/types';
import { ISendUser } from '../types';

type RegisteredUser = {
  addUser: IUser;
};

export const REGISTER_USER: TypedDocumentNode<RegisteredUser, ISendUser> = gql`
  mutation RegisterUser(
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    $passwordCheck: String!
    $token: String!
  ) {
    addUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
      passwordCheck: $passwordCheck
      token: $token
    ) {
      Id
    }
  }
`;

export const SEND_TOKEN: TypedDocumentNode<null, { email: string }> = gql`
  query SendToken($email: String!) {
    getEmailTokenToSignUp(email: $email)
  }
`;

export const LOGIN_USER = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
