// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { Step }                    from '../../../../services/cms'
import { splitByLines }                 from '../utils/textSplit'
import styles                           from '../styles'

export type Props = {
  color: string,
  step: Step,
  onButtonPress: () => any,
  text: string,
  title: string,
  hasNext: boolean,
  nextStepNumber: number,
}

class FormFinishedComponent extends React.PureComponent<Props> {
  _onPress = () => {
    const { onButtonPress } = this.props
    onButtonPress()
  }

  render() {
    const { color, text, title, hasNext, nextStepNumber } = this.props
    const paragraphs = splitByLines(text)
    return (
      <View style={[styles.container, styles.doneContentContainer]}>
        <View style={styles.doneTitleContainer}>
          <Text style={[styles.doneTitle, { color }]}>{title}</Text>
        </View>
        <View style={styles.doneTextContainer}>
          {paragraphs &&
            paragraphs.map((paragraph, index) => (
              <Text key={index} style={[styles.doneText, { color }]}>
                {paragraph}
              </Text>
            ))}
        </View>
        {hasNext && (
          <View style={styles.doneButtonContainer}>
            <TouchableOpacity
              style={[styles.doneButton, { backgroundColor: color }]}
              onPress={this._onPress}
            >
              <Text style={styles.doneButtontext}>Next {nextStepNumber}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

export default FormFinishedComponent
