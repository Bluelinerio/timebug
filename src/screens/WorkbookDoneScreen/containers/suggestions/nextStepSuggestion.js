const R = require('ramda')

/**
 *  Categories in which steps are classified
 */

import {
  REFLECTION,
  TEAMWORK,
  GOAL,
  CAREER,
  HOBBIES,
  HEALTH,
  RELATIONSHIPS,
  ENVIRONMENT,
  SPIRITUALITY,
  PHASE1,
  PHASE2,
  PHASE3,
  NEIGHBOR
} from './constants'

/**
 * End categories
 */

const allSteps = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']


/**
 * @param {Array}
 * Returns function, that returns the elements of the second array that are included in the first
 * @returns {function} @param  {Array}
 *                     @return {Array}
 * 
 */
const _count = first => second => second.filter(item => first.includes(item))

/**
 * 
 * @param {*} min 
 * Self explanatory comparison functions
 */
const _biggerThan = min => test => test > min

const _biggerOrEqualTo = min => c => c >= min


/**
 * 
 * @param {*} data 
 * @param {*} min 
 */
const _findAtLeastOf = (data, min) =>
  R.compose(_biggerOrEqualTo(min), _count(data))

const stepIds = R.range(1, 30).map((v, i) => i.toString())
const isStepId = stepIdOrNot => {
  return stepIds.includes(stepIdOrNot)
}
const findIfItemHasSameNeighbor = (i, input, test) => {
  const indexInTest = R.indexOf(input[i], test) 
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

/**
 * Unused
 * @param {Array} data : all elements of category, hardcoded
 * @param {Number} succeedIfAbovePercent : nullable, weight of decision
 */
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
    console.log(`Already completed all items ${subject}`)
    return false
  }
  if (subject.find(hasSameNeighbor)) {
    console.log(`found neighbor in ${subject}`)
    return true
  }
  const percentage = succeedIfAbovePercent || 0.33
  if (countSubjectItemInData() / subject.length > percent) {
    console.log(`the percentage of item in ${data} is higher than ${percent}`)
    return true
  }
  return false
}

const _moddedTest = (data, minItems, minPercent = 0.00) => subject => {
  const hasSameNeighbor = (item, i) =>
    findIfItemHasSameNeighbor(i, subject, data)
  const countSubjectItemInData = () => {
    const res = R.countBy(item => data.includes(item), subject)
    if (res['true'])
      return res['true']
    return 0
  }
  const hasAllItems = () => R.all(item => subject.includes(item), data)

  const countElementsInDataThatAreInSubject = () => {
    const res = R.countBy(item => subject.includes(item), data)
    if (res['true'])
      return res['true']
    return 0
  }

  if (subject.length === 0)
    return new Error('can not provide suggestion based on no history')

  const elements = countElementsInDataThatAreInSubject()
  if (hasAllItems()) {
    console.log(`Already completed all items ${subject}`)
    return 0.00
  }

  const percentage = elements / data.length
  return percentage > minPercent ? percentage : 0.00
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
  [REFLECTION]: ['1', '3', '8', '10', '12', '20', '21', '22', '30'],
  [TEAMWORK]: ['4', '9'],
  [GOAL]: ['2', '5', '6', '7', '11', '20', '21'],
  [CAREER]: ['13', '14', '23', '24'],
  [HOBBIES]: ['15', '25'],
  [HEALTH]: ['16', '26'],
  [RELATIONSHIPS]: ['17', '27'],
  [ENVIRONMENT]: ['18', '28'],
  [SPIRITUALITY]: ['19', '29'],
  [PHASE1]: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  [PHASE2]: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
  [PHASE3]: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  [NEIGHBOR]: stepIds
}
const suggestionsByCategory = {
  [REFLECTION]: _suggest(Categories[REFLECTION]),
  [TEAMWORK]: _suggest(Categories[TEAMWORK]),
  [GOAL]: _suggest(Categories[GOAL]),
  [CAREER]: _suggest(Categories[CAREER]),
  [HOBBIES]: _suggest(Categories[HOBBIES]),
  [HEALTH]: _suggest(Categories[HEALTH]),
  [RELATIONSHIPS]: _suggest(Categories[RELATIONSHIPS]),
  [ENVIRONMENT]: _suggest(Categories[ENVIRONMENT]),
  [SPIRITUALITY]: _suggest(Categories[SPIRITUALITY]),
  [PHASE1]: _suggest(Categories[PHASE1]),
  [PHASE2]: _suggest(Categories[PHASE2]),
  [PHASE3]: _suggest(Categories[PHASE3]),
  [NEIGHBOR]: _suggest(Categories[NEIGHBOR])
}

//Unused 
const testsByCategory = {
  [PHASE1]: _findAtLeastOf(Categories[PHASE1], 3),
  [PHASE2]: _findAtLeastOf(Categories[PHASE2], 3),
  [PHASE3]: _findAtLeastOf(Categories[PHASE3], 3),
  [REFLECTION]: _test(Categories[REFLECTION]),
  [TEAMWORK]: _test(Categories[TEAMWORK]),
  [GOAL]: _test(Categories[GOAL]),
  [CAREER]: _test(Categories[CAREER]),
  [HOBBIES]: _test(Categories[HOBBIES]),
  [HEALTH]: _test(Categories[HEALTH]),
  [RELATIONSHIPS]: _test(Categories[RELATIONSHIPS]),
  [ENVIRONMENT]: _test(Categories[ENVIRONMENT]),
  [SPIRITUALITY]: _test(Categories[SPIRITUALITY]),
}

const moddedTest = {
  [REFLECTION]: _moddedTest(Categories[REFLECTION]),
  [TEAMWORK]: _moddedTest(Categories[TEAMWORK]),
  [GOAL]: _moddedTest(Categories[GOAL]),
  [CAREER]: _moddedTest(Categories[CAREER]),
  [HOBBIES]: _moddedTest(Categories[HOBBIES]),
  [HEALTH]: _moddedTest(Categories[HEALTH]),
  [RELATIONSHIPS]: _moddedTest(Categories[RELATIONSHIPS]),
  [ENVIRONMENT]: _moddedTest(Categories[ENVIRONMENT]),
  [SPIRITUALITY]: _moddedTest(Categories[SPIRITUALITY]),
  [PHASE1]: _moddedTest(Categories[PHASE1], 3),
  [PHASE2]: _moddedTest(Categories[PHASE2], 3),
  [PHASE3]: _moddedTest(Categories[PHASE3], 3),
}

const checkSequential = (subject) => {
  if (subject.length === 1 && subject[0] === '1') return ['2', NEIGHBOR];
  else {
    for (let i = 0; i < allSteps.length; i++) {
      if(subject[i] !== allSteps[i]) return i > 2 ? [allSteps[i], NEIGHBOR] : false
      else if (i >= subject.length && i > 2) return [subject.length + 1, NEIGHBOR]
    }
    return false;
  }
}

const suggestNextStep = steps => {
  if (!steps || steps.length === 0)
    throw new Error(`Cannot make suggestion on empty data`)

  console.log(`--Checking ${steps} for sequentially`)
  const isSequential = checkSequential(steps);
  if (isSequential != false)
    return isSequential

  if (!steps.find(isStepId))
    throw new Error(`expected step id got: ${steps.find(isStepId)}`)
  if (R.dropRepeats(steps).length < steps.length)
    throw new Error(
      `found duplicate steps ${R.difference(R.dropRepeats(steps), steps)}`
    )
  console.log(`--Starting suggestions for ${steps}`)
  const weights = Object.keys(moddedTest).reduce((prev, key) => {
    const weight = moddedTest[key](steps)
    prev[key] = weight
    return prev
  }, {})
  const { winner, tie } = Object.keys(weights).reduce((prev, key) => {
    const { winner } = prev
    const weight = weights[key]
    if (weight !== 0 && winner === NEIGHBOR) {
      return { ...prev, winner: key }
    }
    else {
      if (weights[key] > weights[winner]) {
        return { ...prev, winner: key }
      }
      else if (weights[key] !== 0 && weights[key] === weights[winner]) {
        return { ...prev, tie: true }
      }
      return prev
    }
  }, { winner: NEIGHBOR, tie: false })
  const winnerKey = tie ? NEIGHBOR : winner
  console.log(`--Found winner ${winnerKey}\n`)
  const suggestedNextStep = suggestionsByCategory[winnerKey](steps)
  return [suggestedNextStep, winnerKey]
}
if (__DEV__) {
const runOnTestAndReportFailed = fn => ({ value, expected }) => {
  try{
    const result = fn(value)
    if (!R.equals(result, expected))
      return `failed where value is ${value} got ${result} expectd ${expected}`
    return 'we are good!'
  } catch(e) {
    if(expected === 'error')
      return `we are good! expected error, and got ${e}`
    return `failed where value is ${value}, the following error ocurred: ${e} `    
  }
}

const tests = [
  { value: ['1', '3'], expected: ['8', REFLECTION] },
  { value: ['1', '3', '10'], expected: ['8', REFLECTION] },
  { value: ['3', '10'], expected: ['8', REFLECTION] },
  { value: ['8', '10'], expected: ['12', REFLECTION] },
  { value: ['2', '5'], expected: ['6', GOAL] },
  { value: ['15'], expected: ['25', HOBBIES] },
  { value: ['15', '25'], expected: ['24', NEIGHBOR] },
  { value: ['1'], expected: ['2', NEIGHBOR] },
  { value: ['1', '2', '3', '4', '5', '6', '7'], expected: ['8', NEIGHBOR] },
  { value: ['1', '2', '3', '4', '5', '6', '7', '8'], expected: ['9', NEIGHBOR] },
  { value: ['1', '3', '4', '5', '6', '10'], expected: ['2', PHASE1] },
  { value: ['11', '13', '14', '15', '16'], expected: ['12', PHASE2] },
  { value: ['7', '8', '9'], expected: ['3', PHASE1] },
  { value: [], expected: 'error' }
]

tests.reduce((sum, test) => {
  const result = runOnTestAndReportFailed(suggestNextStep)(test)
  console.log(result)
})
}