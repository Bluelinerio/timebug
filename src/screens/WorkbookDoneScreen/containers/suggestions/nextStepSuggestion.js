const R = require('ramda')

/**
 *  Categories in which steps are classified
 */

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
  FINISHED
} from '../../../../constants/suggestions'
import { stepIds } from '../../../../constants/steps'
/**
 * End categories
 */

/**
 * Dev helpers
 */

const handleResult = ({ status, text }) => {
  if(status === false)
    console.warn(text)
  else
    console.log(text)
}

/**
 * End Dev helpers
 */

const allSteps = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
const sequentialExceptions = ['15', '30', '4', '9', '25']

const biasedInputs = [PHASE1, PHASE2, PHASE3];

/**
 * Current decision making for suggestions
 * @param {*} data
 * @param {*} minItems
 * @param {*} minPercent
 */
const _moddedTest = (data, minItems, minPercent = 0.00) => subject => {
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

const _mirrorFromIndex = (index, length, fromRight) => {
  let g = []
  let i = 1
  let j = 0
  while (g.length < length - 1) {
    if (fromRight) {
      if (index + i < length) {
        g.push(index + i)
      }
      if (index - i >= 0) {
        g.push(index - i)
      }
      else {
        g.push(length - 1 - j)
        j++
      }
    } else {
      // 1,  9, 10
      if (index - i >= 0) {
        g.push(index - i)
      }
      if (index + i < length) {
        g.push(index + i)
      }
      else{
        g.push(j)
        j++
      }
    }
    i++
  }
  return g
}

const _suggest = data => subject => {
  const filtered = R.filter(value => data.includes(value))(subject)
  const index = R.indexOf(R.last(filtered), data)
  const nextSuggestedIndex = _mirrorFromIndex(index, data.length).find(
    i => subject.includes(data[i]) === false
  )
  return data[nextSuggestedIndex]
}

const Categories = {
  [REFLECTION]: ['1', '3', '8', '10', '12', '20', '21', '22', '30'],
  [TEAMWORK]: ['4', '9'],
  [GOALS]: ['2', '5', '6', '7', '11', '20', '21'],
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
  [GOALS]: _suggest(Categories[GOALS]),
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

const moddedTest = {
  [REFLECTION]: _moddedTest(Categories[REFLECTION]),
  [TEAMWORK]: _moddedTest(Categories[TEAMWORK]),
  [GOALS]: _moddedTest(Categories[GOALS]),
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

const _checkSequential = subject => {
  if (subject.length === 1 && !sequentialExceptions.find(el => subject[0] === el)) return [`${parseInt(subject[0]) + 1}`, NEIGHBOR];
  else {
    const result = subject.reduce((prev, curr, i) => {
      if(curr !== allSteps[i])
        prev = false
      else{
        if(prev !== false && i < allSteps.length - 1) prev = [allSteps[i + 1], NEIGHBOR]
      }
      return prev;
    }, ['2', NEIGHBOR])
    return result;
  }
}
const suggestNextStep = steps => {
  //Most of these errors remain uncaught most of the time
  if (!steps || steps.length === 0)
    return ['-1', 'PLACEHOLDER']
  // This is a controlled response sent once every step is completed
  if(steps.length === allSteps.length)
    return ['-1', FINISHED]

  console.log(`--Checking ${steps} for sequentially`)
  const isSequential = _checkSequential(steps);
  if (isSequential != false)
    return isSequential

  if (R.not(R.all(R.contains(steps, stepIds))))
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
        return { ...prev, winner: key, tie: false }
      }
      else if (weights[key] !== 0 && weights[key] === weights[winner]) {
        if(biasedInputs.find(el => key === el) && !biasedInputs.find(el => winner === el))
          return { ...prev, winner: key, tie: false }
        return { ...prev, tie: true }
      }
      return prev
    }
  }, { winner: NEIGHBOR, tie: false })
  const winnerKey = tie ? NEIGHBOR : winner
  console.log(`--Found winner ${winnerKey}`)
  const suggestedNextStep = suggestionsByCategory[winnerKey](steps)
  return [suggestedNextStep, winnerKey]
}

if (__DEV__) {
  const runOnTestAndReportFailed = fn => ({ value, expected }) => {
    try{
      const result = fn(value)
      if (!R.equals(result, expected))
        return { status: false, text: `failed where value is ${value} got ${result} expectd ${expected}`}
      return { status: true, text: 'we are good!' }
    } catch(e) {
      if(expected === 'error')
        return { status: true, text: `we are good! expected error, and got ${e}` }
      return { status: true, text: `failed where value is ${value}, the following error ocurred: ${e}` }
    }
  }

  /**
   * Priority:
   * Sequential
   * Phases
   * Categories
   */

  const tests = [
    { value: ['1', '3'], expected: ['8', REFLECTION] },
    { value: ['1', '2'], expected: ['3', NEIGHBOR] },
    { value: ['1', '2', '3', '5'], expected: ['4', PHASE1] },
    { value: ['1', '2', '3'], expected: ['4', NEIGHBOR] },
    { value: ['1', '3', '10'], expected: ['8', REFLECTION] }, //0.33 Reflection vs 0.3 Phase1
    { value: ['10', '12', '20'], expected: ['21', REFLECTION] },
    { value: ['3', '10'], expected: ['8', REFLECTION] },
    { value: ['8', '10'], expected: ['12', REFLECTION] },
    { value: ['2', '5'], expected: ['6', GOALS] },
    { value: ['15'], expected: ['25', HOBBIES] }, // Check this one
    { value: ['1', '2', '3', '5', '7', '8' , '13'], expected: ['9', PHASE1] },
    { value: ['15', '25'], expected: ['24', NEIGHBOR] },
    { value: ['1'], expected: ['2', NEIGHBOR] },
    { value: ['1', '2', '3', '4', '5', '6', '7'], expected: ['8', NEIGHBOR] },
    { value: ['1', '2', '3', '4', '5', '6', '7', '8'], expected: ['9', NEIGHBOR] },
    { value: ['1', '3', '4', '5', '6', '10'], expected: ['9', PHASE1] },
    { value: ['11', '13', '14', '15', '16'], expected: ['17', PHASE2] },
    { value: ['7', '8', '9'], expected: ['4', TEAMWORK] }, // Check this one
    { value: ['4', '7', '8', '9'], expected: ['10', PHASE1] },
    { value: ['25'], expected: ['15', HOBBIES] }, // Check this one
    { value: ['30'], expected: ['22', REFLECTION] },
    { value: Categories[REFLECTION], expected: ['9',PHASE1]},
    { value: allSteps, expected: 'error' },
    { value: ['10'], expected: ['11', NEIGHBOR] }, // Check this one
    { value: ['20', '21', '22'], expected: ['30', REFLECTION] }, // Check this one
    { value: ['20', '22'], expected: ['21', REFLECTION] },
    { value: ['22', '30'], expected: ['1', REFLECTION] }, // Check this one
    { value: ['1','2','3','4','5','7',`9`,'15','17'], expected: ['8', PHASE1] },
    { value: ['1','2','3','4','5','6','7','8',`9`,'15','17'], expected: ['10', PHASE1] },
    { value: ['1','2','3','4','5','6','7','8',`9`,'10', '15','17'], expected: ['11', GOALS] },
  ]

  tests.map((test) => {
    const result = runOnTestAndReportFailed(suggestNextStep)(test)
    handleResult(result)
  })
}

export default suggestNextStep