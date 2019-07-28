import { StyleSheet }                  from 'react-native'
import { connect }                     from 'react-redux'
import { mapProps, compose }           from 'recompose'
import selectors                       from '../../../src/redux/selectors'
import Form                            from 'react-native-forms/components/Form'
import model                           from '../../../src/forms/custom/forms/goals'
import { translateCMSPhaseToStandard } from '../../../src/services/cms'

const Style = StyleSheet.create({
  something: {},
})

const mapStateToProps = state => {
  const data = selectors.formData(state)
  const steps = selectors.steps(state)
  return {
    data,
    steps,
  }
}

const merge = props => {
  const { data, onFinish, steps, editionIndex = null } = props
  const step = steps['5']
  const stepNumber = step.number
  const formData = (data[stepNumber] && data[stepNumber].value) || null
  const phase = translateCMSPhaseToStandard(step.type)
  const disableAnswers = true
  return {
    model,
    value: formData,
    onFinish,
    stepNumber: stepNumber,
    formContainerStyle: Style.something,
    key: stepNumber,
    phase,
    disableAnswers,
    editionIndex,
    extra: {
      step,
    },
  }
}

export default compose(connect(mapStateToProps), mapProps(merge))(Form)
