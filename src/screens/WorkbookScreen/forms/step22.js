import t from '../../../forms/components';
import { DreamsRemember } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      step22MantraAnswer: t.Boolean,
      step22ExerciseAnswer: t.Boolean,
      step22MeditateAnswer: t.Boolean,
    }),
    options: {
      label: '20/20 Life Vision Check-in',
      fields: {
        id: {
          hidden: true,
        },
        step22MantraAnswer: {
          label: 'Did you do your mantra today (assigned on Day 21)?',
        },
        step22ExerciseAnswer: {
          label: 'Did you exercise yet today(assigned on Day 8)?',
        },
        step22MeditateAnswer: {
          label: 'Did you meditate yet today(assigned on Day 8)?',
        },
      },
    },
    value: {
      fields: {
        id: 'step22+v0.0.0.1',
      },
    },
  },
  2: {
    type: t.struct({
      dreamsAssessment: t.struct({
        dreamsDescribe: t.String,
        dreamsRemember: DreamsRemember,
        dreamsComeTrue: t.String,
      }),
    }),
    options: {
      label: 'What do you dream about?',
      fields: {
        dreamsAssessment: {
          auto: 'none',
          fields: {
            dreamsDescribe: {
              label: 'Any general themes?',
            },
            dreamsRemember: {
              label: 'How often do you remember your dreams?',
            },
            dreamsComeTrue: {
              label:
                'Have your dreams ever come true – as in, you dreamt about something and then it happened? If so, list an instance when that happened.',
            },
          },
        },
      },
    },
  },
  3: {
    type: t.struct({
      dreamJournal: t.list(
        t.struct({
          dream: t.String,
        })
      ),
    }),
    options: {
      label:
        'For the remainder of the program [8 Nights of Dreaming], try to remember and write your dreams down first thing in the morning – or even if you wake up in the middle of the night, the way Jason described his experience in the video. Note what themes, characters, settings, fears, hopes and aspirations were present.',
      fields: {
        dreamJournal: {
          item: {
            auto: 'none',
            fields: {
              dream: {
                label: 'Dream',
              },
            },
          },
        },
      },
    },
  },
  4: {
    type: t.struct({
      lifeDreams: t.String,
    }),
    options: {
      label:
        'In this moment, dream about everything you want your life to be. Anything is possible. Describe what you see. What are your life dreams?',
      auto: 'none',
      fields: {
        lifeDreams: {
          multiline: true,
        },
      },
    },
  },
};
