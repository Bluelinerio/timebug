//@flow
import React            from 'react'
import { View, Switch } from 'react-native'
import styles           from '../../styles'

export type CheckboxComponentStyle = {
  container?: any,
  text?: any
}

export type CheckboxComponentProps = {
  type: string,
  formIndex: string,
  formKey: string,
  value: boolean | null,
  submitAnswers: any,
  step: string,
  valueType?: string,
  style?: CheckboxComponentStyle
}

const CheckboxComponent = ({
  value,
  formKey,
  formIndex,
  style = {},
  submitAnswers,
  step,
  valueType = 'boolean'
}: CheckboxComponentProps) => {
  return (
    <View style={[styles.row, styles.elementRow, style.row]}>
      <View style={[styles.element, style.container]}>
        <Switch
          style={[styles.checkBox, styles.center]}
          onValueChange={value => {
            const payload = {
              stepId: step,
              element: {
                key: formKey,
                value,
                formIndex,
                type: valueType
              }
            }
            submitAnswers(payload)
          }}
          value={!!value}
        />
      </View>
    </View>
  )
}

export default CheckboxComponent
