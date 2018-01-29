Code Push Settings:

Code push installed using multi deployment testing 
- more info: [android](https://github.com/Microsoft/react-native-code-push/blob/master/docs/multi-deployment-testing-android.md)
- more info [ios](https://github.com/Microsoft/react-native-code-push/blob/master/docs/multi-deployment-testing-ios.md)

Reviewing versions:
- On Appcenter app, there's [Lifevision iOS](https://appcenter.ms/users/amosel/apps/Lifevision/distribute/code-push) and [Lifevisoin Android](https://appcenter.ms/users/amosel/apps/Lifevision-1/distribute/code-push)

Updating Versions:
- To push to a new version 
  - iOS
    - `code-push release-react Lifevision iOS -d Production`
    - `code-push release-react Lifevision iOS -d Staging`
  - Android
    - `code-push release-react Lifevision-1 Android -d Production`
    - `code-push release-react Lifevision-1 Android -d Staging`

Deploying Stagins:
- on iOS there is an issue where with XCode, Staging doesn't compile and this has to do with the build configuration. Most likely something that has to do with directories of the intermediate builds. Something Needs to be updated with the Staging build configuratio for it to work.
- on Android, the only thing I've got right now is [this](https://www.codelink.io/2016/10/25/multiple-android-build-types-react-native.html)


Links:
- [Github Repo](https://github.com/Microsoft/react-native-code-push)
- Since we are 
