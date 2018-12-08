import { connect } from 'react-redux';
import { goToRootNavigatorV2 } from '../../../redux/actions/nav.actions';
import GoToVersionButton from '../components/GoToVersionButton';
import { debounce } from '../../../utils/debounce';

const mapStateToProps = () => {
  return {
    text: 'Version 2.0',
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPress: debounce(() => dispatch(goToRootNavigatorV2()), 250),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoToVersionButton);
