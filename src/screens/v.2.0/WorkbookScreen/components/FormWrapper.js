import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import Form from '../../../../forms/custom/components/Form'
import styles from '../styles'

export type Props = {
  audio:
    | string
    | {
        uri: string,
      },
  color: string,
}

class FormWrapper extends React.PureComponent<Props> {
  state = {
    beginForm: false,
  }

  _onPress = () => {
    this._toggleForm()
  }

  _toggleForm = () => {
    const { beginForm } = this.state
    this.setState({ beginForm: !beginForm })
  }

  render() {
    const { color } = this.props
    const { beginForm } = this.state
    return beginForm ? (
      <Form {...this.props} />
    ) : (
      <View style={styles.container}>
        <Text style={[styles.preFormHeader, { color }]}>
          The rocking chair meditation
        </Text>
        <View style={[styles.preFormContentContainer]}>
          <View style={[styles.container, styles.iconArea]}>
            <View style={[styles.icon, { backgroundColor: color }]}>
              <Icon color={'#FAFAFA'} size={30} name={'ios-play'} />
            </View>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              style={[styles.preFormNextButton, { backgroundColor: color }]}
              onPress={this._onPress}
            >
              <Text style={styles.preFormNextButtonText}> Next </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default FormWrapper
