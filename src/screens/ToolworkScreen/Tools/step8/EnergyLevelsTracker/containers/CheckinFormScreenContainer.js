// @flow
import { mapProps }                     from 'recompose'
import moment                           from 'moment'
import { EXTENDED_DATE_FORMAT }         from '2020_constants/constants'
import { pickTimePeriodAndDayForTime }  from '../utils'
import CheckinFormScreen                from '../components/CheckinFormScreen'
import type { ToolProps }               from '../../../types'
import type { Props as ComponentProps } from '../components/CheckinFormScreen'

type Props = ToolProps & {
  goToMenu: () => null,
}

const submitTimeSectionEnergyLevels = ({
  data,
  tool,
  storeData,
}: {
  data: any,
  tool: any,
  storeData: () => any,
}) => {
  return value => {
    const currentValue = (data && data.value) || []
    const { period, day, extra } = pickTimePeriodAndDayForTime(
      moment().format(EXTENDED_DATE_FORMAT)
    )
    const { key } = period

    const storable = [
      ...currentValue,
      {
        timeKey: key,
        day,
        value,
        isoTimeOfPeriod: extra.timeStamp,
        extendedTime: moment().format(EXTENDED_DATE_FORMAT),
        timeTaken: moment().format(),
        _meta: {
          timeStamp: moment()
            .toDate()
            .getTime(),
        },
      },
    ]
    storeData(storable, tool)
  }
}

const merge = (props: Props): ComponentProps => {
  const { data, tool, storeAwardData, goToMenu } = props
  const value = (data && data.value) || []
  const { period, day, extra } = pickTimePeriodAndDayForTime(
    moment().format(EXTENDED_DATE_FORMAT)
  )
  const { timeLeft } = extra

  const { text } = period

  const valuesForThisSection = value.filter(val => {
    const { timeKey, day: valueOfDay } = val
    const { key } = period
    if (valueOfDay === day && key === timeKey) return true
    return false
  })

  const onFormFinish = submitTimeSectionEnergyLevels({
    data,
    tool,
    storeData: storeAwardData,
  })

  const enableForm = valuesForThisSection.length < 2

  return {
    tool,
    onFormFinish,
    enableForm,
    timeLeft,
    text,
    goToMenu,
  }
}

export default mapProps(merge)(CheckinFormScreen)
