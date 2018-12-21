import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MeditationTimer                  from '../../containers/MeditationTimerContainer'
import styles                           from '../../styles'

const requiredProps = ['color']

const audio =
  'https://assets.ctfassets.net/6h184bey8vl3/1xKUjd7si8oGAke206UumQ/cd8a21a4c233f91ced98fdcebfc19e79/Step_1_Ambiance.mp3'

type Props = {
  color: string,
  toggleForm: () => any,
}

class FormComponent extends React.PureComponent<Props> {
  render() {
    const { color, toggleForm } = this.props
    return (
      <View style={styles.container}>
        <Text style={[styles.preFormHeader, { color }]}>
          The rocking chair meditation
        </Text>
        <View style={[styles.preFormContentContainer]}>
          <MeditationTimer file={audio} color={color} showIndicator={false} />
          <View style={[styles.container, styles.preFormButtonContainer]}>
            <TouchableOpacity
              style={[styles.preFormNextButton, { backgroundColor: color }]}
              onPress={toggleForm}
            >
              <Text style={styles.preFormNextButtonText}> Next </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default {
  Component: FormComponent,
  requiredProps,
}
