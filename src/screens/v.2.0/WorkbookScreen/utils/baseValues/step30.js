// @flow
import { stepEnum } from '2020_services/cms'
import { getIdealWeek } from '2020_utils/timebugHelpers'
import { FORM_KEYS } from '2020_forms/forms/step30'

const mapKeyToFormKey = (key: string) => {
  return `${FORM_KEYS.form_30_next_year}.${key}`
}

export const handleStep30BaseValues = (baseValues: any | null, data: any) => {
  if (!data) return baseValues
  const formDataStep2 = data[`${stepEnum.STEP_2}`] || null
  if (!formDataStep2) return baseValues
  const idealWeek = getIdealWeek(formDataStep2)

  const innerBase = Object.values(idealWeek).reduce((b, category) => {
    const { key, value } = category
    const formKey = mapKeyToFormKey(key)
    return {
      ...b,
      [formKey]: {
        value: value * 52,
      },
    }
  }, {})

  const outerBase = {
    [FORM_KEYS.form_30_next_year]: {
      value: innerBase,
    },
  }

  return baseValues
    ? {
        ...outerBase,
        ...baseValues,
      }
    : outerBase
}
