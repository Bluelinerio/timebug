import moment from 'moment'
import { TIME } from '../constants'

export const pickClosestCheckin = () => {
  const now = moment()
  const timeSections = Object.keys(TIME).reduce((timeElements, key) => {
    const element = TIME[key]
    return [
      ...timeElements,
      {
        key: key,
        moment: moment(element.time, element.format),
      },
    ]
  }, [])
}
