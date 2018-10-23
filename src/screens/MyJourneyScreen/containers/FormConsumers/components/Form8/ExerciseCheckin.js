//@flow
import React                   from 'react'
import { View, Text, Switch }  from 'react-native'
import styles, { stylesStep1 } from '../../../../styles'

export type ExerciseCheckinComponentProps = {
  extendedSubmit: () => any,
  step: string,
  formKey: string,
  model: {
    fields: {
      [key: string]: {
        options: any
      }
    }
  },
  mapDataToPayload: () => any,
  fieldKey: string,
  value: { value: boolean }
}

class ExerciseCheckinComponent extends React.PureComponent<
  ExerciseCheckinComponentProps
> {
  _onValueChange = (value: any) => {
    const {
      extendedSubmit,
      step,
      formKey,
      model,
      mapDataToPayload,
      fieldKey
    } = this.props
    extendedSubmit(mapDataToPayload(step, formKey, fieldKey, value, model))
  }

  render() {
    const { model: { fields }, value, fieldKey } = this.props
    const { options } = fields[fieldKey]
    return (
      <View style={[styles.container, stylesStep1.formContainer]}>
        <View>
          <Text style={stylesStep1.caption}>
            {' '}
            {options.header || 'Did you exercise today?'}
          </Text>
        </View>
        <View style={stylesStep1.switchContainer}>
          <Text style={stylesStep1.yesNoHint}>No</Text>
          <Switch value={value.value} onValueChange={this._onValueChange} />
          <Text style={stylesStep1.yesNoHint}>Yes</Text>
        </View>
        {value && value.value === true ? (
          <Text style={stylesStep1.congratulations}>Good job!</Text>
        ) : null}
      </View>
    )
  }
}

export default ExerciseCheckinComponent
