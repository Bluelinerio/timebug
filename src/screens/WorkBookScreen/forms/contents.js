
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
  'Personal life Me Time',
  'Personal life Me Time family time',
  'Personal life Me Time hobbies',
  'Basic Needs',
  'Health & Wellness'
], 'LifeCategory');

export const Emotions = t.enums.of([
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
], 'Emotions');
