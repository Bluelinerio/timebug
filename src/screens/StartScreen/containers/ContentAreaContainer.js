//@flow
import invariant from 'invariant'
import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import { withNavigation } from 'react-navigation'
import tron from 'reactotron-react-native'
import type { OptionButtonProps } from '../components/OptionButton'
import ContentArea from '../components/ContentArea'
import { key as loginModalKey } from '../../../components/LoginModal'
import selectors from '../../../redux/selectors'
import {
  goToHomeScreen,
  goToAssignmentFlow,
  goToWorkbookSkippingStepScreen
} from '../../../redux/actions/nav.actions'
import { openModal } from '../../../redux/actions/modal.actions'
import {
  getColorForStepAtIndex,
  getTextColorForStepAtIndex,
  isStepIndexCompleted
} from '../utils/colorsForStep'
import styles from '../styles'
import { phaseForStepAtIndex } from '../../../services/cms'

const FIRST_FORM_ID = '1'

const mapStateToProps = (state: any) => {
  const { sortedStepsWithForms } = selectors.sortedStepsWithForms(state)
  const isLoggedIn = selectors.isLoggedIn(state)

  tron.log(state)

  tron.log(sortedStepsWithForms)

  const stepColors = selectors.statefullStepColors(state)

  const backgroundColorAtIndex = (stepIndex: number) =>
    stepColors[getColorForStepAtIndex(stepIndex, state)]

  const textColorAtIndex = (stepIndex: number) =>
    getTextColorForStepAtIndex(stepIndex, state, styles)

  const stepCompleted = (stepIndex: number) =>
    isStepIndexCompleted(stepIndex, state)

  invariant(
    stepColors,
    `the colors for completed-uncompleted steps is not defined`
  )

  return {
    sortedStepsWithForms,
    backgroundColorAtIndex,
    textColorAtIndex,
    stepCompleted,
    isLoggedIn
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(openModal({ key:loginModalKey }))
})

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(
    ({
      navigation,
      sortedStepsWithForms,
      backgroundColorAtIndex,
      textColorAtIndex,
      stepCompleted,
      isLoggedIn,
      login
    }) => {
      const buttons: Array<OptionButtonProps> = sortedStepsWithForms.map(
        (form, index) => {
          const { step } = form
          const { number, title, icon } = step
          return {
            text: `${title}`,
            step: `${number}`,
            phase: phaseForStepAtIndex(index),
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
              audio: () => navigation.dispatch(goToHomeScreen()),
              content: () =>
                navigation.dispatch(
                  goToAssignmentFlow(sortedStepsWithForms[index])
                )
            },
            source: icon,
            complete: stepCompleted(index),
            style: {
              container: {
                backgroundColor: backgroundColorAtIndex(index)
              },
              text: textColorAtIndex(index)
            }
          }
        }
      )
      return {
        navigation,
        buttons
      }
    }
  )
)(ContentArea)
