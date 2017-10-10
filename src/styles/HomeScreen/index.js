import { Dimensions, Platform } from 'react-native';
import theme                    from 'react-native-theme';

theme.add({
  HomeScreenHeader: {
    top: 80,
    height: 282,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    opacity: 0.9,
  },
  HomeScreenHeaderTitle: {
    fontFamily: "Helvetica",
    fontSize: 9,
    fontWeight: "300",
    fontStyle: "italic",
    color: "#ffffff",
    paddingBottom: 17,
  },
  HomeScreenHeaderImage: {
    marginTop: 30,
    width: 50,
    height: 50,
    marginHorizontal: 10
  },
  HomeScreenChallengeInfo: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  HomeScreenHeaderText: {
    width: Dimensions.get('window').width - 70,
  },
  HomeScreenTitle: {
    fontFamily: "Helvetica",
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff"
  },
  HomeScreenFirstPartTitle: {
    width: Dimensions.get('window').width - 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  HomeScreenStep: {
    fontFamily: "Helvetica",
    fontSize: 10,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 10
  },
  HomeScreenLittleText: {
    fontFamily: "Helvetica",
    fontSize: 16,
    fontWeight: "300",
    color: "rgba(255, 255, 255, 0.9)",
    paddingTop: 3
  },
  HomeScreenWideButton: {
    marginTop: 40,
    backgroundColor: 'white',
    height: 45,
    minWidth: 240,
    paddingHorizontal: 10,
    borderRadius: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  HomeScreenWideButtonText: {
    fontFamily: "Helvetica",
    fontSize: 15.5,
    fontWeight: "bold",
    textAlign: "left",
    color: "#003681",
    flex: 2,
    marginLeft: 15,
  },
  HomeScreenAbsoluteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  HomeScreenButtonImage: {
    width: 30,
    height: 30,
  },
  HomeScreenDurationText: {
    color: '#0e3fa8',
    fontWeight: '600',
    fontSize: 12,
  },
});
