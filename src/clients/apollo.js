import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';
import { APOLLO_CONFIG } from '../constants/config';

export const networkInterface = createNetworkInterface(APOLLO_CONFIG);

export const client = new ApolloClient({
  networkInterface: networkInterface
});
