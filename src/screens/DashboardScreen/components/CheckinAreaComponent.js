// @flow
import React                   from 'react'
import { View }                from 'react-native'
import EnergyLevelsCheckin     from '../containers/EnergyLevelsCheckinContainer'
import GoalsCheckinContainer   from '../containers/GoalsCheckinContainer'
import TimebugCheckinContainer from '../containers/TimebugCheckinContainer'
import RandomCheckinPicker     from './RandomCheckinPicker'
import styles                  from '../styles'

export type Props = {
  energyLevelsTool: any,
  goalsTool: any,
  timebugTool: any,
  tools: Array<any>
}

class CheckinAreaComponent extends React.PureComponent<Props> {
  render() {
    const { energyLevelsTool, goalsTool, timebugTool, tools} = this.props
    return (
      <View style={styles.checkinAreaContainer}>
        {energyLevelsTool && <EnergyLevelsCheckin tool={energyLevelsTool} />}
        {goalsTool && <GoalsCheckinContainer tool={goalsTool} />}
        {timebugTool && <TimebugCheckinContainer tool={timebugTool} />}
        <RandomCheckinPicker tools={tools} />
      </View>
    )
  }
}

export default CheckinAreaComponent
