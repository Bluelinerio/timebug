import { compose, mapProps } from 'recompose'
import SideBar from '../components/Sidebar'
import { mapBarStylesHelper } from '../utils/colorsForStep'
import { translateCMSPhaseToStandard } from '../../../../services/cms'
import type { Step } from '../../../../services/cms'
import type { Props as StepBarProps } from '../components/StepBar'

const merge = ({ step, ...rest }: { step: Step }): StepBarProps => {
  const { type, audio, number } = step
  const phase = translateCMSPhaseToStandard(type)
  const barStyle = mapBarStylesHelper(phase)

  return {
    ...rest,
    phase,
    audio: (audio && audio.uri) || undefined,
    barStyle,
    step: number,
  }
}

export default compose(mapProps(merge))(SideBar)
