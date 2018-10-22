import MeditationCheckin from '../../components/Form1/MeditationCheckin'
import { mapProps }      from 'recompose'
import moment            from 'moment'

export const key = 'meditationCheckin'

export const fieldKey = 'meditatedToday'

const merge = props => {
  const { data = {} } = props
  const field = data[fieldKey] || {}
  const { value = [], meta = {} } = field
  if (meta._store === 'list') {
    const { _date = [true, 'MM/DD/YYYY'] } = meta
    const displayValue =
      value.find(v => v.date === moment().format(_date[1])) || { value: false }
    return {
      ...props,
      value: displayValue,
      fieldKey
    }
  }
  return {
    ...props,
    fieldKey
  }
}

export default mapProps(merge)(MeditationCheckin)
