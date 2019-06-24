// @flow

/**
 *
 * Container for The PhaseHeader component
 *
 */

import { NavigationActions }                             from 'react-navigation'
import { connect }                                       from 'react-redux'
import { compose }                                       from 'recompose'
import PhaseHeader                                       from '../components/PhaseHeader'
import type { Props }                                    from '../components/PhaseHeader'
import selectors                                         from '../redux/selectors'
import { formatPhaseTitle, translateCMSPhaseToStandard } from '../services/cms'
import type { Step }                                     from '../services/cms'
import mapNavigationDispatch                             from '2020_HOC/NavigationServiceHOC'
import {
  getTextColorFromStep,
  backgroundColorFromStep,
  getColorFromStep,
  phaseHeaderBackgroundColorForPhase,
}                                                        from '../styles/components/global'

type DispatchProps = {
  goBack: () => any,
}

type OwnProps = {
  override: () => any,
  step: Step,
  phase: string,
  onSelectStep: Step => any,
}

type StateProps = {
  steps: Array<Step>,
  user: any,
  isStepCompleted: number => boolean,
}

const mapStateToProps = (state: any) => {
  const steps = Object.values(selectors.steps(state))
  const user = selectors.getUser(state)
  const isStepCompleted = selectors.isStepCompleted(state)
  return {
    steps,
    user,
    isStepCompleted,
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  goBack: () => dispatch(NavigationActions.back()),
})

const mergeProps = (
  stateProps: StateProps,
  dispatchProps: DispatchProps,
  ownProps: OwnProps
): Props => {
  const { isStepCompleted, steps } = stateProps
  const { override, step, phase, goBack, ...rest } = ownProps
  const { type } = step

  const title = formatPhaseTitle(type)
  const onBackPress = override ? override : goBack
  const headerBackgroundColor = phaseHeaderBackgroundColorForPhase(phase)

  const titleColor = getColorFromStep(step.type)

  return {
    ...rest,
    onBackPress,
    backButton: true,
    title,
    titleColor,
    headerBackgroundColor,
    steps: steps
      .filter(step => translateCMSPhaseToStandard(step.type) === phase)
      .map(step => {
        const isCompleted = isStepCompleted(step.number)
        const _buttonBackgroundColor = backgroundColorFromStep(
          step.type,
          isCompleted
        )
        const _textColor = getTextColorFromStep(step.type, isCompleted)
        return {
          ...step,
          _buttonBackgroundColor,
          _textColor,
        }
      }),
  }
}

export default compose(
  mapNavigationDispatch(mapDispatchToProps),
  connect(mapStateToProps, null, mergeProps)
)(PhaseHeader)
