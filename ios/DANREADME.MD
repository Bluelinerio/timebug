# TODO FIREBASE

- Edit the firebase app with the correct storeId
- This is the bad part. Firebase uses cocoapods, now I don't think we've EVER used pods for the project so this is a first. please confirm since I've never used pods before
- This is the root explanation for pods [here](https://cocoapods.org/).
- This is what firebase says to do:
  - `$ pod init`
  - `$ pod 'Firebase/Core'`
  - `pod install`
- I had to add the following code, please review `AppDelegate.m` to see if it was well done:

```
@import UIKit;
@import Firebase;

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [FIRApp configure];
  return YES;
}
```

- Afterwards we just have to test something with the console, once you are sure that it's all okay let me know to proceed.

# TODO RNFIREBASE
Do not do this until Firebase is up

- Follow this [here](https://rnfirebase.io/docs/v5.x.x/installation/ios) This is the root setup of Firebase alongside the setup of RNFirebase
- Add to podfile `pod 'Firebase/Core', '~> 6.3.0'`. I have doubts bout this one instruction
- Note that RNfirebase is already linked
- Then follow this guide [here](https://rnfirebase.io/docs/v5.x.x/messaging/ios) to set up messaging

# TODO MOE
Do all of those before this.

- This one is particularly difficult, but I recommend following the docs for moe 
- First Follow the React Native integration, then try the native IOS integration
- Read carefully, it's difficult, support is particularly helpful. [Here is the native integration](https://docs.moengage.com/docs/ios-integration). On the menu to the left you can find the RN one.
- Moe is already linked, do not change the android integration if possible