import t from '../components/templates';
import { CommonGoalOutcomes, OneToTenScale } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      selfTreatment: OneToTenScale,
      selfTreatmentLearningCurve: OneToTenScale,
      messagesInHead: t.String,
      messagesJudgeSelf: t.String
    }),
    options: {
      label: 'Relationships Assessment',

      fields: {
        id: {
          hidden: true
        },
        selfTreatment: {
          label: 'How do you typically treat yourself?',
          help: '1 = With almost no respect, 10 = With tremendous respect'
        },
        selfTreatmentLearningCurve: {
          label:
            'How do you treat yourself in the process of having a learning curve, which inevitably involves making mistakes and learning from failures.',
          help: '1 = Not at all patient and 10 = Very patient'
        },
        messagesInHead: {
          label:
            'What messages about yourself run through your head on a daily basis?'
        },
        messagesJudgeSelf: {
          label: 'What do you say to judge or shame yourself?'
        }
      }
    },
    value: {
      fields: {
        id: 'step17+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      peopleValued: t.list(t.String),
      peopleLoved: OneToTenScale,
      peopleTreatedContempt: OneToTenScale
    }),
    options: {
      label: 'Who do you truly value?',
      fields: {
        peopleValued: {
          item: {
            label: 'Person'
          }
        },
        peopleLoved: {
          label:
            'How many of these people do you love based on their waist size?'
        },
        peopleTreatedContempt: {
          label:
            'How many of these people do you treat with the same contempt and impatience that you have described about yourself?'
        }
      }
    }
  },
  3: {
    type: t.struct({
      givingToOthers: OneToTenScale,
      trustValue: OneToTenScale,
      comfortableReceiving: OneToTenScale,
      worthyAndComfortable: OneToTenScale
    }),
    options: {
      label: 'Relationships Assessment',
      fields: {
        givingToOthers: {
          label:
            'How comfortable do you feel giving to others in your daily life?',
          help: '1= Not at all comfortable and 10= Very much comfortable'
        },
        trustValue: {
          label: 'Do you trust the value of what you have to offer to others?',
          help: '1= Not trustful at all and 10= Very Trusting'
        },
        comfortableReceiving: {
          label:
            'How comfortable do you feel receiving from others in your daily life?',
          help:
            '1= not at all comfortable and 10= very much comfortable'
        },
        worthyAndComfortable: {
          label:
            'Do you feel worthy and comfortable with compliments or acknowledgments from others?',
          help: '1= not at all comfortable and 10= very much comfortable'
        }
      }
    }
  },
  4: {
    type: t.struct({
      relationshipQualityGoals: t.list(
        t.struct({
          goal: t.String,
          goalOutcome: CommonGoalOutcomes
        })
      )
    }),
    options: {
      label: 'What were your relationship quality goals over the past 5 years?',

      fields: {
        relationshipQualityGoals: {
          item: {
            fields: {
              auto: 'labels'
            }
          }
        }
      }
    }
  },
  5: {
    type: t.struct({
      intimateRelationship: t.Boolean,
      communicationEval: OneToTenScale
    }),
    options: {
      label: 'Relationships Assessment',
      fields: {
        intimateRelationship: {
          label:
            'Have you had an intimate, committed relationship over the past 5 years?'
        },
        communicationEval: {
          label:
            'If yes, how would you evaluate the quality of the connection and communication, on the whole? ',
          help: '1 = Poor and 10 = Very strong'
        }
      }
    }
  },
  6: {
    type: t.struct({
      relationshipsImproved: t.list(
        t.struct({
          person: t.String
        })
      )
    }),
    options: {
      label: 'Which relationships improved over the past 5 years? With whom?'
    }
  },
  7: {
    type: t.struct({
      relationshipsRegressed: t.list(
        t.struct({
          person: t.String
        })
      )
    }),
    options: {
      label: 'Which relationships improved over the past 5 years? With whom?'
    }
  }
};
