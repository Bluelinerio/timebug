// @flow
import { takeLatest, fork, select, put } from 'redux-saga/effects'
import { STEP_30_SIDE_EFFECT, STEP_2_SIDE_EFFECT } from '../actionTypes'
import { FORM_KEYS as STEP_30_KEYS } from '2020_forms/forms/step30'
import { FORM_KEYS as STEP_2_KEYS } from '2020_forms/forms/step2'
import { LifeCategories } from '2020_forms/forms/content'
import { stepEnum } from '2020_services/cms'
import selectors from '2020_redux/selectors'
import {
  submitFormValue,
  syncFormData,
} from '2020_redux/actions/formData.actions.js'
import { Payload } from '../actions/idealHours.actions'

function* handleStep2SideEffect(action: {
  type: STEP_2_SIDE_EFFECT,
  payload: Payload,
}) {
  const { payload } = action
  const { formData } = payload

  const globalFormData = yield select(selectors.formData)

  const step30Data = globalFormData[stepEnum.STEP_30] || null
  if (!step30Data) return
  // This is the value to be stored
  const step30Value = step30Data.value[0]

  const step30Year = step30Value[STEP_30_KEYS.form_30_next_year]

  const yearValue = step30Year.value

  const value = formData[0]

  const idealValue = value[STEP_2_KEYS.form_2_ideal_week_time_].value

  // Get the hours of step 30 divided by 52 and rounded up
  const valuesOfHoursForCategories = Object.keys(LifeCategories).reduce(
    (children, contentKey) => {
      const key = `form_2_ideal_week_time.${contentKey}`
      const step30Key = `form_30_next_year.${contentKey}`
      const dataForKey = idealValue[key]
      const value = dataForKey.value
      const step30DataForKey = yearValue[step30Key]
      return {
        ...children,
        [step30Key]: {
          ...step30DataForKey,
          value: value * 52,
        },
      }
    },
    { ...yearValue }
  )

  const storable = [
    {
      ...step30Value,
      [STEP_30_KEYS.form_30_next_year]: {
        ...step30Year,
        value: valuesOfHoursForCategories,
      },
    },
  ]

  yield put(
    submitFormValue({
      stepId: stepEnum.STEP_30,
      value: storable,
      sideEffect: false,
    })
  )
  yield put(syncFormData())

  yield
}

function* handleStep30SideEffect(action: {
  type: STEP_30_SIDE_EFFECT,
  payload: Payload,
}) {
  const { payload } = action
  const { formData } = payload

  const globalFormData = yield select(selectors.formData)

  const step2Data = globalFormData[stepEnum.STEP_2] || null
  if (!step2Data) return
  // This is the value to be stored
  const step2Value = step2Data.value[0]

  const step2Ideal = step2Value[STEP_2_KEYS.form_2_ideal_week_time_]

  const idealValue = step2Ideal.value

  const value = formData[0]

  const hoursValue = value[STEP_30_KEYS.form_30_next_year].value

  // Get the hours of step 30 divided by 52 and rounded up
  const valuesOfHoursForCategories = Object.keys(LifeCategories).reduce(
    (children, contentKey) => {
      const key = `form_30_next_year.${contentKey}`
      const step2Key = `form_2_ideal_week_time.${contentKey}`
      const dataForKey = hoursValue[key]
      const value = dataForKey.value
      const step2DataForKey = idealValue[step2Key]
      return {
        ...children,
        [step2Key]: {
          ...step2DataForKey,
          value: Math.floor(value / 52),
        },
      }
    },
    { ...idealValue }
  )

  const storable = [
    {
      ...step2Value,
      [STEP_2_KEYS.form_2_ideal_week_time_]: {
        ...step2Ideal,
        value: valuesOfHoursForCategories,
      },
    },
  ]

  yield put(
    submitFormValue({
      stepId: stepEnum.STEP_2,
      value: storable,
      sideEffect: false,
    })
  )
  yield put(syncFormData())

  yield
}

function* watchForStep2SideEffects() {
  yield takeLatest(STEP_2_SIDE_EFFECT, handleStep2SideEffect)
}

function* watchForStep30SideEffects() {
  yield takeLatest(STEP_30_SIDE_EFFECT, handleStep30SideEffect)
}

export function* watchForIdealHoursSideEffects() {
  yield fork(watchForStep2SideEffects)
  yield fork(watchForStep30SideEffects)
}
