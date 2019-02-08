import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles/sync'
import SubHeader from '../../components/SubHeader'
import SyncList from '../../containers/SyncScreen/SyncListContainer'

export type Props = {
  advisor: {
    name: string,
    category: string,
  },
  onBack: () => any,
  storeAwardData: (value: any, tool: any) => any,
  addContactForAdvisor: any => any,
}

class SyncScreen extends React.PureComponent<Props> {
  render() {
    const { advisor, onBack } = this.props
    return (
      <View style={styles.container}>
        <SubHeader onBack={onBack}>
          <View style={styles.advisorSyncNameContainer}>
            <Text style={styles.advisorSyncName}>
              Synchronizing for advisor: {advisor.name}
            </Text>
          </View>
        </SubHeader>
        <View style={[styles.listArea, styles.bordered]}>
          <SyncList {...this.props} />
        </View>
      </View>
    )
  }
}

export default SyncScreen
