
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
  'Awesome',
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

export const SatiffactionFromCurrentResult = t.enums.of([
  'Far better!',
  'Better.',
  'It has improved, more needed',
  'It has improved slightly, much work is needed',
  'Same',
  'Not as good',
  'It degraded slightly',
  'It had Gotten much worst!',

], 'SatiffactionFromCurrentResult');

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
  'Bad - 550 and below',
  'I do not know.'
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


export const OneToTenScale = t.enums.of([
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10'
],'OneToTenScale')  

export const OverallScore = t.enums.of([
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
],'OneToTenScale')  
            
export const StrengthOfI = t.enums.of([        
  'Very Strong',
  'Strong',
  'Mid Line',
  'Weak',
  'Very Weak'
],'StrengthOfI')

export const PercentCompleted = t.enums.of([
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
],'PercentCompleted')  
 
export const TimeShift = t.enums.of([
  'A lot less free time',
  'A little less free time',
  'No signifcant change',
  'A little more free time',
  'A lot more free time'
],'TimeShift')  


export const HoursPerWeek = t.enums.of([
  'Less than 20',
  '20-30',
  '30-40',
  '40-50',
  'More Than 50'
],'HoursPerWeek') 
                   
                   

export const TimeChanged = t.enums.of([
  'Decreased by more than 10 hours',
  'Decreased by 0-10 hours',
  'No significant change',
  'Increased by 0-10 hours',
  'Increased by more than 10 hours'
],'TimeChanged') 
      
      
export const InternalExternal = t.enums.of([
        'Internal',
        'External',
        'Both'
],'InternalExternal')  

      
 export const TimeSpent = t.enums.of([
  'Less than an hour',
  '1-3 hours',
  '3-6 hours',
  '6-10 hours',
  'More than 10 hours'
],'TimeSpentMonth')  


export const IsSleepEnough = t.enums.of([
  'I get enough sleep',
  'I need another hour per night',
  'I need another two hours per night',
  'I need another three hours per night',
  'I need another four hours per night'
],'IsSleepEnough')  


export const SpiritualViews = t.enums.of([
  "I have strong spiritual beliefs, and regular spiritual practice(s)",
  "I have strong spiritual beliefs, but don't have a regular spiritual practice",
  "I have beliefs/interest, but I haven't yet made much time in my life for this",
  "I have difficulty or am uninterested in this aspect of life"
],'SpiritualViews')  

export const TimeSpentProgress = t.enums.of([
  "I made progress with some of my goals",
  "I made progress with all of my goals",
  "I reached all of my goals",
  "I haven't made any progress"
],'TimeSpentProgress')  


export const ActivityFeelings = t.enums.of([
  "I'm completely fulfilled",
  "I'm partially fulfilled but could challenge myself more",
  "I have fun and I'm not interested in challenging myself",
  "I want to progress and am frustrated with my inability to do so",
  "I'm bored by this activity"
],'ActivityFeelings')  

export const PercentSelector = t.enums.of([
  '10%',
  '20%',
  '30%',
  '40%',
  '50%',
  '60%',
  '70%',
  '80%',
  '90%',
  '100'
], 'PercentSelector')
                 
            


           