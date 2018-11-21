// @flow
import { connect }  from 'react-redux';
import screen       from './Help'
import { pop } from '../../redux/actions/nav.actions';
import { mapProps, compose } from 'recompose'
import { withNavigation } from 'react-navigation'
import slides from './dummy'

// const mapStateToProps = state => ({
//   slides: selectors.formHelpSlides(state)
// });

const dismiss = pop;

const merge = ({ dismiss, navigation }) => {
  const { state: { params: { step } } } = navigation
  const { slides: stepSlides, title } = slides[step]
  return {
    slides: stepSlides,
    dismiss,
    title
  }
}

export default compose(
  connect(null, { dismiss }),
  withNavigation,
  mapProps(merge)
)(screen);
