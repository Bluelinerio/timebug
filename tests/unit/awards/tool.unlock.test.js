import dummyState from '../../dummy.state.json'
import selectors from '../../../src/redux/selectors'
import {
  testSome,
  testAll,
  testStepConditions,
  testToolConditions,
  testAchievementConditions,
  handleConditionType,
  testConditions,
  getUnlockedTools,
} from '../../../src/services/tools'
import {
  OPEN,
  STEPS,
  ACHIEVEMENT,
  TOOL,
  ALL,
  SOME,
} from '2020_static/tools/logic/constants'

describe('Tests related to tools unlocking mechanics', function() {
  describe('Tests related to pure unlock mechanics', function() {
    it('Should sucessfully testAll steps with correct data', function() {
      const data = [1, 2, 3, 4, 5, 6, 7, 10, 14]
      const condition = [1, 2, 3, 4, 5]
      expect(testAll(condition, data)).toBe(true)
    })

    it('Should fail testAll steps with string data', function() {
      const data = [1, 2, 3, 4, 5]
      const condition = ['1', '2', '3', '4', '5', '6']
      expect(testAll(condition, data)).toBe(false)
    })

    it('Should fail testAll with incomplete data', function() {
      const data = [1, 2]
      const condition = [1, 2, 3, 4]
      expect(testAll(condition, data)).toBe(false)
    })

    it('Should fail testAll with no steps', function() {
      const data = []
      const condition = [1]
      expect(testAll(condition, data)).toBe(false)
    })

    it('Should succesfully testSome with correct data', function() {
      const data = [1, 3]
      const condition = [2, 3, 4]
      expect(testSome(condition, data)).toBe(true)
    })

    it('Should fail testSome with no matches', function() {
      const data = [1, 4]
      const condition = [2]
      expect(testSome(condition, data)).toBe(false)
    })

    it('Should succesfully test with real step data', function() {
      const unlockedSteps = selectors.getCompletedSteps(dummyState)
      const data = unlockedSteps.map(s => s.number)
      const conditionAll = [1]
      const conditionSome = [2, 10, 20]
      expect(testAll(conditionAll, data)).toBe(true)
      expect(testSome(conditionSome, data)).toBe(true)
    })
  })

  //TODO: Stub testAll and testSome calls
  describe('Tests related to specific conditions', function() {
    it('Should succesfully select testAll on stepConditions', function() {
      const stepNumberList = [1, 2, 3, 4]
      const clause = {
        type: ALL,
        value: [1, 2],
      }
      expect(testStepConditions(clause, stepNumberList)).toBe(true)
    })

    it('Should succesfully select testSome on stepConditions', function() {
      const stepNumberList = [1, 2, 3, 4]
      const clause = {
        type: SOME,
        value: [1, 2],
      }
      expect(testStepConditions(clause, stepNumberList)).toBe(true)
    })

    it('Should default to true for unknown conditions', function() {
      const stepNumberList = [1, 2, 3, 4]
      const clause = {
        type: 'jargon',
        value: [1, 2],
      }
      expect(testStepConditions(clause, stepNumberList)).toBe(true)
    })

    it('Should default to true for toolConditions', function() {
      const toolsWithData = ['tool_1']
      const clause = {
        type: ALL,
        value: ['tool_1'],
      }
      expect(testToolConditions(clause, toolsWithData)).toBe(true)
    })

    it('Should default to true for achievementConditions', function() {
      const achievementsForUser = ['some_achievement']
      const clause = {
        type: ALL,
        value: 'some_achievement',
      }
      expect(testAchievementConditions(clause, achievementsForUser)).toBe(true)
    })
  })

  //TODO: Stub handler calls
  describe('Tests related to condition handling', function() {
    const toolData = ['some_tool']
    const achievementData = ['some_achievement_data']
    const stepNumberList = [1, 2, 3, 4, 5, 6]

    it('Should pick steps handler with step condition', function() {
      const condition = {
        type: STEPS,
        clause: {
          type: SOME,
          value: [1, 2],
        },
      }
      expect(
        handleConditionType(
          condition,
          stepNumberList,
          achievementData,
          toolData
        )
      ).toBe(true)
    })

    it('Should pick tools handler with tool condition', function() {
      const condition = {
        type: TOOL,
        clause: {
          type: SOME,
          value: ['some_tool'],
        },
      }
      expect(
        handleConditionType(
          condition,
          stepNumberList,
          achievementData,
          toolData
        )
      ).toBe(true)
    })

    it('Should pick achievements handler with achievement condition', function() {
      const condition = {
        type: ACHIEVEMENT,
        clause: {
          type: SOME,
          value: ['some_achievement'],
        },
      }
      expect(
        handleConditionType(
          condition,
          stepNumberList,
          achievementData,
          toolData
        )
      ).toBe(true)
    })

    it('Should default to true with OPEN condition', function() {
      const condition = {
        type: OPEN,
      }
      expect(
        handleConditionType(
          condition,
          stepNumberList,
          achievementData,
          toolData
        )
      ).toBe(true)
    })
  })

  describe('Test tool level locks and lock clearance', function() {
    const toolData = ['some_tool']
    const achievementData = ['some_achievement_data']
    const stepNumberList = [1, 2, 3, 4, 5, 6]

    const stepCondition = {
      type: STEPS,
      clause: {
        type: ALL,
        value: [1],
      },
    }

    const falsyStepCondition = {
      type: STEPS,
      clause: {
        type: ALL,
        value: [10],
      },
    }

    const openCondition = {
      type: OPEN,
    }

    const toolCondition = {
      type: TOOL,
      clause: {
        type: ALL,
        value: ['some_tool'],
      },
    }

    const achievementCondition = {
      type: ACHIEVEMENT,
      clause: {
        type: ALL,
        value: ['some_achievement'],
      },
    }

    it('Should unlock tool with fulfilled conditions', function() {
      const lock = {
        conditions: [stepCondition],
      }
      expect(
        testConditions(lock, stepNumberList, toolData, achievementData)
      ).toBe(true)
    })

    it('Should keep tool locked with unfulfilled conditions', function() {
      const lock = {
        conditions: [falsyStepCondition],
      }
      expect(
        testConditions(lock, stepNumberList, toolData, achievementData)
      ).toBe(false)
    })

    it('Should unlock tool with several fulfilled conditions', function() {
      const lock = {
        conditions: [
          stepCondition,
          toolCondition,
          achievementCondition,
          openCondition,
        ],
      }
      expect(
        testConditions(lock, stepNumberList, toolData, achievementData)
      ).toBe(true)
    })

    it('Should keep tool locked with a single unfulfilled condition', function() {
      const lock = {
        conditions: [
          stepCondition,
          toolCondition,
          achievementCondition,
          openCondition,
          falsyStepCondition,
        ],
      }
      expect(
        testConditions(lock, stepNumberList, toolData, achievementData)
      ).toBe(false)
    })

    it('Should handle multiple stepConditions', function() {
      const newStepCondition = {
        type: STEPS,
        clause: {
          type: ALL,
          value: [2],
        },
      }
      const lock = {
        conditions: [stepCondition, newStepCondition],
      }
      expect(
        testConditions(lock, stepNumberList, toolData, achievementData)
      ).toBe(true)
    })
  })

  // TODO: provide real award/achievement data
  describe('Test high level tool unlocking', function() {
    it('Should provide unlocked tools given a list of steps', function() {
      const unlockedSteps = selectors.getCompletedSteps(dummyState)
      const awardData = {}
      const achievementData = {}
      const tools = getUnlockedTools(unlockedSteps, awardData, achievementData)
      expect(tools.length).toBeGreaterThan(0)
    })

    // TODO: spy on inner methods to make sure it is caching
    it('Should cache unlocked tools results', function() {
      const unlockedSteps = selectors.getCompletedSteps(dummyState)
      const awardData = {}
      const achievementData = {}
      const tools = getUnlockedTools(unlockedSteps, awardData, achievementData)
      expect(tools.length).toBeGreaterThan(0)

      const tools2 = getUnlockedTools(unlockedSteps, awardData, achievementData)
      expect(tools).toBe(tools2)
    })

    it('Should expire cache if the array of unlocked steps changes', function() {
      const dummySteps = Array(5)
        .fill()
        .map((v, i) => ({
          number: i + 1,
        }))
      const unlockedSteps = selectors.getCompletedSteps(dummyState)
      const awardData = {}
      const achievementData = {}
      const tools = getUnlockedTools(unlockedSteps, awardData, achievementData)
      expect(tools.length).toBeGreaterThan(0)

      const tools2 = getUnlockedTools(dummySteps, awardData, achievementData)
      expect(tools).not.toBe(tools2)
    })

    it('Should provide unlocked tools even if only steps are provided', function() {
      const unlockedSteps = selectors.getCompletedSteps(dummyState)
      const tools = getUnlockedTools(unlockedSteps)
      expect(tools.length).toBeGreaterThan(0)
    })
  })
})
