import types, { answerTypes }   from './types'
import { LifeStages, Emotions } from './content'

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
        text: `Form 1`,
      },
      options: {},
    },
    1: {
      type: types.list,
      key: 'form_1_best_memories',
      content: {
        text:
          'When imagining yourself at 90 years old, what were your best memories looking back in your life?',
        smallKey: 'Memories',
        listText: 'Memories',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: 'form_1_best_memories.memory',
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
    2: {
      type: types.connected,
      key: 'form_1_memories_areas_of_life',
      content: {
        text: 'What area of life do each of these memories belong to?',
        smallKey: 'Area of life',
      },
      options: {
        connect: {
          withElements: {
            text: 'Memory',
            key: 'form_1_best_memories',
            childrenKeys: ['form_1_best_memories.memory'],
          },
          using: {
            type: types.select,
            key: 'form_1_memory_area_of_life',
            content: {
              smallKey: 'area',
              items: AreaOfLife.map(area => ({
                value: area,
                text: area,
              })),
            },
            options: {
              default: AreaOfLife[0],
            },
          },
        },
        default: [],
      },
    },
    3: {
      type: types.connected,
      key: 'form_1_memories_stages_of_life',
      content: {
        text: 'What stage of life do each of these memories belong to?',
        smallKey: 'stage of life',
      },
      options: {
        connect: {
          withElements: {
            text: 'Memory',
            key: 'form_1_memories_areas_of_life',
          },
          using: {
            type: types.select,
            key: 'form_1_memory_stage_of_life',
            content: {
              smallKey: 'stage',
              items: LifeStages.map(stage => ({
                value: stage,
                text: stage,
              })),
            },
            options: {
              default: LifeStages[0],
            },
          },
        },
        default: [],
      },
    },
    4: {
      type: types.list,
      key: 'form_1_regrets',
      content: {
        text: 'When imagining yourself at 90 years old what were your regrets?',
        smallKey: 'Regrets',
        listText: 'Regrets',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: 'form_1_regrets.regret',
            options: {
              placeHolder: 'Regret',
              multiline: true,
              default: '',
            },
          },
        },
        default: [],
      },
    },
    5: {
      type: types.connected,
      key: 'form_1_regrets_areas_of_life',
      content: {
        text: 'What area of life do each of these regrets belong to?',
        smallKey: 'Area of life',
      },
      options: {
        connect: {
          withElements: {
            text: 'Memory',
            key: 'form_1_regrets',
            childrenKeys: ['form_1_regrets.regret'],
          },
          using: {
            type: types.select,
            key: 'form_1_regrets_area_of_life',
            content: {
              smallKey: 'area',
              items: AreaOfLife.map(area => ({
                value: area,
                text: area,
              })),
            },
            options: {
              default: AreaOfLife[0],
            },
          },
        },
        default: [],
      },
    },
    6: {
      type: types.connected,
      key: 'form_1_regrets_stages_of_life',
      content: {
        text: 'What stage of life do each of these regrets belong to?',
        smallKey: 'stage of life',
      },
      options: {
        connect: {
          withElements: {
            text: 'Memory',
            key: 'form_1_regrets_areas_of_life',
          },
          using: {
            type: types.select,
            key: 'form_1_regrets_stage_of_life',
            content: {
              smallKey: 'stage',
              items: LifeStages.map(stage => ({
                value: stage,
                text: stage,
              })),
            },
            options: {
              default: LifeStages[0],
            },
          },
        },
        default: [],
      },
    },
    7: {
      type: types.list,
      key: 'form_1_emotions',
      content: {
        text:
          'Looking back on your life as a 90 years old, what were some of the emotions you felt?',
        smallKey: 'Emotions',
        listText: 'Emotions',
      },
      options: {
        childTypes: {
          0: {
            type: types.select,
            key: 'form_1_emotions.emotion',
            content: {
              smallKey: 'Emotions',
              items: Emotions.map(emotion => ({
                value: emotion,
                text: emotion,
              })),
            },
            options: {
              default: Emotions[0],
            },
          },
        },
        default: [],
      },
    },
  },
}

export default form1
