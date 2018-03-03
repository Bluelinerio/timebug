// @flow
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import screen from './Walkthrough';
import selectors from '../../redux/selectors';
import { reset } from '../../redux/actions/nav.actions';
import type { Props } from './Walkthrough';

const mapStateToProps = state => ({
  slides: selectors.introSlides(state)
});

const dismiss = reset;

export default connect(mapStateToProps, { dismiss })(screen);
