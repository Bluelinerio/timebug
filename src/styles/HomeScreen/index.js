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
  HomeScreenAbsoluteContainer: {
  },
  HomeScreenButtonImage: {
    color: "#003681",
  },
  HomeScreenDurationText: {
    fontFamily: "Helvetica",
    color: "#003681",    
    fontWeight: "bold",
    fontSize: 10,
  },
});
