import { CHECKBOX, STRUCT } from './modelTypes'

export default {
  meditationCheckin: {
    type: STRUCT,
    fields: {
      meditatedToday: {
        type: CHECKBOX,
        key: 'meditatedToday',
        options: {
          header: 'Have you meditated Today?',
        },
        meta: {
          _store: 'list',
          _timestamp: true,
          _date: [true, 'MM/DD/YYYY'],
          max: 10,
        },
      },
    },
  },
}
