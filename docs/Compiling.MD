Compiling
------

Compiling the native code for iOS and Android has it's own bag of issues and particularity. You need to understnad and know how to work with native compilation of Java, Gradle and maven for Android and with XCode, Objective C, cocoapods for iOS.

Release Checklist:

- Upgrade to react-native 0.53
  - iOS Error: 
    - `react-native-vector-icons/MaterialIcons`, the Haste package `react-native-vector-icons` was found`
    - Resolution: `./node_modules/react-native/local-cli/core/__fixtures__/files/package.json`
    - Source: https://github.com/oblador/react-native-vector-icons/issues/626