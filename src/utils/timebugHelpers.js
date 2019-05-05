import moment                            from 'moment'
import { FORM_KEYS, FORM_CHILDREN_KEYS } from '2020_forms/forms/step2'
import { LifeCategories }                from '2020_forms/forms'
import { DATE_FORMAT }                   from '2020_constants/constants'
import { camelPad }                      from '2020_utils/formatHelpers'
import { TOOL_FORM_KEYS }                from '2020_static/tools/DailyTimebugPlanner'
import type { WeekDataArray }            from '../components/WeeklyPlanner'

const currentWeekDefaultData = Object.keys(LifeCategories).reduce(
  (value, key) => {
    const category = LifeCategories[key]
    const text = category.title
    return {
      ...value,
      [key]: {
        key,
        value: 0,
        text,
      },
    }
  },
  {}
)

// TODO: Make sure it works consistently
const _getCurrentWeek = (disable: boolean = false) => {
  let toolDataForThisWeek = null
  let lastToolDataLength = 0
  let dayChecked = moment().format(DATE_FORMAT)
  let lastTime = null
  return (
    dailyToolData: Array<{ date: string, value: Array<any> }>,
    timeStamp?: number
  ) => {
    const today = moment().format(DATE_FORMAT)

    if (today !== dayChecked) {
      dayChecked = today
      toolDataForThisWeek = null
    }

    if (timeStamp !== null && timeStamp !== lastTime) {
      lastTime = timeStamp
      toolDataForThisWeek = null
    }

    if (dailyToolData.length !== lastToolDataLength) {
      toolDataForThisWeek = null
      lastToolDataLength = 0
    }

    if (toolDataForThisWeek !== null && !disable) {
      return toolDataForThisWeek
    }

    const startOfWeek = moment().startOf('isoWeek')
    const endOfWeek = moment().endOf('isoWeek')

    const daysInWeek = []
    let day = startOfWeek

    while (day <= endOfWeek) {
      daysInWeek.push(day)
      day = day.clone().add(1, 'd')
    }

    const toolDataInThisWeek = dailyToolData.filter(data =>
      daysInWeek.find(day => moment(data.date, DATE_FORMAT).isSame(day, 'day'))
    )

    toolDataForThisWeek = toolDataInThisWeek
    lastToolDataLength = dailyToolData.length

    return toolDataForThisWeek
  }
}

export const getCurrentWeek = _getCurrentWeek()

export const getActionsData = (formData: { value: Array<any> }) => {
  const { value } = formData
  const actualValue = value && value.length > 0 ? value[0] : null
  if (!actualValue) return null
  const moreTimeActivities = actualValue[
    FORM_KEYS.form_2_more_time_activities
  ].value.map(positiveActivity => {
    const activity =
      positiveActivity[
        FORM_CHILDREN_KEYS.form_2_more_time_activities.activities
      ]
    return activity.value
  })
  const lessTimeActivities = actualValue[
    FORM_KEYS.form_2_less_time_activities
  ].value.map(positiveActivity => {
    const activity =
      positiveActivity[
        FORM_CHILDREN_KEYS.form_2_less_time_activities.activities
      ]
    return activity.value
  })
  return {
    moreTimeActivities,
    lessTimeActivities,
  }
}

const _reduceCurrentWeek = (disable = false) => {
  let toolDataForThisWeek = null
  let lastToolDataLength = 0
  let dayChecked = moment().format(DATE_FORMAT)
  let lastTimestamp = null
  return (currentWeek: Array<{ value: Array<any> }>, timestamp?: number) => {
    if (!currentWeek || currentWeek.length === 0) return currentWeekDefaultData
    const today = moment().format(DATE_FORMAT)

    if (today !== dayChecked) {
      dayChecked = today
      toolDataForThisWeek = null
    }

    if (timestamp !== null && timestamp !== lastTimestamp) {
      lastTimestamp = timestamp
      toolDataForThisWeek = null
    }

    if (currentWeek.length !== lastToolDataLength) {
      toolDataForThisWeek = null
      lastToolDataLength = 0
    }

    if (toolDataForThisWeek !== null && !disable) {
      return toolDataForThisWeek
    }

    const currentWeekObject = currentWeek
      .filter(day => day.value && day.value.length > 0)
      .map(day => {
        const value =
          day.value[0][TOOL_FORM_KEYS.daily_timebug_planner_tool_daily_time].value
        const resultObject = Object.keys(value).reduce((finalValue, key) => {
          const element = value[key]
          if (element.value === null || element.value === undefined)
            return finalValue
          const { contentKey, value: areaOfLifeValue } = element
          return {
            ...finalValue,
            [contentKey]: {
              value: areaOfLifeValue,
              key: contentKey,
            },
          }
        }, {})
        return resultObject
      })
      .reduce((currentWeekData, day, index) => {
        if (index === 0) return day
        let obj = { ...currentWeekData }
        for (let key in day) {
          const value = day[key]
          obj = {
            ...obj,
            [key]: {
              ...obj[key],
              value: obj[key].value + value.value,
            },
          }
        }
        return obj
      }, currentWeekDefaultData)

    toolDataForThisWeek = currentWeekObject
    lastToolDataLength = currentWeek.length

    return currentWeekObject
  }
}

export const reduceCurrentWeek = _reduceCurrentWeek()



const _getIdealWeek = (disable = false) => {
  let lastTimestamp = null
  let lastValue = null
  return (formData: { value: Array<any>, timeStamp: number }) => {
    const { value, timeStamp } = formData

    const actualValue = value && value.length > 0 ? value[0] : null
    if (!actualValue) return null

    if (timeStamp !== lastTimestamp) {
      lastValue = null
      lastTimestamp = timeStamp
    }

    if(lastValue !== null && !disable) return lastValue

    const idealWeekValue =
      actualValue[FORM_KEYS.form_2_ideal_week_time_].value || {}
    const idealWeekTimeObject = Object.values(idealWeekValue)
      .filter(value => value.value !== undefined && value.value !== null)
      .reduce((idealWeek, val) => {
        const { value, contentKey } = val
        return {
          ...idealWeek,
          [contentKey]: {
            key: contentKey,
            value,
            text: camelPad(contentKey),
          },
        }
      }, {})

    lastValue = idealWeekTimeObject

    return idealWeekTimeObject
  }
}

export const getIdealWeek = _getIdealWeek()

export const mapWeekData = (
  idealWeek: { [x: string]: { value: number, text?: string } },
  currentWeek: { [x: string]: { value: number, text?: string } }
): WeekDataArray => {
  const WeekDataArray = Object.keys(idealWeek).map(key => {
    const idealWeekDataElement = idealWeek[key]
    const currentWeekDataElement = currentWeek[key]
    return {
      key,
      ideal: {
        ...idealWeekDataElement,
      },
      current: {
        ...currentWeekDataElement,
      },
      diff: currentWeekDataElement.value - idealWeekDataElement.value,
    }
  })
  return WeekDataArray
}

export const getCurrentWeekAndReduce = (dailyToolValue: any, timeStamp?: number) => {
  const currentWeek = getCurrentWeek(dailyToolValue, timeStamp)
  const currentWeekReduction = reduceCurrentWeek(currentWeek, timeStamp)
  return currentWeekReduction
}

export const findWeeklyToolValue = (weeklyToolData: {
  value: Array<{ value: any, date: string }>,
}) => {
  if (!weeklyToolData || weeklyToolData.value.length === 0) return null
  const startOfWeek = moment()
    .startOf('isoWeek')
    .format(DATE_FORMAT)
  const valueForWeek = weeklyToolData.value.find(
    value => value.date === startOfWeek
  )
  return valueForWeek ? valueForWeek : null
}
