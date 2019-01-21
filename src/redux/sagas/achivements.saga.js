import {
  take,
  put,
  putResolve,
  actionChannel,
  select,
  call,
  fork,
  takeLatest,
} from 'redux-saga/effects'
import {
  UPDATE_USER,
  CREATE_ACHIEVEMENT,
  DELETE_ACHIEVEMENT,
  UNLOCK_ACHIEVEMENT,
} from '../actionTypes'
import {
  createAchievement,
  createAchievementSuccess,
  createAchievementFailure,
  deleteAchievement,
  deleteAchievementSuccess,
  deleteAchievementFailure,
} from '../actions/achievement.actions'
import type {
  CreateAchievementPayload,
  DeleteAchievementPayload,
} from '../actions/achievement.actions'
import { GET_USER, updateUser } from '../actions/user.actions'
import selectors from '../selectors'
import {
  createAchievement as createAchievementCall,
  deleteAchievement as deleteAchievementCall,
} from '../../services/apollo'
import type { User } from '../../services/apollo/models'
import { achievements, achievementsForStepId } from '2020_static/achievements'

const nextRequiredUpdateForUser = (
  user: User
): { updated: [string], deleted: [string] } => {
  const listOfValidAchievementsNames = Object.values(achievements)
  const current: [string] = user.achievements.map(a => a.tagName)
  const required: [string] = user.forms.reduce(
    (sum, form) => [...sum, ...achievementsForStepId[form.stepId]],
    []
  )

  const tagName = required.find(a => !current.includes(a))

  if (tagName) {
    return {
      createAchievement: {
        tagName,
      },
    }
  }

  const achievement = user.achievements.find(
    a => listOfValidAchievementsNames.includes(a.tagName) === false
  )

  if (achievement) {
    return {
      deleteAchievement: {
        achievementId: achievement.id,
      },
    }
  }
  return {}
}

export function* watchChangesInFormsAndUpdateAchievements() {
  // here the assumptions is that the formData reducer will always Hydrate before the GET_USER action return, becuase we never
  const requestChan = yield actionChannel([GET_USER.SUCCEEDED, UPDATE_USER])
  while (true) {
    yield take(requestChan)
    const user = yield select(selectors.user)
    const payload = nextRequiredUpdateForUser(user)
    if (payload.createAchievement) {
      const userId = user.id
      const { tagName } = payload.createAchievement
      yield put(createAchievement({ userId, tagName }))
    } else if (payload.deleteAchievement) {
      const { achievementId } = payload.deleteAchievement
      yield put(deleteAchievement({ achievementId }))
    }
  }
}

function* _handleAchievementUpdate(payload: CreateAchievementPayload) {
  const { tagName, userId } = payload
  const res = yield call(createAchievementCall, {
    tagName,
    userId,
  })
  if (res.user) {
    yield put(
      createAchievementSuccess({
        achievements: res.user.achievements,
      })
    )
    yield putResolve(updateUser(res.user))
  } else {
    yield put(
      createAchievementFailure({
        error: `An error has ocurred creating the achievement ${tagName}`,
      })
    )
  }
}

function* _handleAchievementDelete(payload: DeleteAchievementPayload) {
  const { achievementId } = payload
  const user = yield select(selectors.user)
  const res = yield call(deleteAchievementCall, achievementId)
  if (res.id) {
    const achievements = user.achievements.filter(a => a.id !== res.id)
    yield put(deleteAchievementSuccess({ achievements }))
    yield putResolve(
      updateUser({
        achievements,
      })
    )
  } else {
    yield put(
      deleteAchievementFailure({
        error: `An error has ocurred deleting an achievement`,
      })
    )
  }
}

function* _handleAchievementUnlock() {}

export function* watchForAchievementCreateSaga() {
  yield takeLatest(CREATE_ACHIEVEMENT, _handleAchievementUpdate)
}

export function* watchForAchievementDeleteSaga() {
  yield takeLatest(DELETE_ACHIEVEMENT, _handleAchievementDelete)
}

export function* watchForAchievementsUnlockSaga() {
  yield takeLatest(UNLOCK_ACHIEVEMENT, _handleAchievementUnlock)
}

export function* watchForAchievementsSaga() {
  yield fork(watchChangesInFormsAndUpdateAchievements)
  yield fork(watchForAchievementCreateSaga)
  yield fork(watchForAchievementDeleteSaga)
  yield fork(watchForAchievementsUnlockSaga)
}
