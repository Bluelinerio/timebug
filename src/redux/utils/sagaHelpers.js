import { call, select } from 'redux-saga/effects'
import { delay }        from 'redux-saga'

export function* timeoutNoError(duration = 5000) {
  yield call(delay, duration)
}

export function* mySelectors(props: any): any {
  const keys = Object.keys(props)
  let result = {}
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]
    const selector = props[key]
    result[key] = yield select(selector)
  }
  return result
}

export const range = (start: number, end: number): Array<number> =>
  Array(end - start)
    .fill()
    .map((v, i) => i + start)

export const stepIds: Array<string> = range(1, 31).map(v => v.toString())

export const removeAllKeyButStepIds = (obj: {}): any =>
  Object.keys(obj)
    .filter(k => stepIds.includes(k))
    .reduce(
      (sum, k) => ({
        ...sum,
        [k]: obj[k],
      }),
      {}
    )

export const removeAllKeysExceptValue = (obj: {}): any =>
  Object.keys(obj)
    .filter(k => k === 'value')
    .reduce(
      (sum, k) => ({
        ...sum,
        [k]: obj[k],
      }),
      {}
    )
