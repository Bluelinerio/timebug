import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  //uri: 'http://2020-test.local.zaraffasoft.com/',
  uri: 'http://localhost:3000/',
  opts: {
    mode: 'no-cors',
  },
});

export const client = new ApolloClient({
  networkInterface: networkInterface
});
