import { connect } from 'react-redux'
import { goToHelpScreen } from '../../../redux/actions/nav.actions'
import HelpButton from '../components/HelpButton'

const mapDispatchToProps = (dispatch: any) => {
  return {
    goToHelpScreen: (step: string) => dispatch(goToHelpScreen({ step }))
  }
}

export default connect(null, mapDispatchToProps)(HelpButton)
