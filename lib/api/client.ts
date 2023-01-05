import { ApolloClient, InMemoryCache } from '@apollo/client';

export const nexoClient = new ApolloClient({
  uri: 'http://15.228.119.142/',
  cache: new InMemoryCache(),
});
