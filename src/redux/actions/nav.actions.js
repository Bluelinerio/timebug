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

export const doneWithCongratsScreen     = () => action(GO_TO_HOME_SCREEN, { reset: true, direction: "back" });
export const goToHomeScreen             = (props: any) => action(GO_TO_HOME_SCREEN, props);

const navigateWith = ({ routeName, props }) => {
  const step: ?number = props.step ? props.step.number
    : (props.navigation && props.navigation.state && props.navigation.state.params) ? props.navigation.state.params.step 
    : props.number || null

  if(!step) {
    throw 'could not get step'
  }

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
export const goToAssignmentFlow               = (number:number) => navigateToStep({ number, routeName: 'AssignmentFlow' })
export const previousFormOrBack               = selectPutAction((state: any) => {
  const lastRoute = state.nav.routes.find(
    /* $FlowFixMe */
    (route: *) => route.key === action.key
  );
  if(!lastRoute) {
    throw 'unexpected result could not find lastRoute';
  }
  const { step } = lastRoute.params;
  const form = lastRoute.params.form || 0;

  if (form > 1) {
    return NavigationActions.setParams({
      step: progress.step,
      form: progress.form - 1
    })
  } else {
    return NavigationActions.back();
  }
});