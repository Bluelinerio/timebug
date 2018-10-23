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
          value: Array<{ value: any }>
        }
      }
    | undefined,
  model: {
    fields: {
      [x: string]: {
        meta: {
          _store: string,
          _date: [boolean, string]
        }
      }
    }
  }
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
