// @flow
import { connect }                   from 'react-redux'
import { goToSettings }              from '2020_redux/actions/nav.actions'
import SettingsScreenButtonComponent from '../components/SettingsScreenButtonComponent'

const mapDispatchToProps = (dispatch: any) => ({
  goToSettings: () => dispatch(goToSettings()),
})

export default connect(null, mapDispatchToProps)(SettingsScreenButtonComponent)
