// @flow
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Banner from '../components/MinifiedBanner';

type BannerProps = {
  goBack: () => any,
  backButton: Boolean,
};

type DispatchProps = {
  goBack: () => any,
};

type OwnProps = {
  override: () => any,
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  goBack: () => dispatch(NavigationActions.back()),
});

const mergeProps = (
  _,
  dispatchProps: DispatchProps,
  ownProps: OwnProps
): BannerProps => {
  const { override } = ownProps;
  const { goBack } = dispatchProps;
  const onBackPress = override ? override : goBack;
  return {
    onBackPress,
    backButton: true,
  };
};

export default connect(null, mapDispatchToProps, mergeProps)(Banner);
