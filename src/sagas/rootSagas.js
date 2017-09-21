import { all } from 'redux-saga/effects'
import {
  getAllStepsSaga,
  getStepByDaySaga
} from './steps.saga'
import { getAboutInfoSaga } from './login.saga';
// ...

export default function* rootSaga() {
  yield all([
    getAllStepsSaga(),
    getStepByDaySaga(),
		getAboutInfoSaga()
  ])
}