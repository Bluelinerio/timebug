import theme from 'react-native-theme';

theme.add({
  assignmentsScreenContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  assignmentsScreenSlide: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  assignmentsScreenNumber: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 30
  },
  assignmentsScreenNumberColors: {
    backgroundColor: '#6EBDDC',
    borderColor: '#6EBDDC'
  },
  assignmentsScreenNumberText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  }
});
