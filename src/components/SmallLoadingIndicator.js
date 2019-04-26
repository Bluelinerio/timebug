//@flow
import * as React                        from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const SmallLoadingIndicator = ({ message = '' }: { message: ?string }) => (
  <View
    style={{
      flex: 1,
      marginTop: 20,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text
      style={{
        marginBottom: 5,
      }}
    >
      {message}
    </Text>
    <ActivityIndicator />
  </View>
)

export default SmallLoadingIndicator
