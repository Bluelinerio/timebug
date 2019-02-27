import DailyTimebugPlanner, {
  key as DailyTimebugPlannerKey,
}                                                     from './DailyTimebugPlanner'
import WeeklyTimebugPlanner, {
  key as WeeklyTimebugPlannerKey,
}                                                     from './WeeklyTimebugPlanner'
import DailyMeditation, { key as DailyMeditationKey } from './DailyMeditation'
import BoardOfAdvisors, { key as BoardOfAdvisorsKey } from './BoardOfAdvisors'
import GoalTracker, { key as GoalTrackerKey }         from './GoalTracker'
import GoalsOfOthersLog, { key as GoalsLogKey }       from './GoalsOfOthersLog'

export const TOOL_KEYS = {
  DailyTimebugPlannerKey,
  WeeklyTimebugPlannerKey,
  DailyMeditationKey,
  BoardOfAdvisorsKey,
  GoalTrackerKey,
  GoalsLogKey,
}

export default {
  '1': [DailyMeditation],
  '2': [DailyTimebugPlanner, WeeklyTimebugPlanner],
  '4': [BoardOfAdvisors],
  '5': [GoalTracker],
  '6': [GoalsOfOthersLog],
}
