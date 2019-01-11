import moment from 'moment'
import { compose, mapProps } from 'recompose'
import DailyPlanner from '../components/DailyPlanner'
import type { Props } from '../components/DailyPlanner'
import { withNavigation } from 'react-navigation'
import { DATE_FORMAT } from '2020_constants/constants'

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

export const merge = (props: Props) => {
  const { data } = props
  const formValue = data
    ? data.value
      ? data.value.find(
        v =>
          v.date ===
            moment()
              .format(DATE_FORMAT)
      )
      : null
    : null
  null
  return {
    ...props,
    formValue,
  }
}

export default compose(withNavigation, mapProps(merge))(DailyPlanner)
