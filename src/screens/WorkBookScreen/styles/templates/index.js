import { StyleSheet, PixelRatio } from 'react-native';
import stylesheet                 from "tcomb-form-native/lib/stylesheets/bootstrap";

const LABEL_COLOR = '#000000';
const INPUT_COLOR = '#000000';
const ERROR_COLOR = '#a94442';
const HELP_COLOR = '#999999';
const BORDER_COLOR = '#cccccc';
const DISABLED_COLOR = '#777777';
const DISABLED_BACKGROUND_COLOR = '#eeeeee';
const BACKGROUND_COLOR = '#FFFFFF';
const FONT_SIZE = 20;
const FONT_WEIGHT = '500';

//#E6E5ED

export default Object.freeze({
  ...stylesheet,
  formLabel: {
    textAlign: 'center',
    fontSize: 26,
    paddingVertical: 20,
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
      borderBottomColor: INPUT_COLOR,
      borderBottomWidth: 1 / PixelRatio.get(),
    },
    error: {
      borderBottomColor: ERROR_COLOR,
      borderBottomWidth: 1 / PixelRatio.get(),
    }
  }
});
 Object.freeze({
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
      borderBottomColor: INPUT_COLOR,
      borderBottomWidth: 1 / PixelRatio.get(),
    },
    error: {
      borderBottomColor: ERROR_COLOR,
      borderBottomWidth: 1 / PixelRatio.get(),
    }
  }
})