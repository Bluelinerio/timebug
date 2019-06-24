// @flow
import { connect }           from 'react-redux'
import { compose }           from 'recompose'
import { NavigationActions } from 'react-navigation'
import mapNavigationDispatch from '2020_HOC/NavigationServiceHOC'
import Banner                from '../components/MinifiedBanner'

type BannerProps = {
  goBack: () => any,
  backButton: Boolean,
}

type DispatchProps = {
  goBack: () => any,
}

type OwnProps = {
  override: () => any,
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  goBack: () => dispatch(NavigationActions.back()),
})

const mergeProps = (
  _,
  dispatchProps: DispatchProps,
  ownProps: OwnProps
): BannerProps => {
  const { override } = ownProps
  const { goBack } = dispatchProps
  const onBackPress = override ? override : goBack
  return {
    onBackPress,
    backButton: true,
  }
}

export default compose(
  mapNavigationDispatch(mapDispatchToProps),
  connect(null, null, mergeProps)
)(Banner)
