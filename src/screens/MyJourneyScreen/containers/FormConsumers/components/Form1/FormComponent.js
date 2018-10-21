//@flow
import React                    from 'react'
import { View }                 from 'react-native'
import { LockedEntryWithCheck } from '../../../../components/LockedEntry'
import styles                   from '../../../../styles'
import MeditationCheckin        from '../../containers/Form1/MeditationCheckinContainer'

type FormComponentProps = {
  step: number,
  extendedSubmit: () => any,
  award: {
    model: any,
    data: any
  }
}

const key = 'meditationCheckin'

const FormComponent = (props: FormComponentProps) => {
  const { award: { data, model } } = props
  return (
    <View style={[styles.container, styles.tableContainer]}>
      <LockedEntryWithCheck check={() => true}>
        <MeditationCheckin
          {...props}
          data={data[key]}
          formKey={key}
          model={model[key]}
        />
      </LockedEntryWithCheck>
    </View>
  )
}

export default FormComponent
