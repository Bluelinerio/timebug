// @flow
import React from 'react'
import ExerciseCheckin, {
  key as exerciseKey
}            from '../../containers/Form8/ExerciseCheckinContainer'

type Props = {
  award: {
    data: any,
    model: any
  },
  step: string,
  mapDataToPayload: () => any,
  extendedSubmit: () => any
}

// TODO: remake this call to use this component for all forms that require it
const mapComponents = (key: string, props: Props): React.Node<any> => {
  const { award: { model, data } } = props
  switch (key) {
  case exerciseKey: {
    const newProps = {
      data: data[key],
      formKey: key,
      model: model[key],
      step: props.step,
      mapDataToPayload: props.mapDataToPayload,
      extendedSubmit: props.extendedSubmit
    }
    return <ExerciseCheckin key={key} {...newProps} />
  }
  default:
    return null
  }
}

type FormComponentProps = {
  award: {
    data: any,
    model: any
  }
}

class FormComponentSwitch extends React.PureComponent<FormComponentProps> {
  render() {
    const { award: { model } } = this.props
    return (
      <React.Fragment>
        {Object.keys(model).map(key => mapComponents(key, this.props))}
      </React.Fragment>
    )
  }
}

export default FormComponentSwitch
