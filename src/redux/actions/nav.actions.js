// @flow
import R from 'ramda'
import { NavigationActions } from 'react-navigation'
import type { Step } from '../../services/cms'
import routes from '../../navigation/routes'

if (!routes || !routes.root || !routes.root.initialRouteName || !routes.step) {
  throw 'missing routes or nested fields ' + JSON.stringify(routes)
}

type StepInfo = { stepId: string, formId: string, color: string }

export const stepInfoForStep = (step: Step) => ({
  stepId: step.stepId,
  stepColor: step.color,
  stepNumber: step.number,
  formId: '1'
})

export const navigateWith = ({
  routeName,
  props: { navigation: { state: { params } } }
}) =>
  NavigationActions.navigate({
    routeName,
    params
  })

const navigateToInitialRoute = () =>
  NavigationActions.navigate({
    routeName: routes.root.initialRouteName
  })

export const reset = () =>
  NavigationActions.reset({
    index: 0,
    key: null,
    actions: [navigateToInitialRoute()]
  })

export const restartStepAction = (step: Step) =>
  NavigationActions.reset({
    index: 1,
    key: null,
    actions: [navigateToInitialRoute(), goToAssignmentFlow({ step })]
  })

// TODO remove static string and use params (routes.step.StepScreen ... )
export const goToMeditation = (id) =>
  NavigationActions.navigate({
    routeName: routes.root.MeditationScreen,
    params: {
      id
    }
  })
export const goToWorkbookScreen = (props: any) =>
  navigateWith({
    props,
    routeName: routes.step.WorkbookScreen
  })

export const goToWorkbookDoneScreen = (props: any) =>
  NavigationActions.navigate({
    ...props,
    routeName: routes.step.WorkbookDoneScreen
  })

export const goToPreviosFormsForStep = step =>
  NavigationActions.navigate('PreviosFormsForStep', step.stepId)

export const goToAssignmentFlow = ({ step }: { step: Step }) =>
  NavigationActions.navigate({
    routeName: routes.root.AssignmentFlow,
    params: {
      ...stepInfoForStep(step)
    }
  })

export const goToWorkbookScreenWithParams = (params: StepInfo) =>
  NavigationActions.navigate({
    routeName: routes.step.WorkbookScreen,
    params
  })

export const goToWorkbookSkippingStepScreen = ({
  step,
  incompleteFormsIds
}) => {
  const params = stepInfoForStep(step)
  const action =
    (incompleteFormsIds &&
      incompleteFormsIds.length &&
      incompleteFormsIds.reverse().reduce((action, formId) => {
        return NavigationActions.push({
          params: {
            ...params,
            formId
          },
          routeName: routes.step.WorkbookScreen,
          action
        })
      }, null)) ||
    null
  return NavigationActions.navigate({
    routeName: routes.root.AssignmentFlow,
    params,
    action
  })
}

export const goToMarkdownScreen = (props: ?{}) =>
  NavigationActions.navigate({
    routeName: routes.root.MarkdownScreen,
    params: props
  })

export const goToEmojiPickerScreen = (params: ?{}) =>
  NavigationActions.navigate({
    routeName: routes.root.EmojiPickerScreen,
    params
  })

export const goToMyJourneyScreen = (params: ?any) =>
  NavigationActions.navigate({
    routeName: routes.root.MyJourneyScreen,
    params
  })