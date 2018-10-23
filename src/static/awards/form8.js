import { CHECKBOX, STRUCT } from './modelTypes'

export default {
  exerciseCheckin: {
    type: STRUCT,
    fields: {
      exercisedToday: {
        type: CHECKBOX,
        key: 'exercisedToday',
        options: {
          header: 'Have you done exercise Today?'
        },
        meta: {
          _store: 'list',
          _timestamp: true,
          _date: [true, 'MM/DD/YYYY'],
          max: 10
        }
      }
    }
  }
}
