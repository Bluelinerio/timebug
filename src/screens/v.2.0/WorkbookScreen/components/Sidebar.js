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
  selectedSection: string,
  changeSection: string => any,
}

class Sidebar extends React.PureComponent<Props> {
  render() {
    const { barStyle, audio, phase, step, selectedSection, changeSection } = this.props

    return (
      <View style={[styles.sideBarContainer, barStyle]}>
        <StepAudioButton audio={audio} phase={phase} barStyle={barStyle} />
        <HelpButton step={step} phase={phase} barStyle={barStyle} />
        <ContentButton audio={audio} phase={phase} barStyle={barStyle} selectedSection={selectedSection} changeSection={changeSection} />
        <FormButton step={step} phase={phase} barStyle={barStyle} selectedSection={selectedSection} changeSection={changeSection} />
      </View>
    )
  }
}

export default Sidebar
