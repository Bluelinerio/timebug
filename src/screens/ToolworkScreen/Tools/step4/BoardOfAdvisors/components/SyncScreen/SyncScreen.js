import React          from 'react'
import { View, Text } from 'react-native'
import styles         from '../../styles/sync'
import SubHeader      from '../../components/SubHeader'
import SyncList       from '../../containers/SyncScreen/SyncListContainer'

export type Props = {
  advisor: {
    name: string,
    category: string,
  },
  onBack: () => any,
  storeAwardData: (value: any, tool: any) => any,
  addContactForAdvisor: any => any,
  canHandleContacts: boolean,
}

class SyncScreen extends React.PureComponent<Props> {
  render() {
    const { advisor, onBack, canHandleContacts } = this.props
    return (
      <View style={styles.container}>
        <SubHeader onBack={onBack}>
          <View style={styles.advisorSyncNameContainer}>
            <Text style={styles.advisorSyncName}>
              Synchronizing for advisor: {advisor.name}
            </Text>
          </View>
        </SubHeader>
        {canHandleContacts ? (
          <View style={[styles.listArea, styles.bordered]}>
            <SyncList {...this.props} />
          </View>
        ) : (
          <View style={styles.warningContainer}>
            <Text style={styles.warningText}>
              You have not enabled the use of your contacts, please go to
              settings to enable it
            </Text>
          </View>
        )}
      </View>
    )
  }
}

export default SyncScreen
