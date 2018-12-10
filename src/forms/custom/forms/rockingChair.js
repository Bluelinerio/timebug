import types, { actionTypes } from './types';

export const GoalType = [
  'Energy & Time',
  'Achievement & Skills',
  'Health Indicators',
  'Internal Qualities',
  'Environment',
  'Material Outcomes',
  'Relationship Quality',
];

const form1 = {
  type: types.form,
  fields: {
    0: {
      type: types.label,
      key: 'goalTitle',
      content: {
        text: `Let's talk`,
      },
      options: {},
    },
    1: {
      type: types.string,
      key: 'randomKey',
      content: {
        text: 'Tell me something',
        smallKey: 'something',
        primary: true,
      },
      options: {
        placeHolder: 'Some placeholder',
        multiline: true,
        default: '',
      },
    },
    2: {
      type: types.multipleSelect,
      key: 'areaOfLifeMultiple',
      content: {
        text: 'Filler goal types',
        smallKey: 'Type of goal',
        listText: 'Type of goal',
        items: GoalType.map((goal, index) => ({
          value: goal,
          text: goal,
          id: `areaOfLifeMultiple_${index}`,
        })),
      },
      options: {
        default: [],
      },
    },
    3: {
      type: types.button,
      content: {
        text: 'Do you like candy?',
      },
      actions: [
        {
          text: 'Yes',
          key: 'more_yes',
          action: {
            type: actionTypes.GO_TO,
            payload: 1,
          },
        },
      ],
    },
  },
};

export default form1;
