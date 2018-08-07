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
import R                                      from 'ramda'


const wantedKeys: SelectedKeys = getFormRequestedKeysForStep(STEP11)

export const handler: HandlerFunction = ({
  formData,
  ...rest
}: FormDataForExercise) => {
  const componentData = getDataFromForm(formData, wantedKeys)
  return {
    componentData,
    ...rest
  }
}

const transformPropsForPresentation = props => {
  const {
    componentData,
    award: { data, model },
    ...rest
  } = props

  const header = {
    elements: buildHeader(model)
  }
  const { topGoalsPast5Years } = componentData
  
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
    const providedProps = compose(transformPropsForPresentation, handler)(props)
    return <Component {...props} {...providedProps} />
  }
  return Consumer
}

export default Form11Consumer
