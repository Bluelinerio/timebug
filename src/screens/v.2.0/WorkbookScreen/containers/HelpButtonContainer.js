// @flow
import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import { goToHelpScreen } from '../../../../redux/actions/nav.actions'
import selectors from '../../../../redux/selectors'
import HelpButton from '../components/HelpButton'
import type { Props } from '../components/HelpButton'
import mapNavigationDispatch from '2020_HOC/NavigationServiceHOC'
import { mapPhaseToStylesHelper } from '../utils/colorsForStep'

type StateProps = {
  slides: {
    [x: string]: Array<any>,
  },
}

type DispatchProps = {
  goToHelpScreen: () => any,
}

type OwnProps = {
  step: string,
  phase: string,
  helpButtonContainerStyle?: any,
}

const mapStateToProps = (state: any): StateProps => ({
  slides: selectors.formHelpSlides(state),
})

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    goToHelpScreen: (step: string) => dispatch(goToHelpScreen({ step })),
  }
}

const merge = (
  props: StateProps & DispatchProps & OwnProps,
): Props => {
  const { slides, step, phase } = props
  const hasHelpSlides = slides[step] && slides[step].length > 0 ? true : false
  const icon = 'Help'
  const iconStyle: iconStyle = mapPhaseToStylesHelper(phase)
  return {
    ...props,
    icon,
    iconStyle,
    hasHelpSlides,
  }
}

export default compose(mapNavigationDispatch(mapDispatchToProps), connect(mapStateToProps), mapProps(merge))(HelpButton)
