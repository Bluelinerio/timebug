import { CHECKBOX, LABEL, STRUCT } from './modelTypes'

export default {
  recentGoals: {
    type: STRUCT,
    form: '1',
    key: 'recentGoals',
    fields: {
      goal: {
        type: LABEL,
        key: 'goal',
        column: true,
        options: {
          header: 'Goal'
        }
      },
      goalTypes: {
        type: LABEL,
        key: 'goalTypes',
        column: true,
        options: {
          header: 'Type'
        }
      }
    }
  },
  isCompleted: {
    type: CHECKBOX,
    column: true,
    options: {
      header: 'Completed'
    }
  }
}
