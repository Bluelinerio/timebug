// @flow
import { mapProps }                    from 'recompose'
import moment                          from 'moment'
import { EXTENDED_DATE_FORMAT }        from '2020_constants/constants'
import { pickTimePeriodAndDayForTime } from '../utils'
import type { ToolProps }              from '../../../types'
import CheckinFormScreen               from '../components/CheckinFormScreen'

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
        isoTime: extra.timeStamp,
        extendedTime: moment(extra.timeStamp).format(EXTENDED_DATE_FORMAT),
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

const merge = (props: ToolProps) => {
  const { data, tool, storeAwardData } = props
  const value = (data && data.value) || []
  const { period, day } = pickTimePeriodAndDayForTime(
    moment().format(EXTENDED_DATE_FORMAT)
  )
  const valuesForThisSection = value.filter(val => {
    const { timeKey, day: valueOfDay } = val
    const { key } = period
    if (valueOfDay === day && key === timeKey) return true
    return false
  })

  const onFormFinish = submitTimeSectionEnergyLevels({
    data,
    tool,
    storeAwardData,
  })

  const enableForm = valuesForThisSection.length < 2

  return {
    ...props,
    onFormFinish,
    enableForm,
  }
}

export default mapProps(merge)(CheckinFormScreen)
