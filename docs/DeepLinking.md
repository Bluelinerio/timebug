Where do the deep link urls live?
----

- In JS Side it is in src/constants/index.js
- In Android: it is the last intent-filter in the `.MainActivity` activity tag on AndroidManifest located in /android/app/src/main/AndroidManifest.xml.
- In iOS it in on ios/Lifevision/Info.plist inside `URL Types` (first one is our facebook URL) second one is the primary. ('lifevision' right now).

iOS
-----
Setting up Universal Links and associated Domains: [more info here](https://developer.apple.com/library/content/documentation/General/Conceptual/AppSearch/UniversalLinks.html)

- Have a Signed `apple-app-site-association` JSON file.(Don’t append .json to the `apple-app-site-association` filename.)
```
{
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID": "9JA89QQLNQ.com.timebug.lifevisionApp",
                "paths": [ "*" ]
            }
        ]
    }
}
```
- Upload the `apple-app-site-association` file to your HTTPS web server. Place the file at the root of your server or in the .well-known subdirectory


Links
----
- App Landing Pages examples: https://mayvendev.com/blog/best-mobile-app-landing-pages
- Generators: 
  - https://appsite.skygear.io  
  - https://landerapp.com
  - http://www.applandr.com
- Apple Universal Links: 
  - https://docs.branch.io/pages/deep-linking/universal-links/
  - https://blog.branch.io/how-to-setup-universal-links-to-deep-link-on-apple-ios/
- Validator: https://branch.io/resources/aasa-validator/
- Apple Video about it: https://developer.apple.com/videos/play/wwdc2015/509/
- Android setup: https://blog.branch.io/how-to-set-up-android-m-6-0-marshmallow-app-links-with-deep-linking/