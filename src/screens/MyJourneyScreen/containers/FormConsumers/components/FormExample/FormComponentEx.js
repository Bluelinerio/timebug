//@flow
import React          from 'react'
import { View, Text } from 'react-native'

type FormComponentProps = {
  data: any,
  injected: string
}

const FormComponentExample = ({ data, injected }: FormComponentProps) => {
  return (
    <View>
      <Text style={{ fontWeight: '700', fontSize: 20 }}>{data.subtitle}</Text>
      <Text>{data.text}</Text>
      {injected && <Text>This was injected {injected}</Text>}
    </View>
  )
}

export default FormComponentExample
