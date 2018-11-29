/* eslint-disable no-unused-vars */
import { StatusBar } from 'react-native';
import { NavigationActions, StateUtils } from 'react-navigation';
//https://github.com/react-navigation/react-navigation
// BACK,
// INIT,
// NAVIGATE,
// POP,
// POP_TO_TOP,
// PUSH,
// RESET,
// SET_PARAMS,
// URI,
// COMPLETE_TRANSITION,

const ACTIONS = {
  // [NavigationActions.NAVIGATE]: (action, dispatch) => {
  //   const { routeName } = action.routeName
  //   debugger;
  //   dispatch(action)
  // },
  // [NavigationActions.RESET]: (action, dispatch) => {
  //   const { routeName } = action.routeName
  //   debugger;
  //   dispatch(action)
  // }
  // [NavigationActions.COMPLETE_TRANSITION]: (action, dispatch) => {
  //   const { routeName } = action.routeName
  //   debugger;
  //   dispatch(action)
  // }
};

export const reactNavigationMiddleware = store => dispatch => action => {
  const custom = ACTIONS[action.type];
  if (custom) {
    return custom(action, dispatch);
  } else {
    return dispatch(action);
  }
};
