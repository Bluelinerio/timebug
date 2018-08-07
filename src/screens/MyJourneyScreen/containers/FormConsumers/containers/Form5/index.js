//@flow
import React                                  from 'react'
import { SelectedKeys }                       from '../../../types'
import {
  HandlerFunction,
  FormDataForExercise
}                                             from '../../../../../../HOC/GenericFormConsumer'
import getDataFromForm                        from '../../utils/DataFromForm'
import { buildHeader }                        from '../../utils/FormModelToElement'
import { LABEL, STRUCT }                      from '../../../../../../static/awards/modelTypes'
import { STEP5, getFormRequestedKeysForStep } from '../../../Forms'

const wantedKeys: SelectedKeys = getFormRequestedKeysForStep(STEP5)

export const handler: HandlerFunction = ({ formData }: FormDataForExercise) => {
  const { recentGoals } = getDataFromForm(formData, wantedKeys)
  return {
    recentGoals
  }
}

const transformPropsForPresentation = props => {
  const { recentGoals, award: { data, model }, ...rest } = props

  const header = {
    elements: buildHeader(model)
  }

  const elements = recentGoals
    ? Object.keys(recentGoals).reduce((elements, key) => {
        const value = recentGoals[key]
        if (header.elements.length > 0) {
          const element = header.elements.map(el => {
            const { type, key: actualKey } = el
            if (type === LABEL) {
              const text = value[actualKey]
              return {
                ...el,
                text
              }
            } else if (type !== STRUCT) {
              const dataRowElement = data[key]
              return {
                ...el,
                formIndex: key,
                formKey: actualKey,
                value: dataRowElement ? dataRowElement[actualKey].value : null
              }
            }
          })
          return [
            ...elements,
            {
              elements: element
            }
          ]
        }
        return elements
      }, [])
    : null

  return {
    header,
    elements,
    ...rest
  }
}

const Form5Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => {
    const providedProps = transformPropsForPresentation(props)
    return <Component {...props} {...providedProps} />
  }
  return Consumer
}

export default Form5Consumer
