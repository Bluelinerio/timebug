// @flow
import React                from 'react'
import { View, ScrollView } from 'react-native'
import SubHeader            from '../SubHeader'
import ContactArea          from '../../containers/ContactScreen/ContactAreaContainer'
import styles               from '../../styles/contact'

type PhoneNumber = {
  digits: string,
  stringValue: string,
  type: string,
  label: string,
}

type Mail = {
  type: string,
  label: string,
  address: string,
  value: string,
}

type Props = {
  advisor: {
    name: string,
    category: string,
  },
  goToBoard: () => any,
  contact: {
    phoneNumbers: Array<PhoneNumber>,
    emailAddresses: Array<Mail>,
    displayName: string,
    thumbnailImageData: string,
  },
}

class ContactScreen extends React.PureComponent<Props> {
  _goBack = () => {
    const { goToBoard } = this.props
    goToBoard()
  }

  render() {
    const { advisor, contact } = this.props
    return (
      <ScrollView style={styles.container}>
        <SubHeader onBack={this._goBack} />
        <View style={[styles.container]}>
          <ContactArea
            advisor={advisor}
            contact={contact}
            goBack={this._goBack}
          />
        </View>
      </ScrollView>
    )
  }
}

export default ContactScreen
