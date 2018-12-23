import FormWrapper    from '../components/FormWrapper'
import { mapProps }   from 'recompose'
import type { Props } from '../components/WorkbookSnippet'
import {
  mapPhaseToTextStyles,
  mapPhaseToColor,
  mapPhaseToButtonStyles,
  mapPhaseToElementBackground,
  mapPhaseToTextAndButtonColor,
}                     from '../utils/colorsForStep'

const merge = (props: Props) => {
  const { phase } = props
  const textStyle = mapPhaseToTextStyles(phase)
  const buttonContainerStyle = mapPhaseToButtonStyles(phase)
  const elementContainerStyle = mapPhaseToElementBackground(phase)
  const color = mapPhaseToColor(phase)
  const textAndButtonColor = mapPhaseToTextAndButtonColor(phase)

  return {
    ...props,
    formStyles: {
      textStyle,
      buttonContainerStyle,
      accentColor: color,
      elementContainerStyle,
    },
    color,
    textAndButtonColor,
  }
}

export default mapProps(merge)(FormWrapper)
