// @flow
import React                                   from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { icon }                                from '2020_resources/images'
import { displayBase64 }                       from '2020_utils/formatHelpers'
import { getContactName }                      from '../../utils'
import styles                                  from '../../styles/board'

type Props = {
  advisor: {
    category: string,
    name: string,
    id: string,
    contact: any | null,
  },
  goToAdvisor: any => any,
  goToSync: any => any,
}

class AdvisorTile extends React.PureComponent<Props> {
  goToSync = () => {
    const { goToSync, advisor } = this.props
    goToSync({ advisor })
  }

  goToAdvisor = () => {
    const { goToAdvisor, advisor } = this.props
    goToAdvisor({ advisor })
  }

  render() {
    const { advisor } = this.props
    const { contact } = advisor
    return (
      <TouchableOpacity
        style={styles.advisorTileContainer}
        onPress={this.goToAdvisor}
      >
        <View style={styles.advisorImageSection}>
          <Image
            style={styles.advisorIcon}
            source={
              contact
                ? contact.contact
                  ? contact.contact.imageDataAvailable
                    ? { uri: displayBase64(contact.contact.thumbnailImageData) }
                    : icon
                  : icon
                : icon
            }
          />
        </View>
        <View style={styles.advisorContent}>
          <View style={styles.advisorTextContent}>
            <Text style={styles.advisorName}>{advisor.name}</Text>
            <Text style={styles.advisorCategory}>{advisor.category}</Text>
          </View>
          <View style={styles.advisorSyncContainer}>
            {!contact || !contact.contact ? (
              <TouchableOpacity
                style={styles.paddedLink}
                onPress={this.goToSync}
              >
                <Text style={styles.advisorSyncLink}>Sync now</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.paddedLink}>
                <Text style={styles.contactName}>
                  Synced with - {getContactName(contact.contact)}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default AdvisorTile
