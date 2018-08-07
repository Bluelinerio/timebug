//@flow
import React                                  from 'react'
import { SelectedKeys }                       from '../../types'
import type {
  HandlerFunction,
  FormDataForExercise
}                                             from '../../../../../containers/GenericFormConsumer'
import { STEP2, getFormRequestedKeysForStep } from '../../Forms'

type PillarOfLife = {
  typicalWeek: number,
  idealWeek: number
}

type PillarsObject = {
  [x: string]: PillarOfLife
}

const wantedKeys: SelectedKeys = getFormRequestedKeysForStep(STEP2)

const getDataFromForm = (formData: any) => {
  return Object.keys(wantedKeys).reduce((obj, k) => {
    const { form, key } = wantedKeys[k]
    return {
      ...obj,
      [k]: formData[form][key]
    }
  }, {})
}

const parseHoursIntoNumber = (hours: any) => {
  const regex = /\d+/
  const isOne = hours.toLowerCase().includes('one')
  try {
    return isOne ? 1 : parseInt(hours.match(regex))
  } catch (e) {
    return null
  }
}

export const handler: HandlerFunction = ({ formData }: FormDataForExercise) => {
  const { typicalWeek, idealWeek } = getDataFromForm(formData)
  const typicalWeekTemplateObject = typicalWeek.reduce((allPillars, pillar) => {
    const { pillarOfLife, hours } = pillar
    return {
      ...allPillars,
      [pillarOfLife]: {
        typicalWeek: parseHoursIntoNumber(hours)
      }
    }
  }, {})

  const steptemplateObject: PillarsObject = idealWeek.reduce(
    (allPillars, pillar) => {
      const { pillarOfLife, hours } = pillar
      const counterPart = typicalWeekTemplateObject[pillarOfLife]
        ? typicalWeekTemplateObject[pillarOfLife]
        : {}
      return {
        ...allPillars,
        [pillarOfLife]: {
          ...counterPart,
          idealWeek: parseHoursIntoNumber(hours)
        }
      }
    },
    typicalWeekTemplateObject
  )

  return {
    pillars: steptemplateObject
  }
}

const Form2Consumer = (injectedProps: any) => (
  Component: React.ComponentType<any>
): React.ComponentType<any> => {
  const Consumer = props => <Component {...injectedProps} {...props} />
  return Consumer
}

export default Form2Consumer
