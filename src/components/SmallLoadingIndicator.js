//@flow
import * as React                        from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

type Props = { message: ?string }

/**
 * @function SmallLoadingIndicator
 * @param {Props} param0
 */
const SmallLoadingIndicator = ({ message = '' }: Props) => (
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
