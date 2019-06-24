import { NavigationActions } from 'react-navigation'
import mapNavigationDispatch from '2020_HOC/NavigationServiceHOC'
import Banner                from '../components/Banner'

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(NavigationActions.back()),
})

export default mapNavigationDispatch(mapDispatchToProps)(Banner)
