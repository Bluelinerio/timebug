//@flow
import invariant from 'invariant'
import { connect } from 'react-redux'
import { compose, mapProps }      from 'recompose'
import { withNavigation }         from 'react-navigation'
import type { OptionButtonProps } from '../components/OptionButton'
import ContentArea                from '../components/ContentArea'
import selectors                  from '../../../redux/selectors'
import {
  goToHomeScreen
}                                 from '../../../redux/actions/nav.actions'
import { getColorForStepAtIndex, getTextColorForStepAtIndex } from '../utils/colorsForStep'
import tron                       from 'reactotron-react-native'

import styles from '../styles'



const mapStateToProps = (state: any) => {
  const { sortedStepsWithForms } = selectors.sortedStepsWithForms(
    state
  )

  tron.log(state)

  tron.log(sortedStepsWithForms)

  const stepColors = selectors.statefullStepColors(state)

  const backgroundColorAtIndex = (stepIndex: number) =>
    stepColors[getColorForStepAtIndex(stepIndex, state)]

  const textColorAtIndex = (stepIndex: number) => 
    getTextColorForStepAtIndex(stepIndex, state, styles)

  invariant(
    stepColors,
    `the colors for completed-uncompleted steps is not defined`
  )

  return {
    sortedStepsWithForms,
    backgroundColorAtIndex,
    textColorAtIndex
  }
}

export default compose(
  withNavigation,
  connect(mapStateToProps),
  mapProps(({ navigation, sortedStepsWithForms, backgroundColorAtIndex, textColorAtIndex }) => {
    const buttons: Array<OptionButtonProps> = sortedStepsWithForms.map((form, index) => {
      const { step: { number, title, icon } } = form
      return {
        text: `${title}`,
        step: `${number}`,
        onPress: () => navigation.dispatch(goToHomeScreen()),
        source: icon,
        style: {
          container: {
            backgroundColor: backgroundColorAtIndex(index)
          },
          text: textColorAtIndex(index) 
        }
      }
    })
    tron.log(buttons)
    return {
      navigation,
      buttons
    }
  })
)(ContentArea)
