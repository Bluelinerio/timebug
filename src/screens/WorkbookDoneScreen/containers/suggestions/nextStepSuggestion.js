import R from 'ramda'
import {
  REFLECTION,
  TEAMWORK,
  GOALS,
  CAREER,
  HOBBIES,
  HEALTH,
  RELATIONSHIPS,
  ENVIRONMENT,
  SPIRITUALITY,
  PHASE1,
  PHASE2,
  PHASE3,
  NEIGHBOR,
  stepIds
} from './constants'

const _count = first => second => second.filter(item => first.includes(item))
//const _biggerThan = min => test => test > min
const _biggerOrEqualTo = min => c => c >= min
const _findAtLeastOf = (data, min) =>
  R.compose(_biggerOrEqualTo(min), _count(data))

const isStepId = stepIdOrNot => {
  return stepIds.includes(stepIdOrNot)
}
const findIfItemHasSameNeighbor = (i, input, test) => {
  const indexInTest = R.indexOf(input[i], test) // that item is contained.
  if (indexInTest !== -1) {
    const previousInput = () => input[i - 1]
    const nextInput = () => input[i + 1]

    const canAddToIndex = indexInTest < test.length - 1
    const canSubtractFromIndex = indexInTest > 0
    if (i === input.length - 1) {
      const before = previousInput()
      return (
        (canSubtractFromIndex && before === test[indexInTest - 1]) ||
        (canAddToIndex && before === test[indexInTest + 1])
      )
    } else if (i === 0) {
      const following = nextInput()
      return (
        (canSubtractFromIndex && following === test[indexInTest - 1]) ||
        (canAddToIndex && following === test[indexInTest + 1])
      )
    } else {
      const before = previousInput()
      const following = nextInput()
      return (
        (canSubtractFromIndex && before === test[indexInTest - 1]) ||
        (canAddToIndex && before === test[indexInTest + 1]) ||
        (canSubtractFromIndex && following === test[indexInTest - 1]) ||
        (canAddToIndex && following === test[indexInTest + 1])
      )
    }
  }
  return false
}
const _test = (data, succeedIfAbovePercent) => subject => {
  const hasSameNeighbor = (item, i) =>
    findIfItemHasSameNeighbor(i, subject, data)
  const countSubjectItemInData = () =>
    R.countBy(item => data.includes(item), subject)['true']
  const hasAllItems = () => R.all(item => subject.includes(item), data)

  if (subject.length === 0)
    return new Error('can not provide suggestion based on no history')
  if (subject.length === 1) {
    const result = data.includes(subject[0])
    if (result === true) console.log('determind result based on one item')
    return result
  }
  if (hasAllItems()) {
    console.log(`Already complted all items ${subject}`)
    return false
  }
  if (subject.find(hasSameNeighbor)) {
    console.log(`found neighbor in ${subject}`)
    return true
  }
  const percent = succeedIfAbovePercent && 0.33
  if (countSubjectItemInData() / subject.length > percent) {
    console.log(`the percent of item in ${data} is highers than ${percent}`)
    return true
  }
  return false
}
const mirrorFromIndex = (index, length, fromRight) => {
  let g = []
  let i = 1
  while (g.length < length - 1) {
    if (fromRight) {
      if (index + i < length) {
        g.push(index + i)
      }
      if (index - i >= 0) {
        g.push(index - i)
      }
    } else {
      if (index - i >= 0) {
        g.push(index - i)
      }
      if (index + i < length) {
        g.push(index + i)
      }
    }
    i++
  }
  return g
}

const _suggest = data => subject => {
  const index = R.indexOf(R.last(subject), data)
  const nextSuggestedIndex = mirrorFromIndex(index, data.length).find(
    i => subject.includes(data[i]) === false
  )
  return data[nextSuggestedIndex]
}
const Categories = {
  [REFLECTION]   : ['1', '3', '8', '10', '12', '20', '21', '22', '30'],
  [TEAMWORK]     : ['4', '9'],
  [GOALS]        : ['2', '5', '6', '7', '11', '20', '21'],
  [CAREER]       : ['13', '14', '23', '24'],
  [HOBBIES]      : ['15', '25'],
  [HEALTH]       : ['16', '26'],
  [RELATIONSHIPS]: ['17', '27'],
  [ENVIRONMENT]  : ['18', '28'],
  [SPIRITUALITY] : ['19', '29'],
  [PHASE1]       : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  [PHASE2]       : ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
  [PHASE3]       : ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  [NEIGHBOR]     : stepIds
}
const suggestionsByCategory = {
  [REFLECTION]   : _suggest(Categories[REFLECTION]),
  [TEAMWORK]     : _suggest(Categories[TEAMWORK]),
  [GOALS]        : _suggest(Categories[GOALS]),
  [CAREER]       : _suggest(Categories[CAREER]),
  [HOBBIES]      : _suggest(Categories[HOBBIES]),
  [HEALTH]       : _suggest(Categories[HEALTH]),
  [RELATIONSHIPS]: _suggest(Categories[RELATIONSHIPS]),
  [ENVIRONMENT]  : _suggest(Categories[ENVIRONMENT]),
  [SPIRITUALITY] : _suggest(Categories[SPIRITUALITY]),
  [PHASE1]       : _suggest(Categories[PHASE1]),
  [PHASE2]       : _suggest(Categories[PHASE2]),
  [PHASE3]       : _suggest(Categories[PHASE3]),
  [NEIGHBOR]     : _suggest(Categories[NEIGHBOR])
}
const testsByCategory = {
  [REFLECTION]   : _test(Categories[REFLECTION]),
  [TEAMWORK]     : _test(Categories[TEAMWORK]),
  [GOALS]        : _test(Categories[GOALS]),
  [CAREER]       : _test(Categories[CAREER]),
  [HOBBIES]      : _test(Categories[HOBBIES]),
  [HEALTH]       : _test(Categories[HEALTH]),
  [RELATIONSHIPS]: _test(Categories[RELATIONSHIPS]),
  [ENVIRONMENT]  : _test(Categories[ENVIRONMENT]),
  [SPIRITUALITY] : _test(Categories[SPIRITUALITY]),
  [PHASE1]       : _findAtLeastOf(Categories[PHASE1], 3),
  [PHASE2]       : _findAtLeastOf(Categories[PHASE2], 3),
  [PHASE3]       : _findAtLeastOf(Categories[PHASE3], 3)
}

const nextStepSuggestion = steps => {
  if (!steps.find(isStepId))
    throw new Error(`expected step id got: ${steps.find(isStepId)}`)
  if (R.dropRepeats(steps).length < steps.length)
    throw new Error(
      `found duplicate steps ${R.difference(R.dropRepeats(steps), steps)}`
    )
  console.log(`--Starting suggestions for ${steps}`)
  const winnerKey =
    Object.keys(testsByCategory).find(key => {
      const result = testsByCategory[key](steps)
      if (!result) {
        console.log(`skipping ${key}`)
      }
      return result
    }) || NEIGHBOR
  console.log(`--Found winner ${winnerKey}\n`)
  const suggestedNextStep = suggestionsByCategory[winnerKey](steps)
  return [suggestedNextStep, winnerKey]
}

export default nextStepSuggestion

if (__DEV__) {
  //const runOneTest = fn => ({ value, expected }) => R.equals(fn(value), expected)
  // const runOnTestAndReport = fn => ({ value, expected }) => {
  //   const result = fn(value)
  //   if (R.equals(result, expected)) return 'passed'
  //   return `for value ${value} expectd ${expected} got ${result}`
  // }

  //tests.map(reunOnTestAndReport(nextStepSuggestion))
  //runOnTestAndReportFailed(nextStepSuggestion)({ value: ['2', '5'], expected: [ '9', GOALS ]})
  const runOnTestAndReportFailed = fn => ({ value, expected }) => {
    const result = fn(value)
    if (!R.equals(result, expected))
      return `failed where value is ${value} got ${result} expectd ${expected}`
    return 'we are good!'
  }

  const tests = [
    { value: ['1', '3'], expected: ['8', REFLECTION] },
    { value: ['1', '3', '10'], expected: ['8', REFLECTION] },
    { value: ['3', '10'], expected: ['8', REFLECTION] },
    { value: ['8', '10'], expected: ['12', REFLECTION] },
    { value: ['2', '5'], expected: ['6', GOALS] },
    { value: ['15'], expected: ['25', HOBBIES] },
    { value: ['15', '25'], expected: ['25', HOBBIES] }
  ]
  tests.reduce((sum, test) =>
    runOnTestAndReportFailed(nextStepSuggestion)(test)
  )
}
