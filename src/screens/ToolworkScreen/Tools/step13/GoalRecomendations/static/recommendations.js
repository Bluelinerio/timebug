import { categories } from '../../context/CategoryContext'

export const recommendations = {
  [categories.AIMS_AND_HOBBIES]: ['Learn a musical instrument', 'Join a rec sports team'],
  [categories.CAREER]: ['Get a raise', 'Change my current job', 'Change careers completely'],
  [categories.ENVIRONMENT]: ['Move to a bigger place', 'Move to a new city', 'Move to a new country'],
  [categories.FINANCES]: ['Reach a savings threshold', 'Make an investment'],
  [categories.HEALTH]: ['Join a gym', 'Change my workout regimen', 'Loose a certain amount of weight'],
  [categories.RELATIONSHIPS]: ['Do something special for a loved one', 'Get rid of a toxic relationship', 'Start a new relationship'],
  [categories.SPIRITUALITY]: ['Take up a spiritual practice', 'Commit to daily meditation', 'Find a spiritual community'],
}
