Issues
------

- Upgrade to react-native 0.53
  - iOS Error: 
    - `react-native-vector-icons/MaterialIcons`, the Haste package `react-native-vector-icons` was found`
    - Resolution: `rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json`
    - Source: https://github.com/oblador/react-native-vector-icons/issues/626
- Upper/lower case and git:
  - By default git ignore cases. So whenever rename of a file or folder changes a letters case, git will ignore it unless in the commit, unless `core.ignorecase` propery locally or globally in your system) is set to `false`. Run `git config core.ignorecase false` and make sure you correct this issue locally if your local versio was updated before you made the change.
    - More info:
      - https://git-scm.com/docs/git-config
      - https://stackoverflow.com/questions/3011625/git-mv-and-only-change-case-of-directory
      - https://stackoverflow.com/questions/10523849/changing-capitalization-of-filenames-in-git/16071375

- Redux-Persist on Android when reloading doesn't rehydrates. [link](https://github.com/rt2zz/redux-persist/issues/102)


Compiling
--------
Compiling the native code for iOS and Android has it's own bag of issues and particularity. You need to understnad and know how to work with native compilation of Java, Gradle and maven for Android and with XCode, Objective C, cocoapods for iOS.

Release Checklist:
