// @flow
import { Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { action } from '../utils';
import type { SelectPutActionFnType } from '../selectPutAction';
import { selectPutAction } from '../selectPutAction';
import { GO_TO_HOME_SCREEN, SAGA_NAVIGATE } from '../actionTypes';
import type { Step } from '../../services/cms';
import selectors from '../selectors';
import routes from '../../navigation/routes';

if (!routes || !routes.root || !routes.root.initialRouteName || !routes.step) {
  throw 'missing routes or nested fields ' + JSON.stringify(routes);
}

const stepIdAfterStepId = (stepId: string) => parserInt(stepId.toString() + 1);

type StepInfo = { stepId: string, formId: string, color: string };

export const stepInfoForStep = (step: Step) => ({
  stepId: step.stepId,
  stepColor: step.color,
  stepNumber: step.number,
  formId: '1'
});

export const navigateWith = ({
  routeName,
  props: { navigation: { state: { params } } }
}) =>
  NavigationActions.navigate({
    routeName,
    params
  });

const navigateToInitialRoute = () =>
  NavigationActions.navigate({
    routeName: routes.root.initialRouteName
  });

export const reset = () =>
  NavigationActions.reset({
    index: 0,
    key: null,
    actions: [navigateToInitialRoute()]
  });

export const restartStepAction = (step: Step) => {
  // fix unclear bug where in android goToAssignmentFlow() does somethign wierd to the screen manager.
  const actions = Platform.select({
    ios: [navigateToInitialRoute(), goToAssignmentFlow({ step })],
    android: [navigateToInitialRoute()]
  });
  return NavigationActions.reset({
    index: 1,
    key: null,
    actions
  });
};

// TODO remove static string and use params (routes.step.StepScreen ... )
export const goToMeditation = () =>
  NavigationActions.navigate({
    routeName: routes.root.MeditationScreen
  });
export const goToStepScreen = (props: any) =>
  navigateWith({ props, routeName: 'StepScreen' });
export const navigateToAssignmentLeadInScreen = (props: any) =>
  navigateWith({ props, routeName: 'AssignmentLeadInScreen' });
export const goToWorkbookScreen = (props: any) =>
  navigateWith({ props, routeName: 'WorkbookScreen' });
export const goToAssignmentLeadInScreen = (props: any) =>
  navigateWith({ props, routeName: 'AssignmentLeadInScreen' });
export const goToWorkbookDoneScreen = (props: any) =>
  navigateWith({ props, routeName: 'WorkbookDoneScreen' });
export const goToAssignmentFlow = ({ step }: { step: Step }) =>
  NavigationActions.navigate({
    routeName: routes.root.AssignmentFlow,
    params: {
      ...stepInfoForStep(step)
    }
  });
export const goToWorkbookScreenWithParams = (params: StepInfo) =>
  NavigationActions.navigate({
    routeName: routes.step.WorkbookScreen,
    params
  });
