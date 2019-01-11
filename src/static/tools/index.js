import DailyTimebugPlanner, {
  key as DailyTimebugPlannerKey,
} from './DailyTimebugPlanner'
import WeeklyTimebugPlanner, {
  key as WeeklyTimebugPlannerKey,
} from './WeeklyTimebugPlanner'
import DailyMeditation, {
  key as DailyMeditationKey,
} from './DailyMeditation'

export const TOOL_KEYS = {
  DailyTimebugPlannerKey,
  WeeklyTimebugPlannerKey,
  DailyMeditationKey,
}

export default {
  '1': [DailyMeditation],
  '2': [DailyTimebugPlanner, WeeklyTimebugPlanner],
}
