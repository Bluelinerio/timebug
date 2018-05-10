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
