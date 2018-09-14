// @flow
import { takeLatest, fork, put }          from 'redux-saga/effects'
import { REFRESH_CMS }                    from '../actions'
import { FETCH_CMS, SEED_CMS, SET_NOTIFICATIONS } from '../actions/cms.actions'
import { initialNotifications } from '../actions/checkin.actions'
import { refreshCMS } from '../../services/contentful'
import { request }                        from '../../Modules/redux-saga-request'
import { headerBackgrounds }              from '../../resources/images'
let staticCms     = require('../../static/cms.json')
const meditations = require('../../static/Meditations.json')

import tron from 'reactotron-react-native'

const addLocalImage = step => ({
  ...step,
  image: headerBackgrounds[step.stepId]
})

function* seedCMS() {
  staticCms.steps = Object.values(staticCms.steps).reduce(
    (sum, step) => ({
      ...sum,
      [step.stepId]: addLocalImage(step)
    }),
    {}
  )
  yield put({
    type: SEED_CMS,
    payload: {
      ...staticCms,
      meditations
    }
  })
  yield put({
    type: SET_NOTIFICATIONS,
    payload: {
      ...staticCms
    }
  })
}

function* _fetchCms() {
  let { payload: cms } = yield request(FETCH_CMS, () =>
    refreshCMS().then(({ steps, ...rest }) => ({
      ...rest,
      steps: Object.values(steps).reduce(
        (sum, step) => ({
          ...sum,
          [step.stepId]: addLocalImage(step)
        }),
        {}
      )
    }))
  )
  yield put({
    type: SET_NOTIFICATIONS,
    payload: {
      ...cms
    }
  })
}

function* _setUpInitialNotifications({ payload }) {
  const { steps } = payload
  yield put(initialNotifications({ steps }))
}

function* watchForInitialNotifications() {
  yield takeLatest(SET_NOTIFICATIONS, _setUpInitialNotifications)
}

function* watchFetchSteps() {
  yield takeLatest(REFRESH_CMS.type, _fetchCms)
}

export default function* cmsSaga() {
  yield fork(watchForInitialNotifications)
  yield fork(seedCMS)
  yield fork(watchFetchSteps)
  yield put(REFRESH_CMS)
}
