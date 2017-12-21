import theme from 'react-native-theme';
import './templates';

theme.add({
  workBookFormContainer: {
    flex: 1,
  },
  workBookFormTitle: {
    textAlign: 'center',
    fontSize: 26,
    paddingVertical: 20,
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
