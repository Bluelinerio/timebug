import { connect } from 'react-redux'
import { changeVersion } from '../../../redux/actions/appState.actions'
import { appVersions } from '../../../constants'
import selectors from '../../../redux/selectors'
import SwitchAppVersion from '../components/SwitchAppVersionComponent'

const mapDispatchToProps = (dispatch: any) => ({
  toggleVersion: (checked: boolean) =>
    dispatch(
      changeVersion({
        version: checked ? appVersions.two : appVersions.one,
      })
    ),
})

const mapStateToProps = (state: any) => {
  const version = selectors.getAppVersion(state)
  return {
    version,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchAppVersion)
