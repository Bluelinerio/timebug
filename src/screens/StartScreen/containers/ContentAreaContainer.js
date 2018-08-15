//@flow
import invariant from 'invariant'
import { connect } from 'react-redux'
import { compose, mapProps }      from 'recompose'
import { withNavigation }         from 'react-navigation'
import type { OptionButtonProps } from '../components/OptionButton'
import ContentArea                from '../components/ContentArea'
import selectors                  from '../../../redux/selectors'
import {
  goToMyJourneyScreen,
  goToHomeScreen
}                                 from '../../../redux/actions/nav.actions'
import { getColorForStepAtIndex } from '../utils/colorsForStep'
import tron                       from 'reactotron-react-native'
const mapStateToProps = (state: any) => {
  const { sortedStepsWithForms } = selectors.sortedStepsWithForms(
    state
  )

  tron.log(state)

  tron.log(sortedStepsWithForms)

  const stepColors = selectors.statefullStepColors(state)

  const backgroundColorAtIndex = (stepIndex: number) =>
    stepColors[getColorForStepAtIndex(stepIndex, state)]

  invariant(
    stepColors,
    `the colors for completed-uncompleted steps is not defined`
  )

  return {
    sortedStepsWithForms,
    backgroundColorAtIndex
  }
}

export default compose(
  withNavigation,
  connect(mapStateToProps),
  mapProps(({ navigation, sortedStepsWithForms, backgroundColorAtIndex }) => {
    const buttons = sortedStepsWithForms.map((form, index) => {
      const { step: { number, title, icon } } = form
      return {
        text: `Step${number}: ${title}`,
        onPress: () => navigation.dispatch(goToHomeScreen()),
        style: {
          container: {
            backgroundColor: backgroundColorAtIndex(index)
          }
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
