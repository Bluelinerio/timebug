// @flow
import moment from 'moment'
import { DATE_FORMAT, EXTENDED_DATE_FORMAT } from '2020_constants/constants'
import { TIME, MORNING, EVENING, AFTERNOON } from '../constants'
import type { TimeElement, TimeUnit } from '../types'
import type { Moment } from 'moment'

const executeOperations = (time, operators): Moment => {
  const resultTime = operators
    ? operators.reduce((newTime, op) => {
      const [unit, action, value] = op
      if (action === 'add') return newTime.add(value, unit)
      if (action === 'sub') return newTime.subtract(value, unit)
      return newTime
    }, time)
    : time
  return resultTime
}

const buildTimeSections = (): Array<TimeUnit> => {
  const timeSections = TIME.reduce((timeElements, period) => {
    const { text, format, key } = period
    const [startTime, endTime] = period.period.split('-')
    const operators = period.operators || {}
    const start = executeOperations(moment(startTime, format), operators.start)
    const end = executeOperations(moment(endTime, format), operators.end)
    return [
      ...timeElements,
      {
        key,
        text,
        format,
        start,
        end,
        effects: period.effects,
      },
    ]
  }, [])
  return timeSections
}

const evaluateAndApplyEffects = (props: TimeUnit): TimeUnit => {
  const { time, start, end, format, effects = {} } = props
  if (!effects) return [start, end]
  const newStart = effects.start
    ? effects.start.reduce((s, eff) => {
      const { condition, effect } = eff
      const [startInterval, endInterval] = condition.split('-')
      const startIntervalMoment = moment(startInterval, format)
      const endIntervalMoment = moment(endInterval, format)
      const effectFulfilled =
          time.isSameOrAfter(startIntervalMoment) &&
          time.isSameOrBefore(endIntervalMoment)
      if (!effectFulfilled) return s
      return executeOperations(s, effect)
    }, start)
    : start

  const newEnd = effects.end
    ? effects.end.reduce((e, eff) => {
      const { condition, effect } = eff
      const [startInterval, endInterval] = condition.split('-')
      const startIntervalMoment = moment(startInterval, format)
      const endIntervalMoment = moment(endInterval, format)
      const effectFulfilled =
          time.isSameOrAfter(startIntervalMoment) &&
          time.isSameOrBefore(endIntervalMoment)

      if (!effectFulfilled) return e
      return executeOperations(e, effect)
    }, end)
    : end
  return [newStart, newEnd]
}

const getNextPeriod = (timeSections: Array<TimeUnit>, period: TimeUnit) => {
  const { key } = period
  switch (key) {
  case MORNING:
    return timeSections.find(t => t.key === AFTERNOON)
  case AFTERNOON:
    return timeSections.find(t => t.key === EVENING)
  case EVENING:
    return timeSections.find(t => t.key === MORNING)
  }
}

const calculateTimeBetweenPeriods = (from, to) => {
  const { end } = from
  const { start } = to
  const duration = moment.duration(start.diff(end))

  const hours = duration.hours()
  const minutes = duration.minutes()
  return {
    time: duration.asMilliseconds(),
    hours,
    minutes,
    humanized: `${duration.humanize()}`,
  }
}

// Figure out how to calculate time left before next period
const pickTimePeriodForTime = (
  timeString: string
): { selectedTime: TimeElement, day: string, extra: any } => {
  const time = moment(timeString, EXTENDED_DATE_FORMAT)
  const timeSections = buildTimeSections()
  const enclosingPeriod = timeSections.reduce((selectedTime, t) => {
    const { start, end, format, effects } = t
    const [operatedStart, operatedEnd] = evaluateAndApplyEffects({
      time,
      start,
      end,
      format,
      effects,
    })
    const isBetween =
      time.isSameOrAfter(operatedStart) && time.isSameOrBefore(operatedEnd)
    if (isBetween)
      return {
        selectedTime: {
          ...t,
          start: operatedStart,
          end: operatedEnd,
        },
        day: operatedStart.format(DATE_FORMAT),
        extra: {
          timeStamp: operatedStart.format(),
          isSpecialPeriod: operatedStart.format() !== start.format(),
        },
      }
    return selectedTime
  }, null)
  const nextPeriod = getNextPeriod(timeSections, enclosingPeriod.selectedTime)
  const timeLeft = calculateTimeBetweenPeriods({ end: moment() }, nextPeriod)
  const timeLeftString = `${
    timeLeft.hours
      ? `${timeLeft.hours} ${timeLeft.hours === 1 ? 'hour' : 'hours'} and `
      : ''
  }${
    timeLeft.minutes
      ? `${timeLeft.minutes + 1} ${
        timeLeft.minutes + 1 === 1 ? 'minute' : 'minutes'
      }`
      : 'a bit'
  }`
  const result = {
    ...enclosingPeriod,
    extra: {
      ...enclosingPeriod.extra,
      nextPeriod,
      timeLeft: timeLeftString,
    },
  }

  return result
}

export const pickTimePeriodAndDayForTime = (
  timeString: string
): { period: TimeElement, day: string, extra: any } => {
  const { selectedTime: period, day, extra } = pickTimePeriodForTime(timeString)
  return { period, day, extra }
}
