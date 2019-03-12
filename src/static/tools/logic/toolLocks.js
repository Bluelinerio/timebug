// @flow
/* eslint-disable no-unused-vars */
import { OPEN, STEPS, TOOL, ACHIEVEMENT, ALL, SOME } from './constants'

import {
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
  COMPLETE,
} from '2020_services/cms'

import DailyTimebugPlanner, {
  key as DailyTimebugPlannerKey,
} from '../DailyTimebugPlanner'

import WeeklyTimebugPlanner, {
  key as WeeklyTimebugPlannerKey,
} from '../WeeklyTimebugPlanner'

import DailyMeditation, { key as DailyMeditationKey } from '../DailyMeditation'

import BoardOfAdvisors, { key as BoardOfAdvisorsKey } from '../BoardOfAdvisors'

import GoalTracker, { key as GoalTrackerKey } from '../GoalTracker'

import GoalsOfOthersLog, { key as GoalsLogKey } from '../GoalsOfOthersLog'

import DummyTool, { key as DummyKey } from '../Dummy'

import type { ToolLock } from '../types'

export const TOOL_KEYS = {
  DailyTimebugPlannerKey,
  WeeklyTimebugPlannerKey,
  DailyMeditationKey,
  BoardOfAdvisorsKey,
  GoalTrackerKey,
  GoalsLogKey,
  DummyKey,
}

const toolDefinitions: Array<ToolLock> = [
  {
    conditions: [
      {
        type: STEPS,
        clause: {
          type: ALL,
          value: [1],
        },
      },
    ],
    tool: DailyMeditation,
  },
  {
    conditions: [
      {
        type: STEPS,
        clause: {
          type: ALL,
          value: [2],
        },
      },
    ],
    tool: DailyTimebugPlanner,
  },
  {
    conditions: [
      {
        type: STEPS,
        clause: {
          type: ALL,
          value: [2],
        },
      },
    ],
    tool: WeeklyTimebugPlanner,
  },
  {
    conditions: [
      {
        type: STEPS,
        clause: {
          type: ALL,
          value: [4],
        },
      },
    ],
    tool: BoardOfAdvisors,
  },
  {
    conditions: [
      {
        type: STEPS,
        clause: {
          type: ALL,
          value: [5],
        },
      },
    ],
    tool: GoalTracker,
  },
  {
    conditions: [
      {
        type: STEPS,
        clause: {
          type: ALL,
          value: [6],
        },
      },
    ],
    tool: GoalsOfOthersLog,
  },
  {
    conditions: [
      {
        type: STEPS,
        clause: {
          type: SOME,
          value: [10, 5],
        },
      },
    ],
    tool: DummyTool,
  },
]

export default toolDefinitions
