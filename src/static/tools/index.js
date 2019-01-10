import DailyTimebugPlanner, {
  key as DailyTimebugPlannerKey,
} from './DailyTimebugPlanner'
import WeeklyTimebugPlanner, {
  key as WeeklyTimebugPlannerKey,
} from './WeeklyTimebugPlanner'

export const TOOL_KEYS = {
  DailyTimebugPlannerKey,
  WeeklyTimebugPlannerKey,
}

export default {
  '2': [DailyTimebugPlanner, WeeklyTimebugPlanner],
}
