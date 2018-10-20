//@flow
import React from 'react'
import { View, Text, Switch } from 'react-native'
import { LockedEntryWithCheck } from '../../../../components/LockedEntry'
import styles, { stylesStep1 } from '../../../../styles'
import tron from 'reactotron-react-native'
import MeditationCheckin from './MeditationCheckin'

type FormComponentProps = {
  step: number,
  extendedSubmit: () => any,
  award: {
    model: any,
    data: any
  }
}

const FormComponent = (props: FormComponentProps) => {
  const { award: { data, model } } = props
  const key = 'meditationCheckin'
  return (
    <View style={[styles.container, styles.tableContainer]}>
      <LockedEntryWithCheck check={() => true}>
        <MeditationCheckin {...props} formKey={key} model={model[key]}></MeditationCheckin>
      </LockedEntryWithCheck>
    </View>
  )
}

export default FormComponent
