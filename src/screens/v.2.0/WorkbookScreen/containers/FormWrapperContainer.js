// @flow
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
import { log }        from '2020_services/moengage'
import { LogAction }  from '2020_forms/form'

const formLogger = (event: LogAction) => {
  const { type, data } = event
  switch (type) {
  case 'CREATE':
    log('PAGE ANSWERED', data)
    break
  case 'UPDATE':
    log('PAGE UPDATE', data)
    break
  case 'FINISHED':
    log('FORM FINISHED', data)
    break
  default:
    log('UNKNOWN FORM EVENT', data)
  }
}

const merge = (props: Props) => {
  const { phase } = props
  const textStyle = mapPhaseToTextStyles(phase)
  const buttonContainerStyle = mapPhaseToButtonStyles(phase)
  const elementContainerStyle = mapPhaseToElementBackground(phase)
  const color = mapPhaseToColor(phase)
  const textAndButtonColor = mapPhaseToTextAndButtonColor(phase)

  return {
    ...props,
    log: formLogger,
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
