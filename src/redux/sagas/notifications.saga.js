import { put, all, call, take, select, actionChannel } from 'redux-saga/effects'
import selectors from '../selectors';
import {
  createNotifiactionForAchivement,
  createNotificationsForForm,
  createNotificationsForCheckin,
  mergeNotifications,
} from '../../Notifications'
import type {
  Notification,
  Form,
  Checkin
} from '../../types.js'

function* createNotification(): Array<Notification> {
  const user = yield select(selectors.user);

  if(!user) return []

  const { forms, checkins, achivements, notifications } = user;

  [formNotifications, checkingNotifications, achivementsNotifications] = yield all([
    call(createNotifiactionForAchivement, achivements),
    call(createNotificationsForForm, forms),
    call(createNotificationsForCheckin, checkins)
  ])
}

export default function * watchChagnedInUserFormAndCheckingAndUpdateNotifications() {
  const requestChan = yield actionChannel([GET_USER.SUCCEEDED, UPDATE_USER]);
  while (true) {
    yield take(requestChan);

    const number = Math.random();
    const user = yield select(selectors.user);
    const payload = nextRequiredUpdateForUser(user);
    if (payload.createAchievement) {
      const userId = user.id;
      const { tagName } = payload.createAchievement;
      const res = yield call(createAchievement, {
        tagName,
        userId
      });
      if (res.user) {
        // an FYI put:
        yield put({ type: CREATE_ACHIEVEMENT, payload });
        yield putResolve(updateUser(res.user));
      } else {
        //fail silently
      }
    } else if (payload.deleteAchievement) {
      const { achievementId } = payload.deleteAchievement;
      const res = yield call(deleteAchievement, achievementId);
      if (res.id) {
        yield putResolve(
          updateUser({
            achievements: user.achievements.filter(a => a.id !== res.id)
          })
        );
      } else {
        //fail silently
      }
    }
  }
}