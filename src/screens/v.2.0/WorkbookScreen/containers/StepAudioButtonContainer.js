import { connect }                             from 'react-redux'
import { compose }                             from 'recompose'
import StepAudioButton, {
  StepAudioButtonProps
}                                              from '../components/StepAudioButton'
import { mapPhaseToStylesHelper }              from '../utils/colorsForStep'
import { openModal }                           from '../../../../redux/actions/modal.actions'
import { key as audioModalKey }                from '../../../../components/AudioModal'

type DispatchProps = {
  openAudio: () => any
}

export type StepContentButtonContainerProps = {
  phase: string,
  title: string,
  icon: string,
  audio: string
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  openAudio: ({ audio, icon, title }) =>
    dispatch(openModal({ key: audioModalKey, params: { audio, icon, title } }))
})

const mergeProps = (
  _,
  dispatchProps,
  ownProps: StepContentButtonContainerProps
): StepAudioButtonProps => {
  const { openAudio } = dispatchProps
  const { phase, title, icon, audio } = ownProps

  const onPress = () => openAudio({ title, icon, audio })

  const iconStyle : iconStyle = mapPhaseToStylesHelper(phase)

  return {
    iconStyle,
    onPress,
    name: 'Audio'
  }
}

export default compose(connect(null, mapDispatchToProps, mergeProps))(
  StepAudioButton
)
