// @flow
import React     from 'react'
import { Alert } from 'react-native'

type Props = {
  goBack: () => any,
}

class NoContact extends React.PureComponent<Props> {
  componentDidMount() {
    const { goBack } = this.props
    Alert.alert(
      'No contact data',
      'This contact does not have phone numbers or emails associated',
      [{ text: 'OK' }],
      { cancelable: false }
    )
    goBack()
  }

  render() {
    return null
  }
}

export default NoContact
