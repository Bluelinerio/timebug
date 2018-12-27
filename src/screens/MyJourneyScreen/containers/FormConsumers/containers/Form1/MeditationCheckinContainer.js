import MeditationCheckin                        from '../../components/Form1/MeditationCheckin'
import type { MeditationCheckinComponentProps } from '../../components/Form1/MeditationCheckin'
import { mapProps }                             from 'recompose'
import moment                                   from 'moment'

export const key = 'meditationCheckin'

export const fieldKey = 'meditatedToday'

type MergeProps = {
  data:
    | {
        [x: string]: {
          value: Array<{ value: any }>,
        },
      }
    | undefined,
  model: {
    fields: {
      [x: string]: {
        meta: {
          _store: string,
          _date: [boolean, string],
        },
      },
    },
  },
}

const areDaysConsecutive = (a, b) => a.diff(b, 'days') === 1

export const countConsecutiveDays = (arr, format = 'MM/DD/YYYY') => {
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

const merge = (props: MergeProps): MeditationCheckinComponentProps => {
  const { data = {}, model } = props
  const modelField = model.fields[fieldKey]
  const field = data[fieldKey] || {}
  const { value = [] } = field
  const { meta } = modelField
  if (meta._store === 'list') {
    const { _date = [true, 'MM/DD/YYYY'] } = meta
    const displayValue = value.find(
      v => v.date === moment().format(_date[1])
    ) || { value: false }
    const dateArray = value.filter(v => v.value === true).map(v => v.date)
    const daysInRowCount = countConsecutiveDays(dateArray, _date[1])
    return {
      ...props,
      value: displayValue,
      fieldKey,
      daysInRowCount,
    }
  }
  return {
    ...props,
    fieldKey,
  }
}

export default mapProps(merge)(MeditationCheckin)
