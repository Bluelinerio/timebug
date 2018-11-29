// @flow
import { StackNavigator } from 'react-navigation';
import StepSelectionScreen from './StepSelectionScreen';
import WorkbookScreen from './WorkbookScreen';
import { protoRoutes as routes } from '../../navigation/routes';

/**
 * Ui reducer screen key
 */

export const screenKey = 'V2';

export const PrototypeNavigatorConfiguration = {
  routes: routes.proto,
  screens: {
    [routes.v2.V2_StepScreen]: {
      screen: StepSelectionScreen,
    },
    [routes.v2.V2_WorkbookScreen]: {
      screen: WorkbookScreen,
    },
  },
  options: {
    initialRouteName: routes.v2.initialRouteName,
    headerMode: 'none',
  },
};

const Navigator = StackNavigator(
  PrototypeNavigatorConfiguration.screens,
  PrototypeNavigatorConfiguration.options
);

export default Navigator;
