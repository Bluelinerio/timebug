# About this file

This file will be used to leave `TODO`s to be done at a later date or on a different OS than android as a reference to not forget them


# 06/09/19

### react-native-config IOS

To finish the package setup `https://github.com/luggit/react-native-config`

```
Go to your project -> Build Settings -> All
Search for "preprocess"
Set Preprocess Info.plist File to Yes
Set Info.plist Preprocessor Prefix File to ${BUILD_DIR}/GeneratedInfoPlistDotEnv.h
Set Info.plist Other Preprocessor Flags to -traditional
If you don't see those settings, verify that "All" is selected at the top (instead of "Basic")
```

### PROGUARD
Check every package for their proguard config, since it may screw up releases

# 10/19/19
## UPDATE TO 0.61
- Followed [This diff](https://react-native-community.github.io/upgrade-helper/?from=0.59.8&to=0.61.2)
- Updated `react-native-video` package
- Updated `react-native-code-push`
- Updated `react-native-fbsdk`
- Removed mCallbackManager param from FBSDK constructor
- Updated `react-native-gesture-handler`
- Updated `react-navigation` to v3
- Added `react-native-reanimated`