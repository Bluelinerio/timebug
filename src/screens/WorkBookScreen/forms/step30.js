import t from "../components/templates";
import { LifeCategory, AreaOfLife, AssessmentTypes } from "./contents";


export default {
  1: {
    title: 'Did you do your MANTRA today(assigned on Day 21)?',
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      auto: 'labels'
    }
  },
  2: {
    title: 'Did you EXERCISE and meditate yet today(assigned on Day 8)?',
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      auto: 'labels'
    }
  },
  3: {
    title: 'Did you MEDITATE yet today(assigned on Day 8)?',
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      auto: 'labels'
    }
  },
  4: {
    title:'Start from 8,784 (8,760 hours in a typical year + 24 hours for the leap year of 2016). Map out how you would ideally spend and account for every single one of these hours.',
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
    })
  }
};