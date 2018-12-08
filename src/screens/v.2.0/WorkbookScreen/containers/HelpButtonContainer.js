// @flow
import { connect } from 'react-redux'
import { goToHelpScreen } from '../../../../redux/actions/nav.actions'
import selectors from '../../../../redux/selectors'
import HelpButton from '../components/HelpButton'
import type { Props } from '../components/HelpButton'
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
  stateProps: StateProps,
  dispatchProps: DispatchProps,
  ownProps: OwnProps
): Props => {
  const { slides } = stateProps
  const { step, phase } = ownProps
  const hasHelpSlides = slides[step] && slides[step].length > 0 ? true : false
  const icon = 'AudioError'
  const iconStyle: iconStyle = mapPhaseToStylesHelper(phase)
  return {
    ...dispatchProps,
    ...ownProps,
    icon,
    iconStyle,
    hasHelpSlides,
  }
}

export default connect(mapStateToProps, mapDispatchToProps, merge)(HelpButton)
