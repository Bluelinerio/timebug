import React          from 'react'
import { View, Text } from 'react-native'
import { connect }    from 'react-redux'
import styles         from '../styles'
import type Step      from '../../../services/cms'
import selectors      from '../../../redux/selectors'

const mapStateToProps = state => {
  const steps: [Step] = selectors.sortedSteps(state)
  const stepForIndex = (index: number): Step => steps[index]
  return { stepForIndex }
}

type GreetProps = {
  index: number,
  stepForIndex: (index: number) => Step
}

const Greet = ({ index, stepForIndex } : GreetProps) => (
  <View>
    <Text style={styles.title} numberOfLines={1}>
      {stepForIndex(index) ? stepForIndex(index).stepScreenDescription : ''}
    </Text>
    <Text style={styles.subtitle} numberOfLines={2}>
      {stepForIndex(index) ? stepForIndex(index).snippet : ''}
    </Text>
  </View>
)

export default connect(mapStateToProps)(Greet)
