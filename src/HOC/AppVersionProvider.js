//@flow
import { connect } from 'react-redux'
import selectors from '../redux/selectors'

const mapStateToProps = (state: any) => {
  const _version = selectors.getAppVersion(state)

  return {
    _version,
  }
}

const AppVersionProvider = connect(mapStateToProps)

export default AppVersionProvider