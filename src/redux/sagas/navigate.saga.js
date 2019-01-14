// @flow
import { put, select, takeLatest }      from 'redux-saga/effects'
import {
  GO_TO_HOME_SCREEN,
  SAGA_NAVIGATE,
  LINK_NAVIGATION,
}                                       from '../actionTypes'
import { NavigationActions }            from 'react-navigation'
import { goToStartScreen, goToTool }    from '../actions/nav.actions'
import type { goToToolParams }          from '../actions/nav.actions'
import type { LinkedNavigationPayload } from '../actions/nav.actions'
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

const handleGoToTool = (
  params: { step: string, key: string },
  tools: any,
  steps: any
) => {
  const { step: stepNumber, key } = params
  const step = steps[stepNumber]
  const toolsForStep = tools[stepNumber] || []
  const tool = toolsForStep.find(t => t.key === key)
  const payload: goToToolParams = {
    step,
    tool,
  }
  return goToTool(payload)
}

const handleLink = (payload: { link: string }, tools: any, steps: any) => {
  const { link } = payload
  const { screen, component, params } = handleUrl(link)
  switch (screen) {
  case 'home':
    return goToStartScreen({ component, params })
  case 'tools':
    return handleGoToTool(params, tools, steps)
  }
}

function* deeplinkNavigation({
  payload,
}: {
  payload: LinkedNavigationPayload,
}) {
  const tools = yield select(selectors.getAllTools)
  const steps = yield select(selectors.steps)
  yield put(handleLink(payload, tools, steps))
}

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
