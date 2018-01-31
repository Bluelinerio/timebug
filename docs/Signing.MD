Android
----
Keystore for release locates in `android/app/lifevision-release-key.keystore`
alias: `lifevision-key-alias`

Andoird Facebook Hash
---
- To generate a Facebook Hash: 
- `cd android/app`
- `keytool -exportcert -alias lifevision-key-alias -keystore lifevision-release-key.keystore | openssl sha1 -binary | openssl base64`
- 'NfpVvVghSzC4euzetmrKj6XWnno='
Andoird Facebook Hash