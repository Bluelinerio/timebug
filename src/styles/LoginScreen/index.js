import theme from 'react-native-theme';

theme.add({
  loginScreenScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  loginScreenContainer: {
    flex: 1,
    backgroundColor: '#3B7288',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginScreenContainer2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  loginScreenWideButton: {
    flex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    bottom: 10,
    borderWidth: 0,
    backgroundColor: '#ffffff',
    minWidth: 150,
    paddingHorizontal: 45,
    borderRadius: 150,
  },
  loginScreenWideButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  loginScreenDescription: {
    flex: 1,
    paddingBottom: 500,
    paddingHorizontal: 20,
  },
  loginScreenClose: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 7,
  },
});
