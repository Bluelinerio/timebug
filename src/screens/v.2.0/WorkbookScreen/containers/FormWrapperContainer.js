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
import { LogAction }  from 'react-native-forms/types/formTypes'

const logger = (step: number) => (event: LogAction) => {
  const { type, data: formData } = event
  const data = {
    ...formData,
    step,
  }
  switch (type) {
  case 'CREATE':
    log('PAGE_ANSWERED', data)
    break
  case 'UPDATE':
    log('PAGE_UPDATE', data)
    break
  case 'FINISHED':
    log('FORM_FINISHED', data)
    break
  default:
    log('UNKNOWN_FORM_EVENT', data)
  }
}

const merge = (props: Props) => {
  const { phase, extra: { step } } = props
  const textStyle = mapPhaseToTextStyles(phase)
  const buttonContainerStyle = mapPhaseToButtonStyles(phase)
  const elementContainerStyle = mapPhaseToElementBackground(phase)
  const color = mapPhaseToColor(phase)
  const textAndButtonColor = mapPhaseToTextAndButtonColor(phase)

  const formLogger = logger(step.number)

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
