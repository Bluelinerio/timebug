//@flow
import * as React from 'react'
import { View, ActivityIndicator } from 'react-native'
import Text from '2020_components/Text'

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
