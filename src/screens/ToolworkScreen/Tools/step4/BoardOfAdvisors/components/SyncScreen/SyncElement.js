// @flow
import React                                   from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { NativeContact }                       from '2020_services/contactService'
import { icon }                                from '2020_resources/images'
import { getContactName, displayBase64 }       from '2020_utils/formatHelpers'
import styles                                  from '../../styles/sync'

type Props = {
  contact: NativeContact,
  onSelect: any => any,
}

class SyncElement extends React.PureComponent<Props> {
  _onSelect = () => {
    const { contact, onSelect } = this.props
    onSelect(contact)
  }

  render() {
    const { contact } = this.props
    const fullName = getContactName(contact)
    return (
      <TouchableOpacity style={styles.contactTile} onPress={this._onSelect}>
        <View style={styles.contactImageContainer}>
          <Image
            source={
              contact.imageDataAvailable
                ? { uri: displayBase64(contact.thumbnailImageData) }
                : icon
            }
            defaultSource={icon}
            style={styles.contactImage}
          />
        </View>
        <View style={styles.contactTileNameContainer}>
          <Text style={styles.contactName}>{fullName}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default SyncElement
