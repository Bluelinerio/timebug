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

const stepIdAfterStepId = (stepId:string) => parserInt(stepId.toString() + 1)

type StepInfo = { stepId: string, formId: string, color: string }

export const stepInfoForStep = (step:Step) => ({
  stepId: step.stepId,
  stepColor: step.color,
  stepNumber: step.number,
  formId: '1'
});

const navigateWith = ({ routeName, props: { navigation : { state: { params } } } }) => NavigationActions.navigate({
  routeName,
  params
})

export const goToStepScreen                   = (props: any) => navigateWith({ props, routeName:'StepScreen' });
export const navigateToAssignmentLeadInScreen = (props: any) => navigateWith({ props, routeName:'AssignmentLeadInScreen' })
export const goToWorkBookScreen               = (props: any) => navigateWith({ props, routeName:'WorkBookScreen' })
export const goToAssignmentLeadInScreen       = (props: any) => navigateWith({ props, routeName:'AssignmentLeadInScreen' })
export const goToAssignmentDoneScreen         = (props: any) => navigateWith({ props, routeName:'AssignmentDoneScreen' })
export const goToAssignmentFlow               = ({ step } : {step: Step, index: number}) => NavigationActions.navigate({ 
  routeName: 'AssignmentFlow',
  params: {
    ...(stepInfoForStep(step)),
  }
})