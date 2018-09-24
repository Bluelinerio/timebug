// @flow
import moment from 'moment'

export const DAILY = 'DAILY'
export const WEEKLY = 'WEEKLY'
export const BIWEEKLY = 'BIWEEKLY'
export const MONTHLY = 'MONTHLY'

export const frequencies = {
  [DAILY]: 'Daily',
  [WEEKLY]: 'Weekly',
  [BIWEEKLY]: 'Biweekly',
  [MONTHLY]: 'Monthly'
}

export type Frequency = DAILY | WEEKLY | BIWEEKLY | MONTHLY
export const calculateNextCheckin = (frequency: Frequency): [string, number] => {
  const now = moment()
  switch (frequency) {
    case frequencies[DAILY]: {
      const due = now
        .clone()
        .add(1, 'd')
      const repeatTime = due.diff(now)
      return [
        due.format(),
        repeatTime
      ]
    }
    case frequencies[WEEKLY]: {
      const due = now
        .clone()
        .add(1, 'w')
      const repeatTime = due.diff(now)
      return [
        due.format(),
        repeatTime
      ]
    }
    case frequencies[BIWEEKLY]: {
      const due = now
        .clone()
        .add(3, 'd')
        .add('12', 'h')
      const repeatTime = due.diff(now)
      return [
        due.format(),
        repeatTime
      ]
    }
    case frequencies[MONTHLY]: {
      const due = now
        .clone()
        .add(1, 'M')
      const repeatTime = due.diff(now)
      return [
        due.format(),
        repeatTime
      ]
    }
    default: {
      const due = now
        .clone()
        .add(15, 's')
      const repeatTime = due.diff(now)
      return [
        due.format(),
        repeatTime
      ]
    }
  }
}
