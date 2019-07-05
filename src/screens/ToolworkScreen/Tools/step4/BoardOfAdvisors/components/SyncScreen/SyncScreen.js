import React          from 'react'
import { View, Text } from 'react-native'
import SubHeader      from '../../components/SubHeader'
import SyncList       from '../../containers/SyncScreen/SyncListContainer'
import styles         from '../../styles/sync'

export type Props = {
  advisor: {
    name: string,
    category: string,
  },
  onBack: () => any,
  storeAwardData: (value: any, tool: any) => any,
  requestPermission: () => void,
  addContactForAdvisor: any => any,
  canHandleContacts: boolean,
  goToSettings: () => void,
  isRequesting: boolean,
}

class SyncScreen extends React.PureComponent<Props> {
  componentDidMount = () => {
    const { requestPermission } = this.props
    requestPermission()
  }

  _goToSettings = () => {
    const { goToSettings } = this.props
    goToSettings()
  }

  render() {
    const { advisor, onBack, canHandleContacts, isRequesting } = this.props
    return (
      <View style={styles.container}>
        <SubHeader onBack={onBack}>
          <View style={styles.advisorSyncNameContainer}>
            <Text style={styles.advisorSyncName}>
              Synchronizing for advisor: {advisor.name}
            </Text>
          </View>
        </SubHeader>
        {isRequesting ? null : canHandleContacts ? (
          <View style={[styles.listArea, styles.bordered]}>
            <SyncList {...this.props} />
          </View>
        ) : (
          <View style={styles.warningContainer}>
            <Text style={styles.warningText}>
              You have not enabled the use of your contacts, please go to{' '}
              <Text style={styles.link} onPress={this._goToSettings}>
                settings
              </Text>{' '}
              to enable it
            </Text>
          </View>
        )}
      </View>
    )
  }
}

export default SyncScreen
