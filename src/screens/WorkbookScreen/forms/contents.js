import t from '../components/templates';

export const AreaOfLife = t.enums.of(
  [
    'Career',
    'Personality & Hobbies',
    'Health',
    'Financial',
    'Relationship',
    'Place & Environment',
    'Spirituality'
  ],
  'AreaOfLife'
);

export const TimesPerWeek = t.enums.of(
  [
    'Every Day',
    'Every other Day',
    'Once',
    'Twice',
    'Once over the weekend',
    '3 to 5 times a week'
  ],
  'TimesPerWeek'
);

export const LifeStages = t.enums.of(
  [
    'Infancy (Ages 0-3)',
    'Early Childhood (Ages 3-6)',
    'Middle Childhood (Ages 6-8)',
    'Late Childhood (Ages 9-11)',
    'Adolescence (Ages 12-20)',
    'Early Adulthood (Ages 20-35)',
    'Midlife (Ages 35-50)',
    'Mature Adulthood (Ages 50-80)',
    'Late Adulthood (Age 80+)'
  ],
  'LifeStages'
);

export const PillarsOfLife = t.enums.of(
  [
    'Finances',
    'Environment',
    'Aims & Hobbies',
    'Career',
    'Relationships',
    'Health & Wellness',
    'Spirituality'
  ],
  'PillarsOfLife'
);

export const Emotion = t.enums.of(
  [
    /*positive*/

    'Joyful / Cheerful',
    'Grateful',
    'Hopeful',
    'Love',
    'Calm / Peace',
    'Excitement',
    'Proud',
    /*negative*/
    'Sad/ Depressed',
    'Anxious',
    'Fearful',
    'Ashamed / Guilty',
    'Frustrated',
    'Confused',
    'Angry'
  ],
  'Emotion'
);

export const Strengths = t.enums.of(
  [
    'Honest',
    'Brave',
    'Loyal',
    'Disciplined',
    'Compassionate',
    'Open-Hearted',
    'Funny'
  ],
  'trengths'
);

export const Weaknesses = t.enums.of(
  [
    'Lazy',
    'Dishonest',
    'Self-centered',
    'Arrogant',
    'Impatient',
    'Disorganized',
    'Closed mindeded'
  ],
  'Weaknesses'
);

export const InteractionFrequency = t.enums.of(
  ['Daily', 'Weekly', 'Monthly', 'Bi-Monthly', 'Yearly', 'Rarely', 'Never'],
  'InteractionFrequency'
);

export const ExerciseFrequency = t.enums.of(
  ['Daily', 'Weekly', 'Bi-Weekly', 'Never'],
  'ExerciseFrequency'
);

export const EatingFrequency = t.enums.of(
  [
    'Once meal per day',
    'Two meals per day',
    'Three meals per day',
    'Four meals per day',
    'More than four meals per day'
  ],
  'EatingFrequency'
);

export const HoursSleep = t.enums.of(
  [
    'Less than 4',
    '4-5 hrs',
    '5-6 hrs',
    '6-7 hrs',
    '7-8 hrs',
    'More than 8 hrs'
  ],
  'HoursSleep'
);

export const BedTimes = t.enums.of(
  [
    'Before 9 PM',
    '9-10 PM',
    '10-11 PM',
    '11 PM - 12 AM',
    '12 - 1 AM',
    'After 1 AM'
  ],
  'BedTimes'
);

export const CarryStress = t.enums.of(
  ['Neck', 'Shoulders', 'Upper Back', 'Lower Back', 'Glutes', 'Other'],
  'CarryStress'
);

export const ExerciseTypes = t.enums.of(
  [
    'Team Sports',
    'Weights',
    'Aerobics',
    'Interval Training',
    'Yoga',
    'Martial Arts',
    'Pilates',
    'Running',
    'Other'
  ],
  'ExerciseTypes'
);

export const GoalTypes = t.enums.of(
  [
    'Energy & Time',
    'Achievement & Skills',
    'Health Indicators',
    'Internal Qualities',
    'Environment',
    'Material Outcomes',
    'Relationship Quality'
  ],
  'GoalTypes'
);

export const CommonGoalOutcomes = t.enums.of(
  [
    'Bench Warmer',
    'Fast Starter',
    'Breeze Through',
    '(Self?) Sabotage',
    'Not For Lack Of Effort (NFLOE)',
    'Right On Point',
    'Latency Effect'
  ],
  'CommonGoalOutcomes'
);

export const MajorLifeEvents = t.enums.of(
  [
    'Marriage',
    'Divorce',
    'Child birth',
    'School graduation',
    'New job',
    'Job loss',
    'Major injury or Death (of loved one)',
    'Other'
  ],
  'MajorLifeEvents'
);

export const PriorityLevels = t.enums.of(
  ['Very High', 'High', 'Medium', 'Low', 'Very Low'],
  'PriorityLevels'
);

export const AssessmentTypes = t.enums.of(
  [
    'Career',
    'Aims & Hobbies',
    'Health',
    'Financial',
    'Relationship',
    'Environment',
    'Spirituality'
  ],
  'AssessmentTypes'
);

export const MeditationTypes = t.enums.of(
  [
    'Silent Meditation',
    'Visualization',
    'Yoga',
    'Religious',
    'Prayer',
    'Other'
  ],
  'MeditationTypes'
);

export const TimesOfDay = t.enums.of(
  [
    'Early Morning',
    'Morning',
    'Afternoon',
    'Late Afternoon',
    'Early Evening',
    'Late Night'
  ],
  'TimesOfDay'
);

export const AloneOrOthers = t.enums.of(
  ['Alone', 'With Others'],
  'AloneOrOthers'
);

export const DreamsRemember = t.enums.of(
  ['Daily', 'Most of the time,', 'Occasionally', 'Rarely', 'Never'],
  'DreamsRemember'
);

export const DescribeProcess = t.enums.of(
  [
    "I don't track anything",
    'Ad Hoc',
    'Good at setting but not tracking',
    'Super detailed and consistent',
    'Thorough + working with a coach or peer group'
  ],
  'DescribeProcess'
);

export const SatisfactionFromCurrentResult = t.enums.of(
  [
    'Far better!',
    'Better.',
    'It has improved, more needed',
    'It has improved slightly, much work is needed',
    'Same',
    'Not as good',
    'It degraded slightly',
    'It had Gotten much worst!'
  ],
  'SatisfactionFromCurrentResult'
);

export const CreditScoreChange = t.enums.of(
  [
    'Gotten much better',
    'Gotten a bit better',
    'No major change',
    'Gotten a bit worse',
    'Gotten much worse'
  ],
  'CreditScoreChange'
);

export const ChangeKind = t.enums.of(
  ['Same', 'Minimal Change', 'No Change', 'Significant Change'],
  'ChangeKind'
);

export const EffortEvaluation = t.enums.of(
  [
    'Significant Effort',
    'Mild Effort',
    'Easy!',
    'No Change needed',
    'No Change'
  ],
  'EffortEvaluation'
);

export const CreditScore = t.enums.of(
  [
    'Excellent - 750 and above',
    'Good - 700 to 749',
    'Fair - 650 to 699',
    'Poor - 551 to 649',
    'Bad - 550 and below',
    'I do not know.'
  ],
  'CreditScore'
);

export const UseWearableTech = t.enums.of(
  ['Never', 'Sometimes', 'Often', 'Always'],
  'UseWearableTech'
);

export const PaidFairly = t.enums.of(
  ['Not Fair', 'Just Right', 'Beyond Fair'],
  'PaidFairly'
);

export const WhereStandToday = t.enums.of(
  [
    'Way behind.',
    'Somewhat behind but close',
    'On schedule',
    'Somewhat ahead',
    'Significantly ahead'
  ],
  'WhereStandToday'
);

export const IndulgeFrequency = t.enums.of(
  ['Never', 'Sometimes 1-2 times/week', 'Always (daily)'],
  'IndulgeFrequency'
);

export const TakeEnergizers = t.enums.of(
  ['Never', 'Occasionally', 'Frequently', 'Daily'],
  'TakeEnergizers'
);

export const GoalProcess = t.enums.of(
  [
    'I haven’t done anything',
    'Ad hoc and random',
    'Good at setting but not tracking',
    'Super detailed and consistent',
    'Thorough + working with a coach or peer group'
  ],
  'GoalProcess'
);

export const OneToTenScale = t.enums.of(
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  'OneToTenScale'
);

export const OverallScore = t.enums.of(
  [
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50'
  ],
  'OneToTenScale'
);

export const StrengthOfI = t.enums.of(
  [
    'Very Strong',
    'Somewhat Strong',
    'Neither Strong or Weak',
    'Weak',
    'Very Weak'
  ],
  'StrengthOfI'
);

export const IncreaseDecrease = t.enums.of(
  [
    'Strongly increased',
    'Mildly increased',
    'Did nothing',
    'Mildly decreased',
    'Strongly decreased'
  ],
  'IncreaseDecrease'
);

export const PercentCompleted = t.enums.of(
  [
    '0-10%',
    '10-20%',
    '20-30%',
    '30-40%',
    '40-50%',
    '50-60%',
    '60-70%',
    '70-80%',
    '80-90%',
    '90-100%'
  ],
  'PercentCompleted'
);

export const TimeShift = t.enums.of(
  [
    'A lot less free time',
    'Somewhat less free time',
    'No signifcant change',
    'Some more free time',
    'Significantly more free time'
  ],
  'TimeShift'
);

export const HoursPerWeek = t.enums.of(
  ['Less than 20', '20-30', '30-40', '40-50', 'More Than 50'],
  'HoursPerWeek'
);

export const ExerciseLength = t.enums.of([
  'Less than 30 min',
  'About an hour',
  'Between an hour to two',
  'More than Two hours, less than 4',
  'More than 4 hours'
]);

export const TimeChanged = t.enums.of(
  [
    'Decreased by more than 10 hours',
    'Decreased by 0-10 hours',
    'No significant change',
    'Increased by 0-10 hours',
    'Increased by more than 10 hours'
  ],
  'TimeChanged'
);

export const InternalExternal = t.enums.of(
  ['Internal', 'External', 'Both'],
  'InternalExternal'
);

export const TimeSpent = t.enums.of(
  [
    'Less than an hour',
    '1-3 hours',
    '3-6 hours',
    '6-10 hours',
    'More than 10 hours'
  ],
  'TimeSpentMonth'
);

export const IsSleepEnough = t.enums.of(
  [
    'I get enough sleep',
    'Need some more sleep (1-2 hrs / night)',
    'Need significantly more sleep (3-4 hrs / night)'
  ],
  'IsSleepEnough'
);

export const SpiritualViews = t.enums.of(
  [
    'Not at all spiritual',
    'Somewhat spiritual',
    'Neither spiritual or not',
    'Extremely spiritual',
    'None of the above'
  ],
  'SpiritualViews'
);

export const SpiritualPractices = t.enums.of(
  [
    'No spiritual practices',
    'Some spiritual practices',
    'Many spiritual practices'
  ],
  'SpiritualPractices'
);

export const TimeSpentProgress = t.enums.of(
  ['No progress', 'Some progress', 'Extreme progress'],
  'TimeSpentProgress'
);

export const ActivityFeelings = t.enums.of(
  ['Not at all fulfilled', 'Somewhat fulfilled', 'Extremely fulfilled'],
  'ActivityFeelings'
);

export const PercentSelector = t.enums.of(
  ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100'],
  'PercentSelector'
);

const range = (start, end) =>
  Array(end - start)
    .fill()
    .map((v, i) => i + start);

export const HoursPerMonth = t.enums.of(
  range(1, 138).map(h => (h === 1 ? 'One hr' : `${h}hrs`)),
  'HoursPerMonth'
);

const getValidationErrorMessage = (actual, path, context) => {
  const to = context && context.options && context.options.label
  const help = context && context.options && context.options.help
  return `${actual 
    ? 'Missing required field' 
    : `Invalid value ${t.stringify(actual)}`
  } supplied ${to ? 'to \'' + to + '\'' : ''} ${help ? `\n ${help}` : ''}`
}

[
  AreaOfLife,
  TimesPerWeek,
  LifeStages,
  PillarsOfLife,
  Emotion,
  Strengths,
  Weaknesses,
  InteractionFrequency,
  ExerciseFrequency,
  EatingFrequency,
  HoursSleep,
  BedTimes,
  CarryStress,
  ExerciseTypes,
  GoalTypes,
  CommonGoalOutcomes,
  MajorLifeEvents,
  PriorityLevels,
  AssessmentTypes,
  MeditationTypes,
  TimesOfDay,
  AloneOrOthers,
  DreamsRemember,
  DescribeProcess,
  SatisfactionFromCurrentResult,
  CreditScoreChange,
  ChangeKind,
  EffortEvaluation,
  CreditScore,
  UseWearableTech,
  PaidFairly,
  WhereStandToday,
  IndulgeFrequency,
  TakeEnergizers,
  GoalProcess,
  OneToTenScale,
  OverallScore,
  StrengthOfI,
  IncreaseDecrease,
  PercentCompleted,
  TimeShift,
  HoursPerWeek,
  ExerciseLength,
  TimeChanged,
  InternalExternal,
  TimeSpent,
  IsSleepEnough,
  SpiritualViews,
  SpiritualPractices,
  TimeSpentProgress,
  ActivityFeelings,
  PercentSelector,
  HoursPerMonth
].forEach( e => e.getValidationErrorMessage = getValidationErrorMessage)
