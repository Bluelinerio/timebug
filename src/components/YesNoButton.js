import * as React from 'react'
import {
  View,
  Button,
  Platform
} from 'react-native'
import {
  deepBlue,
  lessSaturatedDeepBlue
} from '../constants/colors';

export default ({onPress, title}) => (
  <View 
    style={{
      alignSelf:'center', 
      marginVertical: 10,
      marginHorizontal: 20,
    }}
  >
    <Button
      title={title}
      color={ Platform.OS === 'ios' ? deepBlue : lessSaturatedDeepBlue }
      onPress={onPress}
    />
  </View>
)
