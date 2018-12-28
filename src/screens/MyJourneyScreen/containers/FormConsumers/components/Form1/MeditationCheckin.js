//@flow
import React                   from 'react'
import { View, Text, Switch }  from 'react-native'
import styles, { stylesStep1 } from '../../../../styles'

export type MeditationCheckinComponentProps = {
  extendedSubmit: () => any,
  step: string,
  formKey: string,
  model: {
    fields: {
      [key: string]: {
        options: any,
      },
    },
  },
  mapDataToPayload: () => any,
  fieldKey: string,
  value: { value: boolean },
  daysInRowCount?: number,
}

class MeditationCheckinComponent extends React.PureComponent<
  MeditationCheckinComponentProps
> {
  _onValueChange = (value: any) => {
    const {
      extendedSubmit,
      step,
      formKey,
      model,
      mapDataToPayload,
      fieldKey,
    } = this.props
    extendedSubmit(mapDataToPayload(step, formKey, fieldKey, value, model))
  }

  render() {
    const { model: { fields }, value, fieldKey, daysInRowCount } = this.props
    const { options } = fields[fieldKey]
    return (
      <View style={[styles.container, stylesStep1.formContainer]}>
        <View>
          <Text style={stylesStep1.caption}>
            {' '}
            {options.header || 'Did you meditate today?'}
          </Text>
        </View>
        <View style={stylesStep1.switchContainer}>
          <Text style={stylesStep1.yesNoHint}>No</Text>
          <Switch value={value.value} onValueChange={this._onValueChange} />
          <Text style={stylesStep1.yesNoHint}>Yes</Text>
        </View>
        {value && value.value === true ? (
          <View>
            <Text style={stylesStep1.congratulations}>
              Good job!{' '}
              {daysInRowCount && daysInRowCount % 5 === 0
                ? `- Keep going!`
                : ''}
            </Text>
            <Text style={stylesStep1.streakText}>
              {daysInRowCount && daysInRowCount > 1
                ? `Current Streak - ${daysInRowCount} days`
                : ''}
            </Text>
          </View>
        ) : null}
      </View>
    )
  }
}

export default MeditationCheckinComponent
