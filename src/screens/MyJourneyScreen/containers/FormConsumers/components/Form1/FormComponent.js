//@flow
import React from 'react'
import { View, Text } from 'react-native'
import { LockedEntryWithCheck } from '../../../../components/LockedEntry'
import styles from '../../../../styles'

type FormComponentProps = {
  elements: [any],
  header: HeaderProps
}

const FormComponent = (props: FormComponentProps) => {
  const { elements, header } = props
  console.log(props)
  return (
    <View style={[styles.container, styles.tableContainer]}>
      <LockedEntryWithCheck check={() => true}>
        <View>
          <Text>HEY THERE JIMMY</Text>
        </View>
      </LockedEntryWithCheck>
    </View>
  )
}

export default FormComponent
