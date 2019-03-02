// @flow
import { connect }           from 'react-redux'
import { mapProps, compose } from 'recompose'
import { withNavigation }    from 'react-navigation'
import screen                from './Help'
import { pop }               from '../../redux/actions/nav.actions'
import selectors             from '../../redux/selectors'

const mapStateToProps = state => ({
  slides: selectors.formHelpSlides(state),
})

const dismiss = pop

const merge = ({ slides, dismiss, navigation }) => {
  const { state: { params: { step } } } = navigation
  const stepSlides = slides[step].sort((a, b) => a.order - b.order)
  return {
    slides: stepSlides,
    dismiss,
  }
}

export default compose(
  connect(mapStateToProps, { dismiss }),
  withNavigation,
  mapProps(merge)
)(screen)
