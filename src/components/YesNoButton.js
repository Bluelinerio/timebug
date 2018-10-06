import * as React                          from 'react'
import { View, Button, Platform }          from 'react-native'
import { deepBlue, lessSaturatedDeepBlue } from '../constants/colors'

type YesNoButtonProps = {
  onPress: () => any,
  title: string
}

const YesNoButton = ({ onPress, title }: YesNoButtonProps) => (
  <View
    style={{
      alignSelf: 'center',
      marginVertical: 10,
      marginHorizontal: 20
    }}
  >
    <Button
      title={title}
      color={Platform.OS === 'ios' ? deepBlue : lessSaturatedDeepBlue}
      onPress={onPress}
    />
  </View>
)

export default YesNoButton
