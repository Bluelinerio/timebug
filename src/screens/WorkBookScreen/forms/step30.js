import t from "../components/templates";
import { LifeCategory, AreaOfLife, AssessmentTypes } from "./contents";


export default {
  1: {
    type: t.struct({
      id:t.maybe(t.String),
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      label: 'Did you do your MANTRA today(assigned on Day 21)?',
      fields: {
        id: {
          hidden: true
        }
      },
      auto: 'labels'
    },
    value : {
      fields: {
        id: 'step30+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      label: 'Did you EXERCISE and meditate yet today(assigned on Day 8)?',
      auto: 'labels'
    }
  },
  3: {
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      label: 'Did you MEDITATE yet today(assigned on Day 8)?',
      auto: 'labels'
    }
  },
  4: {
    type: t.struct({
      basics:t.list(
        t.struct({
        categoryResponsiblity:LifeCategory,
        lifeCategoryClassification:AreaOfLife,
        timebugCategory:AssessmentTypes
        })
      ),
      home:t.list(
        t.struct({
          categoryResponsiblity:LifeCategory,
          lifeCategoryClassification:LifeCategory,
          timebugCategory:AssessmentTypes
        })
      ),
      work:t.list(
        t.struct({
          categoryResponsiblity:LifeCategory,
          lifeCategoryClassification:AreaOfLife,
          timebugCategory:AssessmentTypes
        })
      )
    }),
    options: {
      label:'Start from 8,784 (8,760 hours in a typical year + 24 hours for the leap year of 2016). Map out how you would ideally spend and account for every single one of these hours.',
    }
  }
};