import React          from 'react'
import { View, Text } from 'react-native'
import styles         from '../../styles/advisor'

type Reflection = {
  date: string,
  text: string,
  id: string,
}

type Props = {
  reflections: Array<Reflection>,
}

class AdvisorLog extends React.PureComponent<Props> {
  render() {
    const { reflections } = this.props
    return (
      <React.Fragment>
        <View style={styles.advisorLogTitleContainer}>
          <Text style={styles.advisorLogTitle}>Advisor Log</Text>
        </View>
        <View style={styles.advisorLog}>
          {reflections &&
            reflections.map(reflection => {
              return (
                <View style={styles.advisorLogElement} key={reflection.id}>
                  <Text style={styles.logDate}>{reflection.date}</Text>
                  <Text style={styles.logText}>{reflection.text}</Text>
                </View>
              )
            })}
        </View>
      </React.Fragment>
    )
  }
}

export default AdvisorLog
