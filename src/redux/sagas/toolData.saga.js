// @flow

/**
 * Saga effects
 */
import {
  actionChannel,
  call,
  fork,
  put,
  putResolve,
  take,
  select,
  takeLatest,
}                                             from 'redux-saga/effects'
import { delay }                              from 'redux-saga'
import tron                                   from 'reactotron-react-native'
/**
 * Network requests
 */
import {
  createToolData,
  updateToolData,
  fetchUserWithId,
}                                             from '../../services/apollo'
/**
 * Actions and action creators
 */
import {
  TOOL_SYNC_FINISHED,
  EXECUTE_TOOL_SYNC,
  SYNC_SIDE_EFFECTS,
  SUBMIT_AWARD_VALUE,
  SYNC_FINISHED,
}                                             from '../actionTypes'
import { updateUser }                         from '../actions/user.actions'
import {
  incrementToolDataQueue,
  decrementToolDataQueue,
  executeToolSync,
  restoreToolData,
}                                             from '../actions/award.actions'
/**
 * Selectors and other utilities
 */
import selectors                              from '../selectors'
import { diffObjs }                           from '../utils/diffObjs'
import { CREATE, UPDATE, removeToolDataKeys } from '../utils/toolData.helpers'
import { mySelectors, removeServerKeys }      from '../utils/sagaHelpers'
/**
 * Types
 */
import type { ExecuteToolSyncPayload }        from '../actions/award.actions'
import type {
  OperationType,
  ToolDataOperation,
}                                             from '../utils/toolData.helpers'

/**
 * Helpers
 */

const log = payload =>
  __DEV__
    ? tron.display({
      name: 'ToolData Saga',
      preview: 'ToolData',
      value: payload,
    })
    : () => null

/**
 * End Helpers
 */

/**
 * Watcher Sagas
 */

function* watchForUpdateOrCreate() {
  while (true) {
    const { payload }: { payload: ExecuteToolSyncPayload } = yield take(
      EXECUTE_TOOL_SYNC
    )
    if (payload && payload.operations) {
      yield fork(syncRequests, payload)
    }
  }
}

function* watchForSynchronizationFinished() {
  yield takeLatest(TOOL_SYNC_FINISHED, _handleSyncFinished)
}

function* watchForFormDataFinishedToSyncTools() {
  const requestChan = yield actionChannel(SYNC_FINISHED)
  while (true) {
    const action = yield take(requestChan)
    yield call(_compareToolData, action)
  }
}

function* watchForSubmitToolDataToSyncTools() {
  const requestChan = yield actionChannel(SUBMIT_AWARD_VALUE)
  yield takeLatest(requestChan, delayToolSyncWithSubmit)
}

function* delayToolSyncWithSubmit(action) {
  yield delay(5000)
  yield call(_compareToolData, action)
}

function* _compareToolData() {
  const { userId, userToolData, toolData: localToolData } = yield call(
    mySelectors,
    {
      userId: selectors.userId,
      userToolData: selectors.storedToolData,
      toolData: selectors.allToolData,
    }
  )

  const { difference, onlyOnLeft } = diffObjs(
    localToolData,
    removeServerKeys(userToolData)
  )

  const updates: Array<ToolDataOperation> = difference
    ? Object.keys(difference).reduce((payload, key) => {
      const value = difference[key].leftValue
      const fullData = userToolData[key]
      return [
        ...payload,
        {
          type: UPDATE,
          value: {
            id: fullData._server.id,
            toolKey: key,
            value,
            userId,
          },
        },
      ]
    }, [])
    : []

  const creations: Array<ToolDataOperation> = onlyOnLeft
    ? Object.keys(onlyOnLeft).reduce((payload, key) => {
      const value = onlyOnLeft[key]

      return [
        ...payload,
        {
          type: CREATE,
          value: {
            value,
            toolKey: key,
            userId,
          },
        },
      ]
    }, [])
    : []

  // Figure out if we actually need this
  const deletes: Array<ToolDataOperation> = []

  const operations: Array<OperationType> = [
    ...updates,
    ...creations,
    ...deletes,
  ]

  const payload: ExecuteToolSyncPayload = {
    operations,
  }

  yield put(executeToolSync(payload))
}

export function* watchSyncToolData() {
  yield fork(watchForSynchronizationFinished)
  yield fork(watchForUpdateOrCreate)
  yield fork(watchForSubmitToolDataToSyncTools)
  yield fork(watchForFormDataFinishedToSyncTools)
}

/**
 * End Watcher Sagas
 */

// Refactor material
function* syncRequests(payload) {
  // Do single batch operation, await and then get the user
  const { operations } = payload
  const userId = yield select(selectors.userId)

  const errors = []

  if (!userId) return

  if (!operations || operations.length === 0) {
    yield put({ type: TOOL_SYNC_FINISHED })
    return
  }

  yield putResolve(incrementToolDataQueue())

  for (const op of operations) {
    const { type, value } = op
    try {
      switch (type) {
      case CREATE:
        yield call(createToolData, { ...value })
        break
      case UPDATE:
        yield call(updateToolData, { ...value })
        break
      }
    } catch (error) {
      errors.push(error)
    }
  }

  if (errors.length > 0) errors.map(e => log(e))
  // Get user after query madness
  const user = yield call(fetchUserWithId, userId)

  if (user) yield putResolve(updateUser(user))

  yield putResolve(decrementToolDataQueue())

  yield put({ type: TOOL_SYNC_FINISHED })
}

function* _handleSyncFinished() {
  const { userToolData, toolData: localToolData } = yield call(mySelectors, {
    userId: selectors.userId,
    userToolData: selectors.storedToolData,
    toolData: selectors.allToolData,
  })

  const remoteData = removeServerKeys(userToolData)

  const tools = Object.keys(remoteData).reduce((toolObj, key) => {
    const currentLocalToolData = localToolData[key] || {}
    const currentUserToolData = remoteData[key]

    const { difference, onlyOnLeft } = diffObjs(
      removeToolDataKeys(currentUserToolData),
      removeToolDataKeys(currentLocalToolData)
    )

    if (!difference && !onlyOnLeft) return toolObj
    return {
      ...toolObj,
      [key]: {
        ...currentUserToolData,
      },
    }
  }, {})

  if (Object.keys(tools).length > 0) yield put(restoreToolData({ tools }))

  yield delay(10)
  yield put({ type: SYNC_SIDE_EFFECTS })
}

/**
 * End Utility Sagas
 */
