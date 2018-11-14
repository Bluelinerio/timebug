import { connect } from 'react-redux'
import { goToPrototype } from '../../../redux/actions/nav.actions'
import GoToPrototypeButton from '../components/GoToPrototypeButton'

const mapDispatchToProps = (dispatch: any) => {
  return ({
    goToProto: () => dispatch(goToPrototype())
  })
}

export default connect(null, mapDispatchToProps)(GoToPrototypeButton)