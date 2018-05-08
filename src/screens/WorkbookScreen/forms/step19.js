import t from '../components/templates';
import { TimeSpent, SpiritualViews, SpiritualPractices } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      spiritualityAssessment: t.struct({
        spiritualViews: SpiritualViews,
        spiritualInfluence: t.list(
          t.struct({
            name: t.String
          })
        )
      })
    }),
    options: {
      fields: {
        id: {
          hidden: true
        },
        spiritualityAssessment: {
          fields: {
            spiritualViews: {
              label:
                'What are your current views and feelings about spirituality?'
            },

            spiritualInfluence: {
              label:
                'Who and what influenced your spiritual views early on in life?',
              item: {
                auto: 'none',
                fields: {
                  name: {
                    label: 'Name'
                  }
                }
              }
            }
          }
        }
      }
    },
    value: {
      fields: {
        id: 'step19+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      currentSpiritualMentors: t.list(
        t.struct({
          name: t.String,
          why: t.String
        })
      )
    }),
    options: {
      label: 'Who are your current role models or mentors in this area? ',

      fields: {
        currentMentors: {
          item: {
            auto: 'none',
            fields: {
              name: {
                auto: 'labels'
              },
              why: {
                label: 'Why do you admire their approach to and views on life? '
              }
            }
          }
        }
      }
    }
  },
  3: {
    type: t.struct({
      spiritualHabits: t.struct({
        timeSpentSpirutality: TimeSpent,
        spiritualityChanged: t.String
      })
    }),
    options: {
      fields: {
        spiritualHabits: {
          label: 'Spirituality Assessment',
          fields: {
            timeSpentSpirutality: {
              label:
                'How much time do you spend each week on spiritual practices, interactions, reading, writing, etc.?'
            },
            spiritualityChanged: {
              label:
                'How have your Spiritual practices and/or beliefs changed over the past 5 years?'
            }
          }
        }
      }
    }
  },
  4: {
    type: t.struct({
      internalQualities: t.String,
      insights: t.struct({
        purposeOnEarth: t.String,
        beyondOuterForm: t.String,
        karma: t.String,
        destinyDeterminedBy: t.String,
        healedEmotionalWoundsFrom: t.String
      })
    }),
    options: {
      label: 'Spirituality Assessment',
      fields: {
        internalQualitiesInfuelcedBySpirituality: {
          label:
            'What internal qualities(Iqs: Goal Type 4) have been influenced - positively or negatively - by Spiritual practices - or lack thereof?'
        },
        spiritualInsights: {
          label:
            'What insights did you pick up from your spirituality over the past 5 years?',
          fields: {
            purposeOnEarth: {
              label: 'What Is My Purpose On Earth?'
            },
            beyondOuterForm: {
              label: 'Beyond My Outer Form, What Am I?'
            },
            karmaHasShownMe: {
              label: 'My Karma Has Shown Me...'
            },
            healedEmotionalWoundsFrom: {
              label: 'I have healed emotional wounds from...'
            }
          }
        }
      }
    }
  }
};
