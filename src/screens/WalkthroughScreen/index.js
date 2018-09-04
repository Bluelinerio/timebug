// @flow
import { connect }  from 'react-redux';
import screen       from './Walkthrough';
import selectors    from '../../redux/selectors';
import { popToTop } from '../../redux/actions/nav.actions';

const mapStateToProps = state => ({
  slides: selectors.introSlides(state)
});

const dismiss = popToTop;

export default connect(mapStateToProps, { dismiss })(screen);
