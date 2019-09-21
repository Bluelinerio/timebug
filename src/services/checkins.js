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
  [MONTHLY]: 'Monthly',
}

export type Frequency = DAILY | WEEKLY | BIWEEKLY | MONTHLY

const handleExtraOperations = (moment: any, hour: string) => {
  if (!hour) return moment
  try {
    const [hours = '12', minutes = '00'] = hour.split(':')
    moment.hours(parseInt(hours))
    moment.minutes(parseInt(minutes))
    moment.seconds(0)
    return moment
  } catch (err) {
    return moment
  }
}

export const calculateNextCheckin = (
  frequency: Frequency,
  hour?: string
): [string, number] => {
  const now = moment()
  switch (frequency) {
    case frequencies[DAILY]: {
      const due = handleExtraOperations(now.clone().add(1, 'd'), hour)
      const referenceTime = moment().startOf('d')
      const repeatTime = referenceTime
        .clone()
        .add(1, 'd')
        .diff(referenceTime)
      return [due.format(), repeatTime]
    }
    case frequencies[WEEKLY]: {
      const due = handleExtraOperations(now.clone().add(1, 'w'), hour)
      const referenceTime = moment().startOf('d')
      const repeatTime = referenceTime
        .clone()
        .add(1, 'w')
        .diff(referenceTime)
      return [due.format(), repeatTime]
    }
    case frequencies[BIWEEKLY]: {
      const due = handleExtraOperations(
        now
          .clone()
          .add(3, 'd')
          .add('12', 'h'),
        hour
      )
      const referenceTime = moment().startOf('d')
      const repeatTime = referenceTime.diff(
        referenceTime
          .clone()
          .add(3, 'd')
          .add('12', 'h')
      )
      return [due.format(), repeatTime]
    }
    case frequencies[MONTHLY]: {
      const due = handleExtraOperations(now.clone().add(1, 'M'), hour)
      const referenceTime = moment().startOf('d')
      const repeatTime = referenceTime
        .clone()
        .add(1, 'M')
        .diff(referenceTime)
      return [due.format(), repeatTime]
    }
    default: {
      return calculateNextCheckin(frequencies[DAILY], hour)
    }
  }
}
