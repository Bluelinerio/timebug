import version from 'react-native-version';
import {
    APP_INSTURUCTION_NOTIFICATION,
    NEXT_STEP_SUGGESTIONS_NOTIFICATION,
    RESUME_WORK_ON_FORM_NOTIFICATION,
    READ_MORE_ABOUT_STEP_NOTIFICATION,
    CHECKIN_PHYSICALLY_NOTIFICATION,
    CHECKIN_EMOTIONALLY_NOTIFICATION,
    CHECKIN_MENTALLY_NOTIFICATION,
    CHECKIN_DAILY_NOTIFICATION,
    CHECKIN_MOOD_NOTIFICATION,
    CHECKIN_MEDITATION_NOTIFICATION,
    CHECKIN_EMOJI_NOTIFICATION
} from '../constants/notifications'
import type { 
    Form,
    Checkin,
    Notification,
    Achievement
} from '../types.js';

version = 'unversioned';


export const createNotifiactionForAchivement = (
    achievement: Achievement, 
    notifications: Array<Notification>
) : Array<Notification> =>  {
    return [];
}

export const createNotificationsForForm = (
    forms: Form,
    notifications: Array<Notification>
) : Array<Notification> =>  {

}
