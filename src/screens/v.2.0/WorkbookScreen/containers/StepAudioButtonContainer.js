import { compose, mapProps } from 'recompose'
import StepAudioButton, {
  StepAudioButtonProps,
} from '../components/StepAudioButton'
import { mapPhaseToStylesHelper } from '../utils/colorsForStep'
import { videoStatus } from '../../../../HOC/AudioVideoComponentHOC'

export type StepContentButtonContainerProps = {
  phase: string,
  icon: string,
  audio: string,
}

const mergeProps = (
  ownProps: StepContentButtonContainerProps
): StepAudioButtonProps => {
  const { phase, audio, barStyle } = ownProps

  const icons = {
    [videoStatus.READY]: 'AudioMuted',
    [videoStatus.PLAYING]: 'Audio',
    [videoStatus.PAUSED]: 'AudioMuted',
    [videoStatus.FINISHED]: 'AudioMuted',
    [videoStatus.FAIL]: 'AudioError',
  }

  const iconStyle: iconStyle = mapPhaseToStylesHelper(phase)

  return {
    iconStyle,
    barStyle,
    icons,
    audio,
  }
}

export default compose(mapProps(mergeProps))(StepAudioButton)
