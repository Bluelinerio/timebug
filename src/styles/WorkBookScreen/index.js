import theme from 'react-native-theme';
import './templates';

theme.add({
  workBookFormContainer: {
    padding: 20
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
    flex: 1,
    height: 90,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    zIndex: 999
  }
});
