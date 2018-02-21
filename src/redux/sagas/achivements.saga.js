import { take, put, actionChannel, select, call } from 'redux-saga/effects'
import {
  UPDATE_USER
} from '../actionTypes';
import {
  GET_USER,
  updateUser
} from '../actions/user.actions';
import selectors from '../selectors'
import achievementsList from '../../static/bot/surveyAchievements'
import { createAchievement, deleteAchievement } from '../../services/apollo'

const achievements = {
  AREAS_OF_LIFE: 'Areas Of Life',
  ASSESSMENTS: 'Assessments',
  LIFE_CATEGORY: 'Life Category',
  STRENGTHS_AND_WEAKNESSES: 'Strengths And Weaknesses',
  TEAM: 'Team',
  GOALS: 'Goals',
  COMMITMENTS: 'Commitments',
  MY_INTERNAL_WORLD: 'My Internal World',
  LIFE_VISION: 'Life Vision',
  HEALTH: 'Health',
  CAREER: 'Career',
  GOALS: 'Goals',
  MAJOR_LIFE_EVENTS: 'Major Life Events',
  PERSONAL_FINANCES: 'Personal Finances',
  PERSONAL_LIFE: 'Personal Life',
  PLACE_AND_ENVIRONMENT: 'Place And Environment',
  RELATIONSHIPS: 'Relationships',
  SPIRITUALITY: 'Spirituality',
  STAGES_OF_LIFE: 'Stages Of Life',
}

const testDataFromStatic = () => {
  function assert(condition, error) {
    if(!condition) throw error
  }

  Object.keys(achievements).forEach((k, i) => assert(achievements[key] === achievementsList[i]), `achievements at index ${i} should be ${achievements[key]}`)
}

const nextRequiredUpdateForUser = (user:User): {updated:[ string ], deleted:[string]} => {
  const achievementsForStepId = {
    '1': [achievements.AREAS_OF_LIFE, achievements.STAGES_OF_LIFE, achievements.REFLECTIONS],
    '2': [achievements.LIFE_CATEGORY],
    '3': [achievements.STRENGTHS_AND_WEAKNESSES, achievements.TEAM],
    '4': [],
    '5': [achievements.GOALS],
    '6': [],
    '7': [],
    '8': [achievements.COMMITMENTS, achievements.HEALTH],
    '9': [],
    '10': [achievements.MY_INTERNAL_WORLD, achievements.LIFE_VISION],
    '11': [],
    '12': [achievements.MAJOR_LIFE_EVENTS],
    '13': [achievements.PERSONAL_FINANCES],//Work And Finances?
    '14': [],
    '15': [achievements.PERSONAL_LIFE],//Personal Aims And Hobbies?
    '16': [],
    '17': [achievements.RELATIONSHIPS],
    '18': [achievements.PLACE_AND_ENVIRONMENT],
    '19': [achievements.SPIRITUALITY],
    '20': [achievements.ASSESSMENTS],
    '21': [],
    '22': [],
    '23': [],
    '24': [],
    '25': [],
    '26': [],
    '27': [],
    '28': [],
    '29': [],
    '30': []
  }
  const listOfValidAchievementsNames = Object.values(achievements);// client based logic right here and now!
  const current: [string] = user.achievements.map(a => a.tagName);
  const required: [string] = user.forms.reduce((sum, form) => ([
    ...sum,
    ...achievementsForStepId[form.stepId]
  ]), [])

  // here move move to streaming one event each time:
  const tagName = required.find(a => !current.includes(a))

  if(tagName) {
    return {
      createAchievement: {
        tagName
      }
    }
  }

  const achievement = user.achievements
    .find(a => listOfValidAchievementsNames.includes(a.tagName) === false)

  if(achievement) {
    return {
      deleteAchievement: {
        achievementId: achievement.id
      }
    }
  }
  return {

  }
}

const CREATE_ACHIEVEMENT = 'CREATE_ACHIEVEMENT'

export function * watchChangesInFormsAndUpdateAchievements() {
  // here the assumptions is that the formData reducer will always Hydrate before the GET_USER action return, becuase we never
  const requestChan = yield actionChannel([GET_USER.SUCCEEDED, UPDATE_USER])
  while(true) {
    yield take(requestChan)
    const user = yield select(selectors.user)
    const payload = nextRequiredUpdateForUser(user);
    if(payload.createAchievement) {
      const userId = user.id;
      const { tagName } = payload.createAchievement;
      const res = yield call(createAchievement, {
        tagName,
        userId
      })
      debugger;
      if( res.user ) {
        // an FYI put:
        yield put({ type: CREATE_ACHIEVEMENT, payload })
        yield put(updateUser(res.user))
      } else {
        //fail silently
      }
    } else if(payload.deleteAchievement) {
      const { achievementId } = payload.deleteAchievement;
      const res = yield call(deleteAchievement, achievementId)
      debugger;
      if( res.user ) {
        yield put(updateUser(res.user))
      } else {
        //fail silently
      }
    }
  }
}