import React             from 'react'
import { View }          from 'react-native'
import { Button }        from 'react-native-elements'
import styles            from '../../styles'
import FormElementHeader from './FormElementHeader'

const ButtonComponent = ({
  buttonHandler,
  field: {
    content = {
      text: '',
    },
    actions,
  },
  formStyles = {},
}: {
  buttonHandler: any => any,
  field: {
    content?: any,
    actions: Array<{
      type: string,
      payload: any,
    }>,
  },
  formStyles: any,
}) => (
  <View>
    <FormElementHeader text={content.text} textStyle={formStyles.textStyle} />
    <View
      style={[
        styles.buttonComponentContainer,
        actions.length === 1 ? styles.centeredButton : {},
      ]}
    >
      {actions.map(action => (
        <Button
          buttonStyle={[
            styles.buttonComponentStyle,
            formStyles.buttonContainerStyle,
          ]}
          title={action.text}
          key={action.key}
          onPress={() => buttonHandler(action)}
        />
      ))}
    </View>
  </View>
)

export default ButtonComponent
