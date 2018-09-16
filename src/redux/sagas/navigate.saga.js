// @flow
import { put, select, takeLatest }      from 'redux-saga/effects'
import {
  GO_TO_HOME_SCREEN,
  SAGA_NAVIGATE,
  LINK_NAVIGATION
}                                       from '../actionTypes'
import { NavigationActions }            from 'react-navigation'
import {
  goToStartScreen,
  journeyScreenDeepParams
}                                       from '../actions/nav.actions'
import type { LinkedNavigationPayload } from '../actions/nav.actions'
import type, { Assignment }             from '../../services/cms'

const handleUrl = link => {
  const [location, query] = link.split('?')
  const [screen, component] = location.split('/')
  const params = query.split('&').reduce((params, param) => {
    const [key, value] = param.split('=')
    return {
      ...params,
      [key]: value
    }
  }, {})
  return {
    screen,
    component,
    params
  }
}

const handleLink = (payload: any) => {
  const { link } = payload
  const { screen, component, params } = handleUrl(link)
  switch (screen) {
    case 'home':
      return goToStartScreen({ component, params })
    case 'journey':
      return journeyScreenDeepParams({ component, params })
  }
}

function* deeplinkNavigation({
  payload
}: {
  payload: LinkedNavigationPayload
}) {
  yield put(handleLink(payload))
}

type SelectForNavigation = (
  state: any
) => { action: any, params: any, routeName: string }

function* onNavigate(action) {
  try {
    const to = yield select(action.createNavigationAction)
    yield put(NavigationActions.navigate(to))
  } catch (error) {
    console.log(error)
  }
}

export function* watchForDeeplinkNavigation() {
  yield takeLatest(LINK_NAVIGATION, deeplinkNavigation)
}

export function* watchForsagaNavigate() {
  yield takeLatest(SAGA_NAVIGATE, onNavigate)
}

const _goToHomeScreen = (action: { reset: boolean, number: number }) => {
  if (action.reset) {
    return NavigationActions.reset('HomeScreen', action)
  } else {
    return NavigationActions.navigate('HomeScreen', action)
  }
}

export function* goToHomeScreen() {
  yield takeLatest(GO_TO_HOME_SCREEN, _goToHomeScreen)
}
