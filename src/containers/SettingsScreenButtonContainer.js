// @flow
import mapNavigationDispatch         from '2020_HOC/NavigationServiceHOC'
import { goToSettings }              from '2020_redux/actions/nav.actions'
import SettingsScreenButtonComponent from '../components/SettingsScreenButtonComponent'

const mapDispatchToProps = (dispatch: any) => ({
  goToSettings: () => dispatch(goToSettings()),
})

export default mapNavigationDispatch(mapDispatchToProps)(
  SettingsScreenButtonComponent
)
