import { takeEvery, put, select, call } from 'redux-saga/effects';
import {
  FOREGROUND,
  BACKGROUND,
  INACTIVE
} from 'redux-enhancer-react-native-appstate';

import type { AppState } from '../reducers/appState.reducer';
import { initialState, UNDETERMIND } from '../reducers/appState.reducer';
import { getAppState, getAggregateState } from '../rootReducer';

export function* appStateSagaWatcher() {
  const appState = yield select(getAppState);
  if (appState.last) {
    yield appStateBusinessLogicRoot({ type: appState.last });
  }
  yield takeEvery(
    [FOREGROUND, BACKGROUND, INACTIVE],
    appStateBusinessLogicRoot
  );
}

function* appStateBusinessLogicRoot(action: {
  type: FOREGROUND | BACKGROUND | INACTIVE
}) {
  const state = yield select(state => state);
  switch (action.type) {
    case FOREGROUND:
      yield call(foreground, state);
    case BACKGROUND:
      yield call(background, state);
    case INACTIVE:
      yield call(inactive, state);
    default:
      return;
  }
}

function* foreground(state) {
  const appState = getAppState(state);
  let aggregate = getAggregateState(appState);

  if (aggregate === UNDETERMIND) {
    agregate = {
      ...agregates,
      ...firstTimeBundle(
        (firstTimeDate: now),
        (firstTimeLaunchDate: now),
        (now: now)
      ),
      isVeryFirstSession: true
    };
  }

  //   const now = Date.now()
  //   debugger
  //   const isFirstTime = state.sessions.length === 0
  //   const isFirstLaunch = state.current.start === 0
  //   const sessionNeverEndedProperly = !isFirstTime && !isFirstLaunch && state.current.end === 0
  //   if (isFirstTime || isFirstLaunch || sessionNeverEndedProperly) {
  //     if (isFirstTime && !isFirstLaunch) {
  //       throw 'can not happen that it is the first time and not the first launch'
  //     }
  //     const current = {
  //       start: now,
  //       end: 0,
  //       entries: 1
  //     }
  //     const ftBundle = firstTimeBundle({firstTimeDate: now, firstTimeLaunchDate: now, now}),
  //     agregates = isFirstTime
  //       ? {
  //           ...ftBundle,
  //           isVeryFirstSession: true
  //         }
  //       : isFirstLaunch
  //         ? {
  //           ...state.agregates,
  //           ...ftBundle
  //         }
  //         : {
  //           ...state.agregates,
  //           lastRecovery: {
  //             started: now,
  //             sessionNeverEndedProperly
  //           },
  //           recoveredSessions: [...(state.agregates.recoveredSessions || [] ), now]
  //         }

  //     return {
  //       ...state,
  //       current,
  //       agregates,
  //     }
  //   }
  //   const timePasseSinceLastBackgorund = now - state.current.end
  //   if(timePasseSinceLastBackgorund < 0 ) {
  //     throw 'timePasseSinceLastBackgorund should always be a positive number'
  //   }
  //   const previousSessionDuration = state.current.end - state.current.start
  //   if(previousSessionDuration < 0) {
  //     throw 'previousSessionDuration should always be a positive number'
  //   }
  //   // determin if the continue current sesssion or archive it:
  //   const resumedFromLastSession = isSameDay(state.current.start, now)

  //   const current = resumedFromLastSession
  //   ? {
  //       ...state.current,
  //       entries: state.current.entries + 1,
  //       end: now
  //     }
  //   : {
  //       entries: 0,
  //       start: now,
  //       end: 0
  //     }

  //   const agregates = {
  //     ...state.agregates,
  //     resumedFromLastSession
  //   }
  //   return {
  //     ...state,
  //     current,
  //     agregates
  //   }
  // }
}

function* background() {}

function* inactive() {}

import equal from 'deep-equal';
import isSameWeek from 'date-fns/is_same_week';
import isSameDay from 'date-fns/is_same_day';

const firstTimeBundle = ({
  firstTimeDate,
  firstTimeLaunchDate,
  now
}: {
  firstTimeDate: number,
  firstTimeLaunchDate: number,
  now: number
}) => ({
  isFirstWeek: isSameWeek(firstTimeDate, now),
  isFirstDay: isSameDay(firstTimeDate, now),
  isFirstTime: isSameDay(firstTimeDate, now),
  isFirstLaunch: isSameDay(firstTimeLaunchDate, now),
  firstTimeDate,
  firstTimeLaunchDate
});

// type Session = {
//   start: number,
//   end: number,
//   entries: number
// }
//   current: {
//     start:0,
//     end: 0,
//     entries: 0
//   },
//   sessions:[],
//   agregates: {

//   }

// const foreground = (state: AppState = initialState):AppState => {
//   const now = Date.now()
//   debugger
//   const isFirstTime = state.sessions.length === 0
//   const isFirstLaunch = state.current.start === 0
//   const sessionNeverEndedProperly = !isFirstTime && !isFirstLaunch && state.current.end === 0
//   if (isFirstTime || isFirstLaunch || sessionNeverEndedProperly) {
//     if (isFirstTime && !isFirstLaunch) {
//       throw 'can not happen that it is the first time and not the first launch'
//     }
//     const current = {
//       start: now,
//       end: 0,
//       entries: 1
//     }
//     const ftBundle = firstTimeBundle({firstTimeDate: now, firstTimeLaunchDate: now, now}),
//     agregates = isFirstTime
//       ? {
//           ...ftBundle,
//           isVeryFirstSession: true
//         }
//       : isFirstLaunch
//         ? {
//           ...state.agregates,
//           ...ftBundle
//         }
//         : {
//           ...state.agregates,
//           lastRecovery: {
//             started: now,
//             sessionNeverEndedProperly
//           },
//           recoveredSessions: [...(state.agregates.recoveredSessions || [] ), now]
//         }

//     return {
//       ...state,
//       current,
//       agregates,
//     }
//   }
//   const timePasseSinceLastBackgorund = now - state.current.end
//   if(timePasseSinceLastBackgorund < 0 ) {
//     throw 'timePasseSinceLastBackgorund should always be a positive number'
//   }
//   const previousSessionDuration = state.current.end - state.current.start
//   if(previousSessionDuration < 0) {
//     throw 'previousSessionDuration should always be a positive number'
//   }
//   // determin if the continue current sesssion or archive it:
//   const resumedFromLastSession = isSameDay(state.current.start, now)

//   const current = resumedFromLastSession
//   ? {
//       ...state.current,
//       entries: state.current.entries + 1,
//       end: now
//     }
//   : {
//       entries: 0,
//       start: now,
//       end: 0
//     }

//   const agregates = {
//     ...state.agregates,
//     resumedFromLastSession
//   }
//   return {
//     ...state,
//     current,
//     agregates
//   }
// }

// const background = (state: AppState): AppState => {
//   if (state.current.start === 0) {
//     throw 'current sessions start when going to the backgorund must can not be 0'
//   }
//   const now = Date.now()
//   if(state.agregates.isFirstTime && !state.agregates.isFirstLaunch) {
//     throw 'it is impossible that when going to background on the first time but now the first launch'
//   }
//   const isAResumedSession = state.current.entries > 0
//   if(state.current.entries > 0 && state.current.end) {
//     throw 'it is impossible for a session with entries not to have an end date'
//   }

//   const agregates = {
//     ...state,
//     ...firstTimeBundle({
//       firstTimeDate: state.agregates.firstTimeDate,
//       firstTimeLaunchDate: state.agregates.firstTimeLaunchDate,
//       now
//     }),
//     isVeryFirstSession: false,
//   }

//   const timePasseSinceLastForegroud = now - state.current.end
//   if(timePasseSinceLastForegroud < 0 ) {
//     throw 'timePasseSinceLastForegroud should always be a positive number'
//   }
//   const sessionDuration = now - state.current.start
//   if (sessionDuration < 0) {
//     throw 'sessionDuration should always be a positive number'
//   }
//   // determin if the continue current sesssion or archive it:
//   const current = resumedFromLastSession
//   ? {
//       ...current,
//       end: now
//     }
//   : {
//       start: now,
//       end: 0,
//       entries: 0
//   }
//   const agregates = {
//     ...state.agregates,
//     resumedFromLastSession
//   }
//   const sessions = resumedFromLastSession
//     ? state.sessions
//     : [current, ...state.sessions]

//   return {
//     ...state,
//     sessions,
//     current,
//     agregates
//   }
// }

// // need an actions that merges sessions.
// const firstTimeBundle = ({firstTimeDate, firstTimeLaunchDate, now}: {firstTimeDate: number, firstTimeLaunchDate: number, now:number}) => ({
//   isFirstWeek: isSameWeek(firstTimeDate, now),
//   isFirstDay: isSameDay(firstTimeDate, now),
//   isFirstTime: isSameDay(firstTimeDate, now),
//   isFirstLaunch: isSameDay(firstTimeLaunchDate, now),
//   firstTimeDate,
//   firstTimeLaunchDate,
// })

// const firstLaunchEndBundle = (isFirstLaunch: boolean, now: number) => ({
//     isFirstLaunch: false,
//     firstTimeLaunchLength: now - firstTimeDate,
// })
