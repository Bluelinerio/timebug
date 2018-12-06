import { connect }                from 'react-redux'
import { compose }                from 'recompose'
import StepAudioButton, {
  StepAudioButtonProps,
}                                 from '../components/StepAudioButton'
import { mapPhaseToStylesHelper } from '../utils/colorsForStep'
import { openModal }              from '../../../../redux/actions/modal.actions'
import { key as audioModalKey }   from '../../../../components/AudioModal'
import { videoStatus }            from '../../../../HOC/AudioVideoComponentHOC'

type DispatchProps = {
  openAudio: () => any,
}

export type StepContentButtonContainerProps = {
  phase: string,
  title: string,
  icon: string,
  audio: string,
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  openAudio: ({ audio, icon, title }) =>
    dispatch(openModal({ key: audioModalKey, params: { audio, icon, title } })),
})

const mergeProps = (
  _,
  dispatchProps,
  ownProps: StepContentButtonContainerProps
): StepAudioButtonProps => {
  const { phase, audio } = ownProps

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
    icons,
    audio,
  }
}

export default compose(connect(null, mapDispatchToProps, mergeProps))(
  StepAudioButton
)
