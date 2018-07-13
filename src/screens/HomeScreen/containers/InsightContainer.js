import { connect } from 'react-redux'
import getInsight, { dummyFormValue } from './../../../static/insights'
import InsightComponent from '../components/InsightComponent'
import selectors from '../../../redux/selectors'
import R from 'ramda'

const mapStateToProps = (state) => {
    const latestForm = R.last(selectors.completedFormsChronologically(state))

    const insightText = getInsight(latestForm.stepId, dummyFormValue)

    return {
        insightText
    }
}

export default connect(mapStateToProps, null)(InsightComponent)
