import { Dimensions, Platform } from 'react-native';
import theme                    from 'react-native-theme';
import { darkishBlue }       from '../../constants/colors';
import { STATUSBAR_HEIGHT, APPBAR_HEIGHT} from '../../constants/';

theme.add({
  stepScreenScreen: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginBottom: 30
  },
  stepScreenHeader: {
    top: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 28 : 0,
  },
  stepScreenHeaderTitleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepScreenHeaderTitle: {
    paddingTop: 10,
    paddingBottom: 30,
    fontFamily: "Helvetica",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    alignSelf: 'flex-end',
  },
  stepScreenContent: {
    marginTop: 2,
    marginBottom: 30
  },
  stepScreenText: {
    color: '#000000',
    fontSize: 12,
    textAlign: 'center',
  },
  stepScreenSubtitle: {
    fontFamily: "Helvetica",
    fontSize: 24,
    fontWeight: "300",
    color: "#4a4a4a",
    textAlign: 'left',
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
  stepScreenTitle: {
    fontFamily: "Helvetica",
    fontSize: 32,
    color: darkishBlue,
    alignSelf: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    textAlign: 'left',
  },
  stepScreenImage: {
    flex: 1,
    height: Dimensions.get('window').width * 0.4,
    bottom: 20,
  },
  stepScreenDescription: {
    flex: 1,
    paddingBottom: 300,
  },
  stepScreenScrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  stepScreenBackButton: {
    position: 'absolute',
    top: 35,
    left: 15,
  },
});
