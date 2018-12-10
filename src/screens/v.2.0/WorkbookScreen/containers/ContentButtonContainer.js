// @flow
import { connectContext }                 from 'react-connect-context'
import { SectionConsumer, SectionValues } from '../context/SectionContext'
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

export default compose(connectContext(SectionConsumer), mapProps(merge))(
  FormButton
)