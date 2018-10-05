import { LABEL, STRUCT } from './modelTypes'

export default {
  topGoalsPast5Years: {
    type: STRUCT,
    fields: {
      goal: {
        type: LABEL,
        key: 'goal',
        column: true,
        options: {
          header: 'Goal'
        }
      },
      percentCompleted: {
        type: LABEL,
        key: 'percentCompleted',
        column: true,
        options: {
          header: 'Completion'
        }
      },
      satisfactionLevel: {
        type: LABEL,
        key: 'satisfactionLevel',
        column: true,
        options: {
          header: 'Satisfaction Level'
        }
      },
      goalProcess: {
        type: LABEL,
        key: 'goalProcess',
        column: true,
        options: {
          header: 'Goal Process'
        }
      }
    }
  }
}
