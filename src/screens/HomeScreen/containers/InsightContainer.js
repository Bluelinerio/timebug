import { connect } from 'react-redux'
import getInsight, { dummyFormValue } from './../../../static/insights'
import InsightComponent from '../components/InsightComponent'
import selectors from '../../../redux/selectors'

const mapStateToProps = (state) => {
    const { latestStepId, sortedStepsWithForms } = selectors.sortedStepsWithForms(state)

    console.log(latestStepId)
    console.log(sortedStepsWithForms)
    return {
        insight: "Loremloremlorem"
    }
}

export default connect(mapStateToProps, null)(InsightComponent)
