import { mapProps }                             from 'recompose'
import moment                                   from 'moment'
import { DATE_FORMAT }                          from '2020_constants/constants'
import MeditationCheckin                        from '../components/MeditationCheckin'
import type { MeditationCheckinComponentProps } from '../components/MeditationCheckin'

const areDaysConsecutive = (a, b) => a.diff(b, 'days') === 1

export const countConsecutiveDays = (arr, format = DATE_FORMAT) => {
  const momentDates = arr
    .map(d => {
      return moment(d, format)
    })
    .sort((a, b) => {
      return -a.diff(b)
    })
  let count = 0
  for (let i = 1; i < momentDates.length; i++) {
    if (areDaysConsecutive(momentDates[i - 1], momentDates[i])) count++
    else break
  }
  return count + 1
}

const findDataForToday = (
  data: { value: Array<{ value: any, date: string }> } | null
) => {
  if (!data || !data.value) return { value: false }
  const { value } = data
  const today = moment().format(DATE_FORMAT)
  const valueForToday = value.find(val => val.date === today) || {
    value: false,
  }
  return valueForToday
}

const countDaysInRow = (
  data: { value: Array<{ value: any, date: string }> } | null
) => {
  if (!data || !data.value) return 0
  const { value } = data
  const dateArray = value.filter(v => v.value === true).map(v => v.date)
  const numDays = countConsecutiveDays(dateArray, DATE_FORMAT)
  return numDays
}

const merge = (props: any): MeditationCheckinComponentProps => {
  const { data, tool, storeAwardData } = props
  const dataToday = findDataForToday(data)
  const daysInRowCount = countDaysInRow(data)
  const allToolValue = data ? data.value : []
  return {
    tool,
    data: dataToday,
    storeAwardData,
    daysInRowCount,
    allToolValue,
  }
}

export default mapProps(merge)(MeditationCheckin)
