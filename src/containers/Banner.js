import { NavigationActions } from 'react-navigation'
import { connect }           from 'react-redux'
import Banner                from '../components/Banner'

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(NavigationActions.back())
})

const merge = (stateProps: any, dispatchProps: any, ownProps: any) => {
  const { goBack } = dispatchProps
  return {
    ...ownProps,
    goBack
  }
}

export default connect(null, mapDispatchToProps, merge)(Banner)
