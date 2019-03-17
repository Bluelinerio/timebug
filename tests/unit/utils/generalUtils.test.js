import moment from 'moment'
import { syncTimeout } from '../../helpers'
import hexToRgba from '../../../src/utils/colorTransform'
import { getDueDate } from '../../../src/utils/dateCalculationHelpers'
import { debounce } from '../../../src/utils/debounce'
import { toHashCode } from '../../../src/utils/hashing'
import { getRandomInt, randomItem } from '../../../src/utils/random'
import { minutesAndSeconds } from '../../../src/utils/timerHelpers'
import {
  heightPercentage,
  widthPercentage,
} from '../../../src/utils/viewportCalculation'

/**
 * Untested:
 *   - CustomCardStackStyleInterpolator
 *   - networkState
 *   - normalizeText
 */
describe('Tests of general minor utils', function() {
  // colorTransform
  it('should generate rgba color of a hex color without alpha', function() {
    const color = hexToRgba('#101010')
    expect(color).toBe('rgb(16, 16, 16)')
  })

  it('should generate rgba color of a hex color with alpha', function() {
    const color = hexToRgba('#101010', 1.0)
    expect(color).toBe('rgba(16, 16, 16, 1)')
  })

  // dateCalculationHelpers
  it("should succesfully calculate due date using moment's time measurements", function() {
    /**
     * Using moment.startOf is required because of how moment handles month/year diffs,
     * if it's not perfectly a unit after, it does not consider said unit to have passed
     */
    const origin = moment().startOf('day')
    const goal = {
      created_at: origin.format(),
    }
    const timeMeasure = [
      {
        unit: 'M', //Months
        value: 3,
      },
    ]
    const { due } = getDueDate(goal, timeMeasure)
    const then = moment(due).startOf('day')

    expect(then.diff(origin, 'M')).toBe(3)
  })

  it('should succesfully determine if a date has passed using moments time measurements', function() {
    const origin = moment().subtract(10, 'M')
    const goal = {
      created_at: origin.format(),
    }
    const timeMeasure = [
      {
        unit: 'M', //Months
        value: 3,
      },
    ]
    const { hasNotHappened } = getDueDate(goal, timeMeasure)
    expect(hasNotHappened).toBe(false)
  })

  it('should say date has passed if the the comparison dates are between 10 minutes of each other', function() {
    const origin = moment().startOf('minute')
    const goal = {
      created_at: origin.format(),
    }
    const timeMeasure = [
      {
        unit: 'm', //minutes
        value: 5,
      },
    ]
    const { due, hasNotHappened } = getDueDate(goal, timeMeasure)
    const then = moment(due).startOf('minute')
    expect(then.diff(origin, 'm')).toBe(5)
    expect(hasNotHappened).toBe(false)
  })

  // debounce
  it('should only call function once within the debounce period', async function() {
    const fn = jest.fn(i => i)
    const debounced = debounce(fn, 1000)
    for (let i = 0; i < 10; i++) {
      debounced(i)
    }
    await syncTimeout(1500)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toBeCalledWith(9)
  })

  // hashCode
  it('should always generate the same hash for the same key', function() {
    const key = 'some-long_key-WITH_many-diFfErEnt123-characters'
    const hash = toHashCode(key)
    expect(hash).toBe(toHashCode(key))
  })

  it('should not generate the same hash for different keys', function() {
    const key = 'key-1'
    const key2 = 'key-2'
    expect(toHashCode(key)).not.toBe(toHashCode(key2))
  })

  // random
  it('should generate random numbers correctly', function() {
    const nums = []
    for (let i = 0; i < 500; i++) {
      nums.push(getRandomInt(100))
    }
    expect(nums.filter(n => n > 100).length).toBe(0)
  })

  it('should pick random items correctly', function() {
    const items = ['foo', 'bar', 'baz']
    const item = randomItem(items)
    const item2 = randomItem(items)
    expect(items.indexOf(item)).not.toBe(-1)
    expect(items.indexOf(item2)).not.toBe(-1)
  })

  // timerHelpers
  it('should generate a timer-like string correctly', function() {
    const tenMin = 600 // 10 minutes
    const hour = 3600 // 1h
    const bigNumber = 123123123

    expect(minutesAndSeconds(tenMin)[0]).toBe('10')
    expect(minutesAndSeconds(tenMin)[1]).toBe('00')

    expect(minutesAndSeconds(hour)[0]).toBe('60')
    expect(minutesAndSeconds(hour)[1]).toBe('00')

    expect(minutesAndSeconds(bigNumber)[0].length).toBeGreaterThan(2)
  })

  // viewportCalculation
  it('should calculate a viewport correctly', function() {
    const height = 1000
    const width = 500

    expect(Math.floor(widthPercentage(50, width))).toBe(250)

    expect(Math.floor(heightPercentage(50, height))).toBe(500)
  })
})
