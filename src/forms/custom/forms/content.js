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
    key: 'YEAR',
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
    title: 'Bench Warmer',
    key: 'BenchWarmer',
  },
  FastStarter: {
    title: 'Fast Starter',
    key: 'FastStarter',
  },
  BreezeThrough: {
    title: 'Breeze Through',
    key: 'BreezeThrough',
  },
  SelfSabotage: {
    title: '(Self?) Sabotage',
    key: 'SelfSabotage',
  },
  NFLOE: {
    title: 'Not For Lack Of Effort',
    key: 'NFLOE',
  },
  RightOnPoint: {
    title: 'Right On Point',
    key: 'RightOnPoint',
  },
  LatencyEffect: {
    title: 'Latency Effect',
    key: 'LatencyEffect',
  },
}

export const CommonGoalOutcomesArray = Object.keys(CommonGoalOutcomes).map(
  key => {
    const val = CommonGoalOutcomes[key]
    return {
      key,
      text: val.title,
    }
  }
)

export const EnergyLevels = {
  PhysicalEnergy: {
    title: 'Physical',
    subtitle: '1 - Lowest, 10 - Highest',
    key: 'PhysicalEnergy',
  },
  EmotionalEnergy: {
    title: 'Emotional',
    subtitle: '1 - Lowest, 10 - Highest',
    key: 'EmotionalEnergy',
  },
  SpiritualEnergy: {
    title: 'Spiritual',
    subtitle: '1 - Lowest, 10 - Highest',
    key: 'SpiritualEnergy',
  },
}

export const ExerciseTypes = [
  'Team Sports',
  'Weights',
  'Aerobics',
  'Yoga',
  'Martial Arts',
  'Pilates',
  'Running',
  'Swimming',
  'Other',
]

export const MeditationTypes = [
  'Silent Meditation',
  'Visualization',
  'Yoga',
  'Religious',
  'Prayer',
  'Guided Meditation',
  'Integrative Breathing',
  'Other',
]

export const Frequency = [
  'Daily',
  '2-3 Times per week',
  '4-5 Times per week',
  'Weekly',
  'Bi-weekly',
  'Rarely',
  'Never',
]

export const SatisfactionLevels = [
  'Not satisfied',
  'Somewhat satisfied',
  'Satisfied enough',
  'Satisfied',
  'Very satisfied',
  'Absolutely satisfied',
]

export const PercentageScale = ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']

export const OneToTenScale = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

export const TimeAndEffortInvestedInGoal = [
  'None',
  'Not much',
  'A bit',
  'Some time and effort',
  'Quite some time and effort',
  'A lot of time and effort',
]

export const SalaryGrowth = ['Not at all', 'by $5,000 or less', 'between $5,000-$10,000', 'More than $10,000']

export const CompensationGoals = [
  'Yes, completely',
  'I made alot of progress',
  'I made some progress',
  'Not at all',
]

export const HoursPerWeek = [
  '0-10 hours',
  '10-20 hours',
  '20-30 hours',
  '40-50 hours',
  'More than 50',
]

export const PaidFairly = ['Yes', 'No']

export const CareerGoals = [
  'Get promoted at my current job',
  'Find a new job',
  'Learn a new skill to help advanced my career',
  'I`ll create my own goal',
  'Skip this for now and create a goal later',
]

export const AloneOrOthers = ['Alone', 'WithOthers']

export const YesNo = ['Yes', 'No']

export const HoursPerMonth = [
  '1-10',
  '11-20',
  '21-40',
  '41-60',
  '61-120',
  '121-160',
  'Over 160 hours',
]

export const HoursOfSleep = [
  "I don't sleep",
  "1-2 hours",
  '3-5 hours',
  '6-8 hours',
  '8 Hours always',
  "More than 8 hours"
]

export const StressLevels = [
  "Absolutely no stress",
  "A bit of stress",
  "Moderate stress",
  "A lot of stress",
  "Extreme stress",
]

export const HealthPriority = [
  "I have not paid attention to it",
  "Not a priority, but I stay healthy",
  "Moderate focus on health",
  "I always put my health ahead",
  "Health is the utmost priority for me"
]