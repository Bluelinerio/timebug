// @flow
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { Step } from '../../../../services/cms'
import styles from '../styles'
import { goToTool, goToToolParams } from '../../../../redux/actions/nav.actions.js'


export type Props = {
  color: string,
  step: Step,
  onButtonPress: () => any,
  text: string,
  title: string,
  hasNext: boolean,
  nextStepNumber: number,
  toolUnlockName: string
}

class FormFinishedComponent extends React.PureComponent<Props> {
  _onPress = () => {
    const { onButtonPress } = this.props
    onButtonPress()
  }

  render() {
    const { color, text, title, hasNext, nextStepNumber, toolUnlockName } = this.props

    return (
      <View style={[styles.container, styles.doneContentContainer]}>
        <View style={styles.doneTitleContainer}>
          <Text style={[styles.doneTitle, { color }]}>{title}</Text>
        </View>
        <View style={styles.doneTextContainer}>
          <Text style={[styles.doneText, { color }]}>{text}</Text>
        </View>
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
         <View style={styles.toolUnlockedButtonContainer}>
          <TouchableOpacity
            style={[styles.toolUnlockButton, { backgroundColor: color }]}
            onPress={Dispatch(goToTool(params))}
          >
            <Text style={styles.toolUnlockButtontext}> {toolUnlockName}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default FormFinishedComponent
