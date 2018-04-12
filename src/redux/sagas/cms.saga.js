// @flow
import { takeLatest, fork, put }          from 'redux-saga/effects'
import { REFRESH_CMS }                    from '../actions'
import { FETCH_CMS, SEED_CMS }            from '../actions/cms.actions'
import { refreshCMS, testContentFromCMS } from '../../services/contentful'
import { request }                        from '../../Modules/redux-saga-request'
import { headerBackgrounds }              from '../../resources/images'
let staticCms = require('../../static/cms.json')

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
  yield put({ type: SEED_CMS, payload: staticCms })
}

function* _fetchCms() {
  let { payload: cms } = yield request(
    FETCH_CMS,
    refreshCMS()
      .then(({ steps, ...rest }) => ({
        ...rest,
        steps: Object.values(steps).reduce(
          (sum, step) => ({
            ...sum,
            [step.stepId]: addLocalImage(step)
          }),
          {}
        )
      }))
      .then(__DEV__ ? testContentFromCMS : () => null)
  )
}

function* watchFetchSteps() {
  yield takeLatest(REFRESH_CMS.type, _fetchCms)
}

export default function* cmsSaga() {
  yield fork(seedCMS)
  yield fork(watchFetchSteps)
  yield put(REFRESH_CMS)
}
