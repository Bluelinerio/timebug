//@flow
import React from 'react'
import { View, CheckBox } from 'react-native'
import styles from '../../styles'
import tron from 'reactotron-react-native'

export type CheckboxComponentStyle = {
  container?: any,
  text?: any
}

export type CheckboxComponentProps = {
  type: string,
  formIndex: string,
  key: string,
  value: boolean | null,
  style?: CheckboxComponentStyle
}

const CheckboxComponent = ({
  value,
  key,
  formIndex,
  style = {}
}: CheckboxComponentProps) => (
  <View style={[styles.row, styles.elementRow, style.row]}>
    <View style={[styles.element, style.container]}>
      <CheckBox
        style={[styles.checkBox, styles.center]}
        onValueChange={() => tron.log(`KEY: ${key}, index: ${formIndex} `)}
        value={!!value}
      />
    </View>
  </View>
)

export default CheckboxComponent
