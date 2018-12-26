//@flow
import React                                  from 'react'
import { compose }                            from 'recompose'
import { SelectedKeys }                       from '../../../types'
import {
  HandlerFunction,
  FormDataForExercise,
}                                             from '../../../../../../HOC/GenericFormConsumer'
import { AwardForStep }                       from '../../../../../../HOC/AwardProvider'
import { buildHeader }                        from '../../utils/FormModelToElement'
import { STEP5, getFormRequestedKeysForStep } from '../../../Forms'
import { HeaderProps }                        from '../../../../components/GenericHeader'
import { ListElementProps }                   from '../../../../components/ListElement'

/* eslint-disable-next-line */
const wantedKeys: SelectedKeys = getFormRequestedKeysForStep(STEP5)

type ComponentDataForForm = {
  recentGoals: any,
}

type PresentationProps = {
  componentData: ComponentDataForForm,
  award: AwardForStep,
}

type ComponentProps = {
  header: HeaderProps,
  elements: ListElementProps,
}

export const handler: HandlerFunction = (
  props: FormDataForExercise
): PresentationProps => {
  return props
}

const transformPropsForPresentation = (
  props: PresentationProps
): ComponentProps => {
  /* eslint-disable-next-line */
  const { formData, award: { data, model }, ...rest } = props

  const header = {
    elements: buildHeader(model),
  }

  const elements = null

  return {
    header,
    elements,
    ...rest,
  }
}

const componentPropsHandler = compose(transformPropsForPresentation, handler)

const Form5Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => {
    const providedProps = componentPropsHandler(props)
    return <Component {...props} {...providedProps} />
  }
  return Consumer
}

export default Form5Consumer
