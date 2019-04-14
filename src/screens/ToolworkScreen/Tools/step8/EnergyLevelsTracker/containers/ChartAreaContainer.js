// @flow
import { mapProps }                          from 'recompose'
import ChartArea                             from '../components/ChartArea'
import { CHARTS, CHART_KEYS }                from '../constants'
import type { CarouselEntryType, ChartSpec } from '../types'

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

const handleKeyData = (
  { key, title }: ChartSpec,
  data: any
): CarouselEntryType => {
  switch (key) {
  case CHART_KEYS.MONDAY:
  case CHART_KEYS.TUESDAY:
  case CHART_KEYS.WEDNESDAY:
  case CHART_KEYS.THURSDAY:
  case CHART_KEYS.FRIDAY:
  case CHART_KEYS.SATURDAY:
  case CHART_KEYS.SUNDAY:
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
  return {
    entries,
  }
}

export default mapProps(merge)(ChartArea)
