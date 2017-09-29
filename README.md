#2020
For iOS and macOS

##How to run:
* `git clone`
* `yarn`
* to run for iOS open `ios/book2020.xcodeproj` in XCode and press START button

##How to test:
* [install requirements for detox](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md)
* `yarn start` in one tab of terminal
* `yarn test-e2e` in another tab


##How to build (Android):
 react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
 Android Studio > Build > Generate Signed APK
 
 
 ##Hash key generation
/Users/burya4ok/work/androidKEY.jks key0
keytool -exportcert -alias key0 -keystore /Users/burya4ok/work/androidKEY.jks | openssl sha1 -binary | openssl base64
 