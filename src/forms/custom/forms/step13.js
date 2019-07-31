// @flow
import { Platform }           from 'react-native'
import types, { answerTypes } from './types'
import type { Form }          from '../types/formTypes'
import {
  CommonGoalOutcomesArray,
  SalaryGrowth,
  CompensationGoals,
  HoursPerWeek,
  PaidFairly,
}                             from './content'

export const FORM_KEYS = {
  form_13_salary_growth: 'form_13_salary_growth',
  form_13_compensation_goals: 'form_13_compensation_goals',
  form_13_hours_of_work: 'form_13_hours_of_work',
  form_13_paid_fairly: 'form_13_paid_fairly',
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.select,
      key: `${FORM_KEYS.form_13_salary_growth}`,
      content: {
        text: `Has your salary grown (or not) in these past 5 years?`,
        smallKey: 'Salary growth',
        listText: 'Salary growth',
        items: SalaryGrowth.map(salary => {
          return {
            value: salary,
            text: salary,
          }
        }),
      },
      options: {
        default: SalaryGrowth[0],
      },
    },
    1: {
      type: types.select,
      key: `${FORM_KEYS.form_13_compensation_goals}`,
      content: {
        text: `Did you meet the compensation goals you set over the past 5 years?`,
        smallKey: 'Compensation Goals',
        listText: 'Compensation Goals',
        items: CompensationGoals.map(goal => {
          return {
            value: goal,
            text: goal,
          }
        }),
      },
      options: {
        default: CompensationGoals[0],
      },
    },
    2: {
      type: types.select,
      key: `${FORM_KEYS.form_13_hours_of_work}`,
      content: {
        text: `How many hours do you work on average per week?`,
        smallKey: 'Hours per week',
        listText: 'Hours per week',
        items: HoursPerWeek.map(hours => {
          return {
            value: hours,
            text: hours,
          }
        }),
      },
      options: {
        default: HoursPerWeek[0],
      },
    },
    3: {
      type: types.select,
      key: `${FORM_KEYS.form_13_paid_fairly}`,
      content: {
        text: `Do you think you are paid fairly for those hours?`,
        smallKey: 'Paid fairly',
        listText: 'Paid fairly',
        items: PaidFairly.map(opt => {
          return {
            value: opt,
            text: opt,
          }
        }),
      },
      options: {
        default: PaidFairly[0],
      },
    },
  },
}

export default form
