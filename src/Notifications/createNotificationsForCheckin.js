import version from 'react-native-version';
import {
    CHECKIN_PHYSICALLY,
    CHECKIN_EMOTIONALLY,
    CHECKIN_MENTALLY,
    CHECKIN_DAILY,
    CHECKIN_MOOD
} from '../constants/notifications'
import type { 
    Checkin,
    Notification,
} from '../types.js';

// Checkins: 
const checkinKinds = [
    CHECKIN_PHYSICALLY,
    CHECKIN_EMOTIONALLY,
    CHECKIN_MENTALLY,
    CHECKIN_DAILY,
    CHECKIN_MOOD
]

version = 'unversioned';
// codePush.getUpdateMetadata().then((metadata) =>{
//     this.setState({label: metadata.label, version: metadata.appVersion, description: metadata.description});
//   });

const isNotificationAssociatedWithCheckin = (checkin: Checkin) => (notification: Notification) => notification.name === checkin.name && notification.data.checkinId === checkin.id;
const isValidCheckin = (checkin: Checkin) => checkinKinds.contains(checkin.name) && typeof checkin.id === 'string'
const updateNotificationWithCheckin = (checkin :Checkin, notification: Notification) :Checkin => ({
    ...checkin,
    updatedAt: Date.now()
});

const createNotificationWithCheckin = (checkin :Checkin): Notification => ({
    name: checkin.name,
    eventDate: checkin.eventDate,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    version,
    data: {
        checkinId: checkin.id,
        ...checkin.data
    }
})
  
export const createNotificationsForCheckin = (
    checkin :Checkin, 
    notifications: Array<Notification>
): Array<Notification> => 
{
    if(!isValidCheckin(checkin)) return []
    const exists = notifications.find(isNotificationAssociatedWithCheckin(checkin))
    if(exists) {
        return [updateNotificationWithCheckin(checkin)]
    } else {
        return [createNotificationWithCheckin(checkin)]
    }
}

// export type Notification = {
//     +name: NotificationName,
//     +createdAt: string,
//     +updatedAt: string,
//     +eventDate: string,
//     +version: string,
//     +data: any
//   }
// notifications array are converted to hash map with the timestamp of the 'eventDate'
// notification.data is tied to record id:
// Checkins: 
