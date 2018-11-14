import { connect }       from 'react-redux'
import { goToPrototype } from '../../../redux/actions/nav.actions'
import GoToVersionButton from '../components/GoToVersionButton'

const mapStateToProps = () => {
  return {
    text: 'Version 2.0'
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPress: () => dispatch(goToPrototype())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoToVersionButton)
