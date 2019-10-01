// @flow
/* eslint-disable no-unused-vars */
import { OPEN, STEPS, TOOL, ACHIEVEMENT, ALL, SOME, ANY } from './constants'
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
import EnergyLevelsTracker, {
  key as EnergyLevelsTrackerKey,
} from '../EnergyLevelsTracker'
import CompletedGoalsTracker, {
  key as CompletedGoalsTrackerKey,
} from '../CompletedGoalsTracker'
import CareerGoalsTracker, {
  key as CareerGoalsTrackerKey,
} from '../CareerGoalsTracker'
import VisionCreationDreamsTracker, {
  key as VisionCreationDreamsTrackerKey,
} from '../VisionCreationDreamsTracker'
import DreamRecord, { key as DreamRecordKey } from '../Dreambook'
import DummyTool, { key as DummyKey } from '../Dummy'
import type { ToolLock } from '../types'

export const TOOL_KEYS = {
  DailyMeditationKey,
  DailyTimebugPlannerKey,
  WeeklyTimebugPlannerKey,
  BoardOfAdvisorsKey,
  GoalTrackerKey,
  GoalsLogKey,
  EnergyLevelsTrackerKey,
  CompletedGoalsTrackerKey,
  CareerGoalsTrackerKey,
  VisionCreationDreamsTrackerKey,
  DreamRecordKey,
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
          type: ALL,
          value: [8],
        },
      },
    ],
    tool: EnergyLevelsTracker,
  },
  {
    conditions: [
      {
        type: STEPS,
        clause: {
          type: ALL,
          value: [11],
        },
      },
    ],
    tool: CompletedGoalsTracker,
  },
  {
    conditions: [
      {
        type: STEPS,
        clause: {
          type: SOME,
          value: [13, 14, 15, 16, 17, 18, 19],
        },
      },
    ],
    tool: CareerGoalsTracker,
  },
  {
    conditions: [
      {
        type: STEPS,
        clause: {
          type: SOME,
          value: [23, 24, 25, 26, 27, 28, 29],
        },
      },
    ],
    tool: VisionCreationDreamsTracker,
  },
  {
    conditions: [
      {
        type: STEPS,
        clause: {
          type: ALL,
          value: [22],
        },
      },
    ],
    tool: DreamRecord,
  },
]

export default toolDefinitions
