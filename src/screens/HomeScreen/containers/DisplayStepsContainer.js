//@flow
import { connect } from 'react-redux'
import { completedFormsChronologically } from '../../../redux/selectors/forms.selectors'
import DisplaySteps from '../components/DisplaySteps'
import combineSelectors from '../../../redux/selectors/combineSelectors';

const DisplayStepsContainer = connect(
    combineSelectors({
        steps: completedFormsChronologically
    })
)(DisplaySteps)

export default DisplayStepsContainer
