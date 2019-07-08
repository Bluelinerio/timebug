Once an error happens saying something along the lines of `release keystore not set`

Make sure that you fill the following property names inside gradle.properties (HOWEVER DO NOT COMMIT THEM, THE FILE IS PUBLIC)

```
RELEASE_STORE_FILE= <someFile>.keystore //The keystore file name that is on android/app
RELEASE_KEY_ALIAS=<some-alias> // the alias
RELEASE_STORE_PASSWORD==<some-pass> // password for the store
RELEASE_KEY_PASSWORD=<some-other-pass> //pass for that key
```
