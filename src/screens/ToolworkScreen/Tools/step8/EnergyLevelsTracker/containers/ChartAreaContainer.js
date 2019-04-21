// @flow
import { mapProps }                                        from 'recompose'
import moment                                              from 'moment'
import ChartArea                                           from '../components/ChartArea'
import { DATE_FORMAT }                                     from '2020_constants/constants'
import { FORM_KEYS, CHILDREN_KEYS }                        from '2020_static/tools/EnergyLevelsTracker'
import { CHARTS, CHART_KEYS, EVENING, MORNING, AFTERNOON } from '../constants'
import type { CarouselEntryType, ChartSpec }               from '../types'
import { getTimeValue }                                    from '../utils'

type Props = {
  data: any,
  tool: any,
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

const extractValuesForHigherOrderTimeUnits = (values: Array<any> = []) => {
  const data = {}
  const result = values
    ? values.reduce((result, val) => {
      const { timeKey } = val
      const dayTaken = moment(val.timeTaken).format(DATE_FORMAT)
      const time = getTimeValue(moment(val.timeTaken))
      const valueForDay = result[dayTaken] || {}
      const valueForKey = valueForDay[timeKey] || []
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
        [dayTaken]: {
          ...valueForDay,
          [timeKey]: [
            ...valueForKey,
            {
              physicalData: {
                level: physicalEnergy,
                time,
              },
              emotionalData: {
                level: emotionalEnergy,
                time,
              },
              spiritualData: {
                level: spiritualEnergy,
                time,
              },
            },
          ],
        },
      }
    }, data)
    : data
  return result
}

const getRecap = (data: Array<any>) => {
  return data.reduce(
    (recap, value) => {
      const [point_1 = {}, point_2 = {}] = value
      const {
        physicalData: p1p,
        emotionalData: p1e,
        spiritualData: p1s,
      } = point_1
      const {
        physicalData: p2p,
        emotionalData: p2e,
        spiritualData: p2s,
      } = point_2
      return {
        ...recap,
        physical_1: [...recap.physical_1, p1p, p2p],
        emotional_1: [...recap.emotional_1, p1e, p2e],
        spiritual_1: [...recap.spiritual_1, p1s, p2s],
      }
    },
    {
      physical_1: [],
      emotional_1: [],
      spiritual_1: [],
    }
  )
}

const reduceRecap = recap => {
  const keys = {
    PhysicalData: 'PhysicalData',
    EmotionalData: 'EmotionalData',
    SpiritualData: 'SpiritualData',
  }

  const reduction = Object.keys(recap).reduce(
    (red, key) => {
      const value = recap[key]
      let storableKey =
        key.indexOf('physical') !== -1
          ? keys.PhysicalData
          : key.indexOf('emotional') !== -1
            ? keys.EmotionalData
            : keys.SpiritualData
      const processableValue = value ? value.filter(v => !!v) : []
      const acumulativeValue = processableValue.reduce((struct, val) => {
        const { level, time } = val
        // TODO: Fix this, pushing the evening time to 12 am so it does not add weird data points
        const realTime = time < 3 ? 24 : time
        if (!struct)
          return {
            level,
            time: realTime,
          }
        return {
          ...struct,
          level: struct.level + level,
          time: struct.time + realTime,
        }
      }, null)
      const averageValue = acumulativeValue
        ? {
          level: acumulativeValue.level / processableValue.length,
          time: acumulativeValue.time / processableValue.length,
        }
        : null
      if (!averageValue) return red
      return {
        ...red,
        [storableKey]: [...red[storableKey], averageValue],
      }
    },
    {
      PhysicalData: [],
      EmotionalData: [],
      SpiritualData: [],
    }
  )

  return reduction
}

const processMultipleDataPoints = (values: any) => {
  const base = {
    [MORNING]: [],
    [AFTERNOON]: [],
    [EVENING]: [],
  }

  const finalDataBase = {
    physicalData: [],
    emotionalData: [],
    spiritualData: [],
  }

  const data = Object.values(values).reduce((obj, val) => {
    const morningData = val[MORNING] || null
    const afternoonData = val[AFTERNOON] || null
    const eveningData = val[EVENING] || null
    const newMorningData =
      morningData && morningData.length > 0
        ? [...obj[MORNING], morningData]
        : obj[MORNING]
    const newAfternoonData =
      afternoonData && afternoonData.length > 0
        ? [...obj[AFTERNOON], afternoonData]
        : obj[AFTERNOON]
    const newEveningData =
      eveningData && eveningData.length > 0
        ? [...obj[EVENING], eveningData]
        : obj[EVENING]
    return {
      [MORNING]: newMorningData,
      [AFTERNOON]: newAfternoonData,
      [EVENING]: newEveningData,
    }
  }, base)

  const morningRecap = getRecap(data[MORNING])

  const afternoonRecap = getRecap(data[AFTERNOON])

  const eveningRecap = getRecap(data[EVENING])

  const morningReduction = reduceRecap(morningRecap)

  const afternoonReduction = reduceRecap(afternoonRecap)

  const eveningReduction = reduceRecap(eveningRecap)

  const finalData = [
    morningReduction,
    afternoonReduction,
    eveningReduction,
  ].reduce((final, reduction) => {
    const { PhysicalData, EmotionalData, SpiritualData } = reduction
    const {
      physicalData: currentPhysical,
      emotionalData: currentEmotional,
      spiritualData: currentSpiritual,
    } = final
    return {
      ...final,
      physicalData: [...currentPhysical, ...PhysicalData],
      emotionalData: [...currentEmotional, ...EmotionalData],
      spiritualData: [...currentSpiritual, ...SpiritualData],
    }
  }, finalDataBase)

  const fixBlank = Object.keys(finalData).reduce((obj, key) => {
    const data = finalData[key]
    const newData = data.filter(v => v.level !== 0 && v.time !== 0)
    return {
      ...obj,
      [key]: newData,
    }
  }, finalData)
  return fixBlank
}

const getDataForWeek = (value: Array<any>) => {
  const dataForWeek =
    value
      .filter(val => val.timeTaken)
      .filter(val => moment(val.timeTaken).isSame(moment(), 'isoweek')) || []
  const data = extractValuesForHigherOrderTimeUnits(dataForWeek)
  const datasetForWeek = processMultipleDataPoints(data)
  return datasetForWeek
}

const getDataForMonth = (value: Array<any>) => {
  const dataForWeek =
    value
      .filter(val => val.timeTaken)
      .filter(val => moment(val.timeTaken).isSame(moment(), 'month')) || []
  const data = extractValuesForHigherOrderTimeUnits(dataForWeek)
  const datasetForWeek = processMultipleDataPoints(data)
  return datasetForWeek
}

const getDataForToday = (value: Array<any>) => {
  const dataForWeek =
    value
      .filter(val => val.timeTaken)
      .filter(val => moment(val.timeTaken).isSame(moment(), 'day')) || []
  const datasetForWeek = extractValues(dataForWeek)
  return datasetForWeek
}

const handleKeyData = (
  { key, title }: ChartSpec,
  data: any
): CarouselEntryType => {
  const { value = [] } = data
  const weekValue = getDataForWeek(value)
  const monthValue = getDataForMonth(value)
  switch (key) {
  case CHART_KEYS.TODAY:
    return {
      key,
      title,
      data: getDataForToday(value),
    }
  case CHART_KEYS.WEEKLY_AVG:
    return {
      key,
      title,
      data: weekValue,
    }
  case CHART_KEYS.MONTHLY_AVG:
    return {
      key,
      title,
      data: monthValue,
    }
  }
}

const merge = (props: Props) => {
  const { data } = props
  const entries: Array<CarouselEntryType> = CHARTS.map(chart =>
    handleKeyData(chart, data)
  )
  return {
    entries,
  }
}

export default mapProps(merge)(ChartArea)
