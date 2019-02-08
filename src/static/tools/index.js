import DailyTimebugPlanner, {
  key as DailyTimebugPlannerKey,
} from './DailyTimebugPlanner'
import WeeklyTimebugPlanner, {
  key as WeeklyTimebugPlannerKey,
} from './WeeklyTimebugPlanner'
import DailyMeditation, {
  key as DailyMeditationKey,
} from './DailyMeditation'
import BoardOfAdvisors, {
  key as BoardOfAdvisorsKey,
} from './BoardOfAdvisors'

export const TOOL_KEYS = {
  DailyTimebugPlannerKey,
  WeeklyTimebugPlannerKey,
  DailyMeditationKey,
  BoardOfAdvisorsKey,
}

export default {
  '1': [DailyMeditation],
  '2': [DailyTimebugPlanner, WeeklyTimebugPlanner],
  '4': [BoardOfAdvisors],
}
