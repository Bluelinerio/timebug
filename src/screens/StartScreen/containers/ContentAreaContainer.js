//@flow
import invariant                  from 'invariant'
import { connect }                from 'react-redux'
import { compose, mapProps }      from 'recompose'
import { withNavigation }         from 'react-navigation'
import type { OptionButtonProps } from '../components/OptionButton'
import ContentArea                from '../components/ContentArea'
import selectors                  from '../../../redux/selectors'
import { goToHomeScreen }         from '../../../redux/actions/nav.actions'
import {
  getColorForStepAtIndex,
  getTextColorForStepAtIndex,
  isStepIndexCompleted
}                                 from '../utils/colorsForStep'
import tron                       from 'reactotron-react-native'

import styles from '../styles'

import { phaseForStepAtIndex } from '../../../services/cms'

const mapStateToProps = (state: any) => {
  const { sortedStepsWithForms } = selectors.sortedStepsWithForms(state)

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
    stepCompleted
  }
}

export default compose(
  withNavigation,
  connect(mapStateToProps),
  mapProps(
    ({
      navigation,
      sortedStepsWithForms,
      backgroundColorAtIndex,
      textColorAtIndex,
      stepCompleted
    }) => {
      const buttons: Array<OptionButtonProps> = sortedStepsWithForms.map(
        (form, index) => {
          const { step: { number, title, icon } } = form
          return {
            text: `${title}`,
            step: `${number}`,
            phase: phaseForStepAtIndex(index),
            onPress: () => navigation.dispatch(goToHomeScreen()),
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
