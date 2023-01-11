import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://15.228.119.142/gql',
});

export const nexoClient = new ApolloClient({
  cache: new InMemoryCache(),
  // link: httpLink,
  uri: 'http://15.228.119.142/gql',
  credentials: 'include',
});
