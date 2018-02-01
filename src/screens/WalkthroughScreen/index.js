// @flow
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import screen from "./Walkthrough";
import selectors from '../../redux/selectors';
import { resetAction }      from '../../navigation/helpers'
import type { Props } from './Walkthrough';

const mapStateToProps = (state) => ({
  slides: selectors.introSlides(state)
})

const dismiss = () => resetAction('HomeScreen');

export default connect(mapStateToProps,({dismiss}))(screen);
