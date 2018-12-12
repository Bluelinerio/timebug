import FormWrapper                               from '../components/FormWrapper'
import { mapProps }                              from 'recompose'
import type { Props }                            from '../components/WorkbookSnippet'
import { mapPhaseToTextStyles, mapPhaseToColor } from '../utils/colorsForStep'

const merge = (props: Props) => {
  const { phase } = props
  const textStyle = mapPhaseToTextStyles(phase)
  const color = mapPhaseToColor(phase)
  return {
    ...props,
    textStyle,
    color,
  }
}

export default mapProps(merge)(FormWrapper)
