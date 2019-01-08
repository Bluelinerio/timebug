// @flow
import { compose, mapProps }              from 'recompose'

import { SectionValues }                  from '../context/SectionContext'
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

export default compose(mapProps(merge))(
  FormButton
)
