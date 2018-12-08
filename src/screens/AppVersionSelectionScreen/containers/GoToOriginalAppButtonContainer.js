import { connect } from 'react-redux';
import { goToStartScreen } from '../../../redux/actions/nav.actions';
import GoToVersionButton from '../components/GoToVersionButton';
import { debounce } from '../../../utils/debounce';

const mapStateToProps = () => {
  return {
    text: 'Go to app',
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPress: debounce(() => dispatch(goToStartScreen()), 250),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoToVersionButton);
