import React            from 'react'
import { ScrollView }   from 'react-native'
import { SafeAreaView } from 'react-navigation'
import styles           from '../styles'

class GoalStepScreen extends React.PureComponent {
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <ScrollView style={styles.container} />
      </SafeAreaView>
    )
  }
}

export default GoalStepScreen
