import {
  StyleSheet, 
  PixelRatio,
  Platform
} from 'react-native';
import stylesheet                 from "tcomb-form-native/lib/stylesheets/bootstrap";

const LABEL_COLOR = '#000000';
const INPUT_COLOR = '#000000';
const ERROR_COLOR = '#a94442';
const HELP_COLOR = '#999999';
const BORDER_COLOR = '#cccccc';
const DISABLED_COLOR = '#777777';
const DISABLED_BACKGROUND_COLOR = '#eeeeee';
const BACKGROUND_COLOR = '#FAFAFA' //'#FFFFFF';
const FONT_SIZE = 20;
const FONT_WEIGHT = '500';

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
      paddingHorizontal: 16,
      paddingVertical: 20,
      backgroundColor: BACKGROUND_COLOR,
      flex: 1
    },
    normal: { 
      paddingVertical: 20,
      flex: 1
    }
  },
  formLabel: {
    textAlign: 'center',
    fontSize: 26,
    paddingVertical: 20,
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
      paddingHorizontal: 4,
      fontStyle:'italic'
    },
    error: {
      ...stylesheet.helpBlock.normal,
      marginTop:4,
      paddingHorizontal: 4,
      fontStyle:'italic'
    }
  },
  pickerContainer: {
    normal: {
      flexDirection: 'row',
      height: 48,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      padding: 8,
      backgroundColor: BACKGROUND_COLOR,
    },
    error: {
      flexDirection: 'row',
      height: 48,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: ERROR_COLOR,
      padding: 8,
      backgroundColor: BACKGROUND_COLOR,
    },
    open: { }
  },
  pickerLabelStyle: {
    normal: {
      fontSize: 17,
      alignSelf: 'center',
    }
  },
  listAddButton: {
    height: 44,
    padding: 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    flexDirection: 'row',
    alignItems:'center'
  },
  textBox: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 46,
      textAlign: 'left',
    },
    error : {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      height: 46,
      textAlign: 'center'
    }
  },
  textBoxView: {
    normal: {
      ...(Platform.select({
        ios: {

        },
        android: {
          borderBottomColor: INPUT_COLOR,
          borderBottomWidth: 1 / PixelRatio.get(),
        }
      }))
    },
    error: {
      ...(Platform.select({
        ios: {

        },
        android: {
          borderBottomColor: ERROR_COLOR,
          borderBottomWidth: 1 / PixelRatio.get(),
        }
      }))
    }
  }
});