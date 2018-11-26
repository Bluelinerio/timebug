// @flow
import { connect }        from 'react-redux'
import { goToHelpScreen } from '../../../redux/actions/nav.actions'
import HelpButton         from '../components/FormHelpButton'
import selectors          from '../../../redux/selectors'
import type { Props }     from '../components/FormHelpButton'

type StateProps = {
  slides: {
    [x: string]: Array<any>
  }
}

type DispatchProps = {
  goToHelpScreen: () => any
}

const mapStateToProps = (state: any): StateProps => ({
  slides: selectors.formHelpSlides(state)
})

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    goToHelpScreen: (step: string) => dispatch(goToHelpScreen({ step }))
  }
}

const merge = (
  stateProps: StateProps,
  dispatchProps: DispatchProps,
  ownProps: Props
): Props => {
  const { slides } = stateProps
  const { step } = ownProps
  const hasHelpSlides = slides[step] && slides[step].length > 0 ? true : false
  return {
    ...dispatchProps,
    ...ownProps,
    hasHelpSlides
  }
}

export default connect(mapStateToProps, mapDispatchToProps, merge)(HelpButton)
