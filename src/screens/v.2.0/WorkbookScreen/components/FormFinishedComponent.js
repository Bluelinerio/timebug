// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { Step }                    from '2020_services/cms'
import { log }                          from '2020_services/amplitude'
import styles                           from '../styles'

export type Props = {
  color: string,
  step: Step,
  onButtonPress: () => any,
  text: string,
  title: string,
  hasNext: boolean,
  nextStepNumber: number,
  toolButton: {
    text: string,
    onPress: () => any,
  },
}

class FormFinishedComponent extends React.PureComponent<Props> {
  _onPress = () => {
    const { onButtonPress } = this.props
    onButtonPress()
  }

  _onToolPress = () => {
    const { toolButton = null } = this.props
    if (!toolButton) return
    const { onPress } = toolButton
    if (onPress) onPress()
  }

  componentDidMount() {
    const { step } = this.props
    log('FORM_FINISHED', { step })
  }

  render() {
    const {
      color,
      text,
      title,
      hasNext,
      nextStepNumber,
      toolButton,
    } = this.props

    return (
      <View style={[styles.container, styles.doneContentContainer]}>
        <View style={styles.doneTitleContainer}>
          <Text style={[styles.doneTitle, { color }]}>{title}</Text>
        </View>
        <View style={styles.doneTextContainer}>
          <Text style={[styles.doneText, { color }]}>{text}</Text>
        </View>
        <View style={styles.doneButtonArea}>
          {hasNext && (
            <View style={styles.doneButtonContainer}>
              <TouchableOpacity
                style={[styles.doneButton, { backgroundColor: color }]}
                onPress={this._onPress}
              >
                <Text style={styles.doneButtontext}>STEP {nextStepNumber}</Text>
              </TouchableOpacity>
            </View>
          )}
          {toolButton && (
            <View style={styles.doneButtonContainer}>
              <TouchableOpacity
                style={[styles.doneButton, { backgroundColor: color }]}
                onPress={this._onToolPress}
              >
                <Text style={styles.doneButtontext}>
                  {toolButton.text || `Use tool`}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    )
  }
}

export default FormFinishedComponent
