import theme from 'react-native-theme';
import './templates';

theme.add({
  workBookFormContainer: {
    flex: 1,
  },
  workBookNextButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  workBookNextButton: {
    flex: 0,
    height: 60,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    zIndex: 999
  }
});
