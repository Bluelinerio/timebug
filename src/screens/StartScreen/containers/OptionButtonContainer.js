//@flow
import { connect }                         from 'react-redux'
import { compose }                         from 'recompose'
import { withNavigation }                  from 'react-navigation'
import mapNavigationDispatch               from '2020_HOC/NavigationServiceHOC'
import { goToLogin }                       from '2020_redux/actions/nav.actions'
import OptionButton, { OptionButtonProps } from '../components/OptionButton'
import styles                              from '../styles'
import {
  getColorForStepAtIndex,
  getTextColorForStepAtIndex,
  isStepIndexCompleted,
}                                          from '../utils/colorsForStep'
import { phaseForStepAtIndex }             from '../../../services/cms'
import { goToWorkbookSkippingStepScreen }  from '../../../redux/actions/nav.actions'
import selectors                           from '../../../redux/selectors'
import { screenKey }                       from '../index'
import { PhaseProgressElementKey }         from './PhaseProgressElementContainer'
import {
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
}                                          from '../../../services/cms'
import { goToV2WorkbookScreen }            from '../../../redux/actions/nav.actions'
import AppVersionHOC                       from '../../../HOC/AppVersionProvider'
import ModelHOC                            from '../../../HOC/StepFormModelProvider'
import { appVersions }                     from '../../../constants'
import { translateCMSPhaseToStandard }     from '../../../services/cms'

// const defaultAudio = 'https://assets.ctfassets.net/6h184bey8vl3/7JQ278WKGsAKcQO4KWWSkI/7a6a37e74821aa780f71dec640c0f14a/test__online-audio-converter.com_.mp3'

type OptionButtonDispatchProps = {
  login: () => any,
}

type OptionButtonStateProps = {
  user: any,
  selected: string,
}

type OptionButtonContainerProps = {
  navigation: any,
  stepWithForm: any,
  user: any,
  stepColors: any,
}

const mapTypeToPhase = ({ type }) => {
  switch (type) {
  case 'MEDITATION':
    return MEDITATION
  case 'SELF-ASSESSMENT':
    return SELF_ASSESSMENT
  case 'VISION CREATION':
    return VISION_CREATION
  default:
    return MEDITATION
  }
}

const FIRST_FORM_ID = '1'

const mapStateToProps = (state: any): OptionButtonStateProps => {
  const user = selectors.getUser(state)

  const uiState = selectors.stateForScreen(state)(screenKey)

  const { selected } = uiState[PhaseProgressElementKey] || {
    selected: MEDITATION,
  }

  return {
    user,
    selected,
  }
}

const mapDispatchToProps = (dispatch: any): OptionButtonDispatchProps => ({
  login: () => dispatch(goToLogin()),
})

const merge = (
  stateProps: OptionButtonStateProps,
  dispatchProps: OptionButtonDispatchProps,
  ownProps: OptionButtonContainerProps
): OptionButtonProps => {
  const { user, selected } = stateProps
  const { stepColors, step, navigation, _version, login } = ownProps

  const { number, title, icon, snippet, audio } = step

  const isLoggedIn = typeof user === 'string' ? false : true

  const visible = mapTypeToPhase(step) === selected

  const backgroundColorAtIndex = (stepIndex: number) =>
    stepColors[getColorForStepAtIndex(stepIndex, user)]

  const textColorAtIndex = (stepIndex: number) =>
    getTextColorForStepAtIndex(stepIndex, user, styles)

  const stepCompleted = (stepIndex: number) =>
    isStepIndexCompleted(stepIndex, user)

  return {
    title,
    audio: (audio && audio.uri) || undefined,
    step: number,
    subtitleText: `${snippet}`,
    phase: phaseForStepAtIndex(number - 1),
    source: icon && icon.uri,
    complete: stepCompleted(number - 1),
    visible,
    onPress: () =>
      isLoggedIn
        ? _version === appVersions.one
          ? navigation.dispatch(
            goToWorkbookSkippingStepScreen({
              step,
              incompleteFormsIds: [FIRST_FORM_ID],
            })
          )
          : navigation.dispatch(
            goToV2WorkbookScreen({
              step,
              phase: translateCMSPhaseToStandard(step.type),
            })
          )
        : login({
          step,
          phase: translateCMSPhaseToStandard(step.type),
          incompleteFormsIds: [FIRST_FORM_ID],
          isV2: _version === appVersions.two,
        }),
    isV2: _version === appVersions.two,
    containerBackgroundColor: backgroundColorAtIndex(number - 1),
    textStyle: textColorAtIndex(number - 1),
    // disable: _version === appVersions.two ? !formModel : false,
  }
}

export default compose(
  withNavigation,
  AppVersionHOC,
  ModelHOC,
  mapNavigationDispatch(mapDispatchToProps),
  connect(mapStateToProps, null, merge)
)(OptionButton)
