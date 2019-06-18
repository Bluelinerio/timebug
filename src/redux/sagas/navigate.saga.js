// @flow
import { select, takeLatest, call }     from 'redux-saga/effects'
import { NavigationActions }            from 'react-navigation'
import {
  GO_TO_HOME_SCREEN,
  SAGA_NAVIGATE,
  LINK_NAVIGATION,
}                                       from '../actionTypes'
import { goToStartScreen, goToTool }    from '../actions/nav.actions'
import type { goToToolParams }          from '../actions/nav.actions'
import type { LinkedNavigationPayload } from '../actions/nav.actions'
import NavigationService                from '2020_services/navigation'
import selectors                        from '../selectors'

const handleUrl = (
  link: string
): { screen: string, component: string, params: any } => {
  const [location, query] = link.split('?')
  const [screen, component] = location.split('/')
  const params = query.split('&').reduce((params, param) => {
    const [key, value] = param.split('=')
    return {
      ...params,
      [key]: value,
    }
  }, {})
  return {
    screen,
    component,
    params,
  }
}

function* handleGoToTool(params: { key: string }) {
  const { key, ...rest } = params
  const tool = yield call(selectors.getTool, key)
  const payload: goToToolParams = {
    tool,
    payload: rest,
  }
  return goToTool(payload)
}

function* handleLink(payload: { link: string }) {
  const { link } = payload
  const { screen, component, params } = handleUrl(link)
  switch (screen) {
  case 'home':
    return yield call(goToStartScreen, { component, params })
  case 'tools':
    return yield call(handleGoToTool, params)
  }
}

function* deeplinkNavigation({
  payload,
}: {
  payload: LinkedNavigationPayload,
}) {
  try {
    const action = yield call(handleLink, payload)
    yield call(NavigationService.dispatch, action)
  } catch (err) {
    console.log(err)
  }
}

function* onNavigate(action) {
  try {
    const to = yield select(action.createNavigationAction)
    yield call(NavigationService.navigate, to)
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
