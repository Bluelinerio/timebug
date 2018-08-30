import { connect }                             from 'react-redux'
import { compose }                             from 'recompose'
import StepSideButton, {
  StepSideButtonProps
}                                              from '../components/StepSideButton'
import { mapPhaseAndCompletionToStylesHelper } from '../utils/colorsForStep'
import { openModal }                           from '../../../redux/actions/modal.actions'
import { key as audioModalKey }                from '../../../components/AudioModal'

type DispatchProps = {
  openAudio: () => any
}

export type StepContentButtonContainerProps = {
  phase: string,
  complete: boolean,
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
): StepSideButtonProps => {
  const { openAudio } = dispatchProps
  const { phase, complete, title, icon, audio } = ownProps

  const onPress = () => openAudio({ title, icon, audio })

  const {
    container: containerStyle,
    icon: iconStyle
  } = mapPhaseAndCompletionToStylesHelper(phase, complete)

  return {
    containerStyle,
    iconStyle,
    onPress,
    name: 'Audio'
  }
}

export default compose(connect(null, mapDispatchToProps, mergeProps))(
  StepSideButton
)
