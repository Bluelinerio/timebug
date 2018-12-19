import FormWrapper    from '../components/FormWrapper'
import { mapProps }   from 'recompose'
import type { Props } from '../components/WorkbookSnippet'
import {
  mapPhaseToTextStyles,
  mapPhaseToColor,
  mapPhaseToButtonStyles,
  mapPhaseToElementBackground,
}                     from '../utils/colorsForStep'

const merge = (props: Props) => {
  const { phase } = props
  const textStyle = mapPhaseToTextStyles(phase)
  const buttonContainerStyle = mapPhaseToButtonStyles(phase)
  const elementContainerStyle = mapPhaseToElementBackground(phase)
  const color = mapPhaseToColor(phase)
  return {
    ...props,
    formStyles: {
      textStyle,
      buttonContainerStyle,
      accentColor: color,
      elementContainerStyle,
    },
    color,
  }
}

export default mapProps(merge)(FormWrapper)
