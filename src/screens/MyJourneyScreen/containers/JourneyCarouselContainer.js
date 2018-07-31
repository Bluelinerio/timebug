import React                      from 'react'
import { connect }                from 'react-redux'
import JourneyCarouselComponent   from '../components/JourneyCarouselComponent'
import FormComponent, { Entries } from './FormConsumers'
import selectors                  from '../../../redux/selectors'

type JourneyCarouselStateProps = {
  forms: [{
    stepId: number
  }]
}

const mapStateToProps = (state: any): JourneyCarouselStateProps => ({
  forms: selectors.sortedCompletedForms(state)
})

const render = ({ step }) => <FormComponent step={step} />

const buildEntries = (forms) => {
  return forms
    ? forms
        .map(form => {
          const element = Entries[form.stepId]
          if (element && element.render)
            return {
              title: element.title,
              step: `${form.stepId}`
            }
          return
        })
        .filter(el => !!el)
    : []
}

const merge = (stateProps, dispatchProps, ownProps) => {
  const { forms } = stateProps
  const entries = buildEntries(forms)
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    entries,
    render
  }
}

export default connect(mapStateToProps, null, merge)(JourneyCarouselComponent)
