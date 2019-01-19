import { Platform }               from 'react-native'
import { compose, mapProps }      from 'recompose'
import MeditationTimer, { Props } from '../components/MeditationTimer'
import { videoStatus as status }  from '../../../../HOC/AudioVideoComponentHOC'
import AudioVideoHOC              from '../../../../HOC/AudioVideoComponentHOC'

export type StepContentButtonContainerProps = {
  audio: string,
  color: string,
  videoStatus: string,
  handle: () => any,
}

const mergeProps = (ownProps: StepContentButtonContainerProps): Props => {
  const { color, videoStatus, handle, currentPosition, totalLength } = ownProps

  const icons = {
    [status.READY]: 'ios-play',
    [status.PLAYING]: 'ios-pause',
    [status.PAUSED]: 'ios-play',
    [status.FINISHED]: 'ios-play',
    [status.FAIL]: 'ios-close',
    [status.PENDING]: 'ios-time',
  }

  const icon = icons[videoStatus]

  const overrideStyle = {
    [status.READY]: {},
    [status.PLAYING]: {
      ...Platform.select({
        android: {
          paddingLeft: 1,
        },
        ios: {},
      }),
    },
    [status.PAUSED]: {},
    [status.FINISHED]: {},
    [status.FAIL]: {},
    [status.PENDING]: {},
  }

  const style = overrideStyle[videoStatus]

  return {
    color,
    icon,
    handle,
    currentPosition,
    totalLength,
    isPending: videoStatus === status.PENDING,
    errored: videoStatus === status.FAIL,
    style,
  }
}

export default compose(AudioVideoHOC, mapProps(mergeProps))(MeditationTimer)
