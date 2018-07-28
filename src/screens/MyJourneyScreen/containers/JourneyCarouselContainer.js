import React       from 'react';
 
import { connect } from 'react-redux'

import JourneyCarouselComponent from '../components/JourneyCarouselComponent';

import FormComponent from './FormConsumers'

import selectors    from '../../../redux/selectors'

const mapStateToProps = (state) => ({
    forms : selectors.sortedCompletedForms(state)
})

const render = ({ step }) => (
    <FormComponent step={step} />
)

const dummyEntries = (length) => {
    return Array(length)
        .fill()
        .map((el, index) => {
            return {
                step: "2",
                render
            }
        })
}


const merge = (stateProps, dispatchProps, ownProps) => {
    const { forms } = stateProps
    console.log("HOW MANY", forms.length)
    const entries = dummyEntries(3)
    return {
        ...stateProps,
        dispatchProps,
        ownProps,
        entries,
        render
    }
}

export default connect(mapStateToProps, null, merge)(JourneyCarouselComponent)