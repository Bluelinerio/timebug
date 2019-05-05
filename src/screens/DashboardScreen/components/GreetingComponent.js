// @flow
import React          from 'react'
import { View, Text } from 'react-native'
import styles         from '../styles'

export type Props = {
  name: string,
  stepTitle: string | null,
  stepNumber: number | null,
  onPress: () => void,
  greeting: string,
}

class GreetingComponent extends React.PureComponent<Props> {
  render() {
    const { name, stepTitle, stepNumber, onPress, greeting } = this.props
    return (
      <View style={styles.greetingContainer}>
        <View style={styles.greetingHeader}>
          {name && (
            <View>
              <Text style={styles.greeting}>{greeting} {name}!</Text>
            </View>
          )}
        </View>
        {stepNumber && (
          <View>
            <Text style={styles.recommendation}>
              You last completed step #{stepNumber}. For your next step we
              suggest:{' '}
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
