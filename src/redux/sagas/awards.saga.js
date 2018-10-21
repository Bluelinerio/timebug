import { takeLatest, fork, put, select }        from 'redux-saga/effects'
import moment                                   from 'moment'
import { extendedSubmitAwardAnswers }           from '../actions/award.actions'
import { EVALUATE_AWARD_DATA_EXTENDED }         from '../actionTypes'
import type { ExtendedSubmitAwardAnswerAction } from '../actions/award.actions'
import selectors                                from '../selectors'
import uuid                                     from 'uuid/v4'

const getTimeForMetaConfig = (meta: any) => {
  const { _timestamp, _date } = meta
  const shouldStoreDate =
    Array.isArray(_date) && _date.length > 0 && _date[0] === true ? true : false
  let timestamp
  let date
  const format = _date[1] || 'MM/DD/YYYY'
  if (_timestamp)
    timestamp = moment()
      .toDate()
      .getTime()
  if (shouldStoreDate) date = moment().format(format)
  return {
    timestamp,
    date,
    format
  }
}

export type ExtendedSubmitAwardAnswerPayload = {
  stepId: string,
  element: {
    awardKey: string,
    value: any,
    model: any,
    meta?: any,
    fieldKey: any,
    type: any
  }
}

function* _handleAwardDataRequests({
  payload
}: ExtendedSubmitAwardAnswerAction) {
  const { stepId, element: { awardKey, value, fieldKey, meta } } = payload
  const { data } = yield select(state =>
    selectors.awardModelAndDataForStep(state)(stepId)
  )
  const { _store } = meta
  let storableValue = value
  if (_store === 'list') {
    const { timestamp, date, format } = getTimeForMetaConfig(meta)
    const currentAwardData = data[awardKey] || {}
    const currentField = currentAwardData[fieldKey] || {}
    const currentValue = currentField.value || []
    const currentValueForThisDay = currentValue.find(value =>
      moment(value.date, format).isSame(moment(date, format))
    )
    let updateValue
    if (currentValueForThisDay) {
      updateValue = currentValue.reduce((allValues, val) => {
        const { id } = val
        if (id === currentValueForThisDay.id)
          return [
            ...allValues,
            {
              ...val,
              timestamp,
              value
            }
          ]
        else return [...allValues, val]
      }, [])
    } else
      updateValue = [
        {
          id: uuid(),
          timestamp,
          date,
          value
        },
        ...currentValue
      ]
    storableValue = updateValue.sort((a, b) =>
      moment(a.date, format).diff(moment(b.date, format))
    )
  }

  yield put(
    extendedSubmitAwardAnswers({
      stepId,
      element: {
        ...payload.element,
        value: storableValue
      }
    })
  )
}

function* watchForAwardDataRequests() {
  yield takeLatest(EVALUATE_AWARD_DATA_EXTENDED, _handleAwardDataRequests)
}

export function* watchForAwardsSaga() {
  yield fork(watchForAwardDataRequests)
}
