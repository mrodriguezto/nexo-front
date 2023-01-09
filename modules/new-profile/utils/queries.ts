import { gql, TypedDocumentNode } from '@apollo/client';

type UserProfile = {
  avatar: string;
  biography: string;
  disciplines: string[];
  displayName: string;
  keywords: string[];
  location: string;
  title: string;
  topics: string[];
};

type ReturnedProfile = {
  addMyUserProfile: {
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
};

export const CREATE_PROFILE: TypedDocumentNode<ReturnedProfile, UserProfile> = gql`
  mutation CreateProfile(
    $avatar: String!
    $biography: String!
    $disciplines: [String!]!
    $displayName: String!
    $keywords: [String!]!
    $location: String!
    $title: String!
    $topics: [String!]!
  ) {
    addMyUserProfile(
      avatar: $avatar
      biography: $biography
      disciplines: $disciplines
      displayName: $displayName
      keywords: $keywords
      location: $location
      title: $title
      topics: $topics
    ) {
      title
    }
  }
`;
