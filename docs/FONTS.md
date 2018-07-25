Adding new fonts to the app, that can be used both by android and IOS is a relatively complicated procedure

The following guide was used: https://blog.bam.tech/developper-news/add-a-custom-font-to-your-react-native-app

# Common
    - Download the font
    - Extract it to assets folder
    - Make sure it's referenced by rnpm
    - Run `react-native link`

# Android

## How to add font
 - Open `android/app/src/main/assets/font`
    - if the font zip added more than one file (Like, Metropolis-Regular/Italic/bold), rename the, following these rules
        - The prefix must match the font file name.
        - The suffix follows `snake_case`
        - Add white spaces if the prefix has more than one word
        - Also:
            - Rename `<Font>-Regular` to `<Font>` including it's italic
### Example
`Metropolis-Regular.otf` -> `Metropolis.otf`
`Metropolis-RegularItalic.otf` -> `Metropolis_italic.otf`
`Metropolis-BoldItalic.otf` -> `Metropolis_bold_italic.otf`

## Limitations

- The fontFamily property must match the font name used in your font files.
- Only bold fontWeight is usable, any other font weights must be numeric or the fontFamily must be changed to the corresponding font

# IOS
- React native link should do most of the job, adding the fonts to .plist
- The font name in the font files must be in PascalCase while the font Family property in js code must be Spaced Case.
- You can then use the fontWeight values specified in React Native's Text component documentation.

# How to use
```
.
.
.
style : {
    fontFamily: 'Metropolis',
    fontWeight: '500'
}
```