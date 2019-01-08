// @flow
import { SectionValues } from '../context/SectionContext'
import { compose, mapProps }              from 'recompose'
import FormButton                         from '../components/FormButton'
import { mapPhaseToStylesHelper }         from '../utils/colorsForStep'

const merge = ({ phase, ...rest }: { phase: string }) => {
  const iconStyle: iconStyle = mapPhaseToStylesHelper(phase)
  const icon = 'Book'
  const ownSection = SectionValues.textContent
  return {
    ...rest,
    ownSection,
    iconStyle,
    icon,
  }
}

export default compose(mapProps(merge))(
  FormButton
)