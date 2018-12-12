import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Form                             from '../../../../forms/custom/components/Form'
import MeditationTimer                  from '../containers/MeditationTimerContainer'
import styles                           from '../styles'

export type Props = {
  color: string,
  extra: any,
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
    const { color, extra: { step } } = this.props
    const { beginForm } = this.state
    const audio = (step && step.audio && step.audio.uri) || undefined
    return beginForm ? (
      <Form {...this.props} />
    ) : (
      <View style={styles.container}>
        <Text style={[styles.preFormHeader, { color }]}>
          The rocking chair meditation
        </Text>
        <View style={[styles.preFormContentContainer]}>
          <MeditationTimer file={audio} color={color} showIndicator={false} />
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
