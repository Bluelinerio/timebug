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
  changeSection: (string) => null
}

class EnergyLevelsScreen extends React.PureComponent<Props> {
  _setMenu = () => {
    const { changeSection } = this.props
    changeSection(SECTIONS.MENU)
  }

  _setCheckin = () => {
    const { changeSection } = this.props
    changeSection(SECTIONS.CHECK_IN)
  }

  _setWeeklyLog = () => {
    const { changeSection } = this.props
    changeSection(SECTIONS.WEEKLY_LIST)
  }

  render() {
    const { selectedSection } = this.props
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Header
            display={selectedSection === SECTIONS.MENU ? false : true}
            onBack={this._setMenu}
          />
          <View style={styles.toolContainer}>
            <EnergyLevelsScreenContent
              {...this.props}
              setMenu={this._setMenu}
              setCheckin={this._setCheckin}
              setWeeklyLog={this._setWeeklyLog}
            />
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default EnergyLevelsScreen
