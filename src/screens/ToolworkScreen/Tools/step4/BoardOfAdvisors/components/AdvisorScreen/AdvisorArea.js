import React                           from 'react'
import {
  View,
  Image,
  Text,
  Linking,
  Alert,
  Platform,
  TouchableOpacity,
}                                      from 'react-native'
import Icon                            from 'react-native-vector-icons/Ionicons'
import { icon }                        from '2020_resources/images'
import { displayBase64 }               from '2020_utils/formatHelpers'
import DialogContainer, { actions }    from './DialogContainer'
import styles, { iconColor, iconSize } from '../../styles/advisor'

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
  name: string,
  category: string,
  phoneNumbers: Array<PhoneNumber>,
  emailAddresses: Array<Mail>,
  thumbnail: string,
  displayName: string,
  hasContact: boolean,
  goToSync: () => any,
  handleUnsync: () => any,
}

type State = {
  openDialog: actions.PHONE | actions.MAIL | actions.SMS | null,
}

class AdvisorArea extends React.PureComponent<Props, State> {
  state = {
    openDialog: null,
  }

  _onCallPress = () => {
    const { phoneNumbers } = this.props
    if (phoneNumbers.length === 1) {
      const [number] = phoneNumbers
      this._handlePhoneSelection({ value: number.stringValue }, actions.PHONE)
    } else this.setState({ openDialog: actions.PHONE })
  }

  _onMailPress = () => {
    const { emailAddresses } = this.props
    if (emailAddresses.length === 1) {
      const [mail] = emailAddresses
      this._handleEmailSelection({ value: mail.value }, actions.MAIL)
    } else this.setState({ openDialog: actions.MAIL })
  }

  _onSmsPress = () => {
    const { phoneNumbers } = this.props
    if (phoneNumbers.length === 1) {
      const [number] = phoneNumbers
      this._handlePhoneSelection({ value: number.stringValue }, actions.SMS)
    } else this.setState({ openDialog: actions.SMS })
  }

  _checkUrlAndOpen = url => {
    return Linking.canOpenURL(url)
      .then(supported => {
        if (supported) return Linking.openURL(url)
        else
          Alert.alert(
            'An error has ocurred calling this phone, maybe it is badly written'
          )
      })
      .catch(() =>
        Alert.alert(
          'An error has ocurred calling this phone, maybe it is badly written'
        )
      )
  }

  _callNumber = num => {
    let number = null
    if (Platform.OS !== 'android') number = `telprompt:${num}`
    else number = `tel:${num}`
    this._checkUrlAndOpen(number)
  }

  _onClose = () => this.setState({ openDialog: null })

  _handlePhoneSelection = (result, type) => {
    const { value } = result
    switch (type) {
    case actions.PHONE:
      return this._callNumber(`${value}`)
    case actions.SMS:
      return this._checkUrlAndOpen(`sms:${value}`)
    default:
      return
    }
  }

  _handleEmailSelection = result => {
    const { value } = result
    this._checkUrlAndOpen(
      `mailto:${value}?subject=I need your support&body=I have appointed you as an important advisor in my life and need you to support me on my journey`
    )
  }

  render() {
    const {
      thumbnail,
      name,
      category,
      phoneNumbers,
      emailAddresses,
      displayName,
      hasContact,
      goToSync,
      handleUnsync,
    } = this.props
    const { openDialog } = this.state
    return (
      <React.Fragment>
        <DialogContainer
          open={openDialog}
          phoneNumbers={phoneNumbers}
          emailAddresses={emailAddresses}
          onClose={this._onClose}
          onPhoneSelect={this._handlePhoneSelection}
          onMailSelect={this._handleEmailSelection}
        />
        <View style={styles.advisorImageSection}>
          <Image
            style={styles.advisorIcon}
            source={thumbnail ? { uri: displayBase64(thumbnail) } : icon}
          />
        </View>
        <View style={styles.advisorTextSection}>
          <Text style={styles.advisorName}>{name}</Text>
          {displayName && (
            <Text style={styles.advisorCategory}>
              Synced to - {displayName}
            </Text>
          )}
          <Text style={styles.advisorCategory}>{category}</Text>
          {hasContact && (
            <TouchableOpacity onPress={handleUnsync}>
              <Text style={[styles.advisorCategory, styles.link]}>Unsync</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.contactSection}>
          {phoneNumbers &&
            phoneNumbers.length > 0 && (
              <TouchableOpacity
                style={styles.iconWrapper}
                onPress={this._onCallPress}
              >
                <Icon size={iconSize} name={'ios-call'} color={iconColor} />
              </TouchableOpacity>
            )}
          {phoneNumbers &&
            phoneNumbers.length > 0 && (
              <TouchableOpacity
                style={styles.iconWrapper}
                onPress={this._onSmsPress}
              >
                <Icon
                  size={iconSize}
                  name={'ios-chatboxes'}
                  color={iconColor}
                />
              </TouchableOpacity>
            )}
          {emailAddresses &&
            emailAddresses.length > 0 && (
              <TouchableOpacity
                style={styles.iconWrapper}
                onPress={this._onMailPress}
              >
                <Icon size={iconSize} name={'ios-mail'} color={iconColor} />
              </TouchableOpacity>
            )}
          {!hasContact && (
            <TouchableOpacity style={styles.syncButton} onPress={goToSync}>
              <Text style={styles.syncText}>Sync this contact</Text>
            </TouchableOpacity>
          )}
        </View>
      </React.Fragment>
    )
  }
}

export default AdvisorArea
