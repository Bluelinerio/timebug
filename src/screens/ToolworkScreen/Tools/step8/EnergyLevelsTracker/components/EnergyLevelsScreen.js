// @flow
import React                     from 'react'
import { View }                  from 'react-native'
import EnergyLevelsScreenContent from './EnergyLevelsScreenContent'
import Header                    from './Header'
import { SECTIONS }              from '../constants'
import type { ToolProps }        from '../../../types'
import styles                    from '../styles'

type Props = ToolProps & {
  selectedSection: string,
  setMenu: () => any,
  setCheckin: () => any,
  setWeeklyLog: () => any,
}

class EnergyLevelsScreen extends React.PureComponent<Props> {
  render() {
    const { selectedSection, setMenu } = this.props
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Header
            display={selectedSection === SECTIONS.MENU ? false : true}
            onBack={setMenu}
          />
          <View style={styles.toolContainer}>
            <EnergyLevelsScreenContent {...this.props} />
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default EnergyLevelsScreen
