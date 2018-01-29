// @flow
import { NavigationActions }    from 'react-navigation'
import { action }               from '../utils'
import type { SelectPutActionFnType } from '../selectPutAction'
import { selectPutAction }            from '../selectPutAction';
import {
  GO_TO_HOME_SCREEN,
  SAGA_NAVIGATE
}                               from '../actionTypes'
import type  { Step }           from '../../services/cms'
import selectors                from '../selectors'

const testStep = (step: ?number) => {
  if(!step) {
    throw 'could not get step'
  } else if (step < 1 || step > 30) {
    throw 'step out of bound expected value between 1 and 30'
  }
}
const navigateWith = ({ routeName, props }) => {
  const step: number = props.step 
    ? props.step.number
    : 
      props.navigation 
      && props.navigation.state 
      && props.navigation.state.params 
      && props.navigation.state.params.step 
      || props.number;

  testStep(step);

  const createNavigationAction  = (state: any) => {
    const color = selectors.colorForStep(step)(state)
    return {
      routeName,
      params : { 
        step,
        color,
      }
    }
  }
  return action(SAGA_NAVIGATE, { createNavigationAction })
}

const navigateToStep = ({ number, routeName}) => {
  testStep(number);
  const createNavigationAction  = (state: any) => {
    const color = selectors.colorForStep(number)(state)
    return {
      routeName,
      params : { 
        step: number,
        color,
      }
    }
  }
  return action(SAGA_NAVIGATE, { createNavigationAction })
}

export const goToStepScreen                   = (props: any) => navigateWith({ props, routeName:'StepScreen' });
export const navigateToAssignmentLeadInScreen = (props: any) => navigateWith({ props, routeName:'AssignmentLeadInScreen' })
export const goToWorkBookScreen               = (props: any) => navigateWith({ props, routeName:'WorkBookScreen' })
export const goToAssignmentLeadInScreen       = (props: any) => navigateWith({ props, routeName:'AssignmentLeadInScreen' })
export const goToAssignmentDoneScreen         = (props: any) => navigateWith({ props, routeName:'AssignmentDoneScreen' })
export const goToAssignmentFlow               = (number: number) => navigateToStep({ number, routeName: 'AssignmentFlow' })
export const previousFormOrBack               = selectPutAction((state: any) => {
  const lastRoute = state.nav.routes.find(
    /* $FlowFixMe */
    (route: *) => route.key === action.key
  );
  if(!lastRoute) {
    throw 'unexpected result could not find lastRoute';
  }
  const { step } = lastRoute.params;
  testStep(step);
  const form = lastRoute.params.form || 0;

  if (form > 1) {
    return NavigationActions.setParams({
      step: step,
      form: form - 1
    })
  } else {
    return NavigationActions.back();
  }
});