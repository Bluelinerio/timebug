//@flow
import R from 'ramda';

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
  FINISHED,
} from './constants';

import { StepId, Category } from './types';
/**
 * End categories
 */

/**
 *  Types
 */

type Step = StepId;

type StepsList = Array<Step>;

type DevResult = {
  status: number,
  text: string,
};

type CategoriesObject = {
  [Category]: StepsList,
};

type CategoriesCalls = {
  [Category]: any,
};

export type Suggestion = [Step, Category];

/**
 *  EndTypes
 */

/**
 * Dev helpers
 */

const handleResult = ({ status, text }: DevResult): null => {
  if (status === false) console.warn(text);
  else console.log(text);
};

/**
 * End Dev helpers
 */

const allSteps = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
];
const sequentialExceptions = ['15', '30', '4', '9', '25'];

const biasedInputs = [PHASE1, PHASE2, PHASE3];

/**
 * Returns function, that returns the elements of the second array that are included in the first
 * @param {Array} first
 * First array to be compared
 * @returns {Function}
 *    @param  {Array} second
 *    Second array To be compared
 *    @return {number}
 *    Number of elements in the second array that are also in the first
 */
const _count = (first: Array<any>) => (second: Array<any>): number =>
  second.filter(item => first.includes(item)).length;

/**
 * Self explanatory comparison function
 * @param {number} min
 * @param {number} test
 * @returns {boolean}
 * Returns true if test is bigger than min
 */
/* eslint-disable-next-line no-unused-vars */
const _biggerThan = (min: number) => (test: number): boolean => test > min;

/**
 * Self explanatory comparison function
 * @param {number} min
 * @param {number} c
 * @returns {boolean}
 * Returns true if c is bigger or equal to min
 */

const _biggerOrEqualTo = (min: number) => (c: number): boolean => c >= min;

/**
 *
 * @param {*} data
 * @param {*} min
 *
 */
/* eslint-disable-next-line no-unused-vars */
const _findAtLeastOf = (data: Array<string> | Array<any>, min: number) =>
  R.compose(_biggerOrEqualTo(min), _count(data));

/**
 * Modified because R.range is left inclusive and right exclusive
 */

const _stepIds: StepsList = R.range(1, 31).map(v => v.toString());

/**
 * Function that returns true if the passed param is a stepId
 * @param {string | any} param
 * @returns {boolean} boolean
 */
const isStepId = (stepIdOrNot: string | any) => {
  return _stepIds.includes(stepIdOrNot);
};

/**
 * Tries to find if the element at index i on input has the same neighbors as it's counterpart on test,
 * returns true if any of the neighbors of test at i are the same as the neighbors of input at i
 * @param {number} i
 * Number representing index in both arrays
 * @param {Array<string>} input
 * All steps of a category
 * @param {Array<string>} test
 * All steps the user has
 * @return {boolean} boolean
 */

const _findIfItemHasSameNeighbor = (
  i: number,
  input: StepsList,
  test: StepsList
): boolean => {
  const indexInTest = R.indexOf(input[i], test);
  if (indexInTest !== -1) {
    const previousInput = () => input[i - 1];
    const nextInput = () => input[i + 1];

    const canAddToIndex = indexInTest < test.length - 1;
    const canSubtractFromIndex = indexInTest > 0;

    if (i === input.length - 1) {
      const before = previousInput();
      return (
        (canSubtractFromIndex && before === test[indexInTest - 1]) ||
        (canAddToIndex && before === test[indexInTest + 1])
      );
    } else if (i === 0) {
      const following = nextInput();
      return (
        (canSubtractFromIndex && following === test[indexInTest - 1]) ||
        (canAddToIndex && following === test[indexInTest + 1])
      );
    } else {
      const before = previousInput();
      const following = nextInput();
      return (
        (canSubtractFromIndex && before === test[indexInTest - 1]) ||
        (canAddToIndex && before === test[indexInTest + 1]) ||
        (canSubtractFromIndex && following === test[indexInTest - 1]) ||
        (canAddToIndex && following === test[indexInTest + 1])
      );
    }
  }
  return false;
};

/**
 * Unused
 * @param {Array} data : all elements of category, hardcoded
 * @param {Number} succeedIfAbovePercent : nullable, weight of decision
 */
/* eslint-disable-next-line no-unused-vars */
const _test = (data: StepsList, succeedIfAbovePercent: number) => (
  subject: StepsList
): boolean => {
  const hasSameNeighbor = (item: Step, i: number): boolean =>
    _findIfItemHasSameNeighbor(i, subject, data);

  const countSubjectItemInData = (): number =>
    R.countBy(item => data.includes(item), subject)['true'];

  const hasAllItems = (): boolean =>
    R.all(item => subject.includes(item), data);

  if (subject.length === 0)
    return new Error('can not provide suggestion based on no history');
  if (subject.length === 1) {
    const result = data.includes(subject[0]);
    if (result === true) console.log('determind result based on one item');
    return result;
  }
  if (hasAllItems()) {
    console.log(`Already completed all items ${subject}`);
    return false;
  }
  if (subject.find(hasSameNeighbor)) {
    console.log(`found neighbor in ${subject}`);
    return true;
  }
  const percentage = succeedIfAbovePercent || 0.33;
  if (countSubjectItemInData() / subject.length > percentage) {
    console.log(
      `the percentage of item in ${data} is higher than ${percentage}`
    );
    return true;
  }
  return false;
};

/**
 * Function that determines odds of a certain subject belonging to a certain category
 * @param {Array<string>} data
 * Elements of category
 * @param {number} minItems
 * Minimum number of items to be considered - Not Used
 * @param {number} minPercent
 * Odds threshold that needs to be surpassed to return true - Value between 0 and 1 default 0
 * @return {Function}
 * @param {Array<string>} subject
 * Steps the user has completed
 */
const _moddedTest = (data, minItems, minPercent = 0.0) => subject => {
  const hasAllItems = () => R.all(item => subject.includes(item), data);

  const countElementsInDataThatAreInSubject = () => {
    const res = R.countBy(item => subject.includes(item), data);
    if (res['true']) return res['true'];
    return 0;
  };

  if (subject.length === 0)
    return new Error('can not provide suggestion based on no history');

  const elements = countElementsInDataThatAreInSubject();
  if (hasAllItems()) {
    console.log(`Already completed all items ${subject}`);
    return 0.0;
  }

  const percentage = elements / data.length;
  return percentage > minPercent ? percentage : 0.0;
};

/**
 * Creates an array of all indexes from 0 to length in order of proximity to index.
 * @param {number} index
 * @param {number} length
 * @param {boolean} fromRight
 */
const _mirrorFromIndex = (
  index: number,
  length: number,
  fromRight: boolean
) => {
  let g = [];
  let i = 1;
  let j = 0;
  while (g.length < length - 1) {
    if (fromRight) {
      if (index + i < length) {
        g.push(index + i);
      }
      if (index - i >= 0) {
        g.push(index - i);
      } else {
        g.push(length - 1 - j);
        j++;
      }
    } else {
      if (index - i >= 0) {
        g.push(index - i);
      }
      if (index + i < length) {
        g.push(index + i);
      } else {
        g.push(j);
        j++;
      }
    }
    i++;
  }
  return g;
};

/**
 * Suggests next recommended step based on the winning category and the user's interests
 * @param {StepsList} data
 * All steps belonging to a category
 * @return {Function}
 * @param {StepsList} subject
 * All steps completed by the user
 */
const _suggest = (data: StepsList) => (subject: StepsList): Step => {
  const filtered = R.filter(value => data.includes(value))(subject);
  const index = R.indexOf(R.last(filtered), data);
  const nextSuggestedIndex = _mirrorFromIndex(index, data.length).find(
    i => subject.includes(data[i]) === false
  );
  return data[nextSuggestedIndex];
};

const Categories: CategoriesObject = {
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
  [NEIGHBOR]: _stepIds,
};

const suggestionsByCategory: CategoriesCalls = {
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
  [NEIGHBOR]: _suggest(Categories[NEIGHBOR]),
};

const moddedTest: CategoriesCalls = {
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
};

/**
 * Checks subject against allSteps to determine if the user is checking steps sequentially
 * @param {Array<string>} subject
 * User's completed steps
 */
const _checkSequential = (subject: StepsList): Suggestion => {
  if (
    subject.length === 1 &&
    !sequentialExceptions.find(el => subject[0] === el)
  )
    return [`${parseInt(subject[0]) + 1}`, NEIGHBOR];
  else {
    const result = subject.reduce(
      (prev, curr, i) => {
        if (curr !== allSteps[i]) prev = false;
        else {
          if (prev !== false && i < allSteps.length - 1)
            prev = [allSteps[i + 1], NEIGHBOR];
        }
        return prev;
      },
      ['2', NEIGHBOR]
    );
    return result;
  }
};

/**
 * Returns a suggestion of the next step to completed based on the user's interest in a certain category
 * @param {Array<string>} steps
 * Steps the user has completed so far
 * @returns {Suggestion}
 * A suggestion
 */
const suggestNextStep = originalSteps => {
  console.log(`--Checking ${originalSteps} for Suggestions`);
  const steps = R.dropRepeats(originalSteps);

  if (!steps || steps.length === 0) return ['-1', 'PLACEHOLDER'];
  // This is a controlled response sent once every step is completed
  if (steps.length === allSteps.length) return ['-1', FINISHED];

  console.log(`--Checking ${steps} for sequentially`);
  const isSequential = _checkSequential(steps);
  if (isSequential != false) return isSequential;

  if (!steps.find(isStepId))
    throw new Error(`expected step id got: ${steps.find(isStepId)}`);
  if (R.dropRepeats(steps).length < steps.length)
    throw new Error(
      `found duplicate steps ${R.difference(R.dropRepeats(steps), steps)}`
    );
  console.log(`--Starting suggestions for ${steps}`);
  const weights = Object.keys(moddedTest).reduce((prev, key) => {
    const weight = moddedTest[key](steps);
    prev[key] = weight;
    return prev;
  }, {});
  const { winner, tie } = Object.keys(weights).reduce(
    (prev, key) => {
      const { winner } = prev;
      const weight = weights[key];
      if (weight !== 0 && winner === NEIGHBOR) {
        return { ...prev, winner: key };
      } else {
        if (weights[key] > weights[winner]) {
          return { ...prev, winner: key, tie: false };
        } else if (weights[key] !== 0 && weights[key] === weights[winner]) {
          if (
            biasedInputs.find(el => key === el) &&
            !biasedInputs.find(el => winner === el)
          )
            return { ...prev, winner: key, tie: false };
          return { ...prev, tie: true };
        }
        return prev;
      }
    },
    { winner: NEIGHBOR, tie: false }
  );
  const winnerKey = tie ? NEIGHBOR : winner;
  console.log(`--Found winner ${winnerKey}`);
  const suggestedNextStep = suggestionsByCategory[winnerKey](steps);
  return [suggestedNextStep, winnerKey];
};

if (__DEV__) {
  const runOnTestAndReportFailed = fn => ({ value, expected }) => {
    try {
      const result = fn(value);
      if (!R.equals(result, expected))
        return {
          status: false,
          text: `failed where value is ${value} got ${result} expectd ${expected}`,
        };
      return { status: true, text: 'we are good!' };
    } catch (e) {
      if (expected === 'error')
        return {
          status: true,
          text: `we are good! expected error, and got ${e}`,
        };
      return {
        status: true,
        text: `failed where value is ${value}, the following error ocurred: ${e}`,
      };
    }
  };

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
    { value: ['1', '2', '3', '5', '7', '8', '13'], expected: ['9', PHASE1] },
    { value: ['15', '25'], expected: ['24', NEIGHBOR] },
    { value: ['1'], expected: ['2', NEIGHBOR] },
    { value: ['1', '2', '3', '4', '5', '6', '7'], expected: ['8', NEIGHBOR] },
    {
      value: ['1', '2', '3', '4', '5', '6', '7', '8'],
      expected: ['9', NEIGHBOR],
    },
    { value: ['1', '3', '4', '5', '6', '10'], expected: ['9', PHASE1] },
    { value: ['11', '13', '14', '15', '16'], expected: ['17', PHASE2] },
    { value: ['7', '8', '9'], expected: ['4', TEAMWORK] }, // Check this one
    { value: ['4', '7', '8', '9'], expected: ['10', PHASE1] },
    { value: ['25'], expected: ['15', HOBBIES] }, // Check this one
    { value: ['30'], expected: ['22', REFLECTION] },
    { value: Categories[REFLECTION], expected: ['9', PHASE1] },
    { value: allSteps, expected: 'error' },
    { value: ['10'], expected: ['11', NEIGHBOR] }, // Check this one
    { value: ['20', '21', '22'], expected: ['30', REFLECTION] }, // Check this one
    { value: ['20', '22'], expected: ['21', REFLECTION] },
    { value: ['22', '30'], expected: ['1', REFLECTION] }, // Check this one
    {
      value: ['1', '2', '3', '4', '5', '7', `9`, '15', '17'],
      expected: ['8', PHASE1],
    },
    {
      value: ['1', '2', '3', '4', '5', '6', '7', '8', `9`, '15', '17'],
      expected: ['10', PHASE1],
    },
    {
      value: ['1', '2', '3', '4', '5', '6', '7', '8', `9`, '10', '15', '17'],
      expected: ['11', GOALS],
    },
  ];

  tests.map(test => {
    const result = runOnTestAndReportFailed(suggestNextStep)(test);
    handleResult(result);
  });
}

export default suggestNextStep;
