import theme from 'react-native-theme';

theme.add({
  gradientContainer: {
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderWidth: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#79bddd',
  },
  gradient: {
    height: 200,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  gradientTopColor: {
    color: '#79bddd',
  },
  gradientBottomColor: {
    color: 'white',
  },
});
