import theme from 'react-native-theme';

theme.add({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width
  },
  buttonIconLeft: {
    marginLeft: 10
  },
  buttonIconRight: {
    marginRight: 10
  },
  wideButton: {
    height: 50,
    marginBottom: 30,
    borderRadius: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  wideButtonBackground: {
    backgroundColor: '#6EBDDC',
  },
  left: {
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  right: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  wideButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
});