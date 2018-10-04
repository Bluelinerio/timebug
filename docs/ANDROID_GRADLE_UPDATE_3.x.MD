# Reasoning
Detox did not work with the previous version of gradle in bitrise for unknown reasons

# Caveats
Not sure of the effects it has on native packages.
The `android.enableAapt2=false` flag was needed to make the project run, even though the flag WILL be removed on 2019.
The gradle version and android plugin was bumped without much checking, they should be eventually tested.