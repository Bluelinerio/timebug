import { connect }           from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Banner                from '../components/MinifiedBanner'

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(NavigationActions.back())
})

export default connect(null, mapDispatchToProps)(Banner)
