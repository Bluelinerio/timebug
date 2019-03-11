import { frequencies } from '2020_services/checkins'

export const LifeStages = [
  'Infancy (0-3 yrs old)',
  'Early Childhood (3-6 yrs old)',
  'Middle Childhood (6-8 yrs old)',
  'Late Childhood (9-11 yrs old)',
  'Adolescence (12-20 yrs old)',
  'Early Adulthood (20-35 yrs old)',
  'Midlife (35-50 yrs old)',
  'Mature Adulthood (50-80 yrs old)',
  'Late Adulthood (80+ yrs old)',
]

/**
 * Goal types
 */

const ENERGY_AND_TIME = 'Energy & Time'
const HEALTH_INDICATORS = 'Health Indicators'
const ACHIEVEMENTS_AND_SKILLS = 'Achievement & Skills'
const INTERNAL_QUALITIES = 'Internal Qualities'
const ENVIRONMENT = 'Environment'
const MATERIAL_OUTCOMES = 'Material Outcomes'
const RELATIONSHIP_QUALITY = 'Relationship Quality'

export const GoalType = [
  ENERGY_AND_TIME,
  ACHIEVEMENTS_AND_SKILLS,
  HEALTH_INDICATORS,
  INTERNAL_QUALITIES,
  ENVIRONMENT,
  MATERIAL_OUTCOMES,
  RELATIONSHIP_QUALITY,
]

export const GoalTypesEnum = {
  ACHIEVEMENTS_AND_SKILLS,
  ENERGY_AND_TIME,
  HEALTH_INDICATORS,
  INTERNAL_QUALITIES,
  ENVIRONMENT,
  MATERIAL_OUTCOMES,
  RELATIONSHIP_QUALITY,
}



export const timeToCompleteGoal = {
  DAY: {
    text: 'A day',
    key: 'DAY',
    moment: [{ unit: 'd', value: 1 }],
    estimate: null,
    frequency: frequencies.DAILY,
  },
  WEEK: {
    text: 'A week',
    key: 'WEEK',
    moment: [{ unit: 'w', value: 1 }],
    estimate: Array(7)
      .fill()
      .map((_, index) => `Day ${index + 1}`),
    frequency: frequencies.DAILY,
  },
  MONTH: {
    text: 'A month',
    key: 'MONTH',
    moment: [{ unit: 'M', value: 1 }],
    estimate: Array(4)
      .fill()
      .map((_, index) => `Week ${index + 1}`),
    frequency: frequencies.WEEKLY,
  },
  MON_6: {
    text: '6 months',
    key: 'MON_6',
    moment: [{ unit: 'M', value: 6 }],
    estimate: Array(6)
      .fill()
      .map((_, index) => `Month ${index + 1}`),
    frequency: frequencies.MONTHLY,
  },
  YEAR: {
    text: 'A year',
    key: 'Year',
    moment: [{ unit: 'y', value: 1 }],
    estimate: Array(12)
      .fill()
      .map((_, index) => `Month ${index + 1}`),
    frequency: frequencies.MONTHLY,
  },
}

export const Emotions = [
  /*positive*/

  'Joy',
  'Gratitude',
  'Hope',
  'Love',
  'Peace',
  'Excitement',
  'Pride',
  /*negative*/
  'Sadness / Depression',
  'Anxiousness',
  'Fear',
  'Shame / Guilt',
  'Frustration',
  'Confusion',
  'Anger',
]

export const AreaOfLife = [
  'Finances',
  'Environment',
  'Aims & Hobbies',
  'Career',
  'Relationships',
  'Health & Wellness',
  'Spirituality',
]

export const Strengths = [
  'Honesty',
  'Bravery',
  'Loyalty',
  'Discipline',
  'Compassion',
  'Open-Heart',
  'Humor',
  'Courage',
  'Creativity',
  'Judgement',
  'Perspective',
  'Curiosity',
  'Leadership',
  'Gratitude',
  'Spirituality',
]

export const Weaknesses = [
  'Laziness',
  'Dishonesty',
  'Self-centeredness',
  'Arrogance',
  'Impatience',
  'Disorganized',
  'Closed mindedness',
  'Self Deprecation',
  'Envy',
  'Gluttony',
  'Absent-mindedness',
  'Cruelty',
  'Anxiety',
  'Paranoia',
]

export const LifeCategories = {
  Spirituality: {
    title: 'Spirituality',
    subtitle: 'i.e Meditation, Church, etc.',
    key: 'Spirituality',
  },
  CoreWork: {
    title: 'Core Work',
    subtitle: 'Your main job',
    key: 'CoreWork',
  },
  SpecialProjects: {
    title: 'Special Projects',
    subtitle: 'Long term / Creative adventures',
    key: 'SpecialProjects',
  },
  SkillsAndEducation: {
    title: 'Skills and Education',
    subtitle: 'Courses, trainings, etc.',
    key: 'SkillsAndEducation',
  },
  PersonalLife: {
    title: 'Personal Life',
    subtitle: 'Relationships, Hobbies, etc.',
    key: 'PersonalLife',
  },
  BasicNeeds: {
    title: 'Basic Needs',
    subtitle: 'Sleep, eating, etc.',
    key: 'BasicNeeds',
  },
  HealthAndWellness: {
    title: 'Health And Wellness',
    subtitle: 'i.e Physical exercise',
    key: 'HealthAndWellness',
  },
}

export const LifeCategoriesArray = Object.keys(LifeCategories).map(key => {
  const val = LifeCategories[key]
  return {
    key,
    text: val.title,
  }
})

export const CommonGoalOutcomes = {
  BenchWarmer: {
  title:'Bench Warmer',
  key: 'BenchWarmer',
  },
  FastStarter: {
    title:'Fast Starter',
    key: 'FastStarter',
  },
  BreezeThrough: {
    title: 'Breeze Through',
    key: 'BreezeThrough',
  },
  SelfSabotage: {
    title: '(Self?) Sabotage',
    key:'SelfSabotage',
  },
  NFLOE: {
    title:'Not For Lack Of Effort',
    key: 'NFLOE',
  },
  RightOnPoint: {
    title:'Right On Point',
    key: 'RightOnPoint',
  },
}


export const CommonGoalOutcomesArray = Object.keys(CommonGoalOutcomes).map(key => {
  const val = CommonGoalOutcomes[key]
  return {
    key,
    text: val.title,
  }
})
