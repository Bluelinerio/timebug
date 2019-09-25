// @flow
import { mapProps }  from 'recompose'
import type { Step } from '../services/cms'
import models        from '../forms/custom/forms'

type Props = {
  step: Step,
}

const merge = (props: Props) => {
  const { step = {} } = props
  const { number } = step
  const formModel = models[`${number}`] || null
  return {
    ...props,
    formModel,
  }
}

export default mapProps(merge)
