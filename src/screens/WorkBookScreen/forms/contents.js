
import t     from '../components/templates';

export const AreaOfLife = t.enums.of([
  'Personal Finances',
  'Place & Environment ',
  'Relationships',
  'Health & Wellness',
  'Spirituality',
], 'AreaOfLife');

export const StageOfLife = t.enums.of([
  'Infancy (Ages 0-3)',
  'Early Childhood (Ages 3-6)',
  'Middle Childhood (Ages 6-8)',
  'Late Childhood (Ages 9-11)',
  'Adolescence (Ages 12-20)',
  'Early Adulthood (Ages 20-35)',
  'Midlife (Ages 35-50)',
  'Mature Adulthood (Ages 50-80)',
  'Late Adulthood (Age 80+)'
], 'StageOfLife');

export const LifeCategory = t.enums.of([
  'Spirituality',
  'Work Life',
  'Special Projects',
  'Skills & Education',
  'Me Time',
  'Family time',
  'Hobbies',
  'Basic Needs',
  'Health & Wellness'
], 'LifeCategory');

export const Emotion = t.enums.of([
  'Happy',
  'Sad',
  'Excited',
  'Dejected',
  'Hopeless',
  'Hopeful',
  'Elated',
  'Cheerful',
  'Depressed',
  'Anxious',
  'Worried',
  'Relaxed',
  'Nervous',
  'Calm',
  'Restless',
  'Tense',
  'Fearful',
  'Peaceful',
  'Tranquil',
  'Proud',
  'Ashamed',
  'Guilty',
  'Virtuous',
  'Bold',
  'Hesitant',
  'Lonely',
  'Playful',
  'Frustrated',
  'Powerful',
  'Confused',
  'Certain',
  'Bored',
  'Intrigued',
  'Curious',
  'Angry',
  'Upset',
  'Capable',
  'Energetic',
  'Competent',
  'Impotent',
  'Insignificant',
  'Lazy',
  'Weak',
  'Creative',
  'Perceptive',
  'Stupid',
], 'Emotion');

export const CharachterStrengths = t.enums.of([
  'Honesty',
  'Bravery',
  'Loyalty',
  'Discipline',
  'Compassion',
  'Open-Heartedness',
  'Sympathy',
  'Empathy',
  'Sense of Humor',
  'Adventurous',
  'Intelligent',
  'Clever',
], 'CharachterStrengths');

export const CharachterWeaknesses = t.enums.of([
  'Fear',
  'Laziness',
  'Self-doubt',
  'Dishonesty',
  'Self-centerdness',
  'Narcissism',
  'Impatience',
  'Disorganized',
  'Short sightedness',
  'Shyness',
  'Closed mindedness'

], 'CharachterWeaknesses');

export const InteractionFrequency = t.enums.of([
  'Daily',
  'Weekly',
  'Monthly',
  'Bi-Monthly',
  'Yearly',
  'Rarely',
  'Never'
], 'InteractionFrequency');

export const ExerciseFrequency = t.enums.of([
  'Daily',
  'Weekly',
  'Bi-Weekly',
  'Never'
], 'ExerciseFrequency');

export const EatingFrequency = t.enums.of([
  'Once per day',
  'Twice per day',
  'Three times per day',
  'Four times per day',
  'More than four times per day'
], 'EatingFrequency');

export const HoursSleep = t.enums.of([
  'Less than 4',
  '4-5',
  '5-6',
  '6-7',
  '7-8',
  'More than 8'
], 'HoursSleep');

export const BedTimes = t.enums.of([
  'Before 9 PM',
  '9-10 PM',
  '10-11 PM',
  '11 PM - 12 AM',
  '12 - 1 AM',
  'After 1 AM'
], 'BedTimes');

export const CarryStress = t.enums.of([
  'Neck',
  'Shoulders',
  'Upper Back',
  'Lower Back',
  'Glutes',
  'Other'
], 'CarryStress');

export const ExerciseTypes = t.enums.of([
  'Team Sports',
  'Weights',
  'Aerobics',
  'Interval Training',
  'Yoga',
  'Martial Arts',
  'Pilates',
  'Running',
  'Other'
], 'ExerciseTypes');



export const GoalTypes = t.enums.of([
  'Energy & Time Allocation',
  'Achievement & Skills',
  'Health Indicators',
  'Internal Qualities',
  'Place & Environment',
  'Material Outcomes',
  'Relationship Quality'
], 'GoalTypes');

export const CommonGoalOutcomes = t.enums.of([
  'Bench Warmer',
  'Fast Starter',
  'Breeze Through',
  '(Self?) Sabotage',
  'Not For Lack Of Effort',
  'Right On Point',
  'Latency Effect'
], 'CommonGoalOutcomes');

export const MajorLifeEvents = t.enums.of([
  'Got married',
  'Got divorced',
  'Had a Child',
  'Graduated From school',
  'Dropped out of school',
  'Got a new job',
  'Got fired from your job',
  'Moved to a new place',
  'Major injury or surgery',
  'Loss of loved one',
  'Started a company',
  'Sold a company',
  'Other'
], 'MajorLifeEvents');

export const PriorityLevels = t.enums.of([
  'Very High',
  'High',
  'Medium',
  'Low',
  'Very Low'
], 'PriorityLevels');

export const AssessmentTypes = t.enums.of([
  'Career',
  'Personality & Hobbies',
  'Health',
  'Financial',
  'Relationship',
  'Place & Environment',
  'Spirituality'
], 'AssessmentTypes');


export const MeditationTypes = t.enums.of([
  'Silent Meditation',
  'Visualization',
  'Yoga',
  'Religious',
  'Prayer',
  'Other'
], 'MeditationTypes')

export const TimesOfDay = t.enums.of([
  'Early Morning',
  'Morning',
  'Afternoon',
  'Late Afternoon',
  'Early Evening',
  'Late Night'
], 'TimesOfDay')

export const AloneOrOthers = t.enums.of([
  'Alone',
  'With Others'
], 'AloneOrOthers')

export const DreamsRemember = t.enums.of([
'Daily',
'Most of the time,',
'Occasionally',
'Rarely',
'Never'
],'DreamsRemember')

export const DescribeProcess = t.enums.of([
  "I haven't done anything",
  'Ad Hoc',
  'Good at setting but not tracking',
  'Super detailed and consistent',
  'Thorough + working with a coach or peer group'
  ],'DescribeProcess')

export const ChangeKind = t.enums.of([
  'Same',
  'Small Change',
  'No Change needed',
  'No Change',
], 'ChangeKind');

export const EffortEvaluation = t.enums.of([
  'Significant Effort',
  'Mild Effort',
  'Easy!',
  'No Change needed',
  'No Change',
], 'EffortEvaluation');

export const CreditScore = t.enums.of([
  'Excellent - 750 and above',
  'Good - 700 to 749',
  'Fair - 650 to 699',
  'Poor - 551 to 649',
  'Bad - 550 and below'
], 'CreditScore' );

export const UseWearableTech = t.enums.of([
    'Never',
    'Sometimes',
    'Often',
    'Always'
    ],'UseWearableTech')

export const PaidFairly = t.enums.of([
      'Beyond Fair',
      'Not Fair',
      'Just Right'
      ],'PaidFairly')

export const WhereStandToday = t.enums.of([
      'I am way behind where I wanted to be',
      'I am a little behind but close',
      'I am right where I need to be',
      'I am a little ahead',
      'I am way ahead of where I imagined I would be'
      ],'WhereStandToday')      

export const IndulgeFrequency = t.enums.of([
        'Daily',
        '1-2x/wk',
        'I am right where I need to be',
        'Occasionally(1-2x/mo)',
        'Rarely',
        'Never'
        ],'IndulgeFrequency')     
        
        
export const TakeEnergizers = t.enums.of([
          'Never',
          'Only when really sick',
          'Occasionally',
          'Frequently',
          'Daily'
          ],'TakeEnergizers')    
