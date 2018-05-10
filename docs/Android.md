
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
