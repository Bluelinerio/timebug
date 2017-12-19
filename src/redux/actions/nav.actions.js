// @flow
import { action }               from '../utils';
import {
  GO_TO_HOME_SCREEN,
  SAGA_NAVIGATE
}                               from '../actionTypes';
import { NavigationActions } from 'react-navigation';
import type  { Step } from '../../services/cms';
import selectors from '../selectors';

export const doneWithCongratsScreen     = () => action(GO_TO_HOME_SCREEN, { reset: true, direction: "back" });
export const goToHomeScreen             = (props: any) => action(GO_TO_HOME_SCREEN, props);

const navigateWith = ({routeName, props}) => {
  const { step } = props;
  const createNavigationAction  = (state: any) => {
    const stepColor = selectors.colorForStep(step.number)(state)
    return {
      routeName,
      params : { 
        step,
        stepColor,
      },
      action : {
        step
      }
    }
  }
  return action(SAGA_NAVIGATE, { createNavigationAction })
}

const navigateToStep = ({number, routeName}) => {
  const createNavigationAction  = (state: any) => {
    const stepColor = selectors.colorForStep(number)(state)
    const step = selectors.step(number)(state);
    return {
      routeName,
      params : { 
        step,
        stepColor,
      },
      action : {
        step
      }
    }
  }
  return action(SAGA_NAVIGATE, { createNavigationAction })
}

export const goToStepScreen                   = (props: any) => navigateWith({ props, routeName:'StepScreen' });
export const navigateToAssignmentLeadInScreen = (props: any) => navigateWith({ props, routeName:'AssignmentLeadInScreen' });
export const goToWorkBookScreen               = (props: any) => navigateWith({ props, routeName:'WorkBookScreen' });
export const goToAssignmentLeadInScreen       = (props: any) => navigateWith({ props, routeName:'AssignmentLeadInScreen' });
export const goToAssignmentDoneScreen         = (props: any) => navigateWith({ props, routeName:'AssignmentDoneScreen' });
export const goToAssignmentFlow               = ({number}: {number: number}) => navigateToStep({ number, routeName:'AssignmentFlow' });
