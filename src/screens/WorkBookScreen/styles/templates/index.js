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

export default StyleSheet.create({
  customListAddButton: {
    width: 24,
    height: 24,
    padding: 3,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  formsTextBoxNormal: {
    color: INPUT_COLOR,
    fontSize: FONT_SIZE,
    height: 46,
    textAlign: 'center'
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