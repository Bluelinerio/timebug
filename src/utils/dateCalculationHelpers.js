//@ flow
import moment                            from 'moment'

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
  const dueString = due.format()
  const hasNotHappened = moment().add(10, 'm').isBefore(due)
  return {
    hasNotHappened,
    due: dueString,
  }
}
