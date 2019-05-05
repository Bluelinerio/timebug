// @flow
import React                   from 'react'
import { View }                from 'react-native'
import EnergyLevelsCheckin     from '../containers/EnergyLevelsCheckinContainer'
import GoalsCheckinContainer   from '../containers/GoalsCheckinContainer'
import TimebugCheckinContainer from '../containers/TimebugCheckinContainer'
import styles                  from '../styles'

export type Props = {
  energyLevelsTool: any,
  goalsTool: any,
  timebugTool: any,
}

class CheckinAreaComponent extends React.PureComponent<Props> {
  render() {
    const { energyLevelsTool, goalsTool, timebugTool } = this.props
    return (
      <View style={styles.checkinAreaContainer}>
        {energyLevelsTool && <EnergyLevelsCheckin tool={energyLevelsTool} />}
        {goalsTool && <GoalsCheckinContainer tool={goalsTool} />}
        {timebugTool && <TimebugCheckinContainer tool={timebugTool} />}
      </View>
    )
  }
}

export default CheckinAreaComponent
