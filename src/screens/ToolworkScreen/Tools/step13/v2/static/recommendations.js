import { categories } from './categories'

export const recommendations = [
  {
    recommendations: ['Learn a musical instrument', 'Join a rec sports team'],
    category: categories.AIMS_AND_HOBBIES,
  },
  {
    recommendations: [
      'Get a raise',
      'Change my current job',
      'Change careers completely',
    ],
    category: categories.CAREER,
  },
  {
    recommendations: [
      'Move to a bigger place',
      'Move to a new city',
      'Move to a new country',
    ],
    category: categories.ENVIRONMENT,
  },
  {
    recommendations: ['Reach a savings threshold', 'Make an investment'],
    category: categories.FINANCES,
  },
  {
    recommendations: [
      'Join a gym',
      'Change my workout regimen',
      'Loose a certain amount of weight',
    ],
    category: categories.HEALTH,
  },
  {
    recommendations: [
      'Do something special for a loved one',
      'Get rid of a toxic relationship',
      'Start a new relationship',
    ],
    category: categories.RELATIONSHIPS,
  },
  {
    recommendations: [
      'Take up a spiritual practice',
      'Commit to daily meditation',
      'Find a spiritual community',
    ],
    category: categories.SPIRITUALITY,
  },
]
