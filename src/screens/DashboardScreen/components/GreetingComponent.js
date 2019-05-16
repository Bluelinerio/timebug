// @flow
import React          from 'react'
import { View, Text } from 'react-native'
import styles         from '../styles'

export type Props = {
  name: string,
  stepTitle: string | null,
  onPress: () => void,
  greeting: string,
  text: string,
}

class GreetingComponent extends React.PureComponent<Props> {
  render() {
    const { name, stepTitle, onPress, greeting, text } = this.props
    return (
      <View style={styles.greetingContainer}>
        <View style={styles.greetingHeader}>
          {name && (
            <View>
              <Text style={styles.greeting}>
                {greeting} {name}!
              </Text>
            </View>
          )}
        </View>
        {stepTitle &&
          text && (
            <View>
              <Text style={styles.recommendation}>
                {text}
                <Text style={styles.recommendationEmphasized} onPress={onPress}>
                  {stepTitle}
                </Text>
              </Text>
            </View>
          )}
      </View>
    )
  }
}

export default GreetingComponent
