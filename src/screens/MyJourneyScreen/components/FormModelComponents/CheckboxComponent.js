//@flow
import React              from 'react'
import { View, CheckBox } from 'react-native'
import styles             from '../../styles'

export type CheckboxComponentStyle = {
  container?: any,
  text?: any
}

export type CheckboxComponentProps = {
  type: string,
  formIndex: string,
  formKey: string,
  value: boolean | null,
  style?: CheckboxComponentStyle
}

const CheckboxComponent = ({
  value,
  formKey,
  formIndex,
  style = {}
}: CheckboxComponentProps) => (
  <View style={[styles.row, styles.elementRow, style.row]}>
    <View style={[styles.element, style.container]}>
      <CheckBox
        style={[styles.checkBox, styles.center]}
        onValueChange={() =>
          console.log(`KEY: ${formKey}, index: ${formIndex} `)
        }
        value={!!value}
      />
    </View>
  </View>
)

export default CheckboxComponent
