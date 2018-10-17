import t                                            from '../../../forms/components'
import { TimeSpent, TimeChanged, ActivityFeelings } from './contents'

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      personalAimsAndHobbies: t.list(
        t.struct({
          personalAimHobby: t.String,
          timeSpentMonth: TimeSpent,
          timeChanged: TimeChanged,
          activityFeelings: ActivityFeelings,
          aloneOrPartner: t.String
        })
      )
    }),
    options: {
      label:
        'What are some of the activities and hobbies that you typically engage in each month?',
      fields: {
        id: {
          hidden: true
        },
        personalAimsAndHobbies: {
          item: {
            auto: 'none',
            fields: {
              personalAimHobby: {
                label: 'Aim/Hobby'
              },
              timeSpentMonth: {
                label:
                  'How much time do you spend engaging in this activity per month?'
              },
              timeChanged: {
                label:
                  'Has this amount of time increased or decreased since Year 1?'
              },
              activityFeelings: {
                label: 'How does this activity make you feel?'
              },
              aloneOrPartner: {
                label:
                  'Do you engage in this activity alone or with others? And if so, with whom generally?'
              }
            }
          }
        }
      }
    },
    value: {
      fields: {
        id: 'step15+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      hobbyPriorities: t.struct({
        giveUp: t.String,
        notGiveUp: t.String
      })
    }),
    options: {
      fields: {
        hobbyPriorities: {
          label: 'How important are these hobbies to you?',

          fields: {
            giveUp: {
              label:
                'Which of these hobbies, if any, would you be willing to give up if some huge new priority came along, and required more of your time?',
              error: 'Please enter a hobby'
            },
            notGiveUp: {
              label:
                'Which would you NOT give up under (almost)any circumstance?',
              error: 'Please enter a hobby'
            }
          }
        }
      }
    }
  },
  3: {
    type: t.struct({
      notAccomplishedAimsAndHobbies: t.list(
        t.struct({
          personalAimHobby: t.String,
          why: t.String
        })
      )
    }),
    options: {
      label:
        "Were there any aims and hobbies that you weren't able to accomplish that you really wanted to over the past 5 years?",
      fields: {
        notAccomplishedAimsAndHobbies: {
          item: {
            auto: 'none',
            fields: {
              personalAimHobby: {
                label: 'Aim/Hobby'
              },
              why: {
                label:
                  'What stopped you from initiating or continuing this hobby?'
                //error:'Why did you have trouble finding time for this hobby?'
              }
            }
          }
        }
      }
    }
  }
}
