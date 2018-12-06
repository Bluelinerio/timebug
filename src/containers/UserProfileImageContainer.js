import { compose, mapProps } from 'recompose';
import { withNavigation } from 'react-navigation';
import { goToMyJourneyScreen } from '../redux/actions/nav.actions';
import UserProfileImageComponent from '../components/UserProfileImageComponent';

export default compose(
  withNavigation,
  mapProps(({ navigation, styles, ...props }) => ({
    ...props,
    onPress: () => navigation.dispatch(goToMyJourneyScreen()),
    styles: {
      ...styles,
    },
  }))
)(UserProfileImageComponent);
