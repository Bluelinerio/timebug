//@flow
import React         from 'react'
import { View }      from 'react-native'
import styles        from '../styles'
import VideoAwareSVG from '../containers/VideoAwareSVGContainer'

export type StepAudioButtonProps = {
  containerStyle: any,
  iconStyle: any,
  icons: {
    [x: string]: string,
  },
  audio: string,
}

class StepAudioButton extends React.PureComponent<StepAudioButtonProps> {
  render() {
    const { iconStyle, icons, audio } = this.props
    return (
      <View style={[styles.container, styles.center]}>
        <VideoAwareSVG file={audio} icons={icons} iconStyle={iconStyle} />
      </View>
    )
  }
}

export default StepAudioButton
