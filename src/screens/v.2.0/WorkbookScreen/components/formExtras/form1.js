import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MeditationTimer                  from '../../containers/MeditationTimerContainer'
import styles                           from '../../styles'

const requiredProps = ['color', 'textAndButtonColor']

const audio =
  'https://assets.ctfassets.net/6h184bey8vl3/1xKUjd7si8oGAke206UumQ/cd8a21a4c233f91ced98fdcebfc19e79/Step_1_Ambiance.mp3'

type Props = {
  color: string,
  textAndButtonColor: string,
  toggleForm: () => any,
}

class FormComponent extends React.PureComponent<Props> {
  render() {
    const { toggleForm, textAndButtonColor } = this.props
    return (
      <View style={styles.container}>
        <Text style={[styles.preFormHeader, { textAndButtonColor }]}>
          The rocking chair meditation
        </Text>
        <View style={[styles.preFormContentContainer]}>
          <MeditationTimer file={audio} color={textAndButtonColor} showIndicator={false} />
          <View style={[styles.container, styles.preFormButtonContainer]}>
            <TouchableOpacity
              style={[styles.preFormNextButton, { backgroundColor: textAndButtonColor }]}
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
