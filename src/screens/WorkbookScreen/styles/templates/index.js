import { StyleSheet, PixelRatio, Platform } from 'react-native';
import stylesheet from 'tcomb-form-native/lib/stylesheets/bootstrap';

export const LABEL_COLOR = '#000000';
export const INPUT_COLOR = '#000000';
export const ERROR_COLOR = '#a94442';
export const HELP_COLOR = '#999999';
export const BORDER_COLOR = '#cccccc';
export const DISABLED_COLOR = '#777777';
export const DISABLED_BACKGROUND_COLOR = '#eeeeee';
export const BACKGROUND_COLOR = '#FAFAFA'; //'#FFFFFF';
export const FONT_SIZE = 18;
export const FONT_WEIGHT = '500';

const borderRadius = 4
const borderWidth = 1
const height = 44
const paddingHorizontal = 16
const innerPaddingHorizontal = 4
const innerPaddingVertical = 2
const paddingVertical = 20

//#E6E5ED
// from  https://material.io/guidelines/components/text-fields.html#text-fields-layout
// Resting label text
// Top padding: 16dp
// Bottom padding: 8dp
// alt-text
// Floating label text
// Top padding above label: 16dp
// Bottom padding below label: 8dp
// Bottom padding below input: 8dp

export default Object.freeze({
  ...stylesheet,
  fieldset: {
    topLevel: {
      paddingHorizontal,
      paddingVertical,
      backgroundColor: BACKGROUND_COLOR,
      flex: 1
    },
    normal: {
      paddingVertical,
      flex: 1
    }
  },
  formGroup: {
    normal: {
      marginBottom: 10
    },
    error: {
      marginBottom: 10
    }
  },
  formGroupStyle: {
    normal: {
      flex: 1,
      marginTop: 22,
      marginBottom: 22
    },
    error:  {
      flex: 1,
      marginTop: 22,
      marginBottom: 22
    }
  },
  formLabel: {
    textAlign: 'left',
    fontSize: 22,
    paddingVertical,
    fontWeight: '700'
  },
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    },
    // the style applied when a validation error occours
    error: {
      color: LABEL_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    }
  },
  helpBlock: {
    normal: {
      ...stylesheet.helpBlock.normal,
      marginTop: 4,
      paddingHorizontal: innerPaddingHorizontal,
      fontStyle: 'italic'
    },
    error: {
      ...stylesheet.helpBlock.normal,
      marginTop: 4,
      paddingHorizontal: innerPaddingHorizontal,
      fontStyle: 'italic'
    }
  },
  pickerContainer: {
    base: {
      borderColor: BORDER_COLOR,
      borderWidth: borderWidth,
      borderRadius,
      paddingHorizontal: innerPaddingHorizontal,
      paddingVertical: innerPaddingVertical
    },
    normal: {
      flexDirection: 'row',
      height,
      borderWidth,
      borderRadius,
      borderColor: BORDER_COLOR,
      padding: 8,
      backgroundColor: 'transparent',
    },
    error: {
      flexDirection: 'row',
      height,
      borderWidth,
      borderRadius,
      borderColor: ERROR_COLOR,
      padding: 8,
      backgroundColor: 'transparent'
    },
    open: {}
  },
  pickerLabelStyle: {
    normal: {
      fontSize: 17,
      alignSelf: 'center'
    }
  },
  listAddButton: {
    height,
    padding: 3,
    borderRadius,
    borderWidth,
    borderColor: BORDER_COLOR,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textBox: {
    normal: {
      color: INPUT_COLOR,
      fontSize: 16,
      height,
      textAlign: 'left',
      paddingHorizontal: innerPaddingHorizontal,
    },
    error: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height,
      textAlign: 'left',
      paddingHorizontal: innerPaddingHorizontal,
    }
  },
  textBoxView: {
    base: {
      ...Platform.select({
        ios: {},
        android:{
          borderColor: BORDER_COLOR,
          borderWidth: borderWidth,
          paddingHorizontal: innerPaddingHorizontal,
          borderRadius,
          paddingVertical: innerPaddingVertical
        }
      })
    },
    normal: {
      ...Platform.select({
        ios: {
          borderRadius,
          borderWidth,
          borderColor: BORDER_COLOR,
          paddingVertical: borderRadius,
          paddingHorizontal: innerPaddingHorizontal,
          justifyContent: 'flex-end'
        },
        android: {
          borderBottomColor: INPUT_COLOR,
          borderBottomWidth: 1 / PixelRatio.get()
        }
      })
    },
    error: {
      ...Platform.select({
        ios: {
          borderRadius,
          borderWidth,
          borderColor: ERROR_COLOR,
          paddingVertical: borderRadius,
          paddingHorizontal: innerPaddingHorizontal,
          justifyContent: 'flex-end'
        },
        android: {
          borderBottomColor: INPUT_COLOR,
          borderBottomWidth: 1 / PixelRatio.get()
        }
      })
    },
  }
});
