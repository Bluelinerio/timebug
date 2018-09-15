# Error
```
> Task :react-native-push-notification:compileDebugJavaWithJavac FAILED
E:\AndroidNotify\node_modules\react-native-push-notification\android\src\main\java\com\dieam\reactnativepushnotification\modules\RNPushNotificationHelper.java:7: error: cannot find symbol
import android.app.NotificationChannel;
                  ^
  symbol:   class NotificationChannel
  location: package android.app
E:\AndroidNotify\node_modules\react-native-push-notification\android\src\main\java\com\dieam\reactnativepushnotification\modules\RNPushNotificationHelper.java:480: error: cannot find symbol
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O)
                                                       ^
  symbol:   variable O
  location: class VERSION_CODES
E:\AndroidNotify\node_modules\react-native-push-notification\android\src\main\java\com\dieam\reactnativepushnotification\modules\RNPushNotificationHelper.java:488: error: cannot find symbol
        int importance = NotificationManager.IMPORTANCE_DEFAULT;
                                            ^
  symbol:   variable IMPORTANCE_DEFAULT
  location: class NotificationManager
E:\AndroidNotify\node_modules\react-native-push-notification\android\src\main\java\com\dieam\reactnativepushnotification\modules\RNPushNotificationHelper.java:489: error: cannot find symbol
        NotificationChannel channel = new NotificationChannel(NOTIFICATION_CHANNEL_ID, name, importance);
        ^
  symbol:   class NotificationChannel
  location: class RNPushNotificationHelper
E:\AndroidNotify\node_modules\react-native-push-notification\android\src\main\java\com\dieam\reactnativepushnotification\modules\RNPushNotificationHelper.java:489: error: cannot find symbol
        NotificationChannel channel = new NotificationChannel(NOTIFICATION_CHANNEL_ID, name, importance);
                                          ^
  symbol:   class NotificationChannel
  location: class RNPushNotificationHelper
```

[As read here](https://stackoverflow.com/questions/51682448/react-native-push-notification-can-not-build-in-android)

# Fix
On `node_modules/react-native-push-notifications/android/build.gradle` replace

```
def DEFAULT_COMPILE_SDK_VERSION = 23
def DEFAULT_BUILD_TOOLS_VERSION = "23.0.1"
def DEFAULT_TARGET_SDK_VERSION = 23
def DEFAULT_SUPPORT_LIB_VERSION = "23.1.1"
def DEFAULT_GOOGLE_PLAY_SERVICES_VERSION = "+"
def DEFAULT_FIREBASE_MESSAGING_VERSION = "+"
```

With

```
def DEFAULT_COMPILE_SDK_VERSION = 27
def DEFAULT_BUILD_TOOLS_VERSION = "23.0.1"
def DEFAULT_TARGET_SDK_VERSION = 27
def DEFAULT_SUPPORT_LIB_VERSION = "23.0.1"
def DEFAULT_GOOGLE_PLAY_SERVICES_VERSION = "+"
def DEFAULT_FIREBASE_MESSAGING_VERSION = "+"
```