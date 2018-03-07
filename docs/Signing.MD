Android
----

[read throught this](https://facebook.github.io/react-native/docs/signed-apk-android.html)

Set the Varialbes:
- `android/gradle.properties`
- `android/app/build.gradle` 
  - `buildTypes { releaseStaging { ... }  release { ... } }`
  - `signingConfigs { releaseStaging { ... }  release { ... } }`

Keystore Files:
Release:
Keystore File: `android/app/lifevision-release-key.keystore`
Release Staging:
Keystore: `android/app/lifevision-release-staging-key.keystore`

Facebook Hash
---
Current Has:
- 'NfpVvVghSzC4euzetmrKj6XWnno='
- To generate a Facebook Hash, you need to keystore file: `cd android/app & keytool -exportcert -alias lifevision-release-key.keystore -keystore lifevision-release-key.keystore | openssl sha1 -binary | openssl base64`
