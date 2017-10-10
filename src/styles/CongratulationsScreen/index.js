import theme from 'react-native-theme';

theme.add({
  congratulationsScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  congratulationsScreenTimerContainer: {
    flex: 0,
    flexDirection: 'row',
  },
  congratulationsScreenMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 100,
  },
  congratulationsScreenText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  congratulationsScreenAbsoluteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 30
  },
  congratulationsScreenCurrentStep: {
    fontFamily: "Helvetica",
    fontSize: 40,
    fontWeight: "bold",
  },
  congratulationsScreenButtonImage: {
    width: 11.5,
    height: 11.5,
    marginRight: 5,
    marginTop: 2,
  },
  congratulationsScreenDurationText: {
    fontFamily: "Helvetica",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: 'flex-end',
  },
  congratulationsScreenTextColor: {
    color: '#48D0F1',
  },
  congratulationsScreenMessageText: {
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
  }
});
