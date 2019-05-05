import React                  from 'react'
import { View }               from 'react-native'
import PhaseProgressContainer from '../containers/PhaseProgressContainer'
import styles, { cellsWidth } from '../styles'

class ProgressAreaComponent extends React.PureComponent {
  render() {
    return (
      <View style={styles.progressContainer}>
        <PhaseProgressContainer
          hideOverall={true}
          maxColumns={3}
          width={cellsWidth}
        />
      </View>
    )
  }
}

export default ProgressAreaComponent
