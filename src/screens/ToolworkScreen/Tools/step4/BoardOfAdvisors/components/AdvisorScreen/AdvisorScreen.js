// @flow
import React                from 'react'
import { View, ScrollView } from 'react-native'
import AdvisorArea          from '../../containers/AdvisorScreen/AdvisorAreaContainer'
import SubHeader            from '../SubHeader'
import LogArea              from './LogArea'
import styles               from '../../styles/advisor'

export type Props = {
  advisor: {
    name: string,
    category: string,
  },
  onBack: () => any,
  storeAwardData: (value: any, tool: any) => any,
  addContactForAdvisor: any => any,
  goToSync: (object: { advisor: any }) => any,
}

class AdvisorScreen extends React.PureComponent<Props> {
  _goToSync = () => {
    const { goToSync, advisor } = this.props
    goToSync({ advisor })
  }

  render() {
    const { advisor, onBack } = this.props
    return (
      <ScrollView style={styles.container}>
        <SubHeader onBack={onBack} />
        <View style={[styles.container]}>
          <AdvisorArea advisor={advisor} goToSync={this._goToSync} />
        </View>
        <View style={styles.container}>
          <LogArea {...this.props} />
        </View>
      </ScrollView>
    )
  }
}

export default AdvisorScreen
