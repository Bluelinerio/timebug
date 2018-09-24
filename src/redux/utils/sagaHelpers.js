import { call }  from 'redux-saga/effects'
import { delay } from 'redux-saga'

export function* timeoutNoError(duration = 5000) {
  yield call(delay, duration)
}
