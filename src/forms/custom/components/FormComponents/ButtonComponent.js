import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import styles from '../../styles'

const ButtonComponent = ({
  buttonHandler,
  field: {
    content = {
      text: ''
    },
    actions
  }
}: {
  buttonHandler: any => any,
  field: {
    content?: any,
    actions: Array<{
      type: string,
      payload: any
    }>
  }
}) => (
  <View>
    <Text style={styles.textInputLabelStyle}>{content.text}</Text>
    <View
      style={[
        styles.buttonComponentContainer,
        actions.length === 1 ? styles.centeredButton : {}
      ]}
    >
      {actions.map(action => (
        <Button
          buttonStyle={styles.buttonComponentStyle}
          title={action.text}
          key={action.key}
          onPress={() => buttonHandler(action)}
        />
      ))}
    </View>
  </View>
)

export default ButtonComponent
