// @flow
import React                       from 'react'
import { View }                    from 'react-native'
import { sideBarStyles as styles } from '../styles'
import StepAudioButton             from '../containers/StepAudioButtonContainer'
import HelpButton                  from '../containers/HelpButtonContainer'
import ContentButton               from '../containers/ContentButtonContainer'
import FormButton                  from '../containers/FormButtonContainer'

export type Props = {
  barStyle: any,
  phase: string,
  audio: string,
  step: string,
}

class Sidebar extends React.PureComponent<Props> {
  render() {
    const { barStyle, audio, phase, step } = this.props
    return (
      <View style={[styles.sideBarContainer, barStyle]}>
        <StepAudioButton audio={audio} phase={phase} />
        <HelpButton step={step} phase={phase} />
        <ContentButton audio={audio} phase={phase} />
        <FormButton step={step} phase={phase} />
      </View>
    )
  }
}

export default Sidebar
