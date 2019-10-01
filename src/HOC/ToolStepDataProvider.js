// @flow
import { connect }           from 'react-redux'
import { compose, mapProps } from 'recompose'
import selectors             from '2020_redux/selectors'

type Props = {
  formData: any,
  tool: {
    require?: {
      steps: Array<string>,
    },
  },
}

type ProvidedProps = {
  stepsData: {
    [x: string]: any,
  },
}

const mapStateToProps = (state: any) => {
  const formData = selectors.formData(state)
  return {
    formData,
  }
}

const merge = (props: Props): ProvidedProps => {
  const { tool, formData, ...rest } = props
  const { require = {} } = tool
  const { steps = [] } = require
  const stepData = steps.reduce((data, stepNumber) => {
    const dataForStep = formData[stepNumber] || null
    return {
      ...data,
      [stepNumber]: dataForStep,
    }
  }, {})

  return {
    tool,
    stepData,
    ...rest,
  }
}

export default compose(connect(mapStateToProps), mapProps(merge))
