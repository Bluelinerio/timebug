import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { formStyles } from '../../styles'

const ButtonComponent = ({
  buttonHandler,
  field: {
    content = {
      text: 'someText'
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
    <Text style={formStyles.textInputLabelStyle}>{content.text}</Text>
    <View style={[formStyles.buttonComponentContainer, actions.length === 1 ? formStyles.centeredButton : {}]}>
      {actions.map(action => (
        <Button
          buttonStyle={formStyles.buttonComponentStyle}
          title={action.text}
          key={action.key}
          onPress={() => buttonHandler(action)}
        />
      ))}
    </View>
  </View>
)

export default ButtonComponent
