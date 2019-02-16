// @flow
import React                                    from 'react'
import { View, Text, ActivityIndicator, Alert } from 'react-native'
import ContactService, { NativeContact }        from '2020_services/contactService'
import SyncList                                 from '../../components/SyncScreen/SyncList'
import SearchBar                                from '../../components/SyncScreen/SearchBar'
import { getContactName }                       from '../../utils'
import styles, { indicatorColor }               from '../../styles/sync'

type State = {
  contacts: Array<NativeContact>,
  isLoading: boolean,
  hasError: boolean,
}

type Props = {
  advisor: {
    name: string,
  },
  goToBoard: () => any,
  goToContact: (obj: { contact: any, advisor: any }) => any,
  storeAwardData: (value: any, tool: any) => any,
  addContactForAdvisor: any => any,
  tool: any,
  data: {
    value: Array<any>,
  },
}

class SyncListContainer extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)
    const { advisor } = props
    this.state = {
      text: advisor.name,
      contacts: null,
      isLoading: true,
      hasError: false,
    }
  }

  _selectContact = (contact: any) => {
    const {
      advisor,
      tool,
      storeAwardData,
      addContactForAdvisor,
      data,
    } = this.props
    addContactForAdvisor(contact)
    if (data && data.value) {
      const { value } = data
      const previousAdvisor = value.find(adv => adv.advisorId === advisor.id)
      if (!previousAdvisor)
        storeAwardData(
          [...(value || []), { contact, advisorId: advisor.id }],
          tool
        )
      else
        storeAwardData(
          [
            ...value.filter(adv => adv.advisorId !== advisor.id),
            { ...previousAdvisor, contact },
          ],
          tool
        )
    } else storeAwardData([{ contact, advisorId: advisor.id }], tool)
    this._contactNotificationHandler(contact, advisor)
  }

  _contactNotificationHandler = (contact: any, advisor: any) => {
    const { goToBoard, goToContact } = this.props
    const name = getContactName(contact)
    Alert.alert(
      'Confirmation',
      `Want to notify ${name} that you have registered them as a trusted advisor?`,
      [
        { text: 'Yes', onPress: () => goToContact({ contact, advisor }) },
        { text: 'No', onPress: () => goToBoard() },
      ],
      { cancelable: false }
    )
  }

  componentDidMount() {
    const { text } = this.state
    this._handleGettingContacts(text)
  }

  _handleGettingContacts = (text: string) => {
    if (text.length < 2) return
    else {
      this.setState({ isLoading: true })
      ContactService.checkPermissionsAndGetContacts(this.state.text)
        .then(contacts => {
          this.setState({ isLoading: false, contacts })
        })
        .catch(() => {
          this.setState({ isLoading: false, hasError: true })
        })
    }
  }

  _onTextChange = (text: string) => {
    this.setState({ text })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.text !== this.state.text)
      this._handleGettingContacts(this.state.text)
  }

  componentDidCatch() {
    this.setState({ isLoading: false, hasError: true })
  }

  render() {
    const { contacts, isLoading, hasError, text } = this.state
    return (
      <React.Fragment>
        <SearchBar value={text} onTextChange={this._onTextChange} />
        {hasError ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              An error has ocurred, make sure to have added the required
              permissions
            </Text>
          </View>
        ) : isLoading ? (
          <View style={styles.indicatorContainer}>
            <ActivityIndicator size={'large'} color={indicatorColor} />
          </View>
        ) : (
          <React.Fragment>
            <SyncList contacts={contacts} onSelect={this._selectContact} />
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

export default SyncListContainer
