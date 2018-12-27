//@flow
import React from 'react'
import { View } from 'react-native'
import { LockedEntryWithCheck } from '../../../../components/LockedEntry'
import styles from '../../../../styles'
import FormComponentSwitch from './FormComponentSwitch'

type FormComponentProps = {
  step: number,
  hasCompletedStep: boolean,
  extendedSubmit: () => any,
  mapDataToPayload: () => {
    stepId: number,
    element: any,
  },
  award: {
    model: any,
    data: any,
  },
}

const FormComponent = (props: FormComponentProps) => {
  const { hasCompletedStep } = props
  return (
    <View style={[styles.container, styles.tableContainer]}>
      <LockedEntryWithCheck check={() => hasCompletedStep}>
        <FormComponentSwitch {...props} />
      </LockedEntryWithCheck>
    </View>
  )
}

export default FormComponent
