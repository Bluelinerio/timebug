// @flow
import { mapProps } from 'recompose'
import moment from 'moment'
import ChartArea from '../components/ChartArea'
import { CHARTS, CHART_KEYS } from '../constants'
import { DATE_FORMAT } from '2020_constants/constants'
import type { CarouselEntryType, ChartSpec } from '../types'
import { getThisWeekDaysAndMonth } from '../utils'
import { FORM_KEYS, CHILDREN_KEYS } from '2020_static/tools/EnergyLevelsTracker'
import tron from 'reactotron-react-native'

type Props = {
  data: any,
  tool: any,
}

const dummyData = {
  physicalData: [
    {
      level: 10,
      time: 6,
    },
    {
      level: 1,
      time: 12,
    },
    {
      level: 3,
      time: 14,
    },
    {
      level: 5,
      time: 15,
    },
    {
      level: 9,
      time: 18,
    },
    {
      level: 10,
      time: 24,
    },
  ],
  emotionalData: [
    {
      level: 2,
      time: 0,
    },
    {
      level: 6,
      time: 2.1,
    },
    {
      level: 9,
      time: 10.23,
    },
    {
      level: 4,
      time: 13.2,
    },
    {
      level: 2,
      time: 18,
    },
    {
      level: 10,
      time: 22.55,
    },
  ],

  spiritualData: [
    {
      level: 1,
      time: 4,
    },
    {
      level: 6,
      time: 6,
    },
    {
      level: 2,
      time: 10,
    },
    {
      level: 1,
      time: 12.1,
    },
    {
      level: 4,
      time: 18,
    },
    {
      level: 1,
      time: 24,
    },
  ],
}

const getDateOfWeekDay = (week: any, key: string) => {
  switch (key) {
  case CHART_KEYS.MONDAY:
    return week.format(DATE_FORMAT)
  case CHART_KEYS.TUESDAY:
    return week
      .clone()
      .add(1, 'd')
      .format(DATE_FORMAT)
  case CHART_KEYS.WEDNESDAY:
    return week
      .clone()
      .add(2, 'd')
      .format(DATE_FORMAT)
  case CHART_KEYS.THURSDAY:
    return week
      .clone()
      .add(3, 'd')
      .format(DATE_FORMAT)
  case CHART_KEYS.FRIDAY:
    return week
      .clone()
      .add(4, 'd')
      .format(DATE_FORMAT)
  case CHART_KEYS.SATURDAY:
    return week
      .clone()
      .add(5, 'd')
      .format(DATE_FORMAT)
  case CHART_KEYS.SUNDAY:
    return week
      .clone()
      .add(6, 'd')
      .format(DATE_FORMAT)
  }
}

const getTimeValue = (time: any) => {
  const hours = time.hour()
  const minutes = time.minute()
  return (hours * 60 + minutes) / 60
}

const extractValues = (values: Array<any> = []) => {
  const data = {
    physicalData: [],
    emotionalData: [],
    spiritualData: [],
  }
  const result = values
    ? values.reduce((result, val) => {
      const time = getTimeValue(moment(val.timeTaken))
      const value = val.value[0]
      const field = value[FORM_KEYS.energy_levels_tracker_tool_energy_levels]
      const fieldValue = field.value
      const physicalEnergy =
          fieldValue[
            CHILDREN_KEYS.energy_levels_tracker_tool_energy_levels
              .PhysicalEnergy
          ].value
      const spiritualEnergy =
          fieldValue[
            CHILDREN_KEYS.energy_levels_tracker_tool_energy_levels
              .SpiritualEnergy
          ].value
      const emotionalEnergy =
          fieldValue[
            CHILDREN_KEYS.energy_levels_tracker_tool_energy_levels
              .EmotionalEnergy
          ].value
      return {
        ...result,
        physicalData: [
          ...result.physicalData,
          {
            level: physicalEnergy,
            time,
          },
        ],
        emotionalData: [
          ...result.emotionalData,
          {
            level: emotionalEnergy,
            time,
          },
        ],
        spiritualData: [
          ...result.spiritualData,
          {
            level: spiritualEnergy,
            time,
          },
        ],
      }
    }, data)
    : data
  return result
}

const getDataForDay = (value: Array<any>, date: string) => {
  const dataForDay =
    value
      .filter(val => val.timeTaken)
      .filter(val => moment(val.timeTaken).format(DATE_FORMAT) === date) || []
  const dataSetForToday = extractValues(dataForDay)
  return dataSetForToday
}

const handleKeyData = (
  { key, title }: ChartSpec,
  data: any
): CarouselEntryType => {
  const { week, month } = getThisWeekDaysAndMonth()
  const { value = [] } = data
  switch (key) {
  case CHART_KEYS.MONDAY:
    return {
      key,
      title,
      data: getDataForDay(value, getDateOfWeekDay(week, CHART_KEYS.MONDAY)),
    }
  case CHART_KEYS.TUESDAY:
    return {
      key,
      title,
      data: getDataForDay(value, getDateOfWeekDay(week, CHART_KEYS.TUESDAY)),
    }
  case CHART_KEYS.WEDNESDAY:
    return {
      key,
      title,
      data: getDataForDay(
        value,
        getDateOfWeekDay(week, CHART_KEYS.WEDNESDAY)
      ),
    }
  case CHART_KEYS.THURSDAY:
    return {
      key,
      title,
      data: getDataForDay(value, getDateOfWeekDay(week, CHART_KEYS.THURSDAY)),
    }
  case CHART_KEYS.FRIDAY:
    return {
      key,
      title,
      data: getDataForDay(value, getDateOfWeekDay(week, CHART_KEYS.FRIDAY)),
    }
  case CHART_KEYS.SATURDAY:
    return {
      key,
      title,
      data: getDataForDay(value, getDateOfWeekDay(week, CHART_KEYS.SATURDAY)),
    }
  case CHART_KEYS.SUNDAY:
    return {
      key,
      title,
      data: getDataForDay(value, getDateOfWeekDay(week, CHART_KEYS.SUNDAY)),
    }
  case CHART_KEYS.WEEKLY_AVG:
  case CHART_KEYS.MONTHLY_AVG:
    return {
      key,
      title,
      data: dummyData,
    }
  }
}

const merge = (props: Props) => {
  const { data } = props
  const entries: Array<CarouselEntryType> = CHARTS.map(chart =>
    handleKeyData(chart, data)
  )
  tron.log(entries)
  return {
    entries,
  }
}

export default mapProps(merge)(ChartArea)
