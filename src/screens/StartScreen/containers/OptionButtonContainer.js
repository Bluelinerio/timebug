//@flow
import { connect }                         from 'react-redux'
import { compose }                         from 'recompose'
import { withNavigation }                  from 'react-navigation'
import OptionButton, { OptionButtonProps } from '../components/OptionButton'
import { openModal }                       from '../../../redux/actions/modal.actions'
import { key as loginModalKey }            from '../../../components/LoginModal'
import { key as audioModalKey }            from '../../../components/AudioModal'
import styles                              from '../styles'
import {
  getColorForStepAtIndex,
  getTextColorForStepAtIndex,
  isStepIndexCompleted
}                                          from '../utils/colorsForStep'
import { phaseForStepAtIndex }             from '../../../services/cms'
import {
  goToAssignmentFlow,
  goToWorkbookSkippingStepScreen
}                                          from '../../../redux/actions/nav.actions'
import selectors                           from '../../../redux/selectors'

import tron from 'reactotron-react-native'

type OptionButtonDispatchProps = {
  login: () => any,
  openAudio: () => any
}

type OptionButtonStateProps = {
  user: any
}

type OptionButtonContainerProps = {
  navigation: any,
  stepWithForm: any,
  user: any,
  stepColors: any
}

const FIRST_FORM_ID = '1'

const mapStateToProps = (state: any): OptionButtonStateProps => {
  const user = selectors.getUser(state)
  return {
    user
  }
}

const mapDispatchToProps = (dispatch: any): OptionButtonDispatchProps => ({
  login: () => dispatch(openModal({ key: loginModalKey })),
  openAudio: ({ audio = null, icon, title, snippet }) => dispatch(openModal({ key: audioModalKey, params: { audio, icon, title, snippet }}))
})

const merge = (
  stateProps: OptionButtonStateProps,
  dispatchProps: OptionButtonDispatchProps,
  ownProps: OptionButtonContainerProps
): OptionButtonProps => {
  const { user } = stateProps
  const { stepColors, step, navigation } = ownProps
  const { login, openAudio } = dispatchProps

  tron.log(step)

  const { number, title, icon, snippet } = step
  const isLoggedIn = typeof user === 'string' ? false : true

  tron.log(`Calling merge on step: ${number}`)

  const backgroundColorAtIndex = (stepIndex: number) =>
    stepColors[getColorForStepAtIndex(stepIndex, user)]

  const textColorAtIndex = (stepIndex: number) =>
    getTextColorForStepAtIndex(stepIndex, user, styles)

  const stepCompleted = (stepIndex: number) =>
    isStepIndexCompleted(stepIndex, user)

  return {
    text: `${title}`,
    step: `${number}`,
    subtitleText: `${snippet}`,
    phase: phaseForStepAtIndex(number - 1),
    onPress: () =>
      isLoggedIn
        ? navigation.dispatch(
            goToWorkbookSkippingStepScreen({
              step,
              incompleteFormsIds: [FIRST_FORM_ID]
            })
          )
        : login(),
    sideActions: {
      audio: () => openAudio({ title, icon, snippet }),
      content: () => navigation.dispatch(goToAssignmentFlow({ step }))
    },
    source: icon,
    complete: stepCompleted(number - 1),
    style: {
      container: {
        backgroundColor: backgroundColorAtIndex(number - 1)
      },
      text: textColorAtIndex(number - 1)
    }
  }
}

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps, merge)
)(OptionButton)
