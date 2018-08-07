//@flow
import React from 'react'
import { compose } from 'recompose'
import { SelectedKeys } from '../../../types'
import {
  HandlerFunction,
  FormDataForExercise
} from '../../../../../../HOC/GenericFormConsumer'
import getDataFromForm from '../../utils/DataFromForm'
import { buildHeader } from '../../utils/FormModelToElement'
import { LABEL, STRUCT } from '../../../../../../static/awards/modelTypes'
import { STEP11, getFormRequestedKeysForStep } from '../../../Forms'

const wantedKeys: SelectedKeys = getFormRequestedKeysForStep(STEP11)

export const handler: HandlerFunction = ({
  formData,
  ...rest
}: FormDataForExercise) => {
  const { topGoalsPast5Years } = getDataFromForm(formData, wantedKeys)
  return {
    content: {
      topGoalsPast5Years
    },
    ...rest
  }
}

const transformPropsForPresentation = props => {
  const {
    content: { topGoalsPast5Years },
    award: { data, model },
    ...rest
  } = props

  const header = {
    elements: buildHeader(model)
  }

  const elements = topGoalsPast5Years
    ? Object.keys(topGoalsPast5Years).reduce((elements, key) => {
        const value = topGoalsPast5Years[key]
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

const Form11Consumer = (Component: React.ComponentType<any>) => {
  const Consumer = props => {
    const providedProps = transformPropsForPresentation(props)
    return <Component {...props} {...providedProps} />
  }
  return Consumer
}

export default Form11Consumer
