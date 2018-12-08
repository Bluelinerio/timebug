//@flow
import React         from 'react'
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
      <React.Fragment>
        <VideoAwareSVG file={audio} icons={icons} iconStyle={iconStyle} />
      </React.Fragment>
    )
  }
}

export default StepAudioButton
