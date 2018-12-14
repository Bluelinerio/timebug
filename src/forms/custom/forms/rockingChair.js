import types, { answerTypes } from './types'

export const AreaOfLife = [
  'Finances',
  'Environment',
  'Aims & Hobbies',
  'Career',
  'Relationships',
  'Health & Wellness',
  'Spirituality',
]

const form1 = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.label,
      key: 'form_1_start',
      content: {
        text: `Let's talk`,
      },
      options: {},
    },
    1: {
      type: types.list,
      key: 'form_1_best_memories',
      content: {
        text:
          'When imagining yourself at 90 years old, what were your best memories looking back in your life?',
        smallKey: 'best_memories',
        listText: 'Memories',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: 'stepToLifeGoal',
            options: {
              placeHolder: 'Best memories',
              multiline: true,
              default: '',
            },
          },
        },
        default: [],
      },
    },
    // 2: {
    //   type: types.connected,
    //   key: 'form_1_memories_areas_of_life',
    //   content: {
    //     text: 'What area of life do each of these memories belong to?',
    //     smallKey: 'memory_area_of_life',
    //   },
    //   options: {
    //     connect: {
    //       with: [
    //         {
    //           formIndex: 1,
    //           key: 'form_1_best_memories',
    //           children: [
    //             {
    //               key: 'stepToLifeGoal',
    //               text: 'Memory',
    //             },
    //           ],
    //         },
    //       ],
    //       using: {
    //         type: types.select,
    //         key: 'form_1_memory_area',
    //         content: {
    //           smallKey: 'memory_area',
    //           items: AreaOfLife.map(area => ({
    //             value: area,
    //             text: area,
    //             id: area,
    //           })),
    //         },
    //         options: {
    //           default: AreaOfLife[0],
    //         },
    //       },
    //       each: true,
    //     },
    //     default: [],
    //   },
    // },
  },
}

export default form1
