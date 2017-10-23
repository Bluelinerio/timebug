import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';
import { APOLLO_CONFIG } from '../../constants/config';


export * from './mutations/user';

export const networkInterface = createNetworkInterface(APOLLO_CONFIG);

const reduxRootSelector = (state) => {
  return state;
};

export const client = new ApolloClient({
  networkInterface
});
