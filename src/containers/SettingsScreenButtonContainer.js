// @flow
import { connect }                   from 'react-redux'
import { goToSettings }              from '2020_redux/actions/nav.actions'
import { debounce }                  from '2020_utils/debounce'
import SettingsScreenButtonComponent from '../components/SettingsScreenButtonComponent'

const mapDispatchToProps = (dispatch: any) => ({
  goToSettings: debounce(() => dispatch(goToSettings()), 250),
})

export default connect(null, mapDispatchToProps)(SettingsScreenButtonComponent)
