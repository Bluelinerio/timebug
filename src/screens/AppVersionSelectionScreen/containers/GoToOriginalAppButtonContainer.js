import { connect } from 'react-redux'
import { goToStartScreen } from '../../../redux/actions/nav.actions'
import GoToVersionButton from '../components/GoToVersionButton'

const mapStateToProps = () => {
  return {
    text: 'Version 1.0'
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPress: () => dispatch(goToStartScreen())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoToVersionButton)
