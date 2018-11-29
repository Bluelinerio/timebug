import { LABEL, STRUCT } from './modelTypes';

export default {
  boardOfAdvisors: {
    type: STRUCT,
    fields: {
      boardMember: {
        type: LABEL,
        key: 'boardMember',
        column: true,
        options: {
          header: 'Member',
        },
      },
      pillarsOfLife: {
        type: LABEL,
        key: 'pillarsOfLife',
        column: true,
        options: {
          header: 'Pillar of Life',
        },
      },
      interactionFrequency: {
        type: LABEL,
        key: 'interactionFrequency',
        column: true,
        options: {
          header: 'Frequency of interaction',
        },
      },
    },
  },
};
