import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://15.228.119.142',
});

export const nexoClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
