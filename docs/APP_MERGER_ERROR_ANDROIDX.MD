If an error that goes along the lines of `Manifest merger failed` and mentions androidx and appcompat, it means that one or more packages are using androidx, while one or more packages are using appcompat, which are 2 mutually exclusive packages.

The solution is to fully migrate to androidx

Android studio versions beyond 3.2 offer this functionality inside the `refactor -> migrate to androidx` menu option

Anything under needs to be migrated manually, use the following link to know which package of app compat corresponds to which package of androidx [here](https://developer.android.com/jetpack/androidx/migrate)