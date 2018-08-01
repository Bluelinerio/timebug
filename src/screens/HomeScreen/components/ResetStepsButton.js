/* @flow */
import { connect } from 'react-redux'
import SimpleButton from '../../../components/SimpleButton'
import { resetRequest } from '../../../redux/actions/formData.actions'
import formsSelectors from '../../../redux/selectors/forms.selectors'
import combineSelectors from '../../../redux/selectors/combineSelectors'

const { hasNoCompletedForms } = formsSelectors;

const ResetStepsButton = connect(
    combineSelectors({ hide: hasNoCompletedForms }),
    ({ onPress: resetRequest, text: 'DEV: Press to reset steps' })
)(SimpleButton)

export default ResetStepsButton