import {Dimensions, Platform} from 'react-native';
import theme from 'react-native-theme';

theme.add({
  HomeScreenHeader: {
    top: 80,
    height: 252,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    opacity: 0.9
  },
  HomeScreenHeaderTitle: {
    color: 'white',
    paddingTop: 10,
    paddingBottom: 30,
    fontSize: 16
  },
  HomeScreenHeaderImage: {
    width: 40,
    height: 40
  },
  HomeScreenChallengeInfo: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  HomeScreenText: {
    color: 'white'
  },
  HomeScreenFirstPartTitle: {
    width: Dimensions.get('window').width - 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3
  },
  HomeScreenBoldText: {
    fontSize: 16,
    fontWeight: '500'
  },
  HomeScreenLittleText: {
    fontSize: 13
  },
  HomeScreenWideButton: {
    marginTop: 75,
    backgroundColor: 'white',
    height: 45,
    minWidth: 240,
    paddingHorizontal: 10,
    borderRadius: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  HomeScreenWideButtonText: {
    color: '#0e3fa8',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
    flex: 2,
    marginLeft: 15
  },
  HomeScreenAbsoluteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  HomeScreenButtonImage: {
    width: 30,
    height: 30
  },
  HomeScreenDurationText: {
    color: '#0e3fa8',
    fontWeight: '600',
    fontSize: 12
  }
});
