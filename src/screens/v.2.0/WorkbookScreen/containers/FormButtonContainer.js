// @flow
import { connectContext }                 from 'react-connect-context'
import { SectionConsumer, SectionValues } from '../context/SectionContext'
import { compose, mapProps }              from 'recompose'
import FormButton                         from '../components/FormButton'
import { mapPhaseToStylesHelper }         from '../utils/colorsForStep'

const merge = ({ phase, step, ...rest }: { phase: string, step: string }) => {
  const iconStyle: iconStyle = mapPhaseToStylesHelper(phase)
  const icon = 'Form'
  const ownSection = SectionValues.form

  return {
    ...rest,
    step,
    ownSection,
    iconStyle,
    icon,
  }
}

export default compose(connectContext(SectionConsumer), mapProps(merge))(
  FormButton
)
