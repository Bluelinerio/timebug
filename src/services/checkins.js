//This is a temporary "placeholder" for contentful
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
export const calculateNextCheckin = (frequency: Frequency) => {
  switch (frequency) {
    case frequencies[DAILY]:
      return moment()
        .add(1, 'd')
        .format()
    case frequencies[WEEKLY]:
      return moment()
        .add(1, 'w')
        .format()
    case frequencies[BIWEEKLY]:
      return moment()
        .add(3, 'd')
        .add('12', 'h')
        .format()
    case frequencies[MONTHLY]:
      return moment()
        .add(1, 'M')
        .format()
    default:
      return moment()
        .add(30, 's')
        .format()
  }
}
