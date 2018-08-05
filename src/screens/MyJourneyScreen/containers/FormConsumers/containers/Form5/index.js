//@flow
import React             from 'react'
import { SelectedKeys }  from '../../../types'
import {
  HandlerFunction,
  FormDataForExercise
}                        from '../../../../../../containers/GenericFormConsumer'
import getDataFromForm   from '../../utils/DataFromForm'
import { buildHeader }   from '../../utils/FormModelToElement'
import { LABEL, STRUCT } from '../../../../../../static/awards/modelTypes'

const wantedKeys: SelectedKeys = {
  recentGoals: {
    form: '1',
    key: 'recentGoals'
  }
}

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

  const elements = Object.keys(recentGoals).reduce((elements, key) => {
    const value = recentGoals[key]
    const { goal, goalTypes } = value
    const specialElements = Object.keys(model).reduce((els, k) => {
      const modelElement = model[k]
      const dataRowElement = data[key]
      if (modelElement.type !== STRUCT && modelElement.type !== LABEL)
        return [
          ...els,
          {
            type: modelElement.type,
            value: dataRowElement ? dataRowElement[k].value : null
          }
        ]

      return [...els]
    }, [])

    return [
      ...elements,
      {
        elements: [
          {
            type: LABEL,
            text: goal
          },
          {
            type: LABEL,
            text: goalTypes
          },
          ...specialElements
        ]
      }
    ]
  }, [])

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
