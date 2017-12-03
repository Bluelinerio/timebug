# 2020

### Supported versions:
iOS >= 8, Android >= 4.4

## How to run:
* `git clone`
* `yarn`
* `react-native link`


### iOS 

* open `ios/2020.xcodeproj` in XCode and press START button, or run `react-native run-ios`, only do this after setting up config.json as DEVELOP
* Run commodity command `yarn run:ios`, this will copy the env and run ios directly

### Android 

1. 
* Install 'Android Studio' as explained [here](https://facebook.github.io/react-native/docs/getting-started.html)
    For mac:
    * ```brew install node & brew install watchman```
    * ```npm install -g react-native-cli```
    * get java ```http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html```
    * install [Android Studio](https://developer.android.com/studio/index.html) 
        * Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:
            * Android SDK
            * Android SDK Platform
            * Performance (Intel ® HAXM)
            * Android Virtual Device
    * Launch Android Studio and open the project that is in the /android folder.
    * Follow the recommended installation, **Ignore** upgrading gradle to a higher version.
        * Building a React Native app with native code, however, requires the Android 6.0 (Marshmallow) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.
        Then, click "Next" to install all of these components.
    * Edit your bash prpfile ```$HOME/.bash_profile``` (mine is ```$HOME/.zshrc```) to load the config into your current shell. Verify that ANDROID_HOME has been added to your path by running echo $PATH:
        * ```export ANDROID_HOME=~/Library/Android/sdk``
        * ```export PATH="$HOME/Library/Android/sdk/platform-tools":$PATH```
    * Create a new device if there is none, from the tools -> Android -> ADB Manager
2.
* run `react-native run-android`, only do this after setting up config.json
* run `yarn run:android` as this will set up config.json and run android machine

### Tests
Regarding tests, in general all you need to do is have an available machine, register it's name in package.json, set up configuration to test (config.json as TEST with TESTUSERID),  run js server for RN, and then run detox related commands.


## How to test on IOS:
* [install requirements for detox](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md)

* `yarn start` in one tab of terminal
* `yarn test-e2e` in another tab
* There are new commands for this (untested yet for IOS) `yarn test:ios` should do everything that's needed

`yarn test:ios` copies the configuration for the testing suite, builds the application and runs detox tests against it using the default config indicated in package.json

## How to test on Android:
*Fullfill all requirements for detox mentioned above + the ones indicated specifically for android [here](https://github.com/wix/detox/blob/master/docs/Introduction.Android.md)
    - NOTE: Detox is not fully supporting android yet, but it has enough support to run as is, in order to run, a few hard changes had to be made to android gradle files and project files, these changes have to be watched for future use, specially if we upgrade RN version, please follow the link above.

In order to run detox you have to run a few commands (does not work on windows unless you modify detox/scripts code):
* `yarn start` in one tab of terminal, this is RN server.
* `cp config.test.example.json config.json`
* `detox test -c android.emu.debug`
* On a last note, you can also just run `yarn test:android` after `yarn start` this will copy test config + run detox test suite (no build)

If you have a different device, other than the nexus 5, you can select any emulated device you have running, just add it's name in package.json
To find the name use
* `emulator -list-avds`

On a final note, detox does NOT support physical devices, and it's on a shaky support of genymotion emulator.

## Write your own tests
#Detox e2e
    In order to write your own tests for detox you should:
        - Give the native component ( or components ) to be tested a prop named testID, which is a string preferrably on underscore_lowercase, this testID helps matching the component inside a test. For other ways to match components see [this link](https://github.com/wix/detox/blob/master/docs/APIRef.Matchers.md)
            -Please note it only works on native components
        - If it's a new Screen or a unique kind of functionality, add a new .spec.js file to the __e2e__ directory, otherwise just add it to the spec it corresponds
        - Create a new expectation by calling it with a name and it's async handler
        - Add to this expectation, all the code required to REACH the Screen that holds your test, since every test starts from login
            - To help on this matter, most specs have a "Should Leave x Screen" that handles all the code to transition to a specific spot in the app.
        - Add the expectations that are required for your functionality to work
        -Run the test suite completely to check that nothing is broken.

On a side note please take into consideration that detox the objective of simulating human interaction, so the tests will be tightly coupled with what is "on the screen" so any changes to any part of the code might break the tests, please change the test accordingly

## Once server deployment changes
* Clear cache and Data for the app (Android)
* I believe this should work as well on ios
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

Grammar mistakes:

- Emotion instead of emotions at the last form in step 1
- All initials uppercased at the title of step 2
- Life catego- ries at step 2 description
- Talking t oabout your goals and ... description step 4