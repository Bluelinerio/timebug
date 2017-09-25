import {Dimensions, Platform} from 'react-native';
import theme from 'react-native-theme';

theme.add({
  congratulationsScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  congratulationsScreenTimerContainer: {
    flex: 0,
    flexDirection: 'row'
  },
  congratulationsScreenMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 100
  },
  congratulationsScreenText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  congratulationsScreenAbsoluteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  congratulationsScreenCurrentStep: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  congratulationsScreenButtonImage: {
    width: 10,
    height: 10,
    marginRight: 5,
    marginTop: 2
  },
  congratulationsScreenDurationText: {
    fontWeight: '600',
    fontSize: 10,
    alignSelf: 'flex-end'
  },
  congratulationsScreenTextColor: {
    color: '#48D0F1',
  }
});
