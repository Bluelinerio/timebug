# 2020

### Supported versions:
iOS >= 8, Android >= 4.4

## How to run:
### iOS 
* `yarn`
* open `ios/2020.xcodeproj` in XCode and press START button, or run `yarn run:ios`, only do this after setting up config.json as DEVELOP
* Run commodity command `yarn run:ios`, this will copy the env and run ios directly

### Android 
* `yarn`
* run `react-native run-android`, only do this after setting up config.json
* run `yarn run:android` as this will set up config.json and run android machine

### Versioning:

## Native Versioning:
- `npm version X.X.X` (using [react-native-version](https://www.npmjs.com/package/react-native-version))

## JS Version and Codepush
- code-push is used to identify JS version rolled out version of js. 
- Pushing a new version `yarn codepush:production` or `yarn codepush:production`
- Codepush JS versions are distributed to apps with matching native version. If the current native version is 1.5.0, pushing a code push will only distribute to apps with that native version. Apps with different native version will not be affected.
- In order to hotfix or other wise modify js code of previous native version: 
    1. go back to that tag/SHA, 
    2. create a branch like `v1.4.0-hotfix-1` 
    3. Make changes and push to repo
    4. Push to production.


## Store Submission
## Issues
- Android android.permission.READ_PHONE_STATE althouth not states: the Faecbook SDK is coming with a bunch of permissions that aren't really necessary. When the app comes with this one the Play Store demands (of course...) that the app will come with a privacy policy. 
    - To review manifest go see android/app/build/outputs/logs/manifest-merger-release-report.txt
    - To remove add the `xmlns:tools="http://schemas.android.com/tools"` to the AndroidManifest.xml and add `<uses-permission android:name="android.permission.READ_PHONE_STATE" tools:node="remove" />`

Andorid: Remove android.permission.READ_PHONE_STATE which comes with facebook.

## Once server deployment changes
* Clear cache and Data for the app (Android)
* This should work as well on ios
This is to clear the store that currently holds your key, and skips login, whereas on a new deployment your key is not registered.
This should be set up as a new issue
## How to deploy (Android):
 react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
 Android Studio > Build > Generate Signed APK
##### Hash key generation for facebook
 keytool -exportcert -alias key0 -keystore /Users/burya4ok/work/androidKEY.jks | openssl sha1 -binary | openssl base64
  

## How to deploy (iOS):
 * open XCode and run Product > Archive
 * Validate app with certificates
 * Upload to iTunes Connect
 
## issues 

---- 
`error: FBSDKShareKit/FBSDKShareKit.h file not found`

This is generally a result of an incorrectly configured repository with regards to the location of FBSDK dependencies.

If you take a look at: https://github.com/facebook/react-native-fbsdk/blob/master/ios/RCTFBSDK.xcodeproj/project.pbxproj

You will notice that RCTFBSDK will look for dependencies in one of two locations:

- `~/Documents/FacebookSDK`
- `$(PROJECT_DIR)/../../../ios/Frameworks`

The second option is the correct option for continuous integration systems like buddybuild.

---- 

----

`symbolicate json.parse error EPIPE on Windows`
```
    Replace on react-native/packager/src/Server/symbolicate/symbolicate.js
    
    const socket = xpipe.eq(temp.path(affixes));

    with:


    const socket = process.platform === 'win32'
      ? 34712
      : xpipe.eq(temp.path(affixes));

```
----

react-native-svg:
----
 Added and linked. Upped 

``` diff
diff --git a/android/app/build.gradle b/android/app/build.gradle
index 5720c4b..032bc9f 100755
--- a/android/app/build.gradle
+++ b/android/app/build.gradle
@@ -83,13 +83,13 @@ def enableSeparateBuildPerCPUArchitecture = false def enableProguardInReleaseBuilds = false
 android {
-    compileSdkVersion 23
+    compileSdkVersion 27
     buildToolsVersion "23.0.1"
 
     defaultConfig {
         applicationId "io.timebug.lifevision"
         minSdkVersion 19
-        targetSdkVersion 19
+        targetSdkVersion 27
         versionCode 21
```