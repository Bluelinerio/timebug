import React            from 'react'
import { ScrollView }   from 'react-native'
import { SafeAreaView } from 'react-navigation'
import styles           from '../styles'
import tron             from 'reactotron-react-native'

class GoalStepScreen extends React.PureComponent {
  render() {
    tron.log(this.props)
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
