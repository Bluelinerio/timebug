// @flow
import { NavigationActions } from 'react-navigation';
import type { Step } from '../../services/cms';
import routes, { protoRoutes } from '../../navigation/routes';
import { LINK_NAVIGATION } from '../actionTypes';

if (!routes || !routes.root || !routes.root.initialRouteName || !routes.step) {
  throw 'missing routes or nested fields ' + JSON.stringify(routes);
}

type StepInfo = { stepId: string, formId: string, color: string };

export type GoalStepScreenNavigationParams = {
  goalId: string,
  goalTitle?: string,
  goalType?: string,
  formId: string,
};

export type LinkedNavigationPayload = {
  link: string,
};

export type GoalFormParams = {
  step: String,
  screen: String,
};

export type HelpParams = {
  step: String,
};

export const linkNavigation = (payload: LinkedNavigationPayload) => ({
  type: LINK_NAVIGATION,
  payload,
});

export const stepInfoForStep = (step: Step) => ({
  stepId: step.stepId,
  stepColor: step.color,
  stepNumber: step.number,
  formId: '1',
});

/* Prototype */

export const goToPrototype = () =>
  NavigationActions.navigate({
    routeName: routes.version.PrototypeNavigator,
  });

export const goToGoalFormScreen = (params: GoalFormParams) =>
  NavigationActions.navigate({
    routeName: protoRoutes.proto.GoalFormScreen,
    params,
  });

export const goToGoalProtoScreen = (params: GoalFormParams) =>
  NavigationActions.navigate({
    routeName: protoRoutes.proto.GoalProtoScreen,
    params,
  });

export const goToHelpScreen = (params: HelpParams) =>
  NavigationActions.navigate({
    routeName: protoRoutes.proto.HelpScreen,
    params,
  });

export const goToPrototypeStepScreen = () =>
  NavigationActions.navigate({
    routeName: protoRoutes.proto.V2Navigator,
  })

export const goToPrototypeWorkbookScreen = (params: any) =>
  NavigationActions.navigate({
    routeName: protoRoutes.v2.V2_WorkbookScreen,
    params,
  });

/* End Prototype */

export const popToTop = () => NavigationActions.popToTop();

export const pop = () => NavigationActions.pop();

export const navigateWith = ({
  routeName,
  props: { navigation: { state: { params } } },
}) =>
  NavigationActions.navigate({
    routeName,
    params,
  });

const navigateToInitialRoute = () =>
  NavigationActions.navigate({
    routeName: routes.start.initialRouteName,
  });

// TODO: add goal itself to params
export const goToGoalStepScreen = (params: GoalStepScreenNavigationParams) =>
  NavigationActions.navigate({
    routeName: routes.goals.GoalStepScreen,
    params,
  });

export const goToStartScreen = (params?: any) =>
  NavigationActions.navigate({
    routeName: routes.root.StartScreen,
    params,
  });

export const reset = () =>
  NavigationActions.reset({
    index: 0,
    key: null,
    actions: [navigateToInitialRoute()],
  });

export const goBackFrom = (key: string) =>
  NavigationActions.back({
    key,
  });

export const goBack = () => NavigationActions.back();

export const restartStepAction = (step: Step) =>
  NavigationActions.reset({
    index: 1,
    key: null,
    actions: [navigateToInitialRoute(), goToAssignmentFlow({ step })],
  });

export const restartStepActionSafe = (step: Step, key: string) =>
  NavigationActions.reset({
    index: 0,
    key,
    actions: [goToStepScreen(step)],
  });

export const goToStepScreen = (step: Step) =>
  NavigationActions.navigate({
    params: {
      ...stepInfoForStep(step),
    },
    routeName: routes.step.StepScreen,
  });

// TODO remove static string and use params (routes.step.StepScreen ... )
export const goToMeditation = id =>
  NavigationActions.navigate({
    routeName: routes.root.MeditationScreen,
    params: {
      id,
    },
  });
export const goToWorkbookScreen = (props: any) =>
  navigateWith({
    props,
    routeName: routes.step.WorkbookScreen,
  });

export const goToWorkbookDoneScreen = (props: any) =>
  NavigationActions.navigate({
    ...props,
    routeName: routes.step.WorkbookDoneScreen,
  });

export const goToPreviosFormsForStep = step =>
  NavigationActions.navigate('PreviosFormsForStep', step.stepId);

export const goToAssignmentFlow = ({ step }: { step: Step }) =>
  NavigationActions.navigate({
    routeName: routes.root.AssignmentFlow,
    key: routes.root.AssignmentFlow,
    params: {
      ...stepInfoForStep(step),
    },
  });

export const goToWorkbookScreenWithParams = (params: StepInfo) =>
  NavigationActions.navigate({
    routeName: routes.step.WorkbookScreen,
    params,
  });

export const goToWorkbookSkippingStepScreen = ({
  step,
  incompleteFormsIds,
}) => {
  const params = stepInfoForStep(step);
  const action =
    (incompleteFormsIds &&
      incompleteFormsIds.length &&
      incompleteFormsIds.reverse().reduce((action, formId) => {
        return NavigationActions.push({
          params: {
            ...params,
            formId,
          },
          routeName: routes.step.WorkbookScreen,
          action,
        });
      }, null)) ||
    null;
  return NavigationActions.navigate({
    routeName: routes.root.AssignmentFlow,
    params,
    action,
    key: routes.root.AssignmentFlow,
  });
};

export const goToMarkdownScreen = (props: ?{}) =>
  NavigationActions.navigate({
    routeName: routes.root.MarkdownScreen,
    params: props,
  });

export const goToEmojiPickerScreen = (params: ?{}) =>
  NavigationActions.navigate({
    routeName: routes.root.EmojiPickerScreen,
    params,
  });

export const goToMyJourneyScreen = (params: ?any) =>
  NavigationActions.navigate({
    routeName: routes.tab.MyJourneyScreen,
    params,
  });

export const journeyScreenDeepParams = (params: ?any) =>
  NavigationActions.navigate({
    routeName: routes.tab.MyJourneyScreen,
    params,
    key: routes.tab.MyJourneyScreen,
  });

export const goToHomeScreen = (params?: any) =>
  NavigationActions.navigate({
    routeName: routes.root.HomeScreen,
    params,
  });

export const goToGuideBookScreen = () => ({});

export const goToMyRewardsScreen = () => ({});
