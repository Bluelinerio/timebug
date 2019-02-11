// @flow
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
import DialogContainer, { actions }    from '../DialogContainer'
import NoContact                       from './NoContact'
import styles, { iconColor, iconSize } from '../../styles/contact'

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
  phoneNumbers: Array<PhoneNumber>,
  emailAddresses: Array<Mail>,
  thumbnail: string,
  displayName: string,
  hasContact: boolean,
  name: string,
  userName: string,
  category: string,
  goBack: () => any,
}

type State = {
  openDialog: actions.PHONE | actions.MAIL | actions.SMS | null,
}

class ContactArea extends React.PureComponent<Props, State> {
  state = {
    openDialog: null,
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
    const { goBack } = this.props
    return Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          Linking.openURL(url)
          goBack()
        } else
          Alert.alert(
            'Error',
            'An error has ocurred using this contact, maybe it is badly written',
            [
              { text: 'Use other medium', onPress: () => null },
              { text: 'Do not message contact', onPress: () => goBack() },
            ],
            { cancelable: false }
          )
      })
      .catch(() =>
        Alert.alert(
          'Error',
          'An error has ocurred using this contact, maybe it is badly written',
          [
            { text: 'Use other medium', onPress: () => null },
            { text: 'Do not message contact', onPress: () => goBack() },
          ],
          { cancelable: false }
        )
      )
  }

  _getSmsBody = (url: string) => {
    const { userName, displayName, category } = this.props
    const bodySeparator = Platform.OS === 'ios' ? '&' : '?'
    const link = `Apple App Store: https://itunes.apple.com/us/app/lifevision/id1340439748?ls=1 \n\nGoogle Play Store: https://play.google.com/store/apps/details?id=io.lifevision`
    const msg = `Hi ${displayName}, ${userName} has added you as an advisor for Life Category: ${category} on the 20/20 Life Vision path. That means they'll contact you from time to time asking for advice on how to achieve their goals.\nWant to learn more about the 20/20 Life Vision Challenge? Visit https://2020lifevision.com, and download the app! \n\n${link}.`
    return `${url}${bodySeparator}body=${msg}`
  }

  _getEmailBody = (url: string) => {
    const { userName, displayName, category } = this.props
    const link = `Apple App Store: https://itunes.apple.com/us/app/lifevision/id1340439748?ls=1 \n\nGoogle Play Store: https://play.google.com/store/apps/details?id=io.lifevision`
    const msg = `Hi ${displayName}, ${userName} has added you as an advisor for Life Category: ${category} on the 20/20 Life Vision path. That means they'll contact you from time to time asking for advice on how to achieve their goals.\nWant to learn more about the 20/20 Life Vision Challenge? Visit https://2020lifevision.com, and download the app! \n\n${link}.`
    const subject = `${userName} has added you as an advisor on his 20/20 Life Vision Challenge`
    return `${url}?subject=${subject}&body=${msg}`
  }

  _onClose = () => this.setState({ openDialog: null })

  _handlePhoneSelection = (result, type) => {
    const { value } = result
    switch (type) {
    case actions.SMS:
      return this._checkUrlAndOpen(this._getSmsBody(`sms:${value}`))
    default:
      return
    }
  }

  _handleEmailSelection = result => {
    const { value } = result
    this._checkUrlAndOpen(this._getEmailBody(`mailto:${value}`))
  }

  render() {
    const {
      name,
      thumbnail,
      phoneNumbers,
      emailAddresses,
      displayName,
      goBack,
    } = this.props
    const { openDialog } = this.state
    if (
      (!phoneNumbers && !emailAddresses) ||
      (phoneNumbers.length === 0 && emailAddresses.length === 0)
    )
      return <NoContact goBack={goBack} />
    else
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
          </View>
          <View style={styles.contactSection}>
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
          </View>
        </React.Fragment>
      )
  }
}

export default ContactArea
