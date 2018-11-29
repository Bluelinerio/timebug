import { Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const BUTTON_WIDTH = Dimensions.get('window').width * 0.25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pickerview: {
    width: SCREEN_WIDTH,
  },
  modal: {
    width: SCREEN_WIDTH,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonview: {
    width: SCREEN_WIDTH,
    padding: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: 'lightgrey',
  },
  picker_bottom: {
    width: SCREEN_WIDTH,
  },
  keyboardButtonText: {
    width: BUTTON_WIDTH,
  },
});

export default styles;
