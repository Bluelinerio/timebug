//@ flow
import moment from 'moment'
import { TEXT_DATE_FORMAT } from '2020_constants/constants'

export const getDueDate = (
  goal: { created_at: string },
  timeMeasure: Array<{ unit: string, value: number }>
) => {
  const { created_at } = goal
  const creation = moment(created_at)
  const date = creation.clone()
  const due = timeMeasure.reduce(
    (dueMoment, momentModifier) =>
      dueMoment.add(momentModifier.value, momentModifier.unit),
    date
  )
  const dueString = due.format(TEXT_DATE_FORMAT)
  return dueString
}
