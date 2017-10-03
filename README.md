#2020

###Supported versions:
iOS >= 8, Android >= 4.4

##How to run:
* `git clone`
* `yarn`
* `react-native link`
* to run for iOS open `ios/book2020.xcodeproj` in XCode and press START button
* to run for Android run `react-native start`, open emulator and run `react-native run-android`

##How to test:
* [install requirements for detox](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md)
* `yarn start` in one tab of terminal
* `yarn test-e2e` in another tab


##How to deploy (Android):
 react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
 Android Studio > Build > Generate Signed APK
#####Hash key generation for facebook
 keytool -exportcert -alias key0 -keystore /Users/burya4ok/work/androidKEY.jks | openssl sha1 -binary | openssl base64
  

##How to deploy (iOS):
 * open XCode and run Product > Archive
 * Validate app with certificates
 * Upload to iTunes Connect
 
 
