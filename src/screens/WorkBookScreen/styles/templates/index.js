import { StyleSheet, PixelRatio } from 'react-native';

const LABEL_COLOR = '#000000';
const INPUT_COLOR = '#000000';
const ERROR_COLOR = '#a94442';
const HELP_COLOR = '#999999';
const BORDER_COLOR = '#cccccc';
const DISABLED_COLOR = '#777777';
const DISABLED_BACKGROUND_COLOR = '#eeeeee';
const FONT_SIZE = 20;
const FONT_WEIGHT = '500';

//#E6E5ED

export default StyleSheet.create({
  customListAddButton: {
    height: 44,
    padding: 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems:'center'
  },
  formsTextBoxNormal: {
    color: INPUT_COLOR,
    fontSize: FONT_SIZE,
    height: 46,
    textAlign: 'left',
  },
  formsTextBoxError: {
    color: ERROR_COLOR,
    fontSize: FONT_SIZE,
    height: 46,
    textAlign: 'center'
  },
  formsTextBoxView: {
    borderBottomColor: INPUT_COLOR,
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  formsTextBoxViewError: {
    borderBottomColor: ERROR_COLOR,
    borderBottomWidth: 1 / PixelRatio.get(),
  },
})