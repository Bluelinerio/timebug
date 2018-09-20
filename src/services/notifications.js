import PushNotification from 'react-native-push-notification'

class NotificationService {
  static callbacksSet = false

  static init() {
    NotificationService.onRegistration = () => null
    NotificationService.onNotification = () => null
    NotificationService.configure()
  }

  static setCallbacks(onRegistration, onNotification) {
    NotificationService.onRegistration = onRegistration
    NotificationService.onNotification = onNotification
    NotificationService.callbacksSet = true
  }

  static configure(gcm = '') {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: token => NotificationService.onRegister(token), //this._onRegister.bind(this),

      // (required) Called when a remote or local notification is opened or received
      onNotification: notification =>
        NotificationService.onNotification(notification), //this._onNotification,

      // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: gcm,

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       */
      requestPermissions: true
    })
  }

  static localNotification(title, message) {
    const notificationId = PushNotification.localNotification({
      /* Android Only Properties */
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: 'You got a notification pending!', // (optional) default: "message" prop
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      ongoing: false, // (optional) set whether this is an "ongoing" notification

      /* iOS only properties */
      alertAction: 'view', // (optional) default: view
      category: null, // (optional) default: null
      userInfo: null, // (optional) default: null (object containing additional notification data)

      /* iOS and Android properties */
      title, // (optional)
      message, // (required)
      playSound: false, // (optional) default: true
      soundName: 'default' // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    })

    return notificationId
  }

  static scheduleNotification(msg, title, time, id, repeatTime) {
    PushNotification.localNotificationSchedule({
      repeatType: 'time',
      repeatTime,
      id,
      date: new Date(time),
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_launcher', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      subText: 'You got a checkin pending!', // (optional) default: none
      // color: 'blue', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 1000, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      // tag: 'some_tag', // (optional) add tag to message
      // group: 'group', // (optional) add group to message
      ongoing: false, // (optional) set whether this is an "ongoing" notification

      /* iOS only properties */
      alertAction: 'view', // (optional) default: view
      category: null, // (optional) default: null
      userInfo: null, // (optional) default: null (object containing additional notification data)

      /* iOS and Android properties */
      title, // (optional)
      message: msg, // (required)
      playSound: true, // (optional) default: true
      soundName: 'default' // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    })
    return id
  }

  static checkPermission(cbk) {
    return PushNotification.checkPermissions(cbk)
  }

  static cancelNotif(id) {
    PushNotification.cancelLocalNotifications({ id })
  }

  static cancelAll() {
    PushNotification.cancelAllLocalNotifications()
  }
}

NotificationService.init()

export default NotificationService
