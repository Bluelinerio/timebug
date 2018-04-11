// @flow
import invariant                            from 'invariant'
import { connect }                          from 'react-redux'
import PagninatedCarousel                   from '../components/PagninatedCarousel'
import type Item                            from '../components/SliderEntry'
import type Step                            from '../../../services/cms'
import { phaseForStepAtIndex }              from '../../../services/cms'
import selectors                            from '../../../redux/selectors'
import { goToAssignmentFlow }               from '../../../redux/actions/nav.actions'

const mapStateToProps = (state: any) => {
  const phaseColors = selectors.phaseColors(state)
  const backgroundColorAtIndex = (step: number) =>
    phaseColors[phaseForStepAtIndex(step)]
  const isLoggedIn = selectors.isLoggedIn(state)
  const completedFormsData = isLoggedIn
    ? selectors.completedFormsData(state)
    : {}
  const incompleteFormsData = isLoggedIn
    ? selectors.incompleteFormsData(state)
    : {}

  const steps: [Step] = selectors.sortedSteps(state).map(step => {
    if (!isLoggedIn) return step

    const completedForm = completedFormsData[step.stepId]
    const lastUpdate = (completedForm && completedForm.updatedAt) || 0
    const incompleteForm = incompleteFormsData[step.stepId]
    return {
      ...step,
      iconName: lastUpdate !== 0 ? 'check' : incompleteForm ? 'edit' : null,
      progress: {
        lastUpdate,
        incompleteForm
      }
    }
  })

  const { latestStepId } = Object.keys(incompleteFormsData).reduce((sum, latestStepId) => {
    const timeStamp = incompleteFormsData[latestStepId] && incompleteFormsData[latestStepId].timeStamp
    if(timeStamp) {
      if(!sum.timeStamp || sum.timeStamp < timeStamp) {
        return {
          latestStepId,
          timeStamp
        }
      }
    }
    return sum
  }, {})

  const activeSliderIndex = latestStepId ? steps.map(s => s.stepId).indexOf(latestStepId) : 0
  
  invariant(activeSliderIndex >= 0, `failed finding latestStepId: ${latestStepId} in steps: ${steps.map(s => s.stepId)}`)

  const items: [Item] = steps.map((step) => ({
    ...step,
    subtitle: `Step ${step.number}, Phase: ${step.type}`
  }))
  return {
    backgroundColorAtIndex,
    items,
    activeSliderIndex
  }
}

const onPress = (step, index) => goToAssignmentFlow({ step, index })

export default connect(mapStateToProps, { onPress })(PagninatedCarousel)
