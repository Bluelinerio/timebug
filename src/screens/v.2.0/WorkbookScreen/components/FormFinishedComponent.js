// @flow
import React          from 'react'
import { View, Text } from 'react-native'
import type { Step }  from '../../../../services/cms'

type Props = {
  color: string,
  step: Step,
  onButtonPress: () => any,
  text: string,
}

class FormFinishedComponent extends React.PureComponent<Props> {
  render() {
    return (
      <View>
        <Text>Stuff</Text>
      </View>
    )
  }
}

export default FormFinishedComponent
