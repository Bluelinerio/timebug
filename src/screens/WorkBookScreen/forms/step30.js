import t from "../components/templates";
import { LifeCategory, AreaOfLife, AssessmentTypes } from "./contents";


export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      mantraAnswer: t.Boolean,
      exerciseAnswer: t.Boolean,
      meditateAnswer: t.Boolean,
    }),
    options: {
      label: 'Let us reiew your progress quick...',
      fields: {
        id: {
          hidden: true
        },
        mantraAnswer: {
          label: 'Did you do your mantra today (assigned on Day 21)?'
        },
        exerciseAnswer: {
          label: 'Did you exercise and meditate yet today(assigned on Day 8)?',
        },
        meditateAnswer: {
          label: 'Did you MEDITATE yet today(assigned on Day 8)?'
        }
      },
    },
    value : {
      fields: {
        id: 'step30+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      basics:t.list(
        t.struct({
          categoryResponsiblity: LifeCategory,
          lifeCategoryClassification:AreaOfLife,
          timebugCategory: AssessmentTypes
        })
      ),
      home:t.list(
        t.struct({
            categoryResponsiblity: LifeCategory,
            lifeCategoryClassification: LifeCategory,
            timebugCategory: AssessmentTypes
        })
      ),
      work:t.list(
        t.struct({
            categoryResponsiblity: LifeCategory,
            lifeCategoryClassification:AreaOfLife,
            timebugCategory: AssessmentTypes
        })
      )
    }),
    options: {
      label:'Start from 8,784 (8,760 hours in a typical year + 24 hours for the leap year of 2016). Map out how you would ideally spend and account for every single one of these hours.',
      fields: {
        basics: {
          item: {
            fields: {
              categoryResponsiblity: {
                error: 'Please select a value.'
              },
              lifeCategoryClassification: {
                error: 'Please select a value.'
              },
              timebugCategory: {
                error: 'Please select a value.'
              }
            }
          }
        },
        home: {
          item: {
            fields: {
              categoryResponsiblity: {
                error: 'Please select a value.'
              },
              lifeCategoryClassification: {
                error: 'Please select a value.'
              },
              timebugCategory: {
                error: 'Please select a value.'
              }
            }
          }
        },
        work: {
          item: {
            fields: {
              categoryResponsiblity: {
                error: 'Please select a value.'
              },
              lifeCategoryClassification: {
                error: 'Please select a value.'
              },
              timebugCategory: {
                error: 'Please select a value.'
              }
            }
          }
        }
      }
    }
  }
};